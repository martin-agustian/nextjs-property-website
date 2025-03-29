import { ArrowIcon2, EmailIcon, InstagramIcon, LinkedInIcon, MapPinIcon, PhoneIcon } from "./svg-icon";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-10">
      <div className="container">
        <div className="text-[37px] text-center md:text-left font-inter font-[600]">
          Dwell
        </div>

        <div className="flex gap-16 md:gap-10 lg:gap-5 flex-col md:flex-row text-center md:text-left">
          <div className="md:flex-3 order-1">
            <div className="text-[24px] lg:text-[28px] font-manrope font-[600] leading-[120%] mt-5">
              Stay informed about the <span className="text-[#3C6AD4]">latest property opportunities</span>
            </div>

            <div className="relative md:inline-block mt-5">
              <input placeholder="benoitmacke@car" className="h-[40px] lg:h-[48px] w-[100%] md:w-[374px] bg-white text-black placeholder:text-[#94A3B8] rounded-full pl-3 pr-11" />

              <div className="size-[32px] flex items-center justify-center absolute top-[50%] translate-[-50%] right-[-10px] bg-[#C6DBF7] rounded-full">
                <ArrowIcon2 color="#0F172A" className="size-[12px]" />
              </div>
            </div>

            <label htmlFor="agreement" className="flex items-center space-x-2 font-inter mt-4">
              <input type="checkbox" id="agreement" className="hidden peer" />
              <span className="size-[16px] flex items-center justify-center cursor-pointer transition-colors peer-checked:bg-[#3C6AD4] peer-checked:border-[#3C6AD4] peer-checked:before:content-['✔'] border-1 border-white rounded-sm peer-checked:before:text-[11px] p-1" />
              <span className="text-[14px] font-[400] leading-[150%]">I accept the privacy policy*.</span>
            </label>
          </div>

          <ul className="md:flex-2 flex flex-col items-center md:items-start gap-3 text-[14px] font-[500] leading-[150%] capitalize order-3 md:order-2">
            <li className="flex items-center gap-3">
              <MapPinIcon color="#72A5E8" className="size-[16px]" />
              118 Maréchal Street, 1000 Brussels
            </li>
            <li className="flex gap-3">
              <PhoneIcon color="#72A5E8" className="size-[16px]" />
              +3 24 60 25 52 01
            </li>
            <li className="flex gap-3">
              <EmailIcon color="#72A5E8" className="size-[16px]" />
              contact@dwell.be
            </li>
          </ul>

          <ul className="md:flex-1 flex flex-col gap-3 text-[14px] font-inter font-[500] leading-[150%] capitalize order-2 md:order-3">
            <li>service</li>
            <li>properties</li>
            <li>contact</li>
            <li>blog</li>
          </ul>
        </div>

        <div className="flex gap-8 flex-col md:flex-row md:justify-between items-center text-[12px] font-inter mt-16">
          <div className="flex gap-5 order-2 md:order-1">
            <div className="flex gap-2">              
              <InstagramIcon color="white" className="size-[16px]" />              
              <LinkedInIcon color="white" className="size-[16px]" />
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
    </footer>
  );
}
