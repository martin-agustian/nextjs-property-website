import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// ** Components
import Image from "next/image";
import ArrowIcon from "@/components/icons/arrow-icon";
import MapPinIcon from "@/components/icons/map-pin-icon";
import ButtonPill from "@/components/ui/button-pill";
import Label from "@/components/ui/label";
import Title from "@/components/ui/title";
import Section from "@/components/ui/section";

// ** Images
import Property1Image from "@/assets/images/property-1.png";
import Property2Image from "@/assets/images/property-2.png";
import Property3Image from "@/assets/images/property-3.png";
import GradeImage from "@/assets/images/grade.png";

// ** CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ** Types
import type { StaticImageData } from "next/image";
import type { SwiperClass } from "swiper/react";
import type { MouseEventHandler } from "react";

type NewArrivalData = {
  type: string
  image: StaticImageData
  title: string
  address: string
  price: string
  area: string
  bedroom: number
  bathroom: number
}

export default function NewArrival() {

  const newArrivalData: NewArrivalData[] = [
    {
      type: "sale",
      image: Property1Image,
      title: "Modern apartment",
      address: "457 Avenue des Arts, 1000, Brussels",
      price: "€280,650",
      area: "80m²",
      bedroom: 1,
      bathroom: 1,
    },
    {
      type: "rent",
      image: Property2Image,
      title: "35m² studio",
      address: "47 Avenue des Tulipes, 1000, Brussels",
      price: "€550/month",
      area: "35m²",
      bedroom: 1,
      bathroom: 1,
    },
    {
      type: "sale",
      image: Property3Image,
      title: "Family apartment",
      address: "47 Avenue des Tulipes, 1000, Brussels",
      price: "€450,000",
      area: "80m²",
      bedroom: 1,
      bathroom: 1,
    },
    {
      type: "rent",
      image: Property2Image,
      title: "35m² studio",
      address: "47 Avenue des Tulipes, 1000, Brussels",
      price: "€550/month",
      area: "35m²",
      bedroom: 1,
      bathroom: 1,
    },
  ];

  const swiperRef = useRef<SwiperClass>(null);
  
  const SwiperButton = ({ className, iconClassName, onClick } : { className: string, iconClassName: string, onClick?: MouseEventHandler }) => {
    return (
      <button className={`absolute top-[176px] z-10 hidden lg:flex items-center justify-center size-[48px] bg-dark-sky-blue rounded-full cursor-pointer ${className}`} onClick={onClick}>
        <ArrowIcon color="white" className={`size-[16px] md:size-[20px] ${iconClassName}`} />
      </button>
    )
  };

  const DiscoverAllButton = ({ id, dotId, className } : { id?: string, dotId?: string, className?: string }) => {
    return (
      <ButtonPill id={id} dotId={dotId} className={`opacity-0 h-[44px] md:h-[48px] text-crulean-blue border-[1.5px] border-tropical-blue !pl-[18px] !pr-[20px] ${className}`} dotClassName="!bg-crulean-blue">
        Discover all our properties
      </ButtonPill>
    )
  }

  return (
    <Section id="new-arrival" animationClass="new-arrival">
      <div className="container">
        <Label>our new arrivals</Label>
        
        <div className="flex items-center justify-between">
          <Title>Discover our new arrivals</Title>
          <DiscoverAllButton id="segment-1" dotId="segment-1-1" className="hidden lg:flex" />
        </div>
      </div>

      <div id="segment-2" className="container opacity-0 pr-0 mt-[32px] lg:mt-[56px]">
        <div className="relative">
          <Swiper
            className="relative"
            onInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              389: {
                spaceBetween: 20,
                slidesPerView: 1.1,
              },
              768: {
                spaceBetween: 15,
                slidesPerView: 1.7,
              },
              1024: {
                spaceBetween: 15,
                slidesPerView: 2.1,
              },
              1280: {
                spaceBetween: 15,
                slidesPerView: 2.3,
              },
              1440: {
                spaceBetween: 20,
                slidesPerView: 2.2,
              },
            }}
            spaceBetween={10}
            slidesPerView={1.1}
            // modules={[Autoplay]}
            // autoplay={{ 
            //   delay: 0, 
            //   disableOnInteraction: true 
            // }}
            loop={true}
          >
            {newArrivalData.map((data, i) => (
              <SwiperSlide key={i} className="min-[390px]:min-w-[344px] max-w-[617px] cursor-pointer">
                <Card data={data} />
              </SwiperSlide>
            ))}
          </Swiper>

          <SwiperButton 
            className="left-[-20px] swiper-nav-prev pr-1" 
            iconClassName="rotate-270" 
            onClick={() => { swiperRef.current?.slidePrev(); }} 
          />
          <SwiperButton 
            className="right-[8px] xl:right-[20px] swiper-nav-next pl-1" 
            iconClassName="rotate-90" 
            onClick={() => { swiperRef.current?.slideNext(); }} 
          />
        </div>
      </div>

      <div className="container">
        <DiscoverAllButton id="segment-1" dotId="segment-1-1" className="flex lg:hidden mx-auto mt-[56px]" />
      </div>
    </Section>
  );
}

