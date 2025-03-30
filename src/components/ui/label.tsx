import { ReactNode } from "react";

export default function Label({ children } : { children: ReactNode }) {
  return (
    <div className="inline-flex items-center justify-center h-[26px] bg-lavender-mist rounded-full px-3">
      <div className="text-[12px] text-mariner font-[800] font-manrope tracking-[5%] uppercase">
        {children}
      </div>
    </div>
  );
}
