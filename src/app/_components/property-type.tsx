import Image from "next/image";
import Label from "@/components/ui/label";
import Title from "@/components/ui/title";
import GotoIcon from "@/components/icons/goto-icon";

import HouseIcon from "@/assets/icons/house-icon.svg";
import ApartmentIcon from "@/assets/icons/apartment-icon.svg";
import CommercialIcon from "@/assets/icons/commercial-icon.svg";
import StudentHousingIcon from "@/assets/icons/student-housing-icon.svg";
import Section from "@/components/ui/section";

export default function PropertyType() {

  const typeData = [
    {
      label: "house",
      icon: HouseIcon,
    },
    {
      label: "apartment",
      label2: "flat",
      icon: ApartmentIcon,
    },
    {
      label: "commercial",
      label2: "business",
      icon: CommercialIcon,
    },
    {
      label: "student housing",
      icon: StudentHousingIcon,
    }
  ];

  return (
    <Section id="property-type" className="container" animationClass="property-type">
      <Label>Our Properties</Label>
      <Title>Types of Properties</Title>

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-[14px] mt-[32px] lg:mt-[56px]">
        {typeData.map((type, i) => {
          return (
            <li id={`segment-${i + 1}`} key={i} className="opacity-0 flex gap-[20px] items-center justify-between bg-alice-blue border border-alice-blue rounded-md cursor-pointer hover:border-mariner px-[16px] py-[20px] md:p-[26px] xl:p-[32px]">
              <div className="flex items-center gap-[20px]">
                <div className="flex items-center justify-center min-h-[52px] min-w-[52px] md:min-h-[61px] md:min-w-[61px] xl:min-h-[71px] xl:min-w-[71px] bg-lavender-mist rounded-full">
                  <Image src={type.icon} alt="Property Types Icon" className="size-[24px] md:size-[28px] xl:size-[32px]" />
                </div>

                <div className="text-[24px] xl:text-[28px] font-manrope font-[600] text-crulean-blue leading-[120%] capitalize">
                  <span className="hidden xl:block">
                    {type.label}
                  </span>

                  <span className="block xl:hidden">
                    {type.label2 ?? type.label}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center min-h-[48px] min-w-[48px] lg:min-w-[56px]">
                <div className="flex items-center justify-center min-h-[24px] min-w-[24px]">
                  <GotoIcon color="black" className="min-h-[10px] h-[10px] min-w-[10px] w-[10px]" />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
