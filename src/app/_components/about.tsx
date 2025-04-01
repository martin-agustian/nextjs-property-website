import Image from "next/image";
import Label from "@/components/ui/label";
import Title from "@/components/ui/title";
import Section from "@/components/ui/section";
import ButtonPill from "@/components/ui/button-pill";

import MeetingImage from "@/assets/images/meeting.png";

export default function About() {
  return (
    <Section id="about" className="bg-alice-blue py-10" animationClass="about">
      <div className="container flex flex-col lg:flex-row gap-10 xl:gap-14 items-center">
        <div id="segment-1" className="opacity-0 w-full">
          <Image src={MeetingImage} alt="Meeting Ilustration" className="h-auto md:h-[465px] w-full md:w-[465px] md:min-w-[465px] object-cover rounded-md" />
        </div>

        <div id="segment-2" className="block">
          <Label>about</Label>
          <Title className="mt-3">Let&apos;s bring your property projects to life with complete peace of mind</Title>
          <div className="text-[16px] text-pickled-bluewood font-[400] leading-[150%] mt-5">
            At Dwell, we understand that real estate is much more than a transaction; it&apos;s a commitment of trust. We do everything possible to ensure our clients have a smooth, secure, and satisfying experience. This is why you can trust us to successfully carry out your property project.
          </div>
          <ButtonPill id="segment-2-1" dotId="segment-2-2" className="opacity-0 h-[48px] md:h-[52px] w-[247px] md:w-[255px] bg-cobalt leading-[20px] mt-10 md:mt-16" textClassName="text-white">
            Discover Our Properties
          </ButtonPill>
        </div>
      </div>
    </Section>
  );
}
