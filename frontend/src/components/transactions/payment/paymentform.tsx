/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import axios from "@/lib/axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function PaymentForm() {
  const { data: session, status } = useSession();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/users/profile", {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          },
        });
        const { data } = response;

        setUser({
          name: data.user.name || "",
          lastName: data.user.lastName || "",
          email: data.user.email || "",
          state: data.user.state || "",
          city: data.user.city || "",
          phoneNumber: data.user.phoneNumber || "",
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (session?.accessToken) {
      fetchUserProfile();
    }
  }, [session?.accessToken]);

  if (status === "loading") return <p className="mt-4">Loading user data...</p>;

  return (
    <div className="bg-white rounded-xl p-6 shadow text-sm space-y-6">
      <div>
        <h2 className="text-base font-semibold text-primary-600 flex items-center justify-between">
          1. Review your Information
        </h2>
        <ul className="mt-3 space-y-1 text-gray-700">
          <li>👤 {`${user?.name} ${user?.lastName}`}</li>
          <li>📞 {user?.phoneNumber}</li>
          <li>📍 {`${user?.state} | ${user?.city}`}</li>
          <li>✉️ {user?.email}</li>
        </ul>
      </div>
    </div>
  );
}
