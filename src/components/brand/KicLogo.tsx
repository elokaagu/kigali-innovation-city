import { cn } from "@/lib/utils";

interface KicLogoProps {
  variant?: "light" | "dark";
  showWordmark?: boolean;
  className?: string;
}

export default function KicLogo({
  variant = "light",
  showWordmark = true,
  className,
}: KicLogoProps) {
  const isLight = variant === "light";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="10" fill="#F5D424" />
        <path
          d="M8 28V12h4.5l5.5 9.5V12H22v16h-4.5l-5.5-9.6V28H8z"
          fill="#0E222B"
        />
        <circle cx="30" cy="14" r="3" fill="#05F28C" />
      </svg>
      {showWordmark && (
        <div className="text-left leading-tight">
          <p
            className={cn(
              "text-sm font-semibold tracking-tight",
              isLight ? "text-white" : "text-foreground"
            )}
          >
            Kigali Innovation City
          </p>
          <p
            className={cn(
              "text-[10px] font-medium uppercase tracking-widest",
              isLight ? "text-kic-gold" : "text-muted-foreground"
            )}
          >
            Digital Heart of Africa
          </p>
        </div>
      )}
    </div>
  );
}
