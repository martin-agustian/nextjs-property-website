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
      icon: ApartmentIcon,
    },
    {
      label: "commercial",
      icon: CommercialIcon,
    },
    {
      label: "student housing",
      icon: StudentHousingIcon,
    }
  ];

  return (
    <Section id="property-type" className="container py-10 md:py-16" animationClass="property-type">
      <Label>Our Properties</Label>

      <Title className="mt-3">Types of Properties</Title>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
        {typeData.map((type, i) => {
          return (
            <li id={`segment-${i + 1}`} key={i} className="flex items-center justify-between bg-[#F1F6FD] rounded-md px-6 py-4">
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center bg-[#DFEBFA] size-[51px] rounded-full">
                  <Image src={type.icon} alt="Property Types Icon" className="size-[26px]" />
                </div>
                <div className="text-[#3356C2] capitalize">
                  {type.label}
                </div>
              </div>

              <GotoIcon color="black" className="size-[8px]" />
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
