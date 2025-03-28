import Image from "next/image";
import Label from "./label";
import Title from "./title";
import { ReactNode } from "react";

export default function Service() {
  return (
    <div className="container py-10">
      <Label>Our Properties</Label>
      <Title className="mt-3">Real estate services tailored to every need</Title>

      <div className="flex flex-col gap-10 mt-10">
        <ServiceAccordion number="01" name="sales">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="min-w-[216px] md:min-h-[230px]">
              <Image
                height={230}
                width={216}
                src="/building.png"
                alt="building.png"
                className="rounded-md"
                priority
              />
            </div>
            <div className="text-[14px] text-[#334155] font-inter font-[400] leading-[150%]">
              Our agency offers you a comprehensive and diverse range of services, 
              carefully tailored to each stage of your real estate project. 
              Whether you are a buyer, seller, tenant, investor, or simply seeking informed advice, 
              our team of experts is here to support you personally and meet your specific needs.
            </div>
          </div>
        </ServiceAccordion>

        <ServiceAccordion number="02" name="property management" />
        <ServiceAccordion number="03" name="valuation" />
        <ServiceAccordion number="04" name="legal advice" />
      </div>
    </div>
  );
}

function ServiceAccordion({
  number, name, children
} : {
  number: string, name: string, children?: ReactNode
}) {
  return (
    <>
      <div className="flex items-start gap-8">
        <div className="flex-1 flex items-center gap-3">
          <div className="flex-1 text-[12px] text-[#475569] font-manrope font-[800] leading-[150%] tracking-[5%] uppercase">
            {number}
          </div>
          <div className="flex-1 text-[24px] text-[#3356C2] font-manrope font-[500] leading-[120%] capitalize">
            {name}
          </div>
        </div>
        <div className="flex-2 hidden md:block">
          {children}
        </div>
        <button className="flex items-center justify-center bg-[#3C69D4] size-[40px] min-w-[40px] rounded-full">
          <Image
            height={12}
            width={16}
            src="/arrow-icon.svg"
            alt="arrow-icon.svg"
            priority
          />
        </button>
      </div>

      <div className="flex-2 block md:hidden">
        {children}
      </div>
    </>
  )
}
