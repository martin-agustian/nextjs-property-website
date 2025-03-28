import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Label from "./label";
import Title from "./title";

// ** Images
import Property1Image from "../../../public/property-1.png";
import Property2Image from "../../../public/property-2.png";
import Property3Image from "../../../public/property-3.png";
import GradeImage from "../../../public/grade.png"
import MapPinIcon from "../../../public/map-pin-icon.svg"

// ** CSS
import "swiper/css";

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
  ]

  return (
    <section id="new-arrival" className="container">
      <Label>our new arrivals</Label>
      <Title className="mt-3">Discover our new arrivals</Title>

      <Swiper
        breakpoints={{
          768: {
            // width: 768,
            spaceBetween: 20,
            slidesPerView: 2.5,
          },
        }}
        spaceBetween={10}
        slidesPerView={1.1}
        className="mt-10"
      >
        {newArrivalData.map((data, i) => (
          <SwiperSlide>
            <Card key={i} data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function Card({ data }: { data: NewArrivalData }) {
  return (
    <div>
      <div className="inline-block relative h-[392px] rounded-md">
        <Image src={data.image} alt="Property Image" className="h-full w-full rounded-md" priority />

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

            <div className="flex gap-5 md:gap-0 flex-col md:flex-row md:justify-between mt-auto">
              <CardBottomLabel label="price" data={data.price} dataClass="text-[24px]" />

              <div className="flex gap-3 md:gap-5">
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
        <Image src={MapPinIcon} alt="Map Pin Icon" className="size-[16px] md:size-[20px]" />

        <div className="text-[14px] md:text-[16px] text-[#3356C2] font-inter font-[400] md:font-[500] leading-[150%]">
          {data.address}
        </div>
      </div>
    </div>
  );
}

function CardBottomLabel({
  className, label, labelClass, data, dataClass 
} : { 
  className?: string, label: string, labelClass?: string, data: any, dataClass?: string
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
