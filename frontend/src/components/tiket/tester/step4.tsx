"use client";
import React, { useState } from "react";
import PaymentForm from "@/components/tiket/payment/paymentform";
import PaymentSummary from "@/components/tiket/payment/paymentsummary";

export default function Step4({ onComplete }: { onComplete: () => void }) {
  const [useGiftCard, setUseGiftCard] = useState(true);
  const [useInsurance, setUseInsurance] = useState(false);

  const bookingFee = 20.25;
  const ticketInsurance = useInsurance ? 15 : 0;
  const giftCard = useGiftCard ? 100 : 0;

  const handleSubmit = () => {
    localStorage.setItem("bookingFee", bookingFee.toString());
    localStorage.setItem("ticketInsurance", ticketInsurance.toString());
    localStorage.setItem("giftCard", giftCard.toString());
    onComplete(); // lanjut ke step 5
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <PaymentForm
        useGiftCard={useGiftCard}
        setUseGiftCard={setUseGiftCard}
        useInsurance={useInsurance}
        setUseInsurance={setUseInsurance}
      />
      <PaymentSummary
        bookingFee={bookingFee}
        giftCard={giftCard}
        ticketInsurance={ticketInsurance}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
