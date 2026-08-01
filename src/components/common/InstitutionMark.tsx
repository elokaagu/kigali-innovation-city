import { cn } from "@/lib/utils";

const brandStyles: Record<
  string,
  { bg: string; text: string; accent: string }
> = {
  ALU: { bg: "bg-red-700", text: "text-white", accent: "border-red-500" },
  CMU: { bg: "bg-red-600", text: "text-white", accent: "border-red-400" },
  AIMS: { bg: "bg-blue-700", text: "text-white", accent: "border-blue-400" },
  UoR: { bg: "bg-emerald-700", text: "text-white", accent: "border-emerald-400" },
  Cooper: { bg: "bg-teal-700", text: "text-white", accent: "border-teal-400" },
  Kofisi: { bg: "bg-slate-800", text: "text-white", accent: "border-kic-gold" },
  STC: { bg: "bg-indigo-700", text: "text-white", accent: "border-indigo-400" },
  Infra: { bg: "bg-amber-700", text: "text-white", accent: "border-amber-400" },
};

interface InstitutionMarkProps {
  abbr: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function InstitutionMark({
  abbr,
  name,
  size = "md",
  className,
}: InstitutionMarkProps) {
  const style = brandStyles[abbr] ?? {
    bg: "bg-kic-dark",
    text: "text-kic-gold",
    accent: "border-kic-gold",
  };

  const sizeClasses = {
    sm: "h-10 w-10 text-xs rounded-lg",
    md: "h-14 w-14 text-sm rounded-xl",
    lg: "h-20 w-20 text-lg rounded-2xl",
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "flex items-center justify-center font-bold border-2 shrink-0 shadow-sm",
          style.bg,
          style.text,
          style.accent,
          sizeClasses[size]
        )}
        aria-label={name ?? abbr}
      >
        {abbr.length <= 4 ? abbr : abbr.slice(0, 3)}
      </div>
      {name && size === "lg" && (
        <span className="text-sm font-medium text-muted-foreground hidden sm:block max-w-[140px] leading-snug">
          {name}
        </span>
      )}
    </div>
  );
}
