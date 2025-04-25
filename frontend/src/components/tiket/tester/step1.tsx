'use client';
import { useState, useEffect } from "react";
import Mapconcert from "@/components/tiket/locanddate/home/map";
import ReviewsSection from "@/components/tiket/locanddate/home/riviewssection";
import Suggestion from "@/components/tiket/locanddate/home/suggesstion";
import axios from "@/lib/axios";

interface Step1Props {
  eventId: string;
  onComplete: () => void;
}

export default function Step1({ eventId, onComplete }: Step1Props) {
  const [concert, setConcert] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConcert = async () => {
      try {
        const res = await axios.get(`/events/${eventId}`);
        setConcert(res.data);
      } catch (error) {
        console.error("Failed to fetch concert", error);
      } finally {
        setLoading(false);
      }
    };

    fetchConcert();
  }, [eventId]);

  return (
    <div>
      <div className="p-4 max-w-6xl mx-auto">
        <div className="mb-6">
          {/* Header with Background Image */}
          {concert && (
            <div className="rounded-xl overflow-hidden mb-6">
              <div
                className="w-full h-[280px] sm:h-[300px] flex items-end bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${concert.image})`,
                  backgroundPositionY: "-0px",
                }}
              >
                <div className="flex justify-between w-full px-4 sm:px-6 pb-4 text-white hidden sm:block">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold">{concert.title}</h2>
                    <p className="text-base md:text-lg">{concert.description}</p>
                  </div>
                  <div className="text-xs md:text-sm self-end">🎵 {concert.category}</div>
                </div>
              </div>
            </div>
          )}

          {/* Concert Detail Card */}
          {!loading && concert ? (
            <div className="flex flex-col sm:flex-row bg-white border rounded-xl p-4 shadow-sm">
              <div className="w-full sm:w-28 h-28 rounded-xl flex flex-col justify-center items-center font-semibold mb-4 sm:mb-0 bg-pink-100">
                <div className="text-lg">{concert.date.split("-")[2]}</div>
                <div className="text-sm">{concert.date.split("-")[1]}</div>
                <div className="text-sm">{concert.date.split("-")[0]}</div>
              </div>

              <div className="sm:ml-4 flex-1">
                <h3 className="font-semibold text-lg">{concert.title}</h3>
                <p className="text-sm">{concert.category}</p>
                <p className="text-sm">🗓 {concert.time}</p>
                <p className="text-sm">📍 {concert.location}</p>
              </div>

              <div className="mt-4 sm:mt-0 sm:self-center">
                <button
                  onClick={() => {
                    const selectedConcert = {
                      id: concert.id,
                      date: concert.date,
                      location: concert.location,
                      time: concert.time,
                    };
                    localStorage.setItem("selectedConcert", JSON.stringify(selectedConcert));
                    onComplete(); // lanjut ke step berikutnya
                  }}
                  className="w-full sm:w-auto px-4 py-2 rounded-full text-white font-semibold bg-pink-500 hover:bg-pink-600"
                >
                  View Ticket
                </button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">Loading concert...</p>
          )}
        </div>
      </div>

      <Mapconcert />
      <ReviewsSection />
      <Suggestion />
    </div>
  );
}
