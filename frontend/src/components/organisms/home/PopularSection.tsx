"use client";
import Link from "next/link";
import { Card } from "../../molecules/home/Card";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Skeleton from "@/components/atoms/sekeletonLoading";

interface EventSession {
  date: string;
  time: string;
  location: string;
}

interface Event {
  image: string;
  title: string;
  location: string;
  category: string;
  date: string;
  time: string;
  id: string;
  attendees: number;
  eventSessions: EventSession[];
}

interface Props {
  className?: string;
}

export const PopularSection: React.FC<Props> = ({ className }) => {
  const [concerts, setConcerts] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const res = await axios.get("/events");

        const sorted = res.data
          .sort((a: Event, b: Event) => b.attendees - a.attendees)
          .map((event: Event) => {
            const firstSession = event.eventSessions[0];
            return {
              ...event,
              date: firstSession?.date || "No events yet",
              time: firstSession?.time || "",
              location: firstSession?.location || "-",
            };
          });

        setConcerts(sorted);
      } catch (error) {
        console.error("Failed to fetch concerts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchConcerts();
  }, []);

  return (
    <section className={`${className}`}>
      <div className="flex justify-between">
        <p className="text-[26px]">Popular</p>
        <Link href={"/tickets"} className="text-[20px]">
          See All
        </Link>
      </div>

      <div className="mt-[24px]">
        {loading ? (
          <div className="flex space-x-6 overflow-x-auto">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex-shrink-0 space-y-5 min-[768px]:w-[calc(25%-20px)]">
              <Skeleton width="w-full" height="h-48" />
              <Skeleton width="w-20" height="h-6" />
              <Skeleton width="w-32" height="h-5" />
              <Skeleton width="w-24" height="h-5" />
            </div>
          ))}
        </div>
        ) : (
          <div className="flex flex-nowrap space-x-[24px] max-[768px]:overflow-x-auto scrollbar-hide">
            {concerts.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 min-[768px]:w-[calc(25%-20px)]"
              >
                <Card
                  image={item.image}
                  title={item.title}
                  location={item.location}
                  date={item.date}
                  time={item.time}
                  event={item.id}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
