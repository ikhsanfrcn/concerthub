"use client";
import { useRouter, usePathname } from "next/navigation";

interface Step {
  label: string;
  path: string;
}

const steps: Step[] = [
  { label: "Location & Date", path: "/location" },
  { label: "Seat", path: "/seat" },
  { label: "Order Overview", path: "/order" },
  { label: "Payment", path: "/payment" },
  { label: "Download", path: "/download" },
];

const Stepper = () => {
  const router = useRouter();
  const pathname = usePathname();

  const currentStep = steps.findIndex((step) => step.path === pathname);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      router.push(steps[currentStep + 1].path);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center justify-between w-full max-w-4xl px-4 py-6 bg-white rounded-xl shadow overflow-x-auto">
        {steps.map((step, index) => {
          const isComplete = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={index} className="flex items-center space-x-2 min-w-[80px]">
              <div
                className={`w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full text-white text-xs md:text-sm font-semibold
                  ${isComplete ? "bg-pink-500" : isCurrent ? "bg-gray-500" : "bg-gray-400"}`}
              >
                {isComplete ? "✓" : index + 1}
              </div>
              <span className="text-xs md:text-sm text-gray-700 whitespace-nowrap">{step.label}</span>
              {index < steps.length - 1 && (
                <div
                  className={`w-6 md:w-12 h-0.5 ${
                    index + 1 <= currentStep ? "bg-pink-500" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={handleNext}
        className="mt-6 bg-pink-600 text-white px-4 py-2 rounded-lg"
      >
        {currentStep === steps.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default Stepper;
