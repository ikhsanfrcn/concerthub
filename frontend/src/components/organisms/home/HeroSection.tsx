'use client'
import { useState } from "react";
import { SearchBox } from "@/components/atoms/SearchBox";
import { HeroContent } from "@/components/molecules/home/HeroContent";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const HeroSection: React.FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(""); 

 
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleTagClick = (tag: string) => {
    router.push(`/tickets?search=${tag}`); 
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/tickets?search=${searchTerm}`); 
  };

  return (
    <section className="hidden min-[1440px]:block relative mt-[96px]">
      <div className="ml-[108px]">
        <HeroContent />
      </div>
      <div className="relative z-[0] mt-[48px] bg-neutral-700 h-[256px]">
        <div className="flex flex-col pl-[108px] pt-[32px] space-y-[16px] text-white">
          <p className="text-[20px] text-neutral-200">Find your favorite concert</p>
          <form onSubmit={handleSearchSubmit}> 
            <SearchBox
              value={searchTerm}
              onChange={handleSearchChange} 
            />
          </form>
          <ul className="flex gap-[8px]">
            <li
              className="py-[8px] px-[12px] bg-neutral-500 rounded-full cursor-pointer"
              onClick={() => handleTagClick('adele')}
            >
              #Adele
            </li>
            <li
              className="py-[8px] px-[12px] bg-neutral-500 rounded-full cursor-pointer"
              onClick={() => handleTagClick('new york')}
            >
              #New York
            </li>
            <li
              className="py-[8px] px-[12px] bg-neutral-500 rounded-full cursor-pointer"
              onClick={() => handleTagClick('taylor swift')}
            >
              #Taylor Swift
            </li>
            <li
              className="py-[8px] px-[12px] bg-neutral-500 rounded-full cursor-pointer"
              onClick={() => handleTagClick('pop')}
            >
              #Pop
            </li>
          </ul>
        </div>
      </div>
      <Image
        src={"/banner.png"}
        width={624}
        height={705}
        alt=""
        className="absolute z-[1] right-[108px] bottom-0 object-fill"
      />
    </section>
  );
};
