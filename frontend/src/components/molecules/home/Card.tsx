import Image from "next/image";
import Link from "next/link";

interface ICard {
  image: string;
  title: string;
  location: string;
  date: string;
  time: string;
  event: string;
}

export const Card: React.FC<ICard> = ({
  event,
  image,
  title,
  location,
  date,
  time,
}) => {
  return (
    <div className="w-full h-full rounded-3xl overflow-hidden hover:scale-110 shadow-sm hover:shadow-2xl duration-400 ease-in-out">
      <Link href={`/concert/${event}`}>
        <Image
          width={288}
          height={290}
          src={image}
          alt="Sunset in the mountains"
          className="w-[242px] md:w-full h-[calc(50%-10px)] min-[1440px]:h-[calc(70%-20px)] shadow-xl object-cover"
        />
        <div className="mt-[10px] pb-[10px] space-y-[8px] flex flex-col items-center">
          <div className="font-bold text-[20px]">{title}</div>
          <p className="text-gray-700 text-base">{location}</p>
          <p className="text-gray-700 text-base">
            {date} <span>{` ${time}`}</span>
          </p>
        </div>
      </Link> 
    </div>
  );
};
