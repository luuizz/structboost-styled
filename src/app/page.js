import HomeSectionArtDigital from "@/components/Home/ArtDigitalSection";
import HomeFrontSection from "@/components/Home/FrontSection";
import HomeHeroSection from "@/components/Home/HeroSection";
import HomeNewsletterSection from "@/components/Home/NewsletterSection";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeSectionArtDigital />
      <HomeFrontSection />
      <HomeNewsletterSection />
    </>
  );
}
