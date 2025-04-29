"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "@/lib/axios";
import Step1 from "@/components/tiket/stepper/step1";
import Step2 from "@/components/tiket/stepper/step2";
import Step3 from "@/components/tiket/stepper/step3";
// import Step4 from "@/components/tiket/tester/step4";
import Step5 from "@/components/tiket/stepper/step5";
import { MainTemplate } from "@/template/MainTemplate";
import Stepper from "@/components/tiket/stepper/stepper";
import Skeleton from "@/components/atoms/sekeletonLoading";

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
        const res = await axios.get(`/events?id=${id}`);
        setEvent(res.data);
      } catch (error) {
        console.error("Failed to fetch event", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) return <Skeleton />;
  if (!event) return <p>Event not found!</p>;

  const steps = [
    {
      title: "Concert detail",
      component: <Step1 eventId={id} onComplete={() => setCurrentStep(1)} />,
    },
    {
      title: "Tickets",
      component: <Step2 onComplete={() => setCurrentStep(2)} />,
    },
    {
      title: "Review",
      component: (
        <Step3
          eventId={id}
          eventTitle={event.title}
          eventDate={event.date}
          onComplete={() => setCurrentStep(3)}
        />
      ),
    },
    // {
    //   title: "Review",
    //   component: <Step4 onComplete={() => setCurrentStep(4)} />,
    // },
    {
      title: "Finish",
      component: <Step5 />,
    },
  ];

  return (
    <MainTemplate>
      <div style={{ display: currentStep === 0 ? 'none' : 'flex' }}>
        <Stepper
          steps={steps}
          currentStep={currentStep}
          // onStepChange={setCurrentStep}
        />
      </div>
      <div className="step-content mt-4">{steps[currentStep].component}</div>
    </MainTemplate>
  );
};

export default EventDetail;
