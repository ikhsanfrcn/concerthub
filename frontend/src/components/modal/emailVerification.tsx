interface EmailVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailVerificationModal: React.FC<EmailVerificationModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✖
        </button>
        <h2 className="text-2xl font-semibold mb-4">
          Email Verification Required
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          We have sent a verification email to your inbox. Please check your
          email and follow the instructions to verify your account.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};
