"use client";
import { useEffect, useRef, useState } from "react";
import { ArtisCard } from "@/components/molecules/home/ArtisCard";
import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import axios from "@/lib/axios";
import Skeleton from "@/components/atoms/sekeletonLoading";

interface Artist {
  name: string;
  image: string;
}

interface Props {
  className?: string;
}

export const ArtistsSection: React.FC<Props> = ({ className }) => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get("/artists");
        setArtists(response.data.artist);
      } catch (error) {
        console.error("Error fetching artists:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 300;
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
        <Link href="/tickets" className="text-[20px]">
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
          {loading
            ? [...Array(5)].map((_, index) => (
                <div key={index} className="flex-shrink-0">
                  <Skeleton
                    width="w-[184px]"
                    height="h-[184px]"
                    circle={true}
                  />
                </div>
              ))
            : artists.map((artist, index) => (
                <div key={index} className="flex-shrink-0">
                  <Link href={`/tickets?search=${artist.name}`}>
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
