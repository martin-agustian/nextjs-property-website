"use client"
import { useEffect, useState } from "react";

import About from "./_components/about";
import Footer from "./_components/footer";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import NewArrival from "./_components/new-arrival";
import OurTeam from "./_components/our-team";
import Service from "./_components/service";
import Type from "./_components/type";

export default function Home() {
  const [isOutsideHero, setIsOutsideHero] = useState(false);

  const checkScroll = () => {
    const heroSection = document.getElementById("hero");
    const scrollPosition = window.scrollY;

    if (heroSection) {
      const heroHeight = heroSection.offsetHeight;

      if (scrollPosition > heroHeight) {
        setIsOutsideHero(true);
      } else {
        setIsOutsideHero(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    checkScroll();

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <>
      <Navbar {...{isOutsideHero}}  />
      <Hero />
      <About />
      <Type />
      <NewArrival />
      <Service />
      <OurTeam />
      <Footer />
    </>
  );
}
