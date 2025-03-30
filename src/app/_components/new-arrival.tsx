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
  ];

  const swiperRef = useRef<SwiperClass>(null);
  
  const SwiperButton = ({ className, iconClassName, onClick } : { className: string, iconClassName: string, onClick?: MouseEventHandler }) => {
    return (
      <button className={`absolute top-[176px] z-10 hidden lg:flex items-center justify-center size-[48px] bg-[#5185E0] rounded-full cursor-pointer ${className}`} onClick={onClick}>
        <ArrowIcon color="white" className={`size-[16px] md:size-[20px] ${iconClassName}`} />
      </button>
    )
  };

  const DiscoverAllButton = ({ id, dotId, className } : { id?: string, dotId?: string, className?: string }) => {
    return (
      <ButtonPill id={id} dotId={dotId} className={`h-[48px] border-[1.5px] border-[#C6DBF7] ${className}`} dotClassName="bg-[#3356C2]">
        Discover all our properties
      </ButtonPill>
    )
  }

  return (
    <Section id="new-arrival" className="container py-10" animationClass="new-arrival">
      <Label>our new arrivals</Label>
      
      <div className="flex items-center justify-between mt-3">
        <Title>Discover our new arrivals</Title>
        <DiscoverAllButton id="segment-1" dotId="segment-1-1" className="hidden lg:flex" />
      </div>

      <div id="segment-2" className="relative">
        <Swiper
          className="relative mt-10"
          onInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            768: {
              spaceBetween: 15,
              slidesPerView: 1.7,
            },
            1024: {
              spaceBetween: 15,
              slidesPerView: 1.9,
            },
            1280: {
              spaceBetween: 15,
              slidesPerView: 2.3,
            },
          }}
          spaceBetween={10}
          slidesPerView={1.1}
          modules={[Autoplay]}
          autoplay={{ 
            delay: 3000, 
            disableOnInteraction: true 
          }}
          loop={true}
        >
          {newArrivalData.map((data, i) => (
            <SwiperSlide key={i}>
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
          className="right-[-20px] swiper-nav-next pl-1" 
          iconClassName="rotate-90" 
          onClick={() => { swiperRef.current?.slideNext(); }} 
        />
      </div>

      <DiscoverAllButton className="flex lg:hidden mx-auto mt-10" />
    </Section>
  );
}

function Card({ data }: { data: NewArrivalData }) {
  return (
    <>
      <div className="inline-block relative h-[352px] w-full rounded-md">
        <Image src={data.image} alt="Property Image" className="h-full w-full object-cover rounded-md" priority />

        <div className="absolute inset-0 z-20 bg-linear-to-b from-[#1E284D00] to-[#1E284D99] rounded-md" />

        <div className="absolute inset-0 z-30">
          <div className="flex flex-col h-full p-4">
            <div className="flex justify-between">
              <div className="h-[34px] w-[88px] flex items-center justify-center bg-[#FFFFFF1A] rounded-full">
                <div className="text-[12px] text-white font-manrope font-[800] leading-[150%] tracking-[5%] uppercase">
                  for {data.type}
                </div>
              </div>

              <Image src={GradeImage} alt="Grade" className="h-[26px] w-[92px]" />
            </div>

            <div className="flex gap-5 lg:gap-0 flex-col lg:flex-row lg:justify-between mt-auto">
              <CardBottomLabel label="price" data={data.price} dataClass="text-[24px]" />

              <div className="flex gap-3 lg:gap-5">
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

      <div className="text-[12px] text-[#3C6AD4] font-manrope font-[800] leading-[150%] tracking-[5%] uppercase mt-3">
        for {data.type}
      </div>

      <div className="text-[24px] font-manrope font-[500] leading-[120%]">
        {data.title}
      </div>

      <div className="flex gap-2 items-start mt-3">
        <MapPinIcon color="#3356C2" className="size-[16px] md:size-[20px] mt-[2px]" />

        <div className="text-[14px] md:text-[16px] text-[#3356C2] font-inter font-[400] md:font-[500] leading-[150%]">
          {data.address}
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
    <div className={`flex flex-col gap-3 ${className}`}>
      <div className={`text-[12px] text-[#C6DBF7] font-manrope font-[800] leading-[150%] tracking-[5%] uppercase ${labelClass}`}>
        {label}
      </div>
      <div className={`text-[16px] text-white font-inter font-[600] leading-[90%] ${dataClass}`}>
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
