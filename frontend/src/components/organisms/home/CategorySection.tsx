import Link from "next/link";
import { CategoryCard } from "@/components/molecules/home/CategoryCard";

const dataDummy = [
  {
    image: "/zachbryan.png",
    name: "Folk",
  },
  {
    image: "/classic.jpg",
    name: "Classic",
  },
  {
    image: "/zachbryan.png",
    name: "Pop",
  },
  {
    image: "/zachbryan.png",
    name: "Jazz",
  },
  {
    image: "/zachbryan.png",
    name: "Rock",
  },
  {
    image: "/zachbryan.png",
    name: "Metal",
  },
  {
    image: "/zachbryan.png",
    name: "Pop Punk",
  },
];

interface Props {
  className?: string;
}

export const CategorySection: React.FC<Props> = ({ className }) => {
  return (
    <section className={`${className}`}>
      <div className="flex justify-between">
        <p className="text-[26px]">Category</p>
        <Link href={"#"} className="text-[20px]">
          See All
        </Link>
      </div>

      <div className="mt-[24px]">
        <div className="flex flex-nowrap space-x-[24px] overflow-x-auto scrollbar-hide">
          {dataDummy.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 min-[768px]:w-[calc(20%-20px)]"
            >
              <CategoryCard image={item.image} name={item.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
