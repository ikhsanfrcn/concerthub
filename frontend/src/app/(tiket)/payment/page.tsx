"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import PaymentForm from "@/components/tiket/payment/paymentform";
import PaymentSummary from "@/components/tiket/payment/paymentsummary";
import Stepper from "@/components/tiket/stepper";
import { MainTemplate } from "@/template/MainTemplate";

export default function PaymentPage() {
  const router = useRouter();
  const [useGiftCard, setUseGiftCard] = useState(true);
  const [useInsurance, setUseInsurance] = useState(false);

  const bookingFee = 20.25;
  const ticketInsurance = useInsurance ? 15 : 0;
  const giftCard = useGiftCard ? 100 : 0;

  const handleSubmit = () => {
    // Simpan ke localStorage
    localStorage.setItem("bookingFee", bookingFee.toString());
    localStorage.setItem("ticketInsurance", ticketInsurance.toString());
    localStorage.setItem("giftCard", giftCard.toString());

    // Simulasi submit
    router.push("/download");
  };

  return (
    <MainTemplate>
      <Stepper />
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <PaymentForm
            useGiftCard={useGiftCard}
            setUseGiftCard={setUseGiftCard}
            useInsurance={useInsurance}
            setUseInsurance={setUseInsurance}
          />
        </div>
        <div>
          <PaymentSummary
            bookingFee={bookingFee}
            giftCard={giftCard}
            ticketInsurance={ticketInsurance}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </MainTemplate>
  );
}
