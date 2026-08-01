import Image from "next/image";

interface ImageBandProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  overlay?: "dark" | "gold";
}

export default function ImageBand({
  src,
  alt,
  title,
  subtitle,
  overlay = "dark",
}: ImageBandProps) {
  return (
    <div className="relative h-[40vh] min-h-[280px] max-h-[420px] w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />
      <div
        className={
          overlay === "dark"
            ? "absolute inset-0 bg-kic-dark/70"
            : "absolute inset-0 bg-kic-gold/20 mix-blend-multiply"
        }
      />
      {(title || subtitle) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          {title && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 max-w-3xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
