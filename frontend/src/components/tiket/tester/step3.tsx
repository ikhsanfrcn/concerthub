/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import axios from "@/lib/axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import TicketCard from "@/components/tiket/ticketcard";

export default function Step3({ onComplete }: { onComplete: () => void }) {
  const { data: session, status } = useSession();
  const [concert, setConcert] = useState<{ date: string; location: string } | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [ticketPrice, setTicketPrice] = useState<number>(0);
  const [seatQty, setSeatQty] = useState<number>(1);
  const [deliveryMethod, setDeliveryMethod] = useState<string>("E-ticket");

  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [selectedDiscountType, setSelectedDiscountType] = useState<"voucher" | "points">("voucher");
  const [voucher, setVoucher] = useState<any>(null);
  const [points, setPoints] = useState<number>(0);

  useEffect(() => {
    const storedConcert = localStorage.getItem("selectedConcert");
    const storedCategory = localStorage.getItem("selectedCategory");
    const storedQty = localStorage.getItem("seatQuantity");

    if (storedConcert) setConcert(JSON.parse(storedConcert));
    if (storedQty) setSeatQty(parseInt(storedQty));
    if (storedCategory) {
      setCategory(storedCategory);
      switch (storedCategory) {
        case "VIP": setTicketPrice(600); break;
        case "Premium": setTicketPrice(400); break;
        case "Regular": setTicketPrice(200); break;
        default: setTicketPrice(0);
      }
    }
  }, []);

  const fetchUserVoucher = async () => {
    try {
      const res = await axios.get("/voucher/vouchers", {
        headers: { Authorization: `Bearer ${session?.accessToken}` },
      });
      if (res.status === 200 && res.data.vouchers.length > 0) {
        const discount = res.data.vouchers[0].discountPercent;
        setVoucher(res.data.vouchers[0]);
        setAppliedDiscount(discount);
        localStorage.setItem("giftCard", String(discount));
      }
    } catch (err) {
      console.error("Error fetching voucher:", err);
      setAppliedDiscount(0);
    }
  };

  const fetchUserPoints = async () => {
    try {
      const res = await axios.get("/voucher/points", {
        headers: { Authorization: `Bearer ${session?.accessToken}` },
      });
      if (res.status === 200) {
        setPoints(res.data.totalPoints);
        setAppliedDiscount(res.data.totalPoints);
        localStorage.setItem("giftCard", String(res.data.totalPoints));
      }   
    } catch (err) {
      console.error("Error fetching points:", err);
      setAppliedDiscount(0);
    }
  };

  useEffect(() => {
    if (session?.user) {
      selectedDiscountType === "voucher" ? fetchUserVoucher() : fetchUserPoints();
    }
  }, [session, selectedDiscountType]);

  if (status === "loading") return null;

  const handleSubmit = async () => {
    const bookingFee = 20.25;
    const total = ticketPrice * seatQty + bookingFee - appliedDiscount;

    const transactionData = {
      concert,
      category,
      ticketPrice,
      seatQty,
      deliveryMethod,
      appliedDiscount,
      totalPrice: total,
    };

    try {
      const response = await axios.post("/transactions", transactionData, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });

      if (response.status === 201) {
        localStorage.setItem("transactionId", response.data.transactionId);
        onComplete(); // ✅ lanjut ke step 4
      } else {
        console.error("Transaction creation failed");
      }
    } catch (error) {
      console.error("Error submitting transaction:", error);
    }
  };

  const bookingFee = 20.25;
  const ticketTotal = ticketPrice * seatQty;
  const total = ticketTotal + bookingFee - appliedDiscount;

  return (
    <div>
      <TicketCard />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 min-h-screen">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">1. Your Information</h2>
          {session ? (
            <div className="space-y-2 text-sm text-gray-700">
              <p>👤 {session?.user.name || "—"}</p>
              <p>📞 {session?.user.phoneNumber || "—"}</p>
              <p>📍 {session?.user.state || "—"}</p>
              <p>✉️ {session?.user.email || "—"}</p>
            </div>
          ) : (
            "Please log in first"
          )}

          <h2 className="text-lg font-semibold mt-6 mb-4">2. How do you want your tickets?</h2>
          <div className="flex gap-4 mb-3">
            <button
              className={`border px-4 py-2 rounded-full text-sm ${deliveryMethod === "E-ticket" ? "bg-gray-200 border-gray-500" : "border-gray-400 hover:bg-gray-100"}`}
              onClick={() => setDeliveryMethod("E-ticket")}
            >
              E-ticket
            </button>
            <button
              className={`border px-4 py-2 rounded-full text-sm ${deliveryMethod === "Paper ticket" ? "bg-gray-200 border-gray-500" : "border-gray-400 hover:bg-gray-100"}`}
              onClick={() => setDeliveryMethod("Paper ticket")}
            >
              Paper ticket
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Payment details</h2>
          <div className="text-sm text-gray-700 space-y-1">
            <p className="flex justify-between"><span>Order number</span><span>11458523</span></p>
            <p className="flex justify-between"><span>Ticket  </span><span> Taylor Swift, {concert?.date}</span></p>
            <p className="flex justify-between"><span>Category</span><span>{category}</span></p>
            <p className="flex justify-between"><span>x {seatQty}</span><span>${ticketTotal}</span></p>
            <p className="flex justify-between"><span>Booking fee</span><span>${bookingFee.toFixed(2)}</span></p>

            <div className="flex gap-4 my-2">
              <button
                className={`border px-4 py-2 rounded-full text-sm ${selectedDiscountType === "voucher" ? "bg-gray-200 border-gray-500" : "border-gray-400 hover:bg-gray-100"}`}
                onClick={() => setSelectedDiscountType("voucher")}
              >
                Use Voucher
              </button>
              <button
                className={`border px-4 py-2 rounded-full text-sm ${selectedDiscountType === "points" ? "bg-gray-200 border-gray-500" : "border-gray-400 hover:bg-gray-100"}`}
                onClick={() => setSelectedDiscountType("points")}
              >
                Use Points
              </button>
            </div>

            <p className="flex justify-between text-gray-500 mt-2">
              <span>Discount</span>
              <span>- ${appliedDiscount}</span>
            </p>
          </div>

          <div className="border-t mt-4 pt-4">
            <p className="flex justify-between text-xl font-semibold text-pink-600">
              <span>Final price</span>
              <span>${total.toFixed(2)}</span>
            </p>
          </div>

          <button
            className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 rounded-full"
            onClick={handleSubmit}
          >
            Submit & Pay
          </button>
        </div>
      </div>
    </div>
  );
}
