"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "@/lib/axios";
import { Card } from "@/components/molecules/home/Card";
import { MainTemplate } from "@/template/MainTemplate";
import { SearchBox } from "@/components/atoms/SearchBox";

interface Event {
  image: string;
  title: string;
  location: string;
  category: string;
  date: string;
  time: string;
  id: string;
}

export default function Tickets() {
  const [concerts, setConcerts] = useState<Event[]>([]);
  const [filteredConcerts, setFilteredConcerts] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedArtist, setSelectedArtist] = useState<string>("");
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const searchParams = useSearchParams();
  const artistFromUrl = searchParams.get("artist");
  const categoryFromUrl = searchParams.get("category");
  const locationFromUrl = searchParams.get("location");
  const search = searchParams.get("search");

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
    if (artistFromUrl) {
      setSelectedArtist(artistFromUrl);
    }
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
    if (locationFromUrl) {
      setSelectedLocation(locationFromUrl);
    }
  }, [artistFromUrl, categoryFromUrl, locationFromUrl]);

  useEffect(() => {
    let filtered = concerts;

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
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(search.toLowerCase()) ||
          event.location.toLowerCase().includes(search.toLowerCase()) ||
          event.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredConcerts(filtered);
  }, [selectedCategory, selectedLocation, selectedArtist, concerts, search]);

  const categories = Array.from(
    new Set(concerts.map((event) => event.category))
  );
  const locations = Array.from(
    new Set(concerts.map((event) => event.location))
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/tickets?search=${searchTerm}`);
  };

  return (
    <MainTemplate>
      <section className="mx-[18px] min-[1440px]:mx-[108px] my-[48px]">
        <div className="md:flex md:justify-between items-center">
          <div className="flex gap-4">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="">All Locations</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>

            {/* Artist Filter */}
            <select
              value={selectedArtist}
              onChange={(e) => setSelectedArtist(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="">All Artists</option>
              {Array.from(new Set(concerts.map((event) => event.title))).map(
                (artist) => (
                  <option key={artist} value={artist}>
                    {artist}
                  </option>
                )
              )}
            </select>
          </div>
          <form onSubmit={handleSearchSubmit} className="mt-[20px] md:mt-0">
            <SearchBox value={searchTerm} onChange={handleSearchChange} />
          </form>
        </div>

        <div className="mt-[24px]">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex flex-wrap space-x-[24px] overflow-x-auto scrollbar-hide">
              {filteredConcerts.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 min-[768px]:w-[calc(25%-25px)]"
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
    </MainTemplate>
  );
}