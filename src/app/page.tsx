"use client";
import { useEffect, useRef, useState } from "react";

// ** Components
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import LoadingScreen from "@/components/shared/loading-screen";
import Hero from "./_components/hero";
import About from "./_components/about";
import PropertyType from "./_components/property-type";
import NewArrival from "./_components/new-arrival";
import OurService from "./_components/our-service";
import OurTeam from "./_components/our-team";

export default function Page() {
  const latestScrollPosition = useRef<number>(0);

  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isOutsideHero, setIsOutsideHero] = useState<boolean>(false);

  useEffect(() => {
    // Disable scrolling when the component mounts
    const screen = document.getElementById("screen");

    if (screen) {
      screen.style.maxHeight = "100vh";
      screen.style.overflow = "hidden";

      document.body.scrollTo(0, 0);
      window.history.scrollRestoration = "manual";

      // After 5 seconds, enable scrolling again
      const timeout = setTimeout(() => {
        const loadingScreen = document.getElementById("loading-screen");

        if (loadingScreen) {
          loadingScreen.style.display = "none";
        }

        screen.style.maxHeight = "";
        screen.style.overflow = "auto";
      }, 5000);

      // Clean up the timeout when the component unmounts
      return () => clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      const navbar = document.getElementById("navbar");
      const heroSection = document.getElementById("hero");
      const aboutSection = document.getElementById("about");

      if (navbar && heroSection && aboutSection) {
        const navbarHeight = navbar.offsetHeight;

        const currentScrollPosition = window.scrollY;

        // Only allow scroll action if not currently scrolling
        if (isScrolling) return;

        if (currentScrollPosition < navbarHeight) {
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

        if ((aboutSection && navbar) && window.scrollY >= (aboutSection.offsetTop - navbar.offsetHeight - 1)) {
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
    <div id="screen">
      <LoadingScreen />
      <Navbar {...{isOutsideHero}}  />
      <Hero />
      <About />
      <PropertyType />
      <NewArrival />
      <OurService />
      <OurTeam />
      <Footer />
    </div>
  );
}
