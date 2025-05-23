import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import HeroImage from "@/assets/images/hero.png";
import Section from "@/components/ui/section";

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
    <Section id="hero" className="relative h-screen max-h-[1080px] w-full max-w-full overflow-x-hidden" animationClass="hero">
      <Image src={HeroImage} alt="Hero Image" className="absolute inset-0 h-full w-full object-cover" priority />

      <div className="absolute inset-0 z-10 bg-[#00000080]" />
      
      <div className="absolute inset-0 z-20 bg-linear-to-b from-[#1E284D00] to-[#1E284D99]" />
      
      <div className="absolute inset-0 z-30 text-white">
        <div className="container h-screen max-h-[1080px] flex flex-col pb-[28px] pt-[97.5px] lg:pb-[56px] lg:pt-[111px]">
          <div className="flex justify-between items-end pt-[81px] md:pt-0 xl:pt-[81px] mt-auto">
            <div id="segment-1" className="-translate-x-full font-manrope text-[48px] md:text-[60px] xl:text-[80px] font-[700] leading-[120%] xl:leading-[110%] tracking-[0%] xl:tracking-[-2%]">
              Find your next <br /> property <span className="text-dark-pastel-blue">with us</span>
            </div>
            <div id="segment-2" className="scroll transform-[translateY(-100%)] hidden lg:flex items-center gap-[6px] mb-[12px]">
              <div className="flex h-[80px]">
                <div className="w-[1px] h-[70%] bg-[#CBD5E14D]" />
                <div className="w-[1px] h-[30%] bg-alice-blue" />
              </div>
              <div className="text-[10px] text-[#F1F6FDCC] leading-[122%] tracking-[5%] uppercase rotate-[180deg]">
                scroll
              </div>
            </div>
          </div>

          <div id="segment-3" className="translate-y-full w-full xl:w-[80%] ml-auto mt-auto">
            <Swiper
              breakpoints={{
                768: {
                  spaceBetween: 15,
                  slidesPerView: 2.2,
                },
                1024: {
                  spaceBetween: 15,
                  slidesPerView: 3,
                },
                1440: {
                  spaceBetween: 24,
                  slidesPerView: 3,
                },
              }}
              wrapperClass="lg:justify-end"
              spaceBetween={15}
              slidesPerView={1.1}
            >
              {sectionHeroData.map((data, i) => (
                <SwiperSlide key={i} className={`max-w-[320px] ${i === sectionHeroData.length - 1 && "!mr-0"}`}>
                  <div key={i} className="flex flex-col gap-[12px] min-w-fit md:min-w-auto border-t border-[#FFFFFF33] pt-[20px]">
                    <div className="text-[20px] xl:text-[24px] font-manrope font-[500] leading-[120%]">
                      {data.title}
                    </div>
                    <div className="max-w-[300px] lg:max-w-[288px] text-[14px] font-[400] leading-[150%]">
                      {data.description}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Section>
  );
}
