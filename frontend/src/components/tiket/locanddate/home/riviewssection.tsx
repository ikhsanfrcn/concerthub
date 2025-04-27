'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import ReviewForm from '@/components/modal/riview'
import axios from '@/lib/axios'

type Review = {
  name: string
  avatar: string
  date: string
  comment: string
  rating: number
}

export default function ReviewsSection() {
  const { data: session, status } = useSession() // Access session data from next-auth
  const [reviews, setReviews] = useState<Review[]>([])
  const [showModal, setShowModal] = useState(false)
  const [averageRating, setAverageRating] = useState(0)
  const router = useRouter()

  
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get('/reviews') 
        if (res.status === 200) {
          const fetchedReviews = res.data.reviews
          setReviews(fetchedReviews)

          const mappedReviews = fetchedReviews.map((r: any) => ({
            name: r.user.name,
            avatar: r.user.avatar,
            date: r.createdAt,
            comment: r.comment,
            rating: r.rating,
          }));
  
          setReviews(mappedReviews);


          const totalRating = fetchedReviews.reduce((acc: number, review: Review) => acc + review.rating, 0)
          setAverageRating(totalRating / (fetchedReviews.length || 1))
        }
      } catch (error) {
        console.error('Error fetching reviews:', error)
      }
    }

    fetchReviews()
  }, [router])

  const handleNewReview = (newReview: Review) => {
    setReviews([newReview, ...reviews]) // Add new review to the top
  }

  if (status === 'loading') return null

  return (
    <section className="py-10 max-w-4xl mx-auto relative">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-blue-800">
            Top reviews on this concert
          </h2>
          <div className="flex items-center text-sm mt-1">
            <span className="mr-2 text-gray-600">Average rate</span>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < Math.round(averageRating) ? '#ec4899' : 'none'}
                stroke="#ec4899"
              />
            ))}
          </div>

          {session ? (
            <button
              onClick={() => setShowModal(true)}
              className="mt-2 inline-flex items-center gap-1 text-sm text-pink-600 hover:underline"
            >
              ✏️ Write your review
            </button>
          ) : (
            <p className="text-sm text-gray-500 mt-1">Login to write your review.</p>
          )}
        </div>

        <div className="relative">
          <select className="border rounded-full px-4 py-2 text-sm text-gray-700">
            <option>Sort Comments By</option>
            <option>Latest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      {/* REVIEWS */}
      {reviews.map((r, i) => (
        <div key={i} className="bg-white p-4 rounded-lg shadow mb-3">
          <div className="flex items-center mb-2">
          <Image
              src={r.avatar || '/default-avatar.png'}
              width={40}
              height={40}
              alt="avatar"
              className="w-10 h-10 rounded-full mr-3 object-cover"
            />
            <div>
              <p className="font-semibold text-sm">{r.name}</p>
             <p className="text-xs text-gray-400">{r.date}</p>
            </div>
          </div>
          <div className="flex mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < r.rating ? '#facc15' : 'none'}
                stroke="#facc15"
              />
            ))}
          </div>
          <p className="text-gray-700 text-sm">{r.comment}</p>
        </div>
      ))}

      <div className="text-center mt-4 text-sm text-gray-500 cursor-pointer">
        See more ⌄
      </div>

      {/* MODAL */}
      {showModal && <ReviewForm onClose={() => setShowModal(false)} />}
    </section>
  )
}
