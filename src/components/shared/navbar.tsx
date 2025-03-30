import ButtonPill from "../ui/button-pill";
import BurgerIcon from "../icons/burger-icon";

export default function Navbar({ isOutsideHero }: { isOutsideHero: boolean }) {
  const menuData = [
    "about", "our service", "our properties"
  ]; 

  return (
    <nav id="navbar" className={`fixed top-0 inset-x-0 z-40 ${isOutsideHero ? "text-black bg-white shadow-md" : "text-white bg-transparent"}`}>
      <div className="container flex justify-between items-center py-3">
        <div className="flex items-center gap-14">
          <div className={`text-[37px] font-[600] cursor-pointer ${isOutsideHero ? "hover:text-[#2B3F7D]" : "hover:text-[#72A5E8]"}`}>
            Dwell
          </div>
          <ul className="hidden lg:flex gap-8 text-[14px] font-manrope font-[700]">
            {menuData.map((data, i) => {
              return (<li key={i} className={`uppercase cursor-pointer ${isOutsideHero ? "hover:text-[#2B3F7D]" : "hover:text-[#72A5E8]"}`}>{data}</li>)
            })}
          </ul>
        </div>

        <ButtonPill 
          className={`hidden lg:flex h-[45px] ${isOutsideHero ? "bg-[#2B3F7D]" : "bg-[#FFFFFF1A]"} pr-5`}
          textClassName="text-white"
        >
          Contact Us
        </ButtonPill>

        <button className="flex lg:hidden items-center justify-center size-[40px] bg-[#3C69D4] rounded-full">
          <BurgerIcon color="white" className="size-[20px]" />
        </button>
      </div>
    </nav>
  );
}
