/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "@/lib/axios";
import TicketCard from "@/components/transactions/ticketcard";

interface Step2Props {
  onComplete: () => void;
}

interface Ticket {
  id: string;
  category: string;
  price: number;
}

export default function Step2({ onComplete }: Step2Props) {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
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

        const res = await axios.get(`/tickets?sessionId=${sessionId}`);
        const data = res.data.tickets.map((ticket: any) => ({
          id: ticket.id,
          category: ticket.category,
          price: ticket.price,
        }));

        setTickets(data);
      } catch (err) {
        console.error("Failed to fetch tickets:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const handleContinue = () => {
    if (selectedCategory && quantity > 0) {
      localStorage.setItem("selectedCategory", selectedCategory);
      localStorage.setItem("seatQuantity", String(quantity));
      onComplete();
    }
  };

  return (
    <div>
      <TicketCard />
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Select Ticket Category
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Seat Map */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <motion.img
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              src="/loc.png"
              alt="Seat Map"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>

          {/* Ticket Cards */}
          <div className="flex-1">
            {loading ? (
              <p className="text-center text-gray-500">Loading tickets...</p>
            ) : tickets.length === 0 ? (
              <p className="text-center text-gray-500">No tickets available</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tickets.map((ticket) => (
                  <motion.div
                    key={ticket.id}
                    onClick={() => setSelectedCategory(ticket.category)}
                    className={`relative bg-white rounded-2xl p-6 cursor-pointer transition transform hover:scale-105 ${
                      selectedCategory === ticket.category
                        ? "border-4 border-blue-500 bg-blue-50 shadow-2xl scale-105"
                        : "border border-gray-300 shadow-md"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Badge Selected */}
                    {selectedCategory === ticket.category && (
                      <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                        Selected
                      </div>
                    )}

                    <h3
                      className={`text-xl font-bold mb-3 ${
                        selectedCategory === ticket.category
                          ? "text-blue-700"
                          : "text-gray-800"
                      }`}
                    >
                      {ticket.category}
                    </h3>

                    <p className="text-lg font-semibold mb-6">
                      Rp {ticket.price.toLocaleString("id-ID")}
                    </p>

                    <button
                      className={`w-full py-2 rounded-lg font-semibold transition ${
                        selectedCategory === ticket.category
                          ? "bg-blue-700 text-white"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      {selectedCategory === ticket.category
                        ? "Selected"
                        : "Select"}
                    </button>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Quantity & Continue Button */}
            <div className="mt-10 flex flex-col md:flex-row items-center justify-end gap-4">
              <div className="flex items-center gap-2">
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

              <button
                className="mt-4 md:mt-0 bg-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-pink-700 disabled:opacity-50 transition"
                disabled={!selectedCategory}
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
