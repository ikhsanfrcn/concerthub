"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "@/lib/axios";
import Step1 from "@/components/tiket/tester/step1";
import Step2 from "@/components/tiket/tester/step2";
import Step3 from "@/components/tiket/tester/step3";
import Step4 from "@/components/tiket/tester/step4";
import Step5 from "@/components/tiket/tester/step5";
import { MainTemplate } from "@/template/MainTemplate";
import Stepper from "@/components/tiket/tester/stepper";

interface Event {
  image: string;
  title: string;
  location: string;
  date: string;
  time: string;
  description?: string;
}

const EventDetail = () => {
  const params = useParams();
  const id = params?.id as string;
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!id) return;

    const fetchEvent = async () => {
      try {
        const res = await axios.get(`/events/${id}`);
        setEvent(res.data);
      } catch (error) {
        console.error("Failed to fetch event", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!event) return <p>Event not found!</p>;

  const steps = [
    {
      title: "Step 1",
      component: <Step1 eventId={id} onComplete={() => setCurrentStep(1)} />,
    },
    {
      title: "Step 2",
      component: <Step2 eventId={id} onComplete={() => setCurrentStep(2)} />,
    },
    {
      title: "Step 3",
      component: <Step3 eventId={id} eventTitle={event.title}
      eventDate={event.date} onComplete={() => setCurrentStep(3)} />,
    },
    {
      title: "Step 4",
      component: <Step4 onComplete={() => setCurrentStep(4)} />,
    },
    {
      title: "Step 5",
      component: <Step5 />,
    },
  ];

  return (
    <MainTemplate>
      <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
      />
      <div className="step-content mt-4">{steps[currentStep].component}</div>
    </MainTemplate>
  );
};

export default EventDetail;
