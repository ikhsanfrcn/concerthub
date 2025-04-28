"use client";
import { useEffect, useRef, useState } from "react";
import { ArtisCard } from "@/components/molecules/home/ArtisCard";
import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import axios from "@/lib/axios";

interface Artist {
  name: string;
  image: string;
}

interface Props {
  className?: string;
}

export const ArtistsSection: React.FC<Props> = ({ className }) => {
  const [artists, setArtists] = useState<Artist[]>([]); // State to store artists
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fetch artist data from the API
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get("/artists"); // Assume your API has an endpoint for artists
        setArtists(response.data.artist); // Assuming the API returns an array of artists
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    fetchArtists();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 300; // pixels to scroll
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={`${className}`}>
      <div className="flex justify-between">
        <p className="text-[26px]">Artists</p>
        <Link href="/artists" className="text-[20px]">
          See All
        </Link>
      </div>

      <div className="relative mt-[24px]">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hidden md:block"
        >
          <FaAngleLeft className="text-[48px]" />
        </button>

        {/* Scrollable list */}
        <div
          ref={scrollRef}
          className="flex justify-center flex-nowrap overflow-x-auto space-x-[24px] scrollbar-hide scroll-smooth"
        >
          {artists.map((artist, index) => (
            <div key={index} className="flex-shrink-0">
              <Link href={`/tickets?artist=${artist.name}`}>
                <ArtisCard image={artist.image} />
              </Link>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hidden md:block"
        >
          <FaAngleRight className="text-[48px]" />
        </button>
      </div>
    </section>
  );
};
