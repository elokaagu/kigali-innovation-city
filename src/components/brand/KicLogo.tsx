import Image from "next/image";
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

  if (showWordmark) {
    return (
      <div className={cn("flex items-center", className)}>
        <Image
          src={isLight ? "/brand/kic-logo-dark.png" : "/brand/kic-logo-light.png"}
          alt="Kigali Innovation City"
          width={160}
          height={68}
          className="h-9 sm:h-10 w-auto"
          priority
        />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/brand/kic-mark.png"
        alt="Kigali Innovation City"
        width={28}
        height={56}
        className="h-9 w-auto"
      />
    </div>
  );
}
