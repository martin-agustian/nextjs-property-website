import { ReactNode } from "react";

export default function ButtonPill({ 
  className, dotClassName, textClassName, 
  children,
}: { 
  className?: string, dotClassName?: string, textClassName?: string, 
  children: ReactNode
}) {
  
  return (
    <button className={`flex gap-3 items-center justify-center rounded-full hover:shadow-lg cursor-pointer px-4 ${className}`}>
      <div className={`bg-[#72A5E8] size-[10px] rounded-full ${dotClassName}`} />
      <div className={`text-[16px] font-manrope font-[600] ${textClassName}`}>
        {children}
      </div>
    </button>
  )
}