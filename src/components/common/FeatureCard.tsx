import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: string;
  stat?: string;
  statLabel?: string;
  variant?: "default" | "dark" | "highlight";
  size?: "sm" | "md" | "lg";
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  highlight, 
  stat, 
  statLabel, 
  variant = "default",
  size = "md" 
}: FeatureCardProps) => {
  const variants = {
    default: "bg-background text-foreground",
    dark: "bg-citisquare-dark text-white",
    highlight: "bg-citisquare-gold/10"
  };

  const iconSizes = {
    sm: "w-12 h-12 sm:w-14 sm:h-14",
    md: "w-12 h-12 sm:w-16 sm:h-16", 
    lg: "w-16 h-16"
  };

  const iconIconSizes = {
    sm: "h-6 w-6 sm:h-7 sm:w-7",
    md: "h-6 w-6 sm:h-8 sm:w-8",
    lg: "h-8 w-8"
  };

  return (
    <Card className={`group border-none shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:rotate-1 cursor-pointer ${variants[variant]} overflow-hidden relative h-full`}>
      <div className="absolute inset-0 bg-gradient-to-br from-citisquare-dark to-citisquare-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardContent className="p-4 sm:p-6 text-center relative z-10 h-full flex flex-col justify-between min-h-[280px]">
        <div className={`${iconSizes[size]} bg-citisquare-gold/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-citisquare-gold/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
          <Icon className={`${iconIconSizes[size]} text-citisquare-gold group-hover:scale-110 transition-transform duration-500`} />
        </div>
        {highlight && (
          <div className="text-xs sm:text-sm font-medium text-citisquare-gold mb-1 sm:mb-2 group-hover:scale-105 group-hover:text-white transition-all duration-300">{highlight}</div>
        )}
        <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 group-hover:text-white/80 transition-colors duration-300">{description}</p>
        {stat && (
          <div className="mt-auto">
            <div className="text-2xl font-bold text-citisquare-gold mb-1 group-hover:scale-110 transition-transform duration-300">{stat}</div>
            {statLabel && <div className="text-xs text-muted-foreground group-hover:text-white/70 transition-colors duration-300">{statLabel}</div>}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FeatureCard;