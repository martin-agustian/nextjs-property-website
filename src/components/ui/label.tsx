import { ReactNode } from "react";

export default function Label({ className, children } : { className?: string, children: ReactNode }) {
  return (
    <div className={`inline-flex items-center justify-center h-[26px] bg-lavender-mist rounded-full px-[14px] mb-[8px] lg:mb-[10px] ${className}`}>
      <div className="text-[12px] text-mariner font-manrope font-[800] leading-[150%] tracking-[5%] uppercase">
        {children}
      </div>
    </div>
  );
}
