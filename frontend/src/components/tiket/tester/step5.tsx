import React, { useEffect, useState } from "react";
import SuccessPage from "@/components/tiket/download/selamat";
import axios from "@/lib/axios";
import { useSession } from "next-auth/react";
import PaymentModal from "@/components/modal/paymentModal";

export default function Step5() {
  const { data: session } = useSession();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [transaction, setTransaction] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTransactionDetails = async () => {
      try {
        const transactionId = localStorage.getItem("transactionId");

        if (transactionId) {
          const res = await axios.get(`/transactions/${transactionId}`, {
            headers: {
              Authorization: `Bearer ${session?.accessToken}`,
            },
          });
          setTransaction(res.data.transaction);
          setLoading(false);
        } else {
          console.error("No transaction ID found");
        }
      } catch (error) {
        console.error("Error fetching transaction:", error);
        setLoading(false);
      }
    };

    if (session?.user) {
      fetchTransactionDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user?.id]);

  useEffect(() => {
    const transactionId = localStorage.getItem("transactionId");

    if (!transactionId) return;

    const intervalId = setInterval(async () => {
      try {
        const res = await axios.get(`/transactions/${transactionId}`, {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          },
        });

        if (res.data.transaction.status === "PAID") {
          setTransaction(res.data.transaction);
          clearInterval(intervalId);
        }

        if (res.data.transaction.status === "EXPIRED") {
          setTransaction(res.data.transaction);
          clearInterval(intervalId);
        }
      } catch (error) {
        console.error("Error checking transaction status:", error);
      }
    }, 30000);

    return () => clearInterval(intervalId);
  }, [session?.accessToken]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!transaction) {
    return <div>Transaction not found.</div>;
  }

  const status = transaction.status;

  if (status === "PAID") {
    return <SuccessPage />;
  } else if (status === "PENDING") {
    const paymentUrl = localStorage.getItem("invoiceUrl");

    return (
      <div className="flex flex-col items-center justify-center h-[500px]">
        <h2>Payment Pending</h2>
        <p>
          If you have already made a payment, please wait for the payment to go
          through.
        </p>
        <p>Please do not refresh this page.</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
        >
          Check Payment
        </button>

        <PaymentModal
          isOpen={isModalOpen}
          paymentUrl={paymentUrl}
          onClose={() => setIsModalOpen(false)}
          onOpenPaymentLink={() => {
            if (paymentUrl) {
              window.open(paymentUrl, "_blank");
            }
          }}
        />
      </div>
    );
  } else if (status === "EXPIRED") {
    return (
      <div className="flex flex-col items-center justify-center h-[500px]">
        <h2>Payment Expired</h2>
        <p>Your payment window has expired. Please initiate a new payment.</p>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="px-4 py-2 bg-red-500 text-white rounded mt-4 cursor-pointer"
        >
          Back to home
        </button>
      </div>
    );
  } else {
    return <div>Unknown status transaction</div>;
  }
}
