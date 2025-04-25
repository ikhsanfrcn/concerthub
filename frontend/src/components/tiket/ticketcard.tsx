"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // 👈 import router

interface ConcertData {
  date: string;
  location: string;
  price?: string;
  time?: string;
  quantity?: number;
  title?: string;
}

const TicketCard = () => {
  const router = useRouter(); // 👈 inisialisasi
  const [timeLeft, setTimeLeft] = useState(321);
  const [concert, setConcert] = useState<ConcertData | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("selectedConcert");
    if (stored) {
      const parsed = JSON.parse(stored);
      setConcert({
        date: parsed.date,
        location: parsed.location,
        time: parsed.time || "Fri 9:00 PM",
        quantity: parsed.quantity || 2,
        title: parsed.title,
      });
    }
  }, []);

  const formatTime = (seconds: number) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleChangeDate = () => {
    // Kosongkan pilihan sebelumnya jika perlu:
    localStorage.removeItem("selectedConcert");
    // Arahkan kembali ke halaman pemilihan tiket
    router.push("/transactionticket"); // Atau "/category" jika itu step sebelumnya
  };

  if (!concert) return null;

  const [day, month, year] = concert.date.split(" ");

  return (
    <div className="flex max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-6">
      <div className="flex flex-col items-center justify-center bg-indigo-700 text-white w-20 py-4">
        <div className="text-2xl font-bold">{day}</div>
        <div className="text-sm">{month}</div>
        <div className="text-xs">{year}</div>
        <div className="mt-2 text-green-400 text-lg">●</div>
      </div>

      <div className="relative flex-1 p-4">
        <h3 className="text-lg font-semibold">{concert.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{concert.quantity}</p>
        <p className="text-sm text-gray-600">{concert.price}</p>
        <p className="text-sm text-gray-600">🕘 {concert.time}</p>
        <p className="text-sm text-gray-600">📍 {concert.location}</p>

        <div className="absolute top-4 right-4 bg-gray-100 rounded-lg px-3 py-1 text-sm flex items-center">
          Time left:
          <span className="text-red-600 font-bold ml-2">{formatTime(timeLeft)}</span>
        </div>

        <button
          onClick={handleChangeDate}
          className="absolute bottom-4 right-4 border border-gray-400 text-sm px-4 py-1 rounded-lg hover:bg-gray-100"
        >
          Change Date
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
