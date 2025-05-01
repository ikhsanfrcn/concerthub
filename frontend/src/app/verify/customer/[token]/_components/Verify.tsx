"use client";

import axios from "@/lib/axios";
import { useEffect, useState } from "react";

export default function VerifyCustomerPage({ token }: { token: string }) {
  const [msg, setMsg] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const onVerify = async () => {
    try {
      setMsg("Waiting ...");
      const { data } = await axios.patch("/auth/verify", {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMsg(data.message);
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
      setMsg("Verification Failed");
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    onVerify();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div
        className={`p-6 rounded-lg shadow-xl max-w-md w-full text-center transition-all duration-500 ${
          isSuccess === null
            ? "bg-white"
            : isSuccess
            ? "bg-green-100 border-l-4 border-green-500 text-green-700"
            : "bg-red-100 border-l-4 border-red-500 text-red-700"
        }`}
      >
        <p className="text-3xl font-semibold">{msg}</p>
      </div>
    </div>
  );
}
