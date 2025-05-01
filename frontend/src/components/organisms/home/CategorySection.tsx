'use client'
import Link from "next/link";
import { CategoryCard } from "@/components/molecules/home/CategoryCard";
import { useEffect, useState } from "react";
import Skeleton from "@/components/atoms/sekeletonLoading";

const dataDummy = [
  {
    image: "/folk.jpg",
    name: "Folk",
  },
  {
    image: "/classic.jpg",
    name: "Classic",
  },
  {
    image: "/pop.webp",
    name: "Pop",
  },
  {
    image: "/jazz.webp",
    name: "Jazz",
  },
  {
    image: "/rock.jpeg",
    name: "Rock",
  },
];

interface Props {
  className?: string;
}

export const CategorySection: React.FC<Props> = ({ className }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={`${className}`}>
      <div className="flex justify-between">
        <p className="text-[26px]">Category</p>
        <Link href={"#"} className="text-[20px]">
          See All
        </Link>
      </div>

      <div className="mt-[24px]">
        <div className="flex flex-nowrap space-x-[24px] max-[768px]:overflow-x-auto scrollbar-hide">
          {loading ? (
            [...Array(5)].map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 min-[768px]:w-[calc(20%-20px)]"
              >
                <Skeleton width="w-[231px]" height="h-[200px]" />
                <Skeleton width="w-[156px]" height="h-[20px]" />
              </div>
            ))
          ) : (
            dataDummy.slice(0, 5).map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 min-[768px]:w-[calc(20%-20px)]"
              >
                <Link href={`/tickets?search=${item.name}`}>
                  <CategoryCard image={item.image} name={item.name} />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
