"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "@/lib/axios";
import { Card } from "@/components/molecules/home/Card";
import { MainTemplate } from "@/template/MainTemplate";
import { SearchBox } from "@/components/atoms/SearchBox";
import { FilterSection } from "./_components/filterSection";
import { SortingSection } from "./_components/sortingSection";

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
  category: string;  // Added category
  eventSessions: EventSession[];
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
  const [selectedSort, setSelectedSort] = useState<string>("closest"); // Default sort closest
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const res = await axios.get("/events");

        const currentDate = new Date();

        // Filter events that have upcoming sessions
        const upcomingConcerts = res.data.filter((event: Event) => {
          const validSessions = event.eventSessions.filter(session => {
            return new Date(session.date) >= currentDate;
          });

          return validSessions.length > 0;
        });

        // Sort events based on the first session date and time
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

  useEffect(() => {
    let filtered = concerts;

    // Filter based on category, location, and artist
    if (selectedCategory) {
      filtered = filtered.filter(
        (event) => event.category === selectedCategory
      );
    }

    if (selectedLocation) {
      filtered = filtered.filter(
        (event) => event.location === selectedLocation
      );
    }

    if (selectedArtist) {
      filtered = filtered.filter((event) => event.title === selectedArtist);
    }

    if (search) {
      filtered = filtered.filter((event) =>
        event.title.toLowerCase().includes(search.toLowerCase()) ||
        event.location.toLowerCase().includes(search.toLowerCase()) ||
        event.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sorting based on selected sort type
    if (selectedSort === "closest") {
      filtered = filtered.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        if (dateA === dateB) {
          const timeA = new Date(`${a.date}T${a.time}`).getTime();
          const timeB = new Date(`${b.date}T${b.time}`).getTime();
          return timeA - timeB;
        }
        return dateA - dateB;
      });
    } else if (selectedSort === "none") {
      // No sorting needed, just show all events (including past ones)
      filtered = filtered;
    }

    setFilteredConcerts(filtered);
  }, [selectedCategory, selectedLocation, selectedArtist, concerts, search, selectedSort]);

  return (
    <MainTemplate>
      <section className="mx-[18px] min-[1440px]:mx-[108px] my-[48px]">
        <div className="flex justify-between">
          <div className="flex gap-4 mt-4">
            {/* Filter Section */}
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
            <SearchBox value={search || ""} onChange={(e) => router.push(`/tickets?search=${e.target.value}`)} />
          </form>
        </div>

        {/* Sorting Section */}
        <SortingSection selectedSort={selectedSort} setSelectedSort={setSelectedSort} />

        <div className="mt-[24px]">
          {loading ? (
            <p>Loading...</p>
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
