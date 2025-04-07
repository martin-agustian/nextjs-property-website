import Image from "next/image";
import Label from "@/components/ui/label";
import Title from "@/components/ui/title";
import Section from "@/components/ui/section";
import ButtonPill from "@/components/ui/button-pill";

import MeetingImage from "@/assets/images/meeting.png";

export default function About() {
  return (
    <Section id="about" className="bg-alice-blue" animationClass="about">
      <div className="container flex flex-col lg:flex-row gap-[40px] lg:gap-[30px] xl:gap-[112px] items-center xl:pr-[112px]">
        <div id="segment-1" className="opacity-0 w-full lg:min-w-[464px] lg:w-[464px] xl:min-w-[609px] xl:w-[609px]">
          <Image src={MeetingImage} alt="Meeting Ilustration" className="h-[283px] md:h-[405px] xl:h-[465px] w-full object-cover rounded-md" />
        </div>

        <div id="segment-2" className="block">
          <Label>about</Label>
          <div className="flex flex-col gap-[32px] xl:gap-[56px]">
            <div className="flex flex-col gap-[32px]">
              <Title>Let&apos;s bring your property projects to life with complete peace of mind</Title>
              <div className="text-[16px] text-pickled-bluewood font-[400] leading-[150%]">
                At Dwell, we understand that real estate is much more than a transaction; it&apos;s a commitment of trust. We do everything possible 
                to ensure our clients have a smooth, secure, and satisfying experience. This is why you can trust us to successfully carry out your property project.
              </div>
            </div>
            <ButtonPill id="segment-2-1" dotId="segment-2-2" className="opacity-0 h-[48px] md:h-[52px] w-[247px] md:w-[255px] bg-cobalt leading-[20px]" textClassName="text-white">
              Discover our properties
            </ButtonPill>
          </div>
        </div>
      </div>
    </Section>
  );
}
