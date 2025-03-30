import { useEffect, useRef, useState, ReactNode } from "react";

export const Section = ({ 
  id, className, animationClass, children 
} : { 
  id?: string,
  className?: string, 
  animationClass?: string, 
  children?: ReactNode,
}) => {

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null, // viewport as the root
        threshold: 0.3, // trigger when 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id={id} ref={sectionRef} className={`section ${isVisible ? animationClass : ""} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
