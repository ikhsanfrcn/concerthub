/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "@/lib/axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import TicketCard from "@/components/tiket/ticketcard";
import VoucherModal from "@/components/modal/voucher";
import PointsModal from "@/components/modal/points";
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

  const [voucherList, setVoucherList] = useState<any[]>([]);
  const [pointList, setPointList] = useState<any[]>([]);

  const [selectedVoucher, setSelectedVoucher] = useState<any>(null);
  const [selectedPoint, setSelectedPoint] = useState<any>(null);
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [tickets, setTickets] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showVoucherModal, setShowVoucherModal] = useState(false);
  const [showPointsModal, setShowPointsModal] = useState(false);

  useEffect(() => {
    if (session?.accessToken) {
      fetchUserProfile();
      fetchUserVoucher();
      fetchUserPoints();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.accessToken]);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get("/users/profile", {
        headers: { Authorization: `Bearer ${session?.accessToken}` },
      });
      setUser(response.data.user);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserVoucher = async () => {
    try {
      const res = await axios.get("/voucher/vouchers", {
        headers: { Authorization: `Bearer ${session?.accessToken}` },
      });
      setVoucherList(res.data.vouchers || []);
    } catch (err) {
      console.error("Error fetching vouchers:", err);
    }
  };

  const fetchUserPoints = async () => {
    try {
      const res = await axios.get("/voucher/points", {
        headers: { Authorization: `Bearer ${session?.accessToken}` },
      });
      setPointList(res.data.points || []);
    } catch (err) {
      console.error("Error fetching points:", err);
    }
  };

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
    if (tickets.length > 0) {
      const storedCategory = localStorage.getItem("selectedCategory");
      const storedQty = localStorage.getItem("seatQuantity");

      if (storedCategory) {
        setCategory(storedCategory);
        const matched = tickets.find(
          (ticket) => ticket.category === storedCategory
        );
        if (matched) {
          setTicketPrice(matched.price);
          setTicketId(matched.id);
        }
      }
      if (storedQty) setQuantity(parseInt(storedQty));
    }
  }, [tickets]);

  const ticketTotal = ticketPrice * quantity;
  const voucherDiscount = selectedVoucher
    ? ticketTotal * (selectedVoucher.discountPercent / 100)
    : 0;
  const pointDiscount = selectedPoint ? selectedPoint.amount : 0;
  const totalDiscount = voucherDiscount + pointDiscount;
  const total = ticketTotal - totalDiscount;

  const handleSubmit = async () => {
    const transactionData = {
      userId: session?.user.id,
      eventId,
      ticketId,
      quantity,
      pointId: selectedPoint?.id || null,
      voucherId: selectedVoucher?.id || null,
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

  const closeModal = () => {
    setIsModalOpen(false);
    onComplete();
  };

  const openPaymentLink = () => {
    if (paymentUrl) {
      window.open(paymentUrl, "_blank");
    }
  };

  if (status === "loading") return null;

  return (
    <div>
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={3000}
        hideProgressBar
      />
      <TicketCard />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50">
        {/* LEFT */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
          <h2 className="text-lg font-semibold">1. Your Information</h2>
          <div className="text-sm space-y-2">
            <p>👤 {user?.name}</p>
            <p>📞 {user?.phoneNumber}</p>
            <p>📍 {user?.state}</p>
            <p>✉️ {user?.email}</p>
          </div>

          <h2 className="text-lg font-semibold mt-6">2. Discount Options</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowVoucherModal(true)}
              className="w-full p-2 border rounded bg-gray-50 text-left"
            >
              % Pilih Voucher{" "}
              {selectedVoucher
                ? `(Dipilih: ${selectedVoucher.voucherType})`
                : ""}
            </button>

            <button
              onClick={() => setShowPointsModal(true)}
              className="w-full p-2 border rounded bg-gray-50 text-left"
            >
              ⭐ Pilih Points{" "}
              {selectedPoint
                ? `(Dipilih: ${selectedPoint.amount || "Point"})`
                : ""}
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
          <h2 className="text-lg font-semibold">Payment Details</h2>
          <div className="text-sm space-y-2">
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
              <span>Quantity</span>
              <span>x {quantity}</span>
            </p>
            <p className="flex justify-between">
              <span>Total Ticket</span>
              <span>Rp {ticketTotal.toLocaleString("id-ID")}</span>
            </p>
            {selectedVoucher && (
              <p className="flex justify-between text-gray-500">
                <span>Voucher Discount</span>
                <span>- Rp {voucherDiscount.toLocaleString("id-ID")}</span>
              </p>
            )}
            {selectedPoint && (
              <p className="flex justify-between text-gray-500">
                <span>Point Discount</span>
                <span>- Rp {pointDiscount.toLocaleString("id-ID")}</span>
              </p>
            )}
          </div>

          <div className="border-t pt-4">
            <p className="flex justify-between text-xl font-bold text-pink-600">
              <span>Final price</span>
              <span>Rp {Number(total.toFixed(2)).toLocaleString("id-ID")}</span>
            </p>
          </div>

          <button
            className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-full"
            onClick={handleSubmit}
            disabled={!ticketId}
          >
            Submit & Pay
          </button>
        </div>
      </div>

      {/* Modal Section */}
      <VoucherModal
        open={showVoucherModal}
        onClose={() => setShowVoucherModal(false)}
        voucherList={voucherList}
        onSelect={(voucher) => {
          setSelectedVoucher(voucher);
        }}
      />

      <PointsModal
        open={showPointsModal}
        onClose={() => setShowPointsModal(false)}
        pointList={pointList}
        onSelect={(point) => {
          setSelectedPoint(point);
        }}
      />

      <PaymentModal
        isOpen={isModalOpen}
        paymentUrl={paymentUrl}
        onClose={closeModal}
        onOpenPaymentLink={openPaymentLink}
      />
    </div>
  );
}
