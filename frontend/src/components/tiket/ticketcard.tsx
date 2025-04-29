"use client";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

interface ConcertData {
  id: string;
  date: string;
  location: string;
  price?: number;
  time?: string;
  title?: string;
  category?: string;
}

const TicketCard = () => {
  const [concert, setConcert] = useState<ConcertData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const selectedConcert = localStorage.getItem("selectedConcert");

        if (!selectedConcert) {
          console.error("No selected concert found");
          return;
        }

        const parsed = JSON.parse(selectedConcert);
        const sessionId = parsed.id;

        const res = await axios.get(`/event-session?id=${sessionId}`);

        const session = res.data.sessions[0];

        const concertData: ConcertData = {
          id: session.id,
          category: session.event.category,
          title: session.event.title,
          time: session.time,
          location: session.location,
          date: session.date
        };

        setConcert(concertData);
      } catch (err) {
        console.error("Failed to fetch tickets:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!concert) return <p>No concert data available.</p>;

  return (
    <div className="flex max-w-3xl mx-auto mt-6 relative">
    <div className="absolute top-1/2 -left-3 w-6 h-6 bg-white rounded-full border border-gray-300 transform -translate-y-1/2 z-10"></div>
    <div className="absolute top-1/2 -right-3 w-6 h-6 bg-white rounded-full border border-gray-300 transform -translate-y-1/2 z-10"></div>

    <div className="flex w-full bg-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 border-2 border-dashed border-gray-300">
      {/* Date Section */}
      <div className="flex flex-col items-center justify-center bg-indigo-700 text-white px-10 py-6">
        <div className="text-2xl font-bold">{concert.date}</div>
        <div className="text-sm mt-2">{concert.category || "Concert"}</div>
      </div>

      {/* Ticket Content */}
      <div className="flex-1 p-6 bg-gradient-to-r from-white to-gray-100">
        <h3 className="text-2xl font-bold mb-2">{concert.title}</h3>
        <p className="text-md text-gray-600 mb-1">🕘 {concert.time}</p>
        <p className="text-md text-gray-600">📍 {concert.location}</p>
      </div>
    </div>
  </div>
);
};

export default TicketCard;
