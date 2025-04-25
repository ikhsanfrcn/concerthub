/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useState } from "react";
import axios from "@/lib/axios";
import TicketCard from "@/components/tiket/ticketcard";

interface Step2Props {
  onComplete: () => void;
  eventId: string; // << dari parent step
}

interface Ticket {
  id: string;
  category: string;
  price: number;
  description: string;
}

export default function Step2({ onComplete, eventId }: Step2Props) {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await axios.get(`/tickets/by-event?eventId=${eventId}`);
        const data = res.data.tickets.map((ticket: any) => ({
          id: ticket.id,
          category: ticket.category,
          price: ticket.price,
          description: ticket.description,
        }));
        setTickets(data);
      } catch (err) {
        console.error("Failed to fetch tickets:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [eventId]);

  const handleContinue = () => {
    if (selectedCategory && quantity > 0) {
      localStorage.setItem("selectedCategory", selectedCategory);
      localStorage.setItem("seatQuantity", String(quantity));
      onComplete(); // lanjut ke step 3
    }
  };

  return (
    <div>
      <TicketCard />
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Select Ticket Category
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading tickets...</p>
        ) : tickets.length === 0 ? (
          <p className="text-center text-gray-500">No tickets available</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {tickets.map((ticket, index) => (
              <div
                key={index}
                className={`bg-white border rounded-2xl p-4 shadow-md cursor-pointer transition hover:shadow-lg ${
                  selectedCategory === ticket.category ? "border-blue-600" : ""
                }`}
                onClick={() => setSelectedCategory(ticket.category)}
              >
                <h3 className="text-xl font-bold mb-2">{ticket.category}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {ticket.description}
                </p>
                <p className="text-lg font-medium mb-4">
                  Rp {ticket.price.toLocaleString("id-ID")}
                </p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  {selectedCategory === ticket.category ? "Selected" : "Select"}
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 flex items-center justify-end gap-4">
          <label className="text-sm font-medium">Quantity</label>
          <input
            type="number"
            min={1}
            max={10}
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, parseInt(e.target.value) || 1))
            }
            className="w-20 border border-gray-300 rounded-lg px-2 py-1 text-sm"
          />
        </div>

        <div className="mt-10 flex justify-end">
          <button
            className="bg-pink-600 text-white px-6 py-2 rounded-full disabled:opacity-50"
            disabled={!selectedCategory}
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
