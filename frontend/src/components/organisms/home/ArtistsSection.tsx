"use client";
import { useRef } from "react";
import { ArtisCard } from "@/components/molecules/home/ArtisCard";
import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const dataDummy = [
    {
        image: "/pink.png"
    },
    {
        image: "/adele.png"
    },
    {
        image: "/taylorswift.png"
    },
    {
        image: "/harrystyle.png"
    },
    {
        image: "/rihanna.png"
    },
    {
        image: "/selenagomez.png"
    },
    {
        image: "/drake.png"
    }
]

interface Props {
  className?: string;
}

export const ArtistsSection: React.FC<Props> = ({ className }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
        <Link href={"#"} className="text-[20px]">
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
          className="flex justify-center flex-nowrap overflow-x-auto space-x-[24px] scrollbar-hide scroll-smooth">
          {dataDummy.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <ArtisCard image={item.image} />
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
