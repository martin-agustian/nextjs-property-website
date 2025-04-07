import ArrowIcon2 from "../icons/arrow-icon-2";
import InstagramIcon from "../icons/instagram-icon";
import LinkedInIcon from "../icons/linkedin-icon";
import MapPinIcon from "../icons/map-pin-icon";
import PhoneIcon from "../icons/phone-icon";
import EmailIcon from "../icons/email-icon";

export default function Footer() {
  return (
    <footer className="section bg-mirage text-white !pb-[24px]">
      <div className="container">
        <div className="text-[48px] md:text-[37.2px] text-center md:text-left font-[600] leading-[44.64px] tracking-[-3%]">
          Dwell
        </div>

        <div className="flex gap-[56px] flex-col lg:flex-row text-center md:text-left mt-[56px]">
          <div className="md:flex-3 order-1">
            <div className="text-[24px] xl:text-[28px] text-left font-manrope font-[600] leading-[120%]">
              Stay informed about the <br className="block lg:hidden"/> <span className="text-mariner">latest <br className="hidden lg:block" /> property opportunities</span>
            </div>

            <div className="relative md:inline-block mt-[20px]">
              <input placeholder="benoitmacke@car" className="h-[40px] xl:h-[48px] w-full md:w-[374px] bg-[#F8FAFC] text-[14px] text-black placeholder:text-cadet-grey font-[400] leading-[150%] rounded-full pl-[16px] pr-[42px]" />

              <div className="flex items-center justify-center size-[32px] absolute top-[50%] translate-y-[-50%] right-[4px] bg-tropical-blue rounded-full">
                <ArrowIcon2 color="#0F172A" className="size-[12px]" />
              </div>
            </div>

            <label htmlFor="agreement" className="flex items-center space-x-[12px] mt-[16px]">
              <input type="checkbox" id="agreement" className="hidden peer" />
              <span className="size-[16px] flex items-center justify-center cursor-pointer transition-colors peer-checked:bg-mariner peer-checked:border-mariner peer-checked:before:content-['✔'] border-1 border-white rounded-sm peer-checked:before:text-[11px] p-1" />
              <span className="text-[14px] text-[#E2E8F0] font-[400] leading-[150%] cursor-pointer">I accept the privacy policy*.</span>
            </label>
          </div>

          <ul className="md:flex-2 flex flex-col items-center md:items-start gap-[10px] text-[14px] font-[500] leading-[150%] order-3 md:order-2">
            <li className="flex items-center lg:items-start gap-[8px] capitalize cursor-pointer hover:text-dark-pastel-blue" onClick={() => window.open('geo:0,0?q=118+Maréchal+Street,+1000+Brussels')}>
              <div className="flex items-center justify-center size-[24px]">
                <MapPinIcon color="#72A5E8" className="size-[16px] min-w-[16px] min-h-[16px]" />
              </div>
              118 Maréchal Street, 1000 <br className="hidden lg:block" /> Brussels
            </li>
            <li className="flex gap-[8px] cursor-pointer hover:text-dark-pastel-blue" onClick={() => window.open('tel:+32460255201')}>
              <div className="flex items-center justify-center size-[24px]">              
                <PhoneIcon color="#72A5E8" className="size-[16px] min-w-[16px] min-h-[16px]" />
              </div>
              +3 24 60 25 52 01
            </li>
            <li className="flex gap-[8px] cursor-pointer hover:text-dark-pastel-blue" onClick={() => window.open('mailto:contact@dwell.be')}>
              <div className="flex items-center justify-center size-[24px]">                
                <EmailIcon color="#72A5E8" className="size-[16px] min-w-[16px] min-h-[16px]" />
              </div>
              contact@dwell.be
            </li>
          </ul>

          <ul className="md:flex-1 flex flex-col gap-[10px] text-[16px] md:text-[14px] font-[400] leading-[150%] capitalize order-2 md:order-3">
            <li className="cursor-pointer hover:text-dark-pastel-blue">services</li>
            <li className="cursor-pointer hover:text-dark-pastel-blue">properties</li>
            <li className="cursor-pointer hover:text-dark-pastel-blue">contact</li>
            <li className="cursor-pointer hover:text-dark-pastel-blue">blog</li>
          </ul>
        </div>

        <div className="flex gap-[20px] flex-col md:flex-row md:justify-between items-center text-[12px] text-[#F1F5F9] font-[400] leading-[16px] mt-[40px] md:mt-[100px]">
          <div className="flex gap-[14px] order-2 md:order-1">
            <div className="flex gap-[8px]">
              <div className="cursor-pointer" onClick={() => window.open('https://instagram.com')}>
                <InstagramIcon color="white" className="size-[14px]" />
              </div>
              <div className="cursor-pointer" onClick={() => window.open('https://linkedin.com')}>
                <LinkedInIcon color="white" className="size-[14px] cursor-pointer" />
              </div>
            </div>
            Eazyclick ©2024, all rights reserved
          </div>
          <div className="flex gap-[12px] order-1 md:order-2">
            <span className="cursor-pointer hover:text-dark-pastel-blue">Terms & Conditions</span>
            <span className="cursor-pointer hover:text-dark-pastel-blue">Privacy Policy</span>
            <span className="cursor-pointer hover:text-dark-pastel-blue">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
