import Image from "next/image";
import Label from "./label";
import Title from "./title";

import Profile1Image from "../../../public/profile-1.png";
import Profile2Image from "../../../public/profile-2.png";
import Profile3Image from "../../../public/profile-3.png";
import EmailIcon from "../../../public/email-icon.svg";

export default function OurTeam() {

  const ourTeamData = [
    {
      image: Profile1Image,
      name: "Marie Dupont",
      title: "Founder and Managing Director",
      email: "marie@email.dwell",
    },
    {
      image: Profile2Image,
      name: "Julien Thomas",
      title: "Property Valuation Expert",
      email: "julien@email.dwell",
    },
    {
      image: Profile3Image,
      name: "Sophie Dupont",
      title: "Agency Director",
      email: "sophie@email.dwell",
    },
  ]

  return (
    <section className="bg-[#F1F6FD] py-10">
      <div className="container">
        <Label>our team</Label>
        <Title className="mt-3">Meet our team of experts</Title>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {ourTeamData.map((data, i) => {
            return (
              <div key={i} className="flex flex-col gap-5">
                <Image src={data.image} alt="Profile Image" className="w-full object-cover rounded-md" />

                <div className="flex flex-col gap-2">
                  <div className="text-[24px] text-[#0F172A] font-manrope font-[500] leading-[120%]">
                    {data.name}
                  </div>
                  <div className="text-[12px] text-[#3C6AD4] font-manrope font-[800] leading-[150%] tracking-[5%] uppercase">
                    {data.title}
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <Image src={EmailIcon} alt="Email Icon" className="size-[16px] rounded-md" />

                  <div className="text-[16px] text-[#334155] font-inter font-[400] leading-[150%] tracking-[5%]">
                    {data.email}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
