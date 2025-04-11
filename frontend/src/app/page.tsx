import { ArtistsSection } from "@/components/organisms/home/ArtistsSection";
import { CategorySection } from "@/components/organisms/home/CategorySection";
import { HeroSection } from "@/components/organisms/home/HeroSection";
import { PopularSection } from "@/components/organisms/home/PopularSection";
import { UpcomingSection } from "@/components/organisms/home/UpcomingSection";
import { MainTemplate } from "@/template/MainTemplate";

export default function Home() {
  return (
    <div className="">
      <MainTemplate>
        <HeroSection />
        <div className="mx-[18px] min-[1440px]:mx-[108px] my-[48px]">
          <UpcomingSection />
          <PopularSection className="mt-[48px]" />
          <CategorySection className="mt-[48px]" />
          <ArtistsSection className="mt-[48px]" />
        </div>
      </MainTemplate>
    </div>
  );
}
