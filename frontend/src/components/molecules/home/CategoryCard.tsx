import Image from "next/image";

interface MCProps {
  image: string;
  name: string;
}

export const CategoryCard: React.FC<MCProps> = ({ image, name }) => {
  return (
    <>
      <div className="relative rounded-2xl w-full h-full hover:scale-110 hover:shadow-2xl duration-400 ease-in-out">
        <Image
          src={image}
          width={0}
          height={0}
          sizes="100"
          alt=""
          className="w-[156px] md:w-full h-[calc(100%)] rounded-2xl"
        />
        <p className="absolute bottom-0 w-full text-center py-[14px] text-[26px] bg-black/50 text-white rounded-b-2xl">
          {name}
        </p>
      </div>
    </>
  );
};
