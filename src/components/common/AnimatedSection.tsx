"use client";

import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  bgColor?: "background" | "citisquare-grey-light" | "citisquare-dark";
  animation?: "fade-in" | "fade-in-up" | "fade-in-blur" | "scale-in" | "slide-in-bottom";
  delay?: number;
  stagger?: boolean;
}

const AnimatedSection = ({ 
  id, 
  children, 
  className = "", 
  bgColor = "background",
  animation = "fade-in-up",
  delay = 0,
  stagger = false
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ delay });
  
  const bgClasses = {
    "background": "bg-background",
    "citisquare-grey-light": "bg-citisquare-grey-light", 
    "citisquare-dark": "bg-citisquare-dark"
  };

  const getAnimationClasses = () => {
    if (stagger) {
      return isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8';
    }
    
    const animationMap = {
      "fade-in": isVisible ? 'animate-fade-in' : 'opacity-0',
      "fade-in-up": isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8',
      "fade-in-blur": isVisible ? 'animate-fade-in-blur' : 'opacity-0 blur-sm translate-y-8',
      "scale-in": isVisible ? 'animate-scale-in' : 'opacity-0 scale-95',
      "slide-in-bottom": isVisible ? 'animate-slide-in-bottom' : 'opacity-0 translate-y-12'
    };
    
    return animationMap[animation];
  };

  return (
    <section 
      ref={ref}
      id={id} 
      className={`py-12 sm:py-16 lg:py-20 ${bgClasses[bgColor]} transition-all duration-700 ease-out ${getAnimationClasses()} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default AnimatedSection;