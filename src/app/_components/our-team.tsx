import Image from "next/image";
import Label from "./label";
import Title from "./title";

export default function OurTeam() {

  const ourTeamData = [
    {
      image: "/profile-1.png",
      name: "Marie Dupont",
      title: "Founder and Managing Director",
      email: "marie@email.dwell",
    },
    {
      image: "/profile-2.png",
      name: "Julien Thomas",
      title: "Property Valuation Expert",
      email: "julien@email.dwell",
    },
    {
      image: "/profile-3.png",
      name: "Sophie Dupont",
      title: "Agency Director",
      email: "sophie@email.dwell",
    },
  ]

  return (
    <div className="bg-[#F1F6FD] py-10">
      <div className="container">
        <Label>our team</Label>
        <Title className="mt-3">Meet our team of experts</Title>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {ourTeamData.map((data, i) => {
            return (
              <div key={i} className="flex flex-col gap-5">
                <div className="">
                  <Image
                    height={465}
                    width={609}
                    src={data.image}
                    alt={data.image}
                    className="rounded-md"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-[24px] text-[#0F172A] font-manrope font-[500] leading-[120%]">
                    {data.name}
                  </div>
                  <div className="text-[12px] text-[#3C6AD4] font-manrope font-[800] leading-[150%] tracking-[5%] uppercase">
                    {data.title}
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    height={16}
                    width={16}
                    src="/email-icon.svg"
                    alt="email-icon.svg"
                    className="rounded-md"
                    priority
                  />
                  <div className="text-[16px] text-[#334155] font-inter font-[400] leading-[150%] tracking-[5%]">
                    {data.email}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
