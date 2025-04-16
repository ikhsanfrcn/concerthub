"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function PaymentSummary() {
  const [concert, setConcert] = useState<{
    date: string;
    location: string;
  } | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [ticketPrice, setTicketPrice] = useState<number>(0);
  const [seatQty, setSeatQty] = useState<number>(1);
  const [bookingFee, setBookingFee] = useState<number>(0);
  const [giftCard, setGiftCard] = useState<number>(0);
  const [ticketInsurance, setTicketInsurance] = useState<number>(0);

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

    setBookingFee(parseFloat(localStorage.getItem("bookingFee") || "0"));
    setGiftCard(parseFloat(localStorage.getItem("giftCard") || "0"));
    setTicketInsurance(
      parseFloat(localStorage.getItem("ticketInsurance") || "0")
    );
  }, []);

  const router = useRouter();

  const handlePaymentSubmit = () => {
    // (Opsional) Kirim data ke backend atau validasi dulu
    router.push("/download");
  };

  const finalTotal =
    ticketPrice * seatQty + bookingFee + ticketInsurance - giftCard;

  return (
    <div className="bg-white rounded-xl p-6 shadow text-sm max-w-xl mx-auto mt-10">
      <h3 className="font-semibold text-base mb-4">Payment details</h3>
      <ul className="space-y-1">
        <li className="flex justify-between">
          <span>Order number</span>
          <span>11458523</span>
        </li>
        <li className="flex justify-between">
          <span>Ticket price: Taylor Swift, {concert?.date}</span>
          <span>${ticketPrice}</span>
        </li>
        <li className="flex justify-between">
          <span>x {seatQty}</span>
          <span>${ticketPrice * seatQty}</span>
        </li>
        <li className="flex justify-between">
          <span>Booking fee</span>
          <span>${bookingFee.toFixed(2)}</span>
        </li>
        <li className="flex justify-between">
          <span>Ticket insurance</span>
          <span>${ticketInsurance.toFixed(2)}</span>
        </li>
        <li className="flex justify-between text-blue-600 cursor-pointer">
          <span>Add your gift card</span>
          <span>- ${giftCard}</span>
        </li>
      </ul>

      <div className="border-t mt-4 pt-4">
        <div className="flex justify-between font-semibold text-base">
          <span>Final price</span>
          <span className="text-pink-600">${finalTotal.toFixed(2)}</span>
        </div>
        <button
          className="w-full mt-4 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700"
          onClick={handlePaymentSubmit}
        >
          Submit Payment
        </button>
      </div>
    </div>
  );
}
