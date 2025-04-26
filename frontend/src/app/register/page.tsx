// pages/register.tsx
"use client";

import { RegisterContent } from "./components/RegisterContent";
import { RegisterForm } from "./components/RegisterForm";

export default function Register() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background + overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/loginimage.png')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Mobile view */}
      <div className="relative z-10 flex flex-col justify-between h-full md:hidden">
        <RegisterContent />

        <div className="px-6 pb-12">
          <RegisterForm className="bg-white rounded-xl p-6 shadow-lg" />
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:grid md:grid-cols-2 min-h-screen relative z-10">
        <RegisterContent />

        <div className="flex items-center justify-center bg-white px-6 py-12">
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}
