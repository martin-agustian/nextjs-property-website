import About from "./_components/about";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import NewArrival from "./_components/new-arrival";
import Type from "./_components/type";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Type />
      <NewArrival />
    </>
  );
}
