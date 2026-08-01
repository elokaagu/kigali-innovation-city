interface QuoteStripProps {
  quote: string;
  attribution?: string;
}

export default function QuoteStrip({ quote, attribution }: QuoteStripProps) {
  return (
    <div className="relative bg-kic-dark py-16 sm:py-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 50%, hsl(var(--kic-gold) / 0.4) 0%, transparent 50%), radial-gradient(circle at 90% 50%, hsl(var(--kic-green) / 0.3) 0%, transparent 40%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="text-kic-gold text-5xl font-serif leading-none">&ldquo;</span>
        <blockquote className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium leading-relaxed -mt-4 mb-4">
          {quote}
        </blockquote>
        {attribution && (
          <cite className="text-sm text-kic-gold not-italic font-semibold">
            {attribution}
          </cite>
        )}
      </div>
    </div>
  );
}
