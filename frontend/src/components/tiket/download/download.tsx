/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import axios from "@/lib/axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Ticket {
  id: string;
  transactionId: string;
  qrCode: string | null;
  createdAt: string;
  ticket: {
    eventId: string;
    category: string;
    price: string;
  };
  session: {
    date: string;
    time: string;
    location: string;
    event: {
      title: string;
      description: string;
    };
  };
}

export default function DownloadPage() {
  const { data: session } = useSession();
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    if (session?.user?.id) {
      fetchTickets(session.user.id);
    }

  }, [session]);

  const fetchTickets = async (userId: string) => {
    try {
      const response = await axios.get(`/tickets/my-purchased?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`
        }
      });
      setTickets(response.data.tickets);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  const TicketCard = ({ ticket, index }: { ticket: Ticket; index: number }) => (
    <div className="relative w-[360px] sm:w-[460px] h-[200px] rounded-3xl bg-gradient-to-r from-pink-500 to-indigo-700 text-white overflow-hidden shadow-lg flex items-center justify-between px-6 py-4 my-4">
      <div className="flex flex-col justify-between h-full py-2">
        <div className="text-xs uppercase opacity-80">Live Music</div>
        <h3 className="text-xl font-bold leading-5">
          {ticket.session.event.title} Concert
        </h3>
        <p className="text-xs mt-1">
          {new Date(ticket.session.date).toLocaleDateString()} · {ticket.session.time}
        </p>
        <p className="text-xs">{ticket.session.location}</p>
        <p className="text-[11px] mt-2">
          Gate 02 | Row 23 | <strong> {ticket.ticket.category}</strong>
        </p>
        <p className="text-sm mt-1 text-white font-semibold">Rp. {ticket.ticket.price}</p>
      </div>

      <div className="flex flex-col items-center justify-center h-full">
        <Image
          src={`https://api.qrserver.com/v1/create-qr-code/?data=TICKET-${index + 1}-${session?.user?.email}`}
          width={100}
          height={100}
          alt="QR Code"
          className="w-20 h-20 rounded-md"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
        🎫 Your Concert Tickets
      </h1>

      <div className="flex flex-col items-center">
        {tickets.map((ticket, index) => (
          <TicketCard key={ticket.id} ticket={ticket} index={index} />
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
