"use client";
import React, { useState } from "react";
import TicketCard from "@/components/tiket/ticketcard";

export default function Step2({ onComplete }: { onComplete: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const tickets = [
    { category: "VIP", price: 600000, description: "Best view near the stage" },
    {
      category: "Premium",
      price: 400000,
      description: "Great seats with excellent view",
    },
    {
      category: "Regular",
      price: 200000,
      description: "Affordable seats with a decent view",
    },
  ];

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
              <p className="text-sm text-gray-600 mb-2">{ticket.description}</p>
              <p className="text-lg font-medium mb-4">${ticket.price}</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                {selectedCategory === ticket.category ? "Selected" : "Select"}
              </button>
            </div>
          ))}
        </div>
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
