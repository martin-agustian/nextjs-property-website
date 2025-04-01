import { ReactNode } from "react";

export default function Title({ 
  children, className 
}: { 
  className?: string, 
  children: ReactNode 
}) {
  return (
    <div className={`text-[32px] text-mirage md:text-[40px] font-[600] font-manrope leading-[120%] ${className}`}>
      {children}
    </div>
  );
}
