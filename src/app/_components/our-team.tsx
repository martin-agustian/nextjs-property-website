import Image from "next/image";

import Label from "@/components/ui/label";
import Title from "@/components/ui/title";
import Section from "@/components/ui/section";
import EmailIcon from "@/components/icons/email-icon";

import Profile1Image from "@/assets/images/profile-1.png";
import Profile2Image from "@/assets/images/profile-2.png";
import Profile3Image from "@/assets/images/profile-3.png";

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
    <Section id="our-team" className="bg-alice-blue py-10" animationClass="our-team">
      <div className="container">
        <Label>our team</Label>
        <Title className="mt-3">Meet our team of experts</Title>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
          {ourTeamData.map((data, i) => {
            return (
              <div id={`segment-${i + 1}`} key={i} className="opacity-0 flex flex-col gap-4 rounded-md cursor-default p-2">
                <Image src={data.image} alt="Profile Image" className="w-full object-cover rounded-md" />

                <div className="flex flex-col gap-2">
                  <div className="text-[24px] text-mirage font-manrope font-[500] leading-[120%]">
                    {data.name}
                  </div>
                  <div className="text-[12px] text-mariner font-manrope font-[800] leading-[150%] tracking-[5%] uppercase">
                    {data.title}
                  </div>
                </div>
                <div className="flex gap-2 items-center cursor-pointer" onClick={() => window.open(`mailto:${data.email}`)}>
                  <EmailIcon color="#3C69D4" className="size-[16px] rounded-md" />

                  <div className="text-[16px] text-pickled-bluewood font-[400] leading-[150%] tracking-[5%]">
                    {data.email}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  );
}
