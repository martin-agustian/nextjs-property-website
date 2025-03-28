import Image from "next/image";

import HeroImage from "../../../public/hero.png";

export default function Hero() {
  const sectionHeroData = [
    {
      title: "Transparency",
      description: "We keep you informed at every stage of your project and about all the options available to you, so you can make informed decisions."
    },
    {
      title: "Integrity",
      description: "Integrity is at the heart of our business. We always act with honesty and fairness, whether in our assessments, negotiations, or advice."
    },
    {
      title: "Proximity",
      description: "Being close to our clients, understanding their needs, and supporting them attentively is essential for the success of their projects."
    },
  ];

  return (
    <section id="hero" className="relative h-screen w-full max-w-full overflow-x-hidden">
      <Image src={HeroImage} alt="Hero Image" layout="fill" className="object-cover" priority />

      <div className="absolute inset-0 z-10 bg-[#00000080]" />
      
      <div className="absolute inset-0 z-20 bg-linear-to-b from-[#1E284D00] to-[#1E284D99]" />
      
      <div className="absolute inset-0 z-30 text-white">
        <div className="container min-h-screen flex flex-col py-10">
          <div className="font-manrope text-[48px] md:text-[80px] font-[700] leading-[110%] mt-auto">
            Find your next <br /> property <span className="text-[#72A5E8]">with us</span>
          </div>
          <div className="flex gap-6 overflow-x-auto md:w-[80%] ml-auto mt-auto">
            {sectionHeroData.map((data, i) => {
              return (
                <div key={i} className="min-w-fit md:min-w-auto border-t border-[#FFFFFF33] pt-3">
                  <div className="font-manrope text-[20px] md:text-[24px] font-[500]">
                    {data.title}
                  </div>
                  <div className="text-[14px]">
                    {data.description}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
