import { ReactNode } from "react";

export default function ButtonPill({
  id, dotId, className, dotClassName, textClassName, 
  children,
}: { 
  id?: string, dotId?: string,  
  className?: string, dotClassName?: string, textClassName?: string, 
  children: ReactNode
}) {
  
  return (
    <button id={id} className={`flex gap-[14px] items-center justify-center rounded-full hover:shadow-lg cursor-pointer pl-[20px] pr-[24px] ${className}`}>
      <div id={dotId} className={`size-[10px] bg-dark-pastel-blue rounded-full ${dotClassName}`} />
      <div className={`text-[16px] font-manrope font-[600] leading-[20px] ${textClassName}`}>
        {children}
      </div>
    </button>
  )
}