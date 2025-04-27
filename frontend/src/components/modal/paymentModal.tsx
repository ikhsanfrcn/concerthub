import React from "react";

interface PaymentModalProps {
  isOpen: boolean;
  paymentUrl: string | null;
  onClose: () => void;
  onOpenPaymentLink: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  paymentUrl,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg max-w-4xl w-full">
        {/* <h2 className="text-xl font-semibold mb-4">Payment</h2> */}

        {paymentUrl ? (
          <iframe
            src={paymentUrl}
            width="100%"
            height="500px"
            frameBorder="0"
            title="Payment Page"
            className="mb-4 rounded"
          ></iframe>
        ) : (
          <p>The payment URL is not available. Make sure the URL has been saved correctly.</p>
        )}

        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded cursor-pointer hover:bg-blue-500"
            onClick={onClose}
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
