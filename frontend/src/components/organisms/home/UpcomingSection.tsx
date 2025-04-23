'use client'
import Link from "next/link";
import { Card } from "../../molecules/home/Card";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

const dataDummy = [
  {
    image: "/taylorswift2.png",
    name: "Taylor Swift",
    location: "San Diego",
    dateTime: "Dec 14, 21:00",
  },
  {
    image: "/celinedion.png",
    name: "Celine Dion",
    location: "New York City",
    dateTime: "Dec 13, 21:00",
  },
  {
    image: "/justinbieber.png",
    name: "Justin Bieber",
    location: "San Fransisco",
    dateTime: "Dec 16, 20:00",
  },
  {
    image: "/silagencoglu.png",
    name: "Sila Gencoglu",
    location: "Boston",
    dateTime: "Dec 18, 22:00",
  },
];

interface Event {
  image: string;
  title: string;
  location: string;
  date: string;
  time: string;
}

interface Props {
  className?: string;
}

export const UpcomingSection: React.FC<Props> = ({ className }) => {
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
        <p className="text-[26px]">Upcoming concerts</p>
        <Link href={"#"} className="text-[20px]">
          See All
        </Link>
      </div>

      <div className="mt-[24px]">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-nowrap space-x-[24px] overflow-x-auto scrollbar-hide">
            {concerts.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 min-[768px]:w-[calc(25%-20px)]"
              >
                <Card
                  image={item.image}
                  title={item.title}
                  location={item.location}
                  date={item.date}
                  time={item.time}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
