"use client";
import Link from "next/link";
import { Card } from "../../molecules/home/Card";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

interface Event {
  image: string;
  title: string;
  location: string;
  category: string;
  date: string;
  time: string;
  id: string;
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
        setConcerts(res.data);
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
