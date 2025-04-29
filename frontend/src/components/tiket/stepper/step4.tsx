"use client";
import React, { useState, useEffect } from "react";
import PaymentForm from "@/components/tiket/payment/paymentform";
import PaymentSummary from "@/components/tiket/payment/paymentsummary";
import PaymentModal from "@/components/modal/paymentModal";

export default function Step4({ onComplete }: { onComplete: () => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);

  useEffect(() => {
    const url = localStorage.getItem("invoiceUrl");
    setPaymentUrl(url);
  }, []);

  const handleSubmit = () => {
    setIsModalOpen(true);
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

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <PaymentForm />
      <PaymentSummary onSubmit={handleSubmit} />
      <PaymentModal
        isOpen={isModalOpen}
        paymentUrl={paymentUrl}
        onClose={closeModal}
        onOpenPaymentLink={openPaymentLink}
      />
    </div>
  );
}
