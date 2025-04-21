"use client";
import React, { useEffect, useState } from "react";

interface Concert {
  date: string;
  location: string;
}

interface User {
  name: string;
  email: string;
}

export default function DownloadPage() {
  const [concert, setConcert] = useState<Concert | null>(null);
  const [category, setCategory] = useState<string>("Regular");
  const [seatQty, setSeatQty] = useState<number>(1);
  const [user, setUser] = useState<User | null>(null);
  const [ticketPrice, setTicketPrice] = useState<number>(200);

  useEffect(() => {
    const storedConcert = localStorage.getItem("selectedConcert");
    const storedCategory = localStorage.getItem("selectedCategory");
    const storedQty = localStorage.getItem("seatQuantity");
    const storedUser = localStorage.getItem("userProfile");

    if (storedConcert) setConcert(JSON.parse(storedConcert));
    if (storedQty) setSeatQty(parseInt(storedQty));
    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedCategory) {
      setCategory(storedCategory);
      switch (storedCategory) {
        case "VIP": setTicketPrice(600); break;
        case "Premium": setTicketPrice(400); break;
        case "Regular": setTicketPrice(200); break;
      }
    }
  }, []);

  const TicketCard = ({ index }: { index: number }) => (
    <div className="relative w-[360px] sm:w-[460px] h-[200px] rounded-3xl bg-gradient-to-r from-pink-500 to-indigo-700 text-white overflow-hidden shadow-lg flex items-center justify-between px-6 py-4 my-4">
      <div className="flex flex-col justify-between h-full py-2">
        <div className="text-xs uppercase opacity-80">Live Music</div>
        <h3 className="text-xl font-bold leading-5">Taylor Swift Concert</h3>
        <p className="text-xs mt-1">{concert?.date} · 21:00</p>
        <p className="text-xs">{concert?.location || "New York Arena"}</p>
        <p className="text-[11px] mt-2">
          Gate 02 | Row 23 | <strong>Category {category}</strong>
        </p>
        <p className="text-sm mt-1 text-white font-semibold">$ {ticketPrice}</p>
      </div>

      <div className="flex flex-col items-center justify-center h-full">
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?data=TICKET-${index + 1}-${user?.email}&size=100x100`}
          alt="QR Code"
          className="w-20 h-20 rounded-md"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">🎫 Your Concert Tickets</h1>

      <div className="flex flex-col items-center">
        {Array.from({ length: seatQty }).map((_, i) => (
          <TicketCard key={i} index={i} />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => window.print()}
          className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
        >
          Print My Tickets
        </button>
      </div>
    </div>
  );
}
