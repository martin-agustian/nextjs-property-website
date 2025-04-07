import { ReactNode } from "react";

export default function Label({ children } : { children: ReactNode }) {
  return (
    <div className="inline-flex items-center justify-center h-[26px] bg-lavender-mist rounded-full px-[14px]">
      <div className="text-[12px] text-mariner font-manrope font-[800] leading-[150%] tracking-[5%] uppercase">
        {children}
      </div>
    </div>
  );
}