function Card({ data }: { data: NewArrivalData }) {
  return (
    <>
      <div className="inline-block relative h-[361px] lg:h-[392px] w-full rounded-md">
        <Image src={data.image} alt="Property Image" className="h-full w-full object-cover rounded-md" priority />

        <div className="absolute inset-0 z-20 linear-gradient rounded-md" />

        <div className="absolute inset-0 z-30">
          <div className="flex flex-col h-full p-[20px] min-[390px]:p-[24px]">
            <div className="flex justify-between">
              <div className="h-[34px] w-[88px] flex items-center justify-center bg-[##FFFFFF1A] backdrop-blur-[16px] rounded-full">
                <div className="text-[12px] text-white font-manrope font-[800] leading-[150%] tracking-[5%] uppercase">
                  for {data.type}
                </div>
              </div>

              <Image src={GradeImage} alt="Grade" className="h-[26px] w-[92.7px]" />
            </div>

            <div className="flex gap-[24px] xl:gap-0 flex-col xl:flex-row lg:justify-between mt-auto">
              <CardBottomLabel label="price" data={data.price} dataClass="text-[24px] font-manrope leading-[120%]" />

              <div className="flex gap-[12px] min-[390px]:gap-[24px]">
                <CardBottomLabel label="area" data={data.area} />
                <CardBottomDivider />
                <CardBottomLabel label="bedrooms" data={data.bedroom} />                
                <CardBottomDivider />                
                <CardBottomLabel label="bathrooms" data={data.bathroom} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[15.5px] lg:gap-[20px] p-[15px] min-[390px]:p-[24px] pb-0">
        <div className="flex flex-col gap-[2px]">
          <div className="text-[12px] text-mariner font-manrope font-[800] leading-[150%] tracking-[5%] uppercase">
            for {data.type}
          </div>

          <div className="text-[20px] md:text-[24px] font-manrope font-[500] leading-[120%]">
            {data.title}
          </div>
        </div>

        <div className="flex gap-[8px] items-start">
          <MapPinIcon color="#3356C2" className="size-[16px] md:size-[20px] mt-[2px]" />

          <div className="text-[14px] md:text-[16px] text-crulean-blue font-[400] md:font-[500] leading-[150%]">
            {data.address}
          </div>
        </div>
      </div>
    </>
  );
}

function CardBottomLabel({
  className, label, labelClass, data, dataClass 
} : { 
  className?: string, label: string, labelClass?: string, data: number | string, dataClass?: string
}) {

  return (
    <div className={`flex flex-col gap-[6px] ${className}`}>
      <div className={`text-[12px] text-tropical-blue font-manrope font-[800] leading-[150%] tracking-[5%] uppercase ${labelClass}`}>
        {label}
      </div>
      <div className={`text-[16px] text-white font-[600] leading-[150%] ${dataClass}`}>
        {data}
      </div>
    </div>
  );
}

function CardBottomDivider() {
  return (
    <div className="h-full w-[1px] bg-[#FFFFFF33]" />
  );
}
