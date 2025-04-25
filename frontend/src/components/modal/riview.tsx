'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useSession } from 'next-auth/react'

export default function ReviewForm({ onClose }: { onClose: () => void }) {
  const { data: session, status } = useSession() // Access session data from next-auth
  const [formData, setFormData] = useState({
    review: '',
    rating: 0,
  })

  const [eventId, setEventId] = useState('') // State for eventId
  const router = useRouter()

  useEffect(() => {
    // Fetch eventId from localStorage (or pass it as a prop)
    const storedEventId = localStorage.getItem('eventId') // Assuming eventId is stored in localStorage
    if (storedEventId) {
      setEventId(storedEventId)
    }
  }, [])

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
      eventId: "b1c5625f-22eb-4154-865f-081236382f36",
      userId: session.user.id, // Use the user ID from the session
      rating: formData.rating,
      comment: formData.review,
    }

    try {
      const res = await axios.post('/api/reviews/', newReview, {
        headers: { Authorization: `Bearer ${session?.accessToken}` },
      })

      if (res.status === 200) {
        alert('Review submitted successfully!')
        onClose() // Close the form
        router.refresh() // Refresh the page to display new review
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
