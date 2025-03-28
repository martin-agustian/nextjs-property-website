export default function Navbar() {
  const menuData = [
    "about", "our service", "our properties"
  ]; 

  return (
    <nav className="fixed top-0 inset-x-0 z-40 text-white">
      <div className="container flex justify-between items-center py-3">
        <div className="flex items-center gap-14">
          <div className="text-[37px] font-inter font-[600]">
            Dwell
          </div>
          <ul className="hidden md:flex gap-8 text-[14px] font-manrope font-[700]">
            {menuData.map((data, i) => {
              return (<li key={i} className="uppercase">{data}</li>)
            })}
          </ul>
        </div>
        <button className="hidden md:flex gap-3 items-center justify-center bg-[#FFFFFF1A] h-[45px] w-[141px] rounded-full">
          <div className="bg-[#72A5E8] size-[10px] rounded-full" />
          <div className="text-[16px] font-manrope font-[600]">
            Contact Us
          </div>
        </button>
      </div>
    </nav>
  );
}
