import ButtonPill from "../ui/button-pill";
import BurgerIcon from "../icons/burger-icon";

export default function Navbar({ isOutsideHero }: { isOutsideHero: boolean }) {
  const menuData = [
    "about", "our services", "our properties"
  ]; 

  return (
    <nav id="navbar" className={`inset-x-0 z-40 py-[25px] ${isOutsideHero ? "fixed top-0 text-black bg-white shadow-md" : "absolute top-[2.5px] xl:top-[9px] text-white bg-transparent"}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-[56px]">
          <div className="text-[30px] lg:text-[37.2px] font-[600] leading-[36px] lg:leading-[44.64px] tracking-[-3%] cursor-pointer hover:text-dark-pastel-blue">
            Dwell
          </div>
          <ul className="hidden lg:flex gap-[32px] text-[14px] font-manrope font-[700] leading-[20px] tracking-[4%]">
            {menuData.map((data, i) => {
              return (<li key={i} className="uppercase border-b border-transparent cursor-pointer hover:border-current">{data}</li>)
            })}
          </ul>
        </div>

        <ButtonPill 
          className={`hidden lg:flex h-[45px] xl:h-[52px] ${isOutsideHero ? "bg-cobalt" : "bg-[#FFFFFF1A]"} pl-[24px] pr-[28px]`}
          textClassName="text-white"
        >
          Contact Us
        </ButtonPill>

        <button className="flex lg:hidden items-center justify-center size-[45px] bg-mariner rounded-full">
          <BurgerIcon color="white" className="size-[20px]" />
        </button>
      </div>
    </nav>
  );
}
