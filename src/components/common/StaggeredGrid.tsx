"use client";

import { ReactNode } from "react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

interface StaggeredGridProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  columns?: number;
}

const StaggeredGrid = ({ 
  children, 
  className = "", 
  staggerDelay = 150,
  columns = 1 
}: StaggeredGridProps) => {
  const { ref, visibleItems } = useStaggeredAnimation(children.length, staggerDelay);

  const getGridClass = () => {
    const gridMap = {
      1: "grid-cols-1",
      2: "grid-cols-1 lg:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
    };
    return gridMap[columns as keyof typeof gridMap] || "grid-cols-1";
  };

  return (
    <div ref={ref} className={`grid ${getGridClass()} gap-4 sm:gap-6 ${className}`}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ease-out ${
            visibleItems[index] 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default StaggeredGrid;