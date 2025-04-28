'use client'
import Link from "next/link";
import { Card } from "../../molecules/home/Card";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

interface Event {
  image: string;
  title: string;
  id: string;
  eventSessions: Array<{
    id: string;
    date: string;
    time: string;
    location: string;
  }>;
}

interface UpdatedEvent extends Event {
  date: string;
  time: string;
  location: string;
}

interface Props {
  className?: string;
}

export const UpcomingSection: React.FC<Props> = ({ className }) => {
  const [concerts, setConcerts] = useState<UpdatedEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const res = await axios.get("/events");

        const currentDate = new Date();

        const upcomingConcerts = res.data.filter((event: Event) => {
          const validSessions = event.eventSessions.filter(session => {
            return new Date(session.date) >= currentDate; 
          });

          return validSessions.length > 0;
        });

        const sortedConcerts = upcomingConcerts.sort((a: Event, b: Event) => {
          const sortedA = a.eventSessions
            .filter(session => new Date(session.date) >= currentDate) 
            .sort((sessionA, sessionB) => {
              const sessionDateA = new Date(sessionA.date).getTime();
              const sessionDateB = new Date(sessionB.date).getTime();

              if (sessionDateA === sessionDateB) {
                const sessionTimeA = new Date(`${sessionA.date}T${sessionA.time}`).getTime();
                const sessionTimeB = new Date(`${sessionB.date}T${sessionB.time}`).getTime();
                return sessionTimeA - sessionTimeB;
              }

              return sessionDateA - sessionDateB;
            });

          const firstSessionA = sortedA[0]; 
          const sortedB = b.eventSessions
            .filter(session => new Date(session.date) >= currentDate) 
            .sort((sessionA, sessionB) => {
              const sessionDateA = new Date(sessionA.date).getTime();
              const sessionDateB = new Date(sessionB.date).getTime();

              if (sessionDateA === sessionDateB) {
                const sessionTimeA = new Date(`${sessionA.date}T${sessionA.time}`).getTime();
                const sessionTimeB = new Date(`${sessionB.date}T${sessionB.time}`).getTime();
                return sessionTimeA - sessionTimeB;
              }

              return sessionDateA - sessionDateB;
            });

          const firstSessionB = sortedB[0];

          const dateA = new Date(firstSessionA.date).getTime();
          const dateB = new Date(firstSessionB.date).getTime();
          if (dateA === dateB) {
            const timeA = new Date(`${firstSessionA.date}T${firstSessionA.time}`).getTime();
            const timeB = new Date(`${firstSessionB.date}T${firstSessionB.time}`).getTime();
            return timeA - timeB;
          }

          return dateA - dateB;
        });

        const updatedConcerts: UpdatedEvent[] = sortedConcerts.map((event: Event) => {
          const closestSession = event.eventSessions
            .filter(session => new Date(session.date) >= currentDate)
            .sort((sessionA, sessionB) => {
              const sessionDateA = new Date(sessionA.date).getTime();
              const sessionDateB = new Date(sessionB.date).getTime();

              if (sessionDateA === sessionDateB) {
                const sessionTimeA = new Date(`${sessionA.date}T${sessionA.time}`).getTime();
                const sessionTimeB = new Date(`${sessionB.date}T${sessionB.time}`).getTime();
                return sessionTimeA - sessionTimeB;
              }

              return sessionDateA - sessionDateB;
            })[0];

          if (closestSession) {
            return {
              ...event,
              date: closestSession.date,
              time: closestSession.time,
              location: closestSession.location,
            };
          }

          return event;
        });

        setConcerts(updatedConcerts);
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
      <div className="flex justify-between items-center">
        <p className="text-[26px]">Upcoming concerts</p>
        <Link href="/tickets" className="text-[20px]">
          See All
        </Link>
      </div>

      <div className="mt-[24px]">
        {loading ? (
          <p>Loading...</p>
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
    </section>
  );
};
