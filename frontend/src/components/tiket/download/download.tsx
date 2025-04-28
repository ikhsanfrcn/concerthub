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
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (session?.user?.id) {
      fetchTickets();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const fetchTickets = async () => {
    try {
      const transactionId = localStorage.getItem("transactionId");

      if (transactionId) {
        const response = await axios.get(
          `/tickets/${transactionId}`, 
          {
            headers: {
              Authorization: `Bearer ${session?.accessToken}`,
            },
          }
        );
        setTickets(response.data.tickets || []);
        setLoading(false);
      } else {
        console.error("Transaction ID not found.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const TicketCard = ({ ticket, index }: { ticket: Ticket; index: number }) => (
    <div className="relative w-[360px] sm:w-[460px] h-[200px] rounded-3xl bg-gradient-to-r from-pink-500 to-indigo-700 text-white overflow-hidden shadow-lg flex items-center justify-between px-6 py-4 my-4">
      <div className="flex flex-col justify-between h-full py-2">
        <div className="text-xs uppercase opacity-80">Live Music</div>
        <h3 className="text-xl font-bold leading-5">
          {ticket.session.event.title} Concert
        </h3>
        <p className="text-xs mt-1">
          {new Date(ticket.session.date).toLocaleDateString()} ·{" "}
          {ticket.session.time}
        </p>
        <p className="text-xs">{ticket.session.location}</p>
        <p className="text-[11px] mt-2">
          Gate 02 | Row 23 | <strong> {ticket.ticket.category}</strong>
        </p>
        <p className="text-sm mt-1 text-white font-semibold">
          Rp. {ticket.ticket.price}
        </p>
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

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
        🎫 Your Concert Tickets
      </h1>

      <div className="flex flex-col items-center">
        {tickets.length > 0 ? (
          tickets.map((ticket, index) => (
            <TicketCard key={ticket.id} ticket={ticket} index={index} />
          ))
        ) : (
          <div>No tickets available for this transaction.</div> 
        )}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => {
            if (isVisible) {
              console.log("Print button clicked");
              window.print();
            } else {
              console.log("Tab is hidden, print won't be triggered");
            }
          }}
          className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
        >
          Print My Tickets
        </button>
      </div>
    </div>
  );
}
