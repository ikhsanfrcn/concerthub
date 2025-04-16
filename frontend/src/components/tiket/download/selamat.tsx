// app/selamat/page.tsx
"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-md sm:max-w-lg h-48 sm:h-64 bg-[radial-gradient(circle,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:20px_20px] animate-pulse rounded-xl" />

      <div className="text-center w-full max-w-md sm:max-w-lg mt-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2">Thank you! 😊</h1>
        <p className="text-sm sm:text-base md:text-lg text-green-500 mb-1">Your purchase was successful</p>
        <p className="text-sm text-green-500 mb-6">
          Your tickets are in your mailbox<br />
          <span className="text-green-600 font-medium">sylvievanbeek@gmail.com</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={() => router.push("/")}
            className="w-full sm:w-auto border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100 transition"
          >
            Back to Homepage
          </button>
          <button
            onClick={() => router.push("/download")}
            className="w-full sm:w-auto bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
          >
            Download Your Tickets
          </button>
        </div>
      </div>
    </div>
  );
}
