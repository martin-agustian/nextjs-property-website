"use client"
import { useEffect, useRef, useState } from "react";

import About from "./_components/about";
import Footer from "./_components/footer";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import NewArrival from "./_components/new-arrival";
import OurTeam from "./_components/our-team";
import OurService from "./_components/our-service";
import PropertyType from "./_components/property-type";

export default function Home() {
  const latestScrollPosition = useRef<number>(0);

  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isOutsideHero, setIsOutsideHero] = useState<boolean>(false);

  useEffect(() => {
    const checkScroll = () => {
      const navbar = document.getElementById("navbar");
      const heroSection = document.getElementById("hero");
      const aboutSection = document.getElementById("about");

      if (navbar && heroSection && aboutSection) {
        const navbarHeight = navbar.offsetHeight;
        const heroHeight = heroSection.offsetHeight;

        const currentScrollPosition = window.scrollY;

        // Only allow scroll action if not currently scrolling
        if (isScrolling) return;

        if (currentScrollPosition < (heroHeight - navbarHeight)) {
          setIsOutsideHero(false);

          if (currentScrollPosition > latestScrollPosition.current) {
            // Start scroll action and prevent further scroll actions during smooth scroll
            setIsScrolling(true);

            window.scrollTo({ 
              top: aboutSection.offsetTop - navbarHeight,
              behavior: "smooth"
            });

            setIsOutsideHero(true);
          }
        } else {
          setIsOutsideHero(true);
        }

        latestScrollPosition.current = currentScrollPosition;
      }
    };

    // Bind the scroll event to trigger the checkScroll function
    window.addEventListener('scroll', checkScroll);
    checkScroll();

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [isScrolling]);

  useEffect(() => {
    const checkScrollFinish = () => {
      if (isScrolling) {
        const navbar = document.getElementById("navbar");
        const aboutSection = document.getElementById("about");

        if (aboutSection && navbar && window.scrollY === aboutSection.offsetTop - navbar.offsetHeight) {
          setIsScrolling(false); // Scroll has finished
        }
      }
    };

    window.addEventListener('scroll', checkScrollFinish);

    return () => {
      window.removeEventListener('scroll', checkScrollFinish);
    };
  }, [isScrolling]);

  return (
    <>
      <Navbar {...{isOutsideHero}}  />
      <Hero />
      <About />
      <PropertyType />
      <NewArrival />
      <OurService />
      <OurTeam />
      <Footer />
    </>
  );
}
