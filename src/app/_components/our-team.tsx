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
    <Section id="our-team" className="bg-alice-blue" animationClass="our-team">
      <div className="container">
        <Label>
          <span className="hidden md:block">our team</span>
          <span className="block md:hidden">the team</span>
        </Label>

        <Title>Meet our team of experts</Title>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] lg:gap-[20px] mt-[32px] lg:mt-[56px]">
          {ourTeamData.map((data, i) => {
            return (
              <div id={`segment-${i + 1}`} key={i} className="opacity-0 flex flex-col gap-[20px] xl:gap-[28px] rounded-md cursor-default">
                <Image src={data.image} alt="Profile Image" className="h-[256px] md:h-[323px] xl:h-[413px] w-full object-cover rounded-md" />

                <div className="flex flex-col gap-[10px] xl:gap-[24px]">
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[20px] lg:text-[24px] text-mirage font-manrope font-[500] leading-[120%]">
                      {data.name}
                    </div>
                    <div className="text-[12px] text-mariner font-manrope font-[800] leading-[150%] tracking-[5%] uppercase">
                      {data.title}
                    </div>
                  </div>
                  <div className="flex gap-[4px] items-center cursor-pointer" onClick={() => window.open(`mailto:${data.email}`)}>
                    <div className="flex items-center justify-center size-[24px]">
                      <EmailIcon color="#3C69D4" className="size-[16px]" />
                    </div>

                    <div className="text-[16px] text-pickled-bluewood font-[400] leading-[150%]">
                      {data.email}
                    </div>
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
