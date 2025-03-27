import Image from "next/image";
import Label from "./label";

export default function About() {
  return (
    <div className="bg-[#F1F6FD]">
      <div className="container flex gap-14 items-center py-10">
        <Image
          src="/meeting.png"
          alt="meeting.png"
          width={609}
          height={465}
          className="rounded-md"
          priority
        />
        <div className="">
          <Label>about</Label>
          <div className="text-[40px] font-[600] font-manrope leading-[120%] mt-3">
            Let's bring your property projects to life with complete peace of mind
          </div>
          <div className="text-[16px] font-[400] font-inter leading-[150%] mt-5">
            At Dwell, we understand that real estate is much more than a transaction; it's a commitment of trust. We do everything possible to ensure our clients have a smooth, secure, and satisfying experience. This is why you can trust us to successfully carry out your property project.
          </div>
        </div>
      </div>
    </div>
  );
}
