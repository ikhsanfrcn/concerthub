import { SearchBox } from "@/components/atoms/SearchBox";
import { HeroContent } from "@/components/molecules/home/HeroContent";
import Image from "next/image";
// import { HeroImage } from "@/components/molecules/home/HeroImage"

export const HeroSection: React.FC = () => {
  return (
    <section className="hidden min-[1440px]:block relative mt-[96px]">
      <div className="ml-[108px]">
        <HeroContent />
      </div>
      <div className="relative -z-[2] mt-[48px] bg-neutral-700 h-[256px]">
        <div className="flex flex-col pl-[108px] pt-[32px] space-y-[16px] text-white">
          <p className="text-[20px] text-neutral-200">Find your favorite concert</p>
          <SearchBox />
          <ul className="flex gap-[8px]">
            <li className="py-[8px] px-[12px] bg-neutral-500 rounded-full">
              #Summer
            </li>
            <li className="py-[8px] px-[12px] bg-neutral-500 rounded-full">
              #Jazz
            </li>
            <li className="py-[8px] px-[12px] bg-neutral-500 rounded-full">
              #TaylorSwift
            </li>
            <li className="py-[8px] px-[12px] bg-neutral-500 rounded-full">
              #NewYork
            </li>
          </ul>
        </div>
      </div>
      <Image
        src={"/banner.png"}
        width={624}
        height={705}
        alt=""
        className="absolute -z-[1] right-[108px] bottom-0 object-fill"
      />
    </section>
  );
};
