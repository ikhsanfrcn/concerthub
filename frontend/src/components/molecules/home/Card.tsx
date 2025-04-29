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
    <Link href={`/concert/${event}`} className="rounded-3xl overflow-hidden">
      <Image
        width={288}
        height={290}
        src={image}
        alt="Sunset in the mountains"
        className="w-[242px] md:w-full h-[calc(50%-10px)] min-[1440px]:h-[calc(70%-20px)] shadow-2xl rounded-xl object-cover"
      />
      <div className="pb-[10px] space-y-[8px] flex flex-col items-center">
        <div className="font-bold text-xl">{title}</div>
        <p className="text-gray-700 text-base">{location}</p>
        <p className="text-gray-700 text-base">
          {date} <span>{` ${time}`}</span>
        </p>
      </div>
    </Link>
  );
};
