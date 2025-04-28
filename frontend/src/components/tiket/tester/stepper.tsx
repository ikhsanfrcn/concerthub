// components/tiket/tester/stepper.tsx
"use client";
import { JSX } from "react";

interface Step {
  title: string;
  component: JSX.Element;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  // onStepChange: (stepIndex: number) => void;
}

const Stepper = ({ steps, currentStep }: StepperProps) => {
  // const router = useRouter();

  // const handleNext = () => {
  //   if (currentStep < steps.length - 1) {
  //     onStepChange(currentStep + 1); // Move to next step
  //     router.push(steps[currentStep + 1].title.toLowerCase().replace(/ /g, '').toLowerCase());
  //   }
  // };

  // const handlePrev = () => {
  //   if (currentStep > 0) {
  //     onStepChange(currentStep - 1); // Move to previous step
  //     router.push(steps[currentStep - 1].title.toLowerCase().replace(/ /g, '').toLowerCase());
  //   }
  // };

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
                  ${isComplete ? "bg-pink-500" : isCurrent ? "bg-blue-500" : "bg-gray-400"}`}
              >
                {isComplete ? "✓" : index + 1}
              </div>
              <span className="text-xs md:text-sm text-gray-700 whitespace-nowrap">{step.title}</span>
              {index < steps.length - 1 && (
                <div className={`w-6 md:w-12 h-0.5 ${index + 1 <= currentStep ? "bg-pink-500" : "bg-gray-300"}`} />
              )}
            </div>
          );
        })}
      </div>


    </div>
  );
};

export default Stepper;
