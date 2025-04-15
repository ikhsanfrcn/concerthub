"use client";
import PaymentForm from "@/components/tiket/payment/paymentform";
import PaymentSummary from "@/components/tiket/payment/paymentsummary";
import Stepper from "@/components/tiket/stepper";
import { MainTemplate } from "@/template/MainTemplate";
import React from "react";


export default function PaymentPage() {
  return (
    <MainTemplate>
            <Stepper/>
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2"> 
            <PaymentForm />
          </div>
          <div>
            <PaymentSummary />
          </div>
    </div>
        </MainTemplate>
  );
} 