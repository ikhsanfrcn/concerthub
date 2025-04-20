"use client";
import { useEffect, useState } from "react";

interface PaymentFormProps {
  useGiftCard: boolean;
  setUseGiftCard: (value: boolean) => void;
  useInsurance: boolean;
  setUseInsurance: (value: boolean) => void;
}

const paymentIcons = [
  { name: "Visa", image: "/visa.png" },
  { name: "MasterCard", image: "/mastercard.png" },
  { name: "Klarna", image: "/klarna.png" },
  { name: "Amex", image: "/amex.png" },
  { name: "Revolut", image: "/revolut.png" },
  { name: "PayPal", image: "/paypal.png" },
];

export default function PaymentForm({
  useGiftCard,
  setUseGiftCard,
  useInsurance,
  setUseInsurance,
}: PaymentFormProps) {
  const [user, setUser] = useState<{ name: string; email: string; phone: string; address: string } | null>(null);
  const [selectedCard, setSelectedCard] = useState("Visa");
  const [showLastMethods, setShowLastMethods] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("userProfile");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.warn("Error parsing user data:", err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("paymentMethod", selectedCard);
  }, [selectedCard]);

  return (
    <div className="bg-white rounded-xl p-6 shadow text-sm space-y-6">
      {/* USER INFO */}
      <div>
        <h2 className="text-base font-semibold text-primary-600 flex items-center justify-between">
          1. Review your Information
          <span className="text-xs text-blue-500 underline cursor-pointer">✎ Edit</span>
        </h2>
        <ul className="mt-3 space-y-1 text-gray-700">
          <li>👤 {user?.name || "—"}</li>
          <li>📞 {user?.phone || "—"}</li>
          <li>📍 {user?.address || "—"}</li>
          <li>✉️ {user?.email || "—"}</li>
        </ul>
      </div>

      {/* OPTIONS */}
      <div className="space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={useInsurance}
            onChange={(e) => setUseInsurance(e.target.checked)}
          />
          Missed events insurance
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={useGiftCard}
            onChange={(e) => setUseGiftCard(e.target.checked)}
          />
          Use your gift card
        </label>
      </div>

      {/* SELECT PAYMENT METHOD */}
      <div>
        <h2 className="text-base font-semibold text-primary-600 mb-3">2. Select your payment method</h2>

        {/* TOGGLE LAST METHODS */}
        <div className="rounded-lg border border-gray-300 mb-4">
          <button
            onClick={() => setShowLastMethods(!showLastMethods)}
            className="w-full bg-gray-100 px-4 py-2 text-left font-medium text-gray-600 flex items-center justify-between"
          >
            🧾 Your last purchase methods
            <span>{showLastMethods ? "▲" : "▼"}</span>
          </button>

          {showLastMethods && (
            <div className="p-4 space-y-3 border-t">
              <div className="flex items-center gap-3">
                {["Visa", "MasterCard"].map((method) => (
                  <button
                    key={method}
                    onClick={() => setSelectedCard(method)}
                    className={`flex items-center gap-2 border rounded-lg px-4 py-2 ${
                      selectedCard === method ? "border-pink-500 bg-pink-50" : "border-gray-300"
                    }`}
                  >
                    <img src={`/${method.toLowerCase()}.png`} alt={method} className="w-8" />
                    <span className="text-xs text-gray-700">{method}</span>
                  </button>
                ))}
              </div>

              <input
                type="text"
                className="w-full border rounded px-3 py-1.5 text-sm"
                placeholder="Card number"
                value={cardDetails.number}
                onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
              />
              <input
                type="text"
                className="w-full border rounded px-3 py-1.5 text-sm"
                placeholder="Card owner name"
                value={cardDetails.name}
                onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 border rounded px-3 py-1.5 text-sm"
                  placeholder="Expiry date"
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                />
                <input
                  type="text"
                  className="flex-1 border rounded px-3 py-1.5 text-sm"
                  placeholder="CVC"
                  value={cardDetails.cvc}
                  onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })}
                />
              </div>
            </div>
          )}
        </div>

        {/* NEW METHOD */}
        <div className="rounded-lg border border-gray-300">
          <div className="bg-gray-100 p-3 font-medium text-gray-600">➕ Add a new method</div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 p-4">
            {paymentIcons.map((method) => (
              <button
                key={method.name}
                className={`border rounded-lg p-2 flex items-center justify-center hover:border-pink-500 ${
                  selectedCard === method.name ? "border-pink-500 bg-pink-50" : "border-gray-300"
                }`}
                onClick={() => setSelectedCard(method.name)}
              >
                <img src={method.image} alt={method.name} className="w-10 h-6 object-contain" />
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-2">
          You’ll be forwarded to <strong>{selectedCard}</strong> to complete your payment.
        </p>
      </div>
    </div>
  );
}
