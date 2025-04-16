'use client'

import { Star } from 'lucide-react'

type ReviewProps = {
  name: string
  avatar: string
  date: string
  comment: string
  rating: number
  likes: number
  replies: number
}

export default function ReviewCard({
  name,
  avatar,
  date,
  comment,
  rating,
  likes,
  replies,
}: ReviewProps) {
  return (
    <div className="border p-4 rounded-lg shadow-sm mb-4">
      <div className="flex items-center gap-3 mb-2">
        <img src={avatar} className="w-10 h-10 rounded-full" />
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-xs text-gray-500">{date}</div>
        </div>
      </div>
      <div className="flex items-center text-pink-500 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill={i < rating ? '#ec4899' : 'none'} />
        ))}
      </div>
      <p className="text-sm text-gray-800">{comment}</p>
      <div className="text-sm mt-2 text-gray-500 flex gap-4">
        <span>👍 {likes}</span>
        <span>💬 {replies}</span>
      </div>
    </div>
  )
}
