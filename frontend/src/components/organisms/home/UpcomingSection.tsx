'use client'
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

export const UpcomingSection: React.FC<Props> = ({ className }) => {
  const [concerts, setConcerts] = useState<Event[]>([]);
  const [filteredConcerts, setFilteredConcerts] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const res = await axios.get("/events");
        setConcerts(res.data);
        setFilteredConcerts(res.data);
      } catch (error) {
        console.error("Failed to fetch concerts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchConcerts();
  }, []);

  useEffect(() => {
    let filtered = concerts;

    if (selectedCategory) {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }
    if (selectedLocation) {
      filtered = filtered.filter(event => event.location === selectedLocation);
    }

    setFilteredConcerts(filtered);
  }, [selectedCategory, selectedLocation, concerts]);

  const categories = Array.from(new Set(concerts.map(event => event.category)));
  const locations = Array.from(new Set(concerts.map(event => event.location)));

  return (
    <section className={`${className}`}>
      <div className="flex justify-between items-center">
        <p className="text-[26px]">Upcoming concerts</p>
        <Link href="/events" className="text-[20px]">
          See All
        </Link>
      </div>

      <div className="flex gap-4 mt-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      <div className="mt-[24px]">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-nowrap space-x-[24px] overflow-x-auto scrollbar-hide">
            {filteredConcerts.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 min-[768px]:w-[calc(25%-20px)]"
              >
                <Link href={`/events/${item.id}`}>
                  <Card
                    image={item.image}
                    title={item.title}
                    location={item.location}
                    date={item.date}
                    time={item.time}
                    event={item.id}
                  />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
