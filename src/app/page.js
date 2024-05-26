"use client"
import HomeSectionArtDigital from "@/components/Home/ArtDigitalSection";
import HomeFrontSection from "@/components/Home/FrontSection";
import HomeHeroSection from "@/components/Home/HeroSection";
import HomeNewsletterSection from "@/components/Home/NewsletterSection";
import Preload from "@/components/Preload";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { usePreload } from "./context/PreloadContext";

export default function Home() {

  const { isLoading, setIsLoading } = usePreload();

  useEffect(() => {
    (
      async () => {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          document.body.style.overflow = 'auto'
          window.scrollTo(0,0);
        }, 2000)
      }
    )()
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preload />}
      </AnimatePresence>
      <HomeHeroSection />
      <HomeSectionArtDigital />
      <HomeFrontSection />
      <HomeNewsletterSection />
    </>
  );
}
