import { useState } from "react";

import Image from "next/image";
import Label from "@/components/ui/label";
import Title from "@/components/ui/title";
import Section from "@/components/ui/section";
import ArrowIcon from "@/components/icons/arrow-icon";

import BuildingImage from "@/assets/images/building.png";

// ** Types
import type { MouseEventHandler, ReactNode } from "react";

export default function OurService() {
  const serviceData = ["sales", "property management", "valuation", "legal advice"];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <Section id="our-service" className="container py-10" animationClass="our-service">
      <Label>Our Services</Label>
      <Title className="mt-3">Real estate services tailored to every need</Title>

      <div className="flex flex-col mt-10">
        {serviceData.map((data, i) => (
          <ServiceAccordion 
            id={`segment-${i + 1}`} key={i} 
            className="opacity-0"
            isActive={activeIndex === i}
            number={(i+1).toString().padStart(2, "0")} 
            name={data} 
            onClick={() => { setActiveIndex(i) }}
          >
            {activeIndex === i && (
              <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
                <Image src={BuildingImage} alt="Building Image" className="h-[230px] w-full md:w-[216px] md:min-w-[216px] object-cover rounded-md" />
                
                <div className="text-[14px] text-[#334155] font-inter font-[400] leading-[150%]">
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
    <>
      <div id={id} className={`flex items-start gap-3 md:gap-5 lg:gap-8 border-b border-[#72A5E8] py-6 lg:px-3 lg:py-8 cursor-pointer ${className}`} onClick={onClick}>
        <div className="flex-1 flex items-center justify-start gap-3">
          <div className={`flex-none md:flex-1 lg:flex-1 text-[12px] ${isActive ? "text-[#475569]" : "text-[#CBD5E1]"} font-manrope font-[800] leading-[150%] tracking-[5%] uppercase`}>
            {number}
          </div>
          <div className={`flex-1 md:flex-2 lg:flex-3 text-[24px] ${isActive ? "text-[#3356C2]" : "text-[#94A3B8]"} font-manrope font-[500] leading-[120%] capitalize`}>
            {name}
          </div>
        </div>
        <div className="flex-[1.5] hidden md:block">
          {children}
        </div>
        <button className="flex-none flex items-center justify-center bg-[#3C69D4] size-[36px] lg:size-[40px] lg:min-w-[40px] rounded-full">
          <ArrowIcon color="white" className={`h-[12px] w-[16px] ${isActive ? "rotate-0" : "rotate-180"}`} />
        </button>
      </div>

      <div className="flex-2 block md:hidden">
        {children}
      </div>
    </>
  )
}
