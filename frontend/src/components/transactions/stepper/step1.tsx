/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Mapconcert from "@/components/transactions/locanddate/home/map";
import ReviewsSection from "@/components/transactions/locanddate/home/riviewssection";
import Suggestion from "@/components/transactions/locanddate/home/suggesstion";
import axios from "@/lib/axios";

interface Step1Props {
  eventId: string;
  onComplete: () => void;
}

export default function Step1({ eventId, onComplete }: Step1Props) {
  const [sessions, setSessions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const res = await axios.get(`/event-session?eventId=${eventId}`);
        setSessions(res.data.sessions || []);
      } catch (error) {
        console.error("Failed to fetch sessions", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, [eventId]);

  const isEventExpired = (date: string) => {
    const eventDate = new Date(date);
    const currentDate = new Date();
    return eventDate < currentDate;
  };

  return (
    <div>
      <div className="p-4 max-w-6xl mx-auto">
        <div className="mb-6">
          {/* Header with Background Image */}
          {sessions.length > 0 && (
            <div className="rounded-xl overflow-hidden mb-6">
              <div
                className="w-full h-[280px] sm:h-[500px] flex items-end bg-cover"
                style={{
                  backgroundImage: `url(${sessions[0].event.image})`,
                }}
              >
                <div className="justify-between w-full px-4 sm:px-6 pb-4 text-white hidden sm:flex">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold">
                      {sessions[0].event.title}
                    </h2>
                    <p className="text-base md:text-lg">Concerts</p>
                  </div>
                  <div className="text-xs md:text-sm self-end">
                    🎵 {sessions[0].event.category}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sessions List */}
          {loading ? (
            <p className="text-center text-gray-500">Loading concert...</p>
          ) : sessions.length == 0 ? (
            <p className="text-center text-gray-500">
              There are no concerts available at the moment.
            </p>
          ) : (
            sessions.map((session) => {
              const isExpired = isEventExpired(session.date);
              return (
                <div
                  key={session.id}
                  className="flex flex-col sm:flex-row bg-white border rounded-xl p-4 shadow-sm mb-4"
                >
                  <div className="w-full sm:w-28 h-28 rounded-xl flex flex-col justify-center items-center font-semibold mb-4 sm:mb-0 bg-pink-100">
                    <div className="text-lg">
                      {new Date(session.date).getDate()}
                    </div>
                    <div className="text-sm">
                      {new Date(session.date).toLocaleString("default", {
                        month: "short",
                      })}
                    </div>
                    <div className="text-sm">
                      {new Date(session.date).getFullYear()}
                    </div>
                  </div>

                  <div className="sm:ml-4 flex-1">
                    <h3 className="font-semibold text-lg">
                      {session.event.title}
                    </h3>
                    <p className="text-sm">{session.event.category}</p>
                    <p className="text-sm">🗓 {session.time}</p>
                    <p className="text-sm">📍 {session.location}</p>
                  </div>

                  <div className="mt-4 sm:mt-0 sm:self-center">
                    <button
                      onClick={() => {
                        if (!isExpired) {
                          const selectedConcert = {
                            id: session.id,
                            date: session.date,
                            location: session.location,
                            time: session.time,
                          };
                          localStorage.setItem(
                            "selectedConcert",
                            JSON.stringify(selectedConcert)
                          );
                          onComplete();
                        }
                      }}
                      className={`w-full sm:w-auto px-4 py-2 rounded-full text-white font-semibold ${
                        isExpired
                          ? "bg-gray-500 cursor-not-allowed"
                          : "bg-pink-500 hover:bg-pink-600 cursor-pointer"
                      }`}
                      disabled={isExpired}
                    >
                      {isExpired ? "Expired" : "View Ticket"}
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <Mapconcert />
      <ReviewsSection />
      <Suggestion />
    </div>
  );
}
