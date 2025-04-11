import Image from "next/image";

interface ICard{
    image: string;
    name: string;
    location: string;
    dateTime: string;
}

export const Card: React.FC<ICard> = ( {image, name, location, dateTime} ) => {
    return (
        <div className="rounded-3xl overflow-hidden border border-gray-300">
            <Image
                width={288}
                height={290}
                src={image}
                alt="Sunset in the mountains"
                className="w-[242px] md:w-full shadow-2xl rounded-xl"
            />
            <div className="pb-[10px] space-y-[8px] flex flex-col items-center">
                <div className="font-bold text-xl">{name}</div>
                <p className="text-gray-700 text-base">{location}</p>
                <p className="text-gray-700 text-base">{dateTime}</p>
            </div>
        </div>
    );
};
