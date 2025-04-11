import Link from "next/link";
import { Card } from "../../molecules/home/Card";

const dataDummy = [
  {
    image: "/jeniferlopez.png",
    name: "Jenifer Lopez",
    location: "Seattle",
    dateTime: "Dec 12, 21:00",
  },
  {
    image: "/zachbryan.png",
    name: "Zach Bryan",
    location: "Miami",
    dateTime: "Dec 08, 22:00",
  },
  {
    image: "/usher.png",
    name: "Usher",
    location: "Indonesia",
    dateTime: "Dec 04, 21:00",
  },
  {
    image: "/adele2.png",
    name: "Adele",
    location: "Indonesia",
    dateTime: "Dec 03, 20:00",
  }
];

interface Props {
  className?: string;
}

export const PopularSection: React.FC<Props> = ({ className }) => {
  return (
    <section className={`${className}`}>
      <div className="flex justify-between">
        <p className="text-[26px]">Popular</p>
        <Link href={"#"} className="text-[20px]">
          See All
        </Link>
      </div>

      <div className="mt-[24px]">
        <div className="flex flex-nowrap space-x-[24px] overflow-x-auto scrollbar-hide">
          {dataDummy.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 min-[768px]:w-[calc(25%-20px)]"
            >
              <Card
                image={item.image}
                name={item.name}
                location={item.location}
                dateTime={item.dateTime}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
