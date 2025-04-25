/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import axios from '@/lib/axios'

export default function ReviewForm({ onClose }: { onClose: () => void }) {
  const { data: session } = useSession() 
  const [formData, setFormData] = useState({
    review: '',
    rating: 0,
  })

  const router = useRouter()
  const params = useParams();
    const id = params?.id as string;

    const [purchasedTicketId, setPurchasedTicketId] = useState<string | null>(null)

    useEffect(() => {
      const fetchPurchasedTicket = async () => {
        if (!session?.user?.id || !id) return

        try {
          const res = await axios.get(`/tickets/my-purchased?userId=${session.user.id}`, {
            headers: {
              Authorization: `Bearer ${session.accessToken}`
            }
          })

          const tickets = res.data.tickets || []

          const matchedTicket = tickets.find((ticket: { ticket: { eventId: string } }) => ticket.ticket?.eventId === id)

          if (matchedTicket) {
            setPurchasedTicketId(matchedTicket.id)
          } else {
            setPurchasedTicketId(null)
          }

        } catch (error) {
          console.error('Failed to fetch purchased ticket ID:', error)
          setPurchasedTicketId(null)
        }
      }

      fetchPurchasedTicket()
    }, [session?.user?.id, id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRating = (rate: number) => {
    setFormData({ ...formData, rating: rate })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!session?.user?.id) {
      alert('User not logged in')
      return
    }

    const newReview = {
      eventId: id,
      userId: session.user.id,
      rating: formData.rating,
      comment: formData.review,
      purchasedTicketId: purchasedTicketId
    }

    try {
      const res = await axios.post('/reviews/', newReview, {
        headers: { Authorization: `Bearer ${session?.accessToken}` },
      })

      if (res.status === 201) {
        alert('Review submitted successfully!')
        onClose()
        router.refresh()
      }
    } catch (error) {
      console.error('Failed to submit review:', error)
      alert('Failed to submit review')
    }

    console.log(newReview)
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✖
        </button>
        <h2 className="text-2xl font-semibold mb-4">Leave a Review for Concert Hub</h2>
        <p className="mb-4 text-gray-600">How would you rate ConcertHub?</p>

        {/* Rating */}
        <div className="flex justify-center mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <button key={i} onClick={() => handleRating(i)} className="mx-1">
              <Star
                className={`w-6 h-6 ${formData.rating >= i ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
              />
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <textarea
            name="review"
            placeholder="Write your review"
            rows={4}
            required
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Submit Review
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          All reviews on ConcertHub are verified within 48 hours before posting to ensure authenticity and accuracy.
        </p>
      </div>
    </div>
  )
}
