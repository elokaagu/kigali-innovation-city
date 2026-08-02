"use client";

import { useEffect, useRef, useState } from "react";

interface SectionSeparatorProps {
  variant?: "blur" | "gradient" | "subtle";
  className?: string;
}

const SectionSeparator = ({ variant = "blur", className = "" }: SectionSeparatorProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const separatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (separatorRef.current) {
      observer.observe(separatorRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getVariantStyles = () => {
    switch (variant) {
      case "blur":
        return "backdrop-blur-md bg-background/20 border-y border-border/20";
      case "gradient":
        return "bg-gradient-to-r from-transparent via-border to-transparent";
      case "subtle":
        return "bg-border/10";
      default:
        return "backdrop-blur-md bg-background/20 border-y border-border/20";
    }
  };

  return (
    <div
      ref={separatorRef}
      className={`
        relative h-24 w-full overflow-hidden
        ${getVariantStyles()}
        ${isVisible ? "animate-fade-in-blur" : "opacity-0"}
        ${className}
      `}
    >
      {/* Animated blur effect */}
      <div className="absolute inset-0 animate-section-blur" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-citisquare-gold/5 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-border" />
        <div className="w-2 h-2 rounded-full bg-citisquare-gold/30" />
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-border" />
      </div>
    </div>
  );
};

export default SectionSeparator;