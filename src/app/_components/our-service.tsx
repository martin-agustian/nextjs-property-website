import { useState } from "react";

import Image from "next/image";
import Label from "@/components/ui/label";
import Title from "@/components/ui/title";
import Section from "@/components/ui/section";
import ButtonPill from "@/components/ui/button-pill";
import ArrowIcon from "@/components/icons/arrow-icon";

import BuildingImage from "@/assets/images/building.png";

// ** Types
import type { MouseEventHandler, ReactNode } from "react";

export default function OurService() {
  const serviceData = ["sales", "property management", "valuation", "legal advice"];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const DiscoverAllButton = ({ id, dotId, className } : { id?: string, dotId?: string, className?: string }) => {
    return (
      <ButtonPill id={id} dotId={dotId} className={`h-[48px] md:h-[52px] w-[247px] md:w-[255px] bg-cobalt leading-[20px] ${className}`} textClassName={`text-white`}>
        Discover our services
      </ButtonPill>
    )
  }

  return (
    <Section id="our-service" className="container" animationClass="our-service">
      <Label>Our Services</Label>

      <div className="flex items-end justify-between">
        <Title>Real estate services <br/> tailored to every need</Title>
        <DiscoverAllButton id="segment-1" dotId="segment-1-1" className="opacity-0 hidden lg:flex" />
      </div>

      <div className="flex flex-col mt-0 lg:mt-[56px]">
        {serviceData.map((data, i) => (
          <ServiceAccordion 
            id={`segment-2-${i + 1}`} key={i} 
            className="opacity-0"
            isActive={activeIndex === i}
            number={(i+1).toString().padStart(2, "0")} 
            name={data} 
            onClick={() => { setActiveIndex(i) }}
          >
            {activeIndex === i && (
              <div className="flex flex-col sm:flex-row sm:gap-[32px] mb-0 sm:mb-[32px] lg:mb-0">
                <Image src={BuildingImage} alt="Building Image" className="h-[230px] w-full md:w-[216px] md:min-w-[216px] object-cover rounded-md" />
                
                <div className="text-[14px] text-pickled-bluewood font-[400] leading-[150%] py-[32px] sm:py-0">
                  Our agency offers you a comprehensive and diverse range of services, 
                  carefully tailored to each stage of your real estate project. 
                  Whether you are a buyer, seller, tenant, investor, or simply seeking informed advice, 
                  our team of experts is here to support you personally and meet your specific needs.
                </div>
              </div>
            )}
          </ServiceAccordion>
        ))}
      </div>

      <DiscoverAllButton id="segment-1" dotId="segment-1-1" className="opacity-0 flex lg:hidden mx-auto mt-[56px]" />
    </Section>
  );
}

function ServiceAccordion({
  id, className, number, name, isActive, children, onClick
} : {
  id?: string, className: string, number: string, name: string, isActive: boolean, 
  children?: ReactNode, onClick?: MouseEventHandler
}) {
  return (
    <div id={id} className={`flex flex-col border-b-2 ${isActive ? "border-dark-pastel-blue" : "border-lavender-mist"} ${className}`}>
      <div className={`flex items-center ${isActive && "lg:items-start"} lg:gap-[48px] group py-[32px] lg:p-[32px] xl:p-[40px]`} onClick={onClick}>
        <div className="flex-1 flex items-center justify-start gap-[22px] cursor-pointer">
          <div className={`flex-none lg:flex-1 text-[12px] ${isActive ? "text-river-bed" : "text-iron"} group-hover:text-river-bed font-manrope font-[800] leading-[150%] tracking-[5%] uppercase`}>
            {number}
          </div>
          <div className={`flex-1 lg:flex-3 text-[24px] ${isActive ? "text-crulean-blue" : "text-cadet-grey"} group-hover:text-crulean-blue font-manrope font-[500] leading-[120%] capitalize`}>
            {name}
          </div>
        </div>
        <div className="basis-[482px] xl:basis-[682px] hidden lg:block">
          {children}
        </div>
        <button className="flex-none flex items-center justify-center bg-mariner size-[36px] lg:size-[40px] lg:min-w-[40px] rounded-full cursor-pointer">
          <ArrowIcon color="white" className={`h-[12px] w-[16px] ${isActive ? "rotate-0" : "rotate-180"}`} />
        </button>
      </div>

      <div className="flex-2 block lg:hidden">
        {children}
      </div>
    </div>
  )
}
