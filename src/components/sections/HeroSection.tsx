import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/kigali-innovation-city.jpeg";
import { theApex } from "@/data/the-apex";
import { COMPANY_NAME } from "@/data/company";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/50" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-citisquare-gold/20 text-citisquare-gold border border-citisquare-gold/30 animate-fade-in-up">
            by {COMPANY_NAME}
          </span>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight animate-fade-in-down"
            style={{ letterSpacing: "var(--font-display-tracking)", animationDelay: "0.2s", animationFillMode: "both" }}
          >
            {theApex.name}
          </h1>

          <p
            className="text-base sm:text-lg text-citisquare-gold/90 mb-2 font-medium animate-fade-in-up"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            {theApex.subtitle}
          </p>

          <h2
            className="text-xl sm:text-2xl md:text-3xl text-citisquare-gold mb-6 font-medium animate-fade-in-up"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            {theApex.tagline}
          </h2>

          <p
            className="text-base sm:text-lg text-white/85 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.5s", animationFillMode: "both" }}
          >
            {theApex.description}
          </p>

          <p className="text-sm text-white/60 mb-8 animate-fade-in-up" style={{ animationDelay: "0.55s", animationFillMode: "both" }}>
            {theApex.structure}
          </p>

          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            {theApex.stats.map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-xl sm:text-2xl font-bold text-citisquare-gold">{stat.value}</p>
                <p className="text-xs text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.7s", animationFillMode: "both" }}
          >
            <a
              href="https://drive.google.com/file/d/1zeD6v9PGZ-85BvbH551YwyaLNzbVgcMY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="cta" size="lg" className="px-8 py-6 text-lg">
                <Download className="mr-2 h-5 w-5" />
                Investor Deck
              </Button>
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScf_0y5IZzTQWGdKB9XqyYRDZr-Rrer3VCXE80Z6wKdK4Mwbg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg border-white/30 text-white hover:bg-white/10 bg-white/5"
              >
                <Mail className="mr-2 h-5 w-5" />
                Partner With Us
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-citisquare-gold/70 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
