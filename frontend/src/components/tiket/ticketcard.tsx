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
    <div className="flex max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-6">
      <div className="flex flex-col items-center justify-center bg-indigo-700 text-white px-12 py-4">
        <div className="text-lg font-bold">{concert.date}</div>
      </div>

      <div className="relative flex-1 p-4">
        <h3 className="text-lg font-semibold">{concert.title}</h3>
        <p className="text-sm text-gray-600">🕘 {concert.time}</p>
        <p className="text-sm text-gray-600">📍 {concert.location}</p>
      </div>
    </div>
  );
};

export default TicketCard;
