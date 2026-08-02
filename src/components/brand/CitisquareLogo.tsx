import Image from "next/image";
import { cn } from "@/lib/utils";
import citisquareLogoBlack from "@/assets/citisquare-logo-black.png";
import citisquareLogoWhite from "@/assets/citisquare-logo-white-alt.png";

interface CitisquareLogoProps {
  variant?: "light" | "dark";
  showWordmark?: boolean;
  className?: string;
}

export default function CitisquareLogo({
  variant = "light",
  showWordmark = true,
  className,
}: CitisquareLogoProps) {
  const isLight = variant === "light";

  if (showWordmark) {
    return (
      <div className={cn("flex items-center", className)}>
        <Image
          src={isLight ? citisquareLogoWhite : citisquareLogoBlack}
          alt="Citisquare"
          width={180}
          height={48}
          className="h-8 sm:h-9 w-auto"
          priority
        />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src={isLight ? citisquareLogoWhite : citisquareLogoBlack}
        alt="Citisquare"
        width={36}
        height={36}
        className="h-8 w-auto"
      />
    </div>
  );
}
