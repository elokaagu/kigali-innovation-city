interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  dark?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  badge,
  className = "",
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-kic-gold/15 text-kic-dark">
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4 ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 ${
            dark ? "text-white/80" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
