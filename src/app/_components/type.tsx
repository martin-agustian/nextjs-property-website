import Image from "next/image";
import Label from "./label";
import Title from "./title";

import GotoIcon from "../../../public/goto-icon.svg";
import HouseIcon from "../../../public/house-icon.svg";
import ApartmentIcon from "../../../public/apartment-icon.svg";
import CommercialIcon from "../../../public/commercial-icon.svg";
import StudentHousingIcon from "../../../public/student-housing-icon.svg";

export default function Type() {

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
    <section className="container py-10">
      <Label>Our Properties</Label>

      <Title className="mt-3">Types of Properties</Title>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
        {typeData.map((type, i) => {
          return (
            <li key={i} className="flex items-center justify-between bg-[#F1F6FD] rounded-md px-6 py-4">
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center bg-[#DFEBFA] size-[51px] rounded-full">
                  <Image src={type.icon} alt="Property Types Icon" className="size-[26px]" />
                </div>
                <div className="text-[#3356C2] capitalize">
                  {type.label}
                </div>
              </div>
              <div>
                <Image src={GotoIcon} alt="Go to Icon" className="size-[8px]" />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
