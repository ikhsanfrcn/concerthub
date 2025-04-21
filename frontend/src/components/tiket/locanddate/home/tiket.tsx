"use client";
import { useRouter } from "next/navigation";

const concerts = [
  {
    date: "25 June 2025",
    status: "Available",
    price: "$ 200-250",
    time: "Fri 9:00 PM",
    location: "New York",
    disabled: false,
  },
  {
    date: "26 June 2025",
    status: "Available",
    price: "$ 200-800",
    time: "Fri 9:00 PM",
    location: "New York",
    disabled: false,
  },
  {
    date: "27 June 2025",
    status: "Sold out",
    price: "$ 200-800",
    time: "Fri 9:00 PM",
    location: "New York",
    disabled: true,
  },
  {
    date: "28 June 2025",
    status: "Available",
    price: "$ 200-800",
    time: "Fri 9:00 PM",
    location: "New York",
    disabled: false,
  },
];

export default function TaylorConcerts() {
  const router = useRouter();

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="rounded-xl overflow-hidden mb-6">
        <div
          className="w-full h-[280px] sm:h-[300px] flex items-end bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/taylor.png')",
            backgroundPositionY: "-0px",
          }}
        >
          <div className="flex justify-between w-full px-4 sm:px-6 pb-4 text-white hidden sm:block">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Taylor</h2>
              <p className="text-base md:text-lg">Concerts</p>
            </div>
            <div className="text-xs md:text-sm self-end">🎵 pop</div>
          </div>
        </div>
      </div>

      {/* Tickets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {concerts.map((concert, idx) => (
          <div
            key={idx}
            className={`flex flex-col sm:flex-row bg-white border rounded-xl p-4 shadow-sm ${
              concert.disabled ? "opacity-60" : ""
            }`}
          >
            <div
              className={`w-full sm:w-28 h-28 rounded-xl flex flex-col justify-center items-center font-semibold mb-4 sm:mb-0 ${
                concert.disabled ? "bg-gray-300 text-gray-700" : "bg-indigo-900 text-white"
              }`}
            >
              <div className="text-lg">{concert.date.split(" ")[0]}</div>
              <div className="text-sm">{concert.date.split(" ")[1]}</div>
              <div className="text-sm">{concert.date.split(" ")[2]}</div>
            </div>

            <div className="sm:ml-4 flex-1">
              <h3 className="font-semibold text-lg">Taylor Swift</h3>
              <p className={`text-sm ${concert.status === "Available" ? "text-green-600" : "text-red-500"}`}>
                Status: {concert.status}
              </p>
              <p className="text-sm">Price: {concert.price}</p>
              <p className="text-sm">🗓 {concert.time}</p>
              <p className="text-sm">📍 {concert.location}</p>
            </div>

            <div className="mt-4 sm:mt-0 sm:self-center">
              <button
                onClick={() =>
                  router.push(
                    `/seat?date=${encodeURIComponent(concert.date)}&location=${encodeURIComponent(concert.location)}`
                  )
                }
                className={`w-full sm:w-auto px-4 py-2 rounded-full text-white font-semibold ${
                  concert.disabled ? "bg-gray-300 cursor-not-allowed" : "bg-pink-500 hover:bg-pink-600"
                }`}
                disabled={concert.disabled}
              >
                View Ticket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
