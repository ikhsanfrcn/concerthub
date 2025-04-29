/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "@/lib/axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

interface PaymentSummaryProps {
  onSubmit: () => void;
}

export default function PaymentSummary({ onSubmit }: PaymentSummaryProps) {
  const { data: session } = useSession();
  const [details, setDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactionDetails = async () => {
      try {
        const transactionId = localStorage.getItem("transactionId");

        if (transactionId) {
          const res = await axios.get(`/transactions?id=${transactionId}`, {
            headers: {
              Authorization: `Bearer ${session?.accessToken}`,
            },
          });
          const data = res.data;
          console.log(data);
          setDetails(data);
        } else {
          console.error("No transaction ID found");
        }
      } catch (err) {
        console.error("Failed to fetch transaction details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user) {
      fetchTransactionDetails();
    }
  }, [session?.user?.id]);

  if (loading) return <div>Loading...</div>;

  // Pastikan data transaksi ada sebelum mengaksesnya
  if (!details || !details.transactions || details.transactions.length === 0) {
    return <p>No transaction details available</p>;
  }

  const transaction = details.transactions[0];
  const ticket = transaction.ticket;
  const quantity = transaction.quantity;
  const totalPrice = transaction.totalPrice;

  return (
    <div className="bg-white rounded-xl p-6 shadow text-sm">
      <h3 className="font-semibold text-base mb-4">Payment details</h3>
      {ticket ? (
        <ul className="space-y-1 text-sm text-gray-700">
          <li className="flex justify-between">
            <span>Ticket:</span>
            <span>Rp. {ticket.price}</span>
          </li>
          <li className="flex justify-between">
            <span>x {quantity}</span>
            <span>Rp {ticket.price * quantity}</span>
          </li>
        </ul>
      ) : (
        <p>No ticket information available</p>
      )}
      <div className="border-t mt-4 pt-4">
        <div className="flex justify-between font-semibold text-base text-pink-600">
          <span>Total</span>
          <span>Rp {totalPrice.toFixed(2)}</span>
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
