import About from "./_components/about";
import Footer from "./_components/footer";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import NewArrival from "./_components/new-arrival";
import OurTeam from "./_components/our-team";
import Service from "./_components/service";
import Type from "./_components/type";

export default function Home() {
  return (
    <>
      <Navbar />
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
