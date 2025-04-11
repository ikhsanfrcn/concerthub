import Image from "next/image";

export const HeroImage: React.FC = () => {
  return (
    <>
      <Image src={"/banner.png"} width={624} height={705} alt="" className="object-fill" />
    </>
  );
};
