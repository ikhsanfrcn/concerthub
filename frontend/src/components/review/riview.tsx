'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    review: '',
    rating: 0,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRating = (rate: number) => {
    setFormData({ ...formData, rating: rate })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted review:', formData)
    
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Leave a Review for Concert Hub</h2>
        <p className="mb-4 text-gray-600">How would you rate for ConcertHub ?</p>

        {/* Rating */}
        <div className="flex justify-center mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <button key={i} onClick={() => handleRating(i)} className="mx-1">
              <Star
                className={`w-6 h-6 ${
                  formData.rating >= i ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
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
