"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "@/lib/axios";
import { Card } from "@/components/molecules/home/Card";
import { MainTemplate } from "@/template/MainTemplate";
import { SearchBox } from "@/components/atoms/SearchBox";
import { FilterSection } from "./_components/filterSection";
import { SortingSection } from "./_components/sortingSection";
import Skeleton from "@/components/atoms/sekeletonLoading";

interface EventSession {
  id: string;
  date: string;
  time: string;
  location: string;
}

interface Event {
  image: string;
  title: string;
  id: string;
  category: string;
  eventSessions: EventSession[];
  attendees: number;
}

interface UpdatedEvent extends Event {
  date: string;
  time: string;
  location: string;
}

export default function Tickets() {
  const [concerts, setConcerts] = useState<UpdatedEvent[]>([]);
  const [filteredConcerts, setFilteredConcerts] = useState<UpdatedEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedArtist, setSelectedArtist] = useState<string>("");
  const [selectedSort, setSelectedSort] = useState<string>("popular");
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const res = await axios.get("/events");
        const currentDate = new Date();

        const updatedConcerts: UpdatedEvent[] = res.data.map((event: Event) => {
          const validSessions = event.eventSessions
            .filter(session => new Date(session.date) >= currentDate)
            .sort((a, b) => {
              const dateA = new Date(`${a.date}T${a.time}`).getTime();
              const dateB = new Date(`${b.date}T${b.time}`).getTime();
              return dateA - dateB;
            });

          const closestSession = validSessions[0];

          return {
            ...event,
            date: closestSession?.date ?? "No events yet",
            time: closestSession?.time ?? "",
            location: closestSession?.location ?? "-",
          };
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

  useEffect(() => {
    let filtered = concerts;

    if (selectedCategory) {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }

    if (selectedLocation) {
      filtered = filtered.filter(event => event.location === selectedLocation);
    }

    if (selectedArtist) {
      filtered = filtered.filter(event => event.title === selectedArtist);
    }

    if (search) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(search.toLowerCase()) ||
        event.location.toLowerCase().includes(search.toLowerCase()) ||
        event.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedSort === "closest") {
      filtered = filtered
        .filter(event => event.date !== "No events yet")
        .sort((a, b) => {
          const dateA = new Date(`${a.date}T${a.time}`).getTime();
          const dateB = new Date(`${b.date}T${b.time}`).getTime();
          return dateA - dateB;
        });
    }

    if (selectedSort === "popular") {
      filtered = filtered.sort((a, b) => b.attendees - a.attendees);
    }

    setFilteredConcerts(filtered);
  }, [selectedCategory, selectedLocation, selectedArtist, concerts, search, selectedSort]);

  return (
    <MainTemplate>
      <section className="mx-[18px] min-[1440px]:mx-[108px] my-[48px]">
        <div className="flex justify-between">
          <div className="flex gap-4 mt-4">
            <FilterSection
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              selectedArtist={selectedArtist}
              setSelectedArtist={setSelectedArtist}
              concerts={concerts}
            />
          </div>
          <form onSubmit={() => router.push(`/tickets?search=${search}`)}>
            <SearchBox
              value={search || ""}
              onChange={(e) => router.push(`/tickets?search=${e.target.value}`)}
            />
          </form>
        </div>

        <SortingSection
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
        />

        <div className="mt-[24px]">
          {loading ? (
             <div className="flex flex-wrap space-x-[24px] overflow-x-auto scrollbar-hide">
             {[...Array(8)].map((_, index) => (
               <div key={index} className="flex-shrink-0 space-y-5 min-[768px]:w-[calc(25%-25px)]">
                 <Skeleton width="w-full" height="h-48" />
                 <Skeleton width="w-20" height="h-6" />
                 <Skeleton width="w-32" height="h-5" />
                 <Skeleton width="w-24" height="h-5" />
               </div>
             ))}
           </div>
          ) : (
            <div className="flex flex-wrap space-x-[24px] overflow-x-auto scrollbar-hide">
              {filteredConcerts.length > 0 ? (
                filteredConcerts.map((item) => (
                  <div key={item.id} className="flex-shrink-0 min-[768px]:w-[calc(25%-25px)]">
                    <Card
                      image={item.image}
                      title={item.title}
                      location={item.location}
                      date={item.date}
                      time={item.time}
                      event={item.id}
                    />
                  </div>
                ))
              ) : (
                <p>No events available.</p>
              )}
            </div>
          )}
        </div>
      </section>
    </MainTemplate>
  );
}
