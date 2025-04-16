"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const OrderSummary = () => {
  const [concert, setConcert] = useState<{ date: string; location: string } | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [ticketPrice, setTicketPrice] = useState<number>(0);
  const [seatQty, setSeatQty] = useState<number>(1);

  useEffect(() => {
    const storedConcert = localStorage.getItem("selectedConcert");
    const storedCategory = localStorage.getItem("selectedCategory");
    const storedQty = localStorage.getItem("seatQuantity");

    if (storedConcert) setConcert(JSON.parse(storedConcert));
    if (storedQty) setSeatQty(parseInt(storedQty));

    if (storedCategory) {
      setCategory(storedCategory);
      switch (storedCategory) {
        case "VIP":
          setTicketPrice(600);
          break;
        case "Premium":
          setTicketPrice(400);
          break;
        case "Regular":
          setTicketPrice(200);
          break;
        default:
          setTicketPrice(0);
      }
    }
  }, []);

  const router = useRouter();

const handleSubmit = () => {
  localStorage.setItem("bookingFee", "20.25");
  localStorage.setItem("giftCard", "100");
  localStorage.setItem("ticketInsurance", "15");
  router.push("/payment");
};


  const bookingFee = 20.25;
  const giftCard = 100;
  const total = (ticketPrice * seatQty) + bookingFee - giftCard;

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">1. Your Information</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <p>👤 Sylvie Van Beek</p>
          <p>📞 8023456789</p>
          <p>📍 Delftwegstraat 23, Delft, Netherlands</p>
          <p>✉️ sylvievanbeek@gmail.com</p>
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-4">2. How do you want your tickets?</h2>
        <div className="flex gap-4 mb-3">
          <button className="border border-gray-400 px-4 py-2 rounded-full text-sm hover:bg-gray-100">E-ticket</button>
          <button className="border border-gray-400 px-4 py-2 rounded-full text-sm hover:bg-gray-100">Paper ticket</button>
        </div>

        <div className="text-xs text-gray-500 space-y-2">
          <p><strong>E-ticket:</strong> You can save it as a PDF on your mobile plus tickets will be saved in ConcertHub app.</p>
          <p className="flex items-center gap-2">
            <span>📦 $3.99</span> <span>🚚 3-5 workdays</span>
          </p>
        </div>

        <div className="mt-6">
          <label className="flex items-center space-x-2 text-sm">
            <input type="checkbox" className="form-checkbox" />
            <span>Missed events insurance</span>
          </label>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Payment details</h2>
        <div className="text-sm text-gray-700 space-y-1">
          <p className="flex justify-between"><span>Order number</span><span>11458523</span></p>
          <p className="flex justify-between">
            <span>Ticket price: Taylor Swift, {concert?.date}</span>
            <span>${ticketPrice}</span>
          </p>
          <p className="flex justify-between"><span>x {seatQty}</span><span>${ticketPrice * seatQty}</span></p>
          <p className="flex justify-between"><span>Booking fee</span><span>${bookingFee.toFixed(2)}</span></p>
          <p className="text-blue-500 text-sm cursor-pointer mt-2">🎁 Add your gift card</p>
          <p className="flex justify-between text-gray-500"><span>Gift card discount</span><span>- ${giftCard}</span></p>
        </div>

        <div className="border-t mt-4 pt-4">
          <p className="flex justify-between text-xl font-semibold text-pink-600">
            <span>Final price</span><span>${total.toFixed(2)}</span>
          </p>
        </div>

        <button
  className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 rounded-full"
  onClick={handleSubmit}
>
  Submit & Pay
</button>

      </div>
    </div>
  );
};

export default OrderSummary;
