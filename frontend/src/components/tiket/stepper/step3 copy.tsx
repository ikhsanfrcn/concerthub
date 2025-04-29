/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import axios from "@/lib/axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import TicketCard from "@/components/tiket/ticketcard";
import { toast, ToastContainer } from "react-toastify";
import PaymentModal from "@/components/modal/paymentModal";

interface Step3Props {
  eventId: string;
  eventTitle: string;
  eventDate: string;
  onComplete: () => void;
}

export default function Step3({
  eventId,
  eventTitle,
  eventDate,
  onComplete,
}: Step3Props) {
  const { data: session, status } = useSession();

  const [category, setCategory] = useState<string | null>(null);
  const [ticketPrice, setTicketPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [deliveryMethod, setDeliveryMethod] = useState<string>("E-ticket");

  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [selectedDiscountType, setSelectedDiscountType] = useState<
    "voucher" | "points" | "none"
  >("none");
  const [voucher, setVoucher] = useState<any>(null);
  const [points, setPoints] = useState<number>(0);
  const [pointsId, setPointsId] = useState<string[]>([]);

  const [ticketId, setTicketId] = useState<string | null>(null);
  const [tickets, setTickets] = useState<any[]>([]);

  const [user, setUser] = useState<any>(null);

  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/users/profile", {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          },
        });
        const { data } = response;

        setUser({
          name: data.user.name || "",
          lastName: data.user.lastName || "",
          email: data.user.email || "",
          state: data.user.state || "",
          city: data.user.city || "",
          phoneNumber: data.user.phoneNumber || "",
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (session?.accessToken) {
      fetchUserProfile();
    }
  }, [session?.accessToken]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const selectedConcert = localStorage.getItem("selectedConcert");
        if (!selectedConcert) return;

        const { id: sessionId } = JSON.parse(selectedConcert);
        const res = await axios.get(`/tickets?sessionId=${sessionId}`);

        if (Array.isArray(res.data.tickets)) {
          setTickets(res.data.tickets);
        }
      } catch (err) {
        console.error("Failed to fetch tickets:", err);
      }
    };
    fetchTickets();
  }, []);

  useEffect(() => {
    const storedCategory = localStorage.getItem("selectedCategory");
    const storedQty = localStorage.getItem("seatQuantity");

    if (storedQty) setQuantity(parseInt(storedQty));
    if (storedCategory) {
      setCategory(storedCategory);

      const matchedTicket = tickets.find(
        (ticket) => ticket.category === storedCategory
      );
      if (matchedTicket) {
        setTicketPrice(matchedTicket.price);
        setTicketId(matchedTicket.id);
      } else {
        setTicketPrice(0);
      }
    }
  }, [tickets]);

  useEffect(() => {
    if (tickets.length > 0 && category) {
      const matched = tickets.find((ticket) => ticket.category === category);
      if (matched) {
        setTicketId(matched.id);
      }
    }
  }, [tickets, category]);

  const fetchUserVoucher = async () => {
    try {
      const res = await axios.get("/voucher/vouchers", {
        headers: { Authorization: `Bearer ${session?.accessToken}` },
      });
      if (res.status === 200 && res.data.vouchers.length > 0) {
        const discountPercent = res.data.vouchers[0].discountPercent;
        setVoucher(res.data.vouchers[0]);
        setAppliedDiscount(discountPercent);
      }
    } catch (err) {
      console.error("Error fetching voucher:", err);
      setAppliedDiscount(0);
      toast.error("No vouchers available");
    }
  };

  const fetchUserPoints = async () => {
    try {
      const res = await axios.get("/voucher/points", {
        headers: { Authorization: `Bearer ${session?.accessToken}` },
      });

      if (res.status === 200 && Array.isArray(res.data.points)) {
        const pointList = res.data.points;
        console.log(pointList);
        const totalAmount = pointList.reduce(
          (acc: number, curr: any) => acc + (curr.amount || 0),
          0
        );
        setPointsId(pointList.map((p: any) => p.id));
        setPoints(totalAmount);
        setAppliedDiscount(totalAmount);
      }
    } catch (err) {
      console.error("Error fetching points:", err);
      setAppliedDiscount(0);
      toast.error("No points available");
    }
  };

  useEffect(() => {
    if (session?.user) {
      if (selectedDiscountType === "voucher") fetchUserVoucher();
      else if (selectedDiscountType === "points") fetchUserPoints();
      else setAppliedDiscount(0);
      // toast.info("Discount cleared");
    }
  }, [session, selectedDiscountType]);

  // useEffect(() => {
  //   const url = localStorage.getItem("invoiceUrl");
  //   setPaymentUrl(url);
  // }, []);

  if (status === "loading") return null;

  const bookingFee = 0;
  const ticketTotal = (ticketPrice || 0) * (quantity || 1);
  const discountAmount =
    selectedDiscountType === "voucher"
      ? ticketTotal * (appliedDiscount / 100)
      : selectedDiscountType === "points"
      ? appliedDiscount
      : 0;

  const total = ticketTotal + bookingFee - discountAmount;

  const handleSubmit = async () => {
    const transactionData = {
      userId: session?.user.id,
      eventId,
      ticketId,
      quantity,
      totalPrice: total,
    };

    try {
      const res = await axios.post("/transactions", transactionData, {
        headers: { Authorization: `Bearer ${session?.accessToken}` },
      });
      if (res.status === 201) {
        localStorage.setItem("transactionId", res.data.invoice.externalId);
        localStorage.setItem("invoiceUrl", res.data.invoice.invoiceUrl);
        const url = localStorage.getItem("invoiceUrl");
        setPaymentUrl(url);
        setIsModalOpen(true);
      }
      console.log(transactionData);
    } catch (error) {
      console.error("Error submitting transaction:", error);
      toast.error("Transaction Failed!");
    }
  };
  console.log(pointsId);

  const closeModal = () => {
    setIsModalOpen(false); 
    onComplete();
  };

  const openPaymentLink = () => {
    if (paymentUrl) {
      window.open(paymentUrl, "_blank"); 
    }
  };

  return (
    <div>
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
      />
      <TicketCard />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 min-h-screen">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">1. Your Information</h2>
          {session ? (
            <div className="space-y-2 text-sm text-gray-700">
              <p>👤 {user?.name || "—"}</p>
              <p>📞 {user?.phoneNumber || "—"}</p>
              <p>📍 {user?.state || "—"}</p>
              <p>✉️ {user?.email || "—"}</p>
            </div>
          ) : (
            "Please log in first"
          )}

          <h2 className="text-lg font-semibold mt-6 mb-4">
            2. How do you want your tickets?
          </h2>
          <div className="flex gap-4 mb-3">
            {["E-ticket", "Paper ticket"].map((method) => (
              <button
                key={method}
                className={`border px-4 py-2 rounded-full text-sm ${
                  deliveryMethod === method
                    ? "bg-gray-200 border-gray-500"
                    : "border-gray-400 hover:bg-gray-100"
                }`}
                onClick={() => setDeliveryMethod(method)}
              >
                {method}
              </button>
            ))}
          </div>

          {ticketId && (
            <p className="mt-4 text-xs text-gray-500">
              🎟 Ticket ID: {ticketId}
            </p>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Payment details</h2>
          <div className="text-sm text-gray-700 space-y-1">
            {/* <p className="flex justify-between"><span>Order number</span><span>11458523</span></p> */}
            <p className="flex justify-between">
              <span>Ticket</span>
              <span>
                {eventTitle}, {eventDate}
              </span>
            </p>
            <p className="flex justify-between">
              <span>Category</span>
              <span>{category}</span>
            </p>
            <p className="flex justify-between">
              <span>x {quantity}</span>
              <span>Rp {ticketTotal.toLocaleString("id-ID")}</span>
            </p>
            <p className="flex justify-between">
              <span>Booking fee</span>
              <span>Rp {bookingFee.toFixed(2)}</span>
            </p>

            <div className="flex gap-4 my-2">
              {["voucher", "points", "none"].map((type) => (
                <button
                  key={type}
                  className={`border px-4 py-2 rounded-full text-sm ${
                    selectedDiscountType === type
                      ? "bg-gray-200 border-gray-500"
                      : "border-gray-400 hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedDiscountType(type as any)}
                >
                  {type === "none"
                    ? "No Discount"
                    : `Use ${type.charAt(0).toUpperCase() + type.slice(1)}`}
                </button>
              ))}
            </div>

            <p className="flex justify-between text-gray-500 mt-2">
              <span>Discount</span>
              <span>- Rp {discountAmount.toLocaleString("id-ID")}</span>
            </p>
          </div>

          <div className="border-t mt-4 pt-4">
            <p className="flex justify-between text-xl font-semibold text-pink-600">
              <span>Final price</span>
              <span>Rp {Number(total.toFixed(2)).toLocaleString("id-ID")}</span>
            </p>
          </div>

          <button
            className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 rounded-full"
            onClick={handleSubmit}
            disabled={!ticketId || !session}
          >
            Submit & Pay
          </button>
        </div>
      </div>
      <PaymentModal
        isOpen={isModalOpen}
        paymentUrl={paymentUrl}
        onClose={closeModal}
        onOpenPaymentLink={openPaymentLink}
      />
    </div>
  );
}
