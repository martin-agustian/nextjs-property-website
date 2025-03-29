import { ReactNode } from "react";

export default function Label({ children } : { children: ReactNode }) {
  return (
    <div className="inline-flex items-center justify-center h-[26px] bg-[#DFEBFA] rounded-full px-3">
      <div className="text-[12px] text-[#3C6AD4] font-[800] font-manrope tracking-[5%] uppercase">
        {children}
      </div>
    </div>
  );
}
