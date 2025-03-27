import { ReactNode } from "react";

export default function Label({ children } : { children: ReactNode }) {
  return (
    <div className="inline-flex items-center justify-center w-[72px] h-[26px] bg-[#DFEBFA] rounded-full">
      <div className="text-[12px] text-[#3C6AD4] font-[800] font-manrope tracking-[5%] uppercase">
        {children}
      </div>
    </div>
  );
}
