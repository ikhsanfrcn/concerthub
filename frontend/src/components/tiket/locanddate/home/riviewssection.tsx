'use client'


import { Star, ChevronDown } from 'lucide-react'
import ReviewCard from './riviews'

const reviews = [
  {
    name: 'Sakura Minami',
    avatar: '/avatars/user1.png',
    date: '21 June, 2024',
    comment:
      'Taylor Swift’s concert was absolutely phenomenal and lived up to all the hype. The production was top-notch...',
    rating: 4,
    likes: 21,
    replies: 3,
  },
  {
    name: 'Samuel Garcia',
    avatar: '/avatars/user2.png',
    date: '21 June, 2024',
    comment:
      'The vibe in the concert hall tonight was electric! The lighting, the acoustics, and the excited crowd...',
    rating: 5,
    likes: 16,
    replies: 2,
  },
  {
    name: 'Paula Green',
    avatar: '/avatars/user3.png',
    date: '21 June, 2024',
    comment:
      'The music and choir group were absolutely fantastic! Their voices and instruments blended beautifully...',
    rating: 5,
    likes: 14,
    replies: 2,
  },
  {
    name: 'Nas Rashid',
    avatar: '/avatars/user4.png',
    date: '21 June, 2024',
    comment:
      'Taylor Swift’s concert was technically impressive, but honestly, I felt it was overhyped...',
    rating: 3,
    likes: 12,
    replies: 1,
  },
]

export default function ReviewsSection() {
  const averageRating =
    reviews.reduce((acc, cur) => acc + cur.rating, 0) / reviews.length

  return (
    <section className="py-10 max-w-4xl mx-auto">
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
          <p className="text-sm text-gray-500 mt-1">
            Write your view <span className="ml-1">✏️</span>
          </p>
        </div>
        <div className="relative">
          <select className="border rounded-full px-4 py-2 text-sm text-gray-700">
            <option>Location</option>
            <option>Performance</option>
            <option>Sound</option>
          </select>
        </div>
      </div>

      {reviews.map((r, i) => (
        <ReviewCard key={i} {...r} />
      ))}

      <div className="text-center mt-4 text-sm text-gray-500 cursor-pointer">
        See more ⌄
      </div>
    </section>
  )
}
