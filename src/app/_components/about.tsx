import Image from "next/image";
import Label from "./label";
import Title from "./title";
import ButtonPill from "./button-pill";

import MeetingImage from "../../../public/meeting.png";

export default function About() {
  return (
    <section id="about" className="bg-[#F1F6FD] py-10">
      <div className="container flex flex-col lg:flex-row gap-10 xl:gap-14 items-center">
        <div className="w-full">
          <Image src={MeetingImage} alt="Meeting Ilustration" className="h-auto md:h-[465px] w-full md:w-[465px] md:min-w-[465px] object-cover rounded-md" />
        </div>

        <div className="">
          <Label>about</Label>
          <Title className="mt-3">Let's bring your property projects to life with complete peace of mind</Title>
          <div className="text-[16px] text-[#334155] font-[400] font-inter leading-[150%] mt-5">
            At Dwell, we understand that real estate is much more than a transaction; it's a commitment of trust. We do everything possible to ensure our clients have a smooth, secure, and satisfying experience. This is why you can trust us to successfully carry out your property project.
          </div>
          <ButtonPill className="h-[48px] md:h-[52px] w-[247px] md:w-[255px] bg-[#2B3F7D] mt-10 md:mt-16" textClassName="text-white">
            Discover Our Properties
          </ButtonPill>
        </div>
      </div>
    </section>
  );
}
