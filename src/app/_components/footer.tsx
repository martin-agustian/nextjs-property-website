import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#0F172A] text-white">
      <div className="container py-10">
        <div className="text-[37px] text-center md:text-left font-inter font-[600]">
          Dwell
        </div>

        <div className="flex gap-16 md:gap-5 flex-col md:flex-row text-center md:text-left">
          <div className="md:flex-2 order-1">
            <div className="text-[24px] md:text-[28px] font-manrope font-[600] leading-[120%] mt-5">
              Stay informed about the <span className="text-[#3C6AD4]">latest property opportunities</span>
            </div>

            <div className="relative mt-5">
              <input placeholder="benoitmacke@car" className="h-[48px] w-[374px] bg-white text-[#94A3B8] rounded-full pl-3" />
            </div>
            
            <div className="flex gap-3 mt-3">
              <input id="agreement" type="checkbox" />
              <label htmlFor="agreement" className="text-[14px]">I accept the privacy policy*.</label>
            </div>
          </div>

          <ul className="flex flex-col items-center md:items-start gap-3 text-[14px] font-[500] leading-[150%] capitalize order-3 md:order-2">
            <li className="flex gap-3">
              <Image
                height={16}
                width={16}
                src="/map-pin-icon.svg"
                alt="map-pin-icon.svg"
                priority
              />
              118 Maréchal Street, 1000 Brussels
            </li>
            <li className="flex gap-3">
              <Image
                height={16}
                width={16}
                src="/map-pin-icon.svg"
                alt="map-pin-icon.svg"
                priority
              />
              +3 24 60 25 52 01
            </li>
            <li className="flex gap-3">
              <Image
                height={16}
                width={16}
                src="/email-icon.svg"
                alt="email-icon.svg"
                priority
              />
              contact@dwell.be
            </li>
          </ul>

          <ul className="flex flex-col gap-3 text-[14px] font-inter font-[500] leading-[150%] capitalize order-2 md:order-3">
            <li>service</li>
            <li>properties</li>
            <li>contact</li>
            <li>blog</li>
          </ul>
        </div>

        <div className="flex gap-8 flex-col md:flex-row md:justify-between items-center text-[12px] font-inter mt-16">
          <div className="flex gap-5 order-2 md:order-1">
            <div className="flex gap-2">
              <Image
                height={16}
                width={16}
                src="/ig-icon.svg"
                alt="ig-icon.svg"
                className="rounded-md"
                priority
              />
              
              <Image
                height={16}
                width={16}
                src="/linkedin-icon.svg"
                alt="linkedin-icon.svg"
                className="rounded-md"
                priority
              />
            </div>
            Eazyclick ©2024, all rights reserved
          </div>
          <div className="flex gap-3 order-1 md:order-2">
            <span>
              Terms & Conditions
            </span>
            <span>
              Privacy Policy
            </span>
            <span>
              Cookies
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
