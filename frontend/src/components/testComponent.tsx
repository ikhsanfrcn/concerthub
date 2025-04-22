'use client'

import useUserStore from "@/store/userStore";

export const TestComponent = () => {
  const user = useUserStore((state) => state.data);
  console.log("User from Zustand Store before render:", user); // Cek apakah di sini user udah berubah

  return <div>{user ? user.name : "No user"}</div>;
};
