import React, { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Skeleton from "@/components/atoms/sekeletonLoading";
import { Card } from "@/components/molecules/home/Card";

interface EventSession {
  date: string;
  time: string;
  location: string;
}

interface Event {
  image: string;
  title: string;
  location: string;
  date: string;
  time: string;
  id: string;
  attendees: number;
  eventSessions: EventSession[];
}

export default function Suggestion() {
  const [concerts, setConcerts] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSuggestions = async () => {
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
        console.error("Failed to fetch suggestions", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, []);

  return (
    <div className="px-4 max-w-6xl mx-auto my-12">
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Suggestions for you</p>
        <p className="text-base text-gray-400 cursor-pointer hover:underline">
          See all
        </p>
      </div>

      <div className="flex flex-nowrap space-x-6 overflow-x-auto scrollbar-hide">
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
          <div className="flex flex-nowrap space-x-[24px] overflow-x-auto scrollbar-hide">
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
    </div>
  );
}
