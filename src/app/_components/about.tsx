import Image from "next/image";
import Label from "./label";
import Title from "./title";

export default function About() {
  return (
    <div className="bg-[#F1F6FD]">
      <div className="container flex flex-col lg:flex-row gap-14 items-center py-10">
        <Image
          height={465}
          width={609}
          src="/meeting.png"
          alt="meeting.png"
          className="rounded-md"
          priority
        />
        <div className="">
          <Label>about</Label>
          <Title className="mt-3">Let's bring your property projects to life with complete peace of mind</Title>
          <div className="text-[16px] font-[400] font-inter leading-[150%] mt-5">
            At Dwell, we understand that real estate is much more than a transaction; it's a commitment of trust. We do everything possible to ensure our clients have a smooth, secure, and satisfying experience. This is why you can trust us to successfully carry out your property project.
          </div>
        </div>
      </div>
    </div>
  );
}
