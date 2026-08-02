interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  dark?: boolean;
  className?: string;
}

const SectionHeader = ({ title, subtitle, badge, dark, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`text-center mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-citisquare-gold/10 text-citisquare-gold border border-citisquare-gold/20">
          {badge}
        </span>
      )}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 px-4 ${dark ? "text-white" : "text-foreground"}`} style={{ letterSpacing: 'var(--font-display-tracking)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4 ${dark ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;