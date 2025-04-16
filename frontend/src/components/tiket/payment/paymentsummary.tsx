"use client";
import React, { useEffect, useState } from "react";

interface PaymentSummaryProps {
  bookingFee: number;
  giftCard: number;
  ticketInsurance: number;
  onSubmit: () => void;
}

export default function PaymentSummary({
  bookingFee,
  giftCard,
  ticketInsurance,
  onSubmit,
}: PaymentSummaryProps) {
  const [concert, setConcert] = useState<{ date: string; location: string } | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [ticketPrice, setTicketPrice] = useState<number>(0);
  const [seatQty, setSeatQty] = useState<number>(1);

  useEffect(() => {
    const storedConcert = localStorage.getItem("selectedConcert");
    const storedCategory = localStorage.getItem("selectedCategory");
    const storedQty = localStorage.getItem("seatQuantity");

    if (storedConcert) setConcert(JSON.parse(storedConcert));
    if (storedQty) setSeatQty(parseInt(storedQty));
    if (storedCategory) {
      setCategory(storedCategory);
      switch (storedCategory) {
        case "VIP":
          setTicketPrice(600);
          break;
        case "Premium":
          setTicketPrice(400);
          break;
        case "Regular":
          setTicketPrice(200);
          break;
      }
    }
  }, []);

  const finalTotal = ticketPrice * seatQty + bookingFee + ticketInsurance - giftCard;

  return (
    <div className="bg-white rounded-xl p-6 shadow text-sm">
      <h3 className="font-semibold text-base mb-4">Payment details</h3>
      <ul className="space-y-1 text-sm text-gray-700">
        <li className="flex justify-between"><span>Ticket:</span><span>${ticketPrice}</span></li>
        <li className="flex justify-between"><span>x {seatQty}</span><span>${ticketPrice * seatQty}</span></li>
        <li className="flex justify-between"><span>Booking fee</span><span>${bookingFee.toFixed(2)}</span></li>
        <li className="flex justify-between"><span>Insurance</span><span>${ticketInsurance.toFixed(2)}</span></li>
        <li className="flex justify-between text-blue-600"><span>Gift card</span><span>- ${giftCard}</span></li>
      </ul>

      <div className="border-t mt-4 pt-4">
        <div className="flex justify-between font-semibold text-base text-pink-600">
          <span>Total</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>
        <button
          className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 rounded-full"
          onClick={onSubmit}
        >
          Submit & Pay
        </button>
      </div>
    </div>
  );
}
