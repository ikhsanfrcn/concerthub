"use client";
import React, { useState } from "react";
import Step1 from "@/components/tiket/tester/step1";
import Step2 from "@/components/tiket/tester/step2";
import Step3 from "@/components/tiket/tester/step3";
import Step4 from "@/components/tiket/tester/step4";
import Step5 from "@/components/tiket/tester/step5";
import Stepper from "@/components/tiket/tester/stepper";
import { MainTemplate } from "@/template/MainTemplate";

export default function MainPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { title: "Step 1", component: <Step1 onComplete={() => setCurrentStep(1)} /> },
    { title: "Step 2", component: <Step2 onComplete={() => setCurrentStep(2)} /> },
    { title: "Step 3", component: <Step3 onComplete={() => setCurrentStep(3)} /> },
    { title: "Step 4", component: <Step4 onComplete={() => setCurrentStep(4)} /> },
    { title: "Step 5", component: <Step5 /> },
  ];

  return (
    <MainTemplate>
      <Stepper steps={steps} currentStep={currentStep} onStepChange={setCurrentStep} />
      <div className="step-content mt-4">{steps[currentStep].component}</div>
    </MainTemplate>
  );
}
