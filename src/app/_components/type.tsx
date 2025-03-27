import Image from "next/image";
import Label from "./label";
import Title from "./title";

export default function Type() {

  const typeData = [
    {
      label: "house",
      icon: "house-icon.svg",
    },
    {
      label: "apartment",
      icon: "apartment-icon.svg",
    },
    {
      label: "commercial",
      icon: "commercial-icon.svg",
    },
    {
      label: "student housing",
      icon: "student-housing-icon.svg",
    }
  ];

  return (
    <div className="container py-10">
      <Label>Our Properties</Label>

      <Title className="mt-3">Types of Properties</Title>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
        {typeData.map((type, i) => {
          return (
            <li key={i} className="flex items-center justify-between bg-[#F1F6FD] rounded-md px-6 py-4">
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center bg-[#DFEBFA] size-[51px] rounded-full">
                  <Image
                    height={26}
                    width={26}
                    src={type.icon}
                    alt={type.icon}
                    priority
                  />
                </div>
                <div className="text-[#3356C2] capitalize">
                  {type.label}
                </div>
              </div>
              <div>
                <Image
                  height={8}
                  width={8}
                  src="/goto-icon.svg"
                  alt="goto-icon.svg"
                  priority
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
