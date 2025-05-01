/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import ReviewForm from "@/components/modal/riview";
import axios from "@/lib/axios";

type Review = {
  name: string;
  avatar: string;
  date: string;
  comment: string;
  rating: number;
};

export default function ReviewsSection() {
  const params = useParams();
  const id = params?.id as string;
  const { data: session, status } = useSession();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [sortedReviews, setSortedReviews] = useState<Review[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [averageRating, setAverageRating] = useState(0);
  const [sortOption, setSortOption] = useState("latest");
  const router = useRouter();
  const [eventHasPassed, setEventHasPassed] = useState(false);
  const [purchasedTicketId, setPurchasedTicketId] = useState<string | null>(
    null
  );

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`/reviews?eventId=${id}`);
        if (res.status === 200) {
          const fetchedReviews = res.data.reviews;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const mappedReviews = fetchedReviews.map((r: any) => ({
            name: r.user.name,
            avatar: r.user.avatar,
            date: r.createdAt,
            comment: r.comment,
            rating: r.rating,
          }));

          setReviews(mappedReviews);
          setSortedReviews(mappedReviews);

          const totalRating = mappedReviews.reduce(
            (acc: number, review: Review) => acc + review.rating,
            0
          );
          setAverageRating(totalRating / (mappedReviews.length || 1));
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [router]);

  useEffect(() => {
    let sorted = [...reviews];
    if (sortOption === "latest") {
      sorted = sorted.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sortOption === "oldest") {
      sorted = sorted.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }
    setSortedReviews(sorted);
  }, [sortOption, reviews]);
  useEffect(() => {
    const fetchPurchasedTicket = async () => {
      if (!session?.user?.id || !id) return;

      try {
        const res = await axios.get(
          `/tickets/purchased?userId=${session.user.id}`,
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );

        const tickets = res.data.tickets || [];

        const matchedTicket = tickets.find(
          (ticket: { ticket: { eventId: string; event: { date: string } } }) =>
            ticket.ticket?.eventId === id
        );

        if (matchedTicket) {
          setPurchasedTicketId(matchedTicket.id);

          const eventDate = new Date(matchedTicket.session.date);
          const now = new Date();

          if (eventDate < now) {
            setEventHasPassed(true);
          } else {
            setPurchasedTicketId(null);
            setEventHasPassed(false);
          }
        } else {
          setEventHasPassed(false);
        }
      } catch (error) {
        console.error("Failed to fetch purchased ticket ID:", error);
        setEventHasPassed(false);
      }
    };
    fetchPurchasedTicket();
  }, [session?.user.id, id]);

  if (status === "loading") return null;

  return (
    <section className="py-10 px-4 max-w-6xl mx-auto relative">
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
                fill={i < Math.round(averageRating) ? "#ec4899" : "none"}
                stroke="#ec4899"
              />
            ))}
          </div>

          {session ? (
            purchasedTicketId && eventHasPassed ? (
              <button
                onClick={() => setShowModal(true)}
                className="mt-2 inline-flex items-center gap-1 text-sm text-pink-600 hover:underline"
              >
                ✏️ Write your review
              </button>
            ) : (
              <p className="text-sm text-gray-500 mt-1">
                You can only review after attending the concert.
              </p>
            )
          ) : (
            <p className="text-sm text-gray-500 mt-1">
              Login to write your review.
            </p>
          )}
        </div>

        <div className="relative">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border rounded-full px-4 py-2 text-sm text-gray-700"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* REVIEWS */}
      {sortedReviews.length === 0 ? (
        <p className="text-center text-gray-500 text-sm mt-6">
          No reviews yet.
        </p>
      ) : (
        <>
          {sortedReviews.map((r, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow mb-3">
              <div className="flex items-center mb-2">
                <Image
                  src={r.avatar || "https://res.cloudinary.com/dbq88i6pk/image/upload/v1744257650/profile-default-icon-512x511-v4sw4m29_cyf3m5.png"}
                  width={40}
                  height={40}
                  alt="avatar"
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(r.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex mb-1">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    fill={idx < r.rating ? "#facc15" : "none"}
                    stroke="#facc15"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm">{r.comment}</p>
            </div>
          ))}

          <div className="text-center mt-4 text-sm text-gray-500 cursor-pointer">
            See more
          </div>
        </>
      )}

      {showModal && <ReviewForm onClose={() => setShowModal(false)} />}
    </section>
  );
}
