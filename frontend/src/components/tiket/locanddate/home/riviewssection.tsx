'use client';

import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import ReviewForm from '@/components/modal/riview';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

type Review = {
  name: string;
  avatar: string;
  date: string;
  comment: string;
  rating: number;
  likes: number;
  replies: number;
};

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [user, setUser] = useState<{ name: string; email: string; avatar?: string } | null>(null);
  const [showModal, setShowModal] = useState(false);
  const { data: session, status } = useSession()

  
  useEffect(() => {
    const storedUser = localStorage.getItem('userProfile');
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser({ ...parsed, avatar: '/avatars/default.png' });
    }
    
  }, []);
  
  const averageRating =
  reviews.reduce((acc, cur) => acc + cur.rating, 0) / (reviews.length || 1);
  
  if (status === "loading") return null

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
              ✏️ Write your view
            </button>
          ) : (
            <p className="text-sm text-gray-500 mt-1">
              Login to write your view.
            </p>
          )}
        </div>

        <div className="relative">
          <select className="border rounded-full px-4 py-2 text-sm text-gray-700">
            <option>Sort Comment By</option>
          </select>
        </div>
      </div>

      {/* REVIEWS */}
      {reviews.map((r, i) => (
        <div key={i} className="bg-white p-4 rounded-lg shadow mb-3">
          <div className="flex items-center mb-2">
            <Image src={r.avatar} alt="avatar" className="w-10 h-10 rounded-full mr-3" />
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
  );
}
