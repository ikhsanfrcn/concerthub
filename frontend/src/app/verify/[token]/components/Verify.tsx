/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import axios from "@/lib/axios";
import { useEffect, useState } from "react";

export default function VerifyPage({token}: { token: string}) {
  const [msg, setMsg] = useState<string>("");
  const onVerify = async () => {
    try {
      setMsg("Waiting ...");
      const { data } = await axios.patch("/auth/verify", {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
      });
      console.log(data);
      setMsg(data.message)
    } catch (error) {
      console.log(error);
      setMsg("Verification Failed")
    }
  };

  useEffect(() => {
    onVerify()
  }, [])
  return (
    <div>
        <h1 className="text-6xl">{msg}</h1>
    </div>
  )
}
