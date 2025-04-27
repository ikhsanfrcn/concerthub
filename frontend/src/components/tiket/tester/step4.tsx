"use client";
import React, { useState, useEffect } from "react";
import PaymentForm from "@/components/tiket/payment/paymentform";
import PaymentSummary from "@/components/tiket/payment/paymentsummary";
import PaymentModal from "@/components/modal/paymentModal";

export default function Step4({ onComplete }: { onComplete: () => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);

  // Ambil URL pembayaran dari localStorage saat komponen pertama kali dimuat
  useEffect(() => {
    const url = localStorage.getItem("invoiceUrl");
    setPaymentUrl(url);
  }, []); // Hanya dijalankan sekali saat komponen pertama kali dimuat

  const handleSubmit = () => {
    setIsModalOpen(true); // Membuka modal saat submit
  };
  
  const closeModal = () => {
    setIsModalOpen(false); // Menutup modal
    onComplete();
  };

  const openPaymentLink = () => {
    if (paymentUrl) {
      window.open(paymentUrl, "_blank"); // Membuka link pembayaran di jendela baru
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <PaymentForm />
      <PaymentSummary onSubmit={handleSubmit} />

      {/* Menggunakan komponen modal */}
      <PaymentModal
        isOpen={isModalOpen}
        paymentUrl={paymentUrl}
        onClose={closeModal}
        onOpenPaymentLink={openPaymentLink}
      />
    </div>
  );
}
