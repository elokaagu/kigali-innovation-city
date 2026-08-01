"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, hsl(var(--kic-gold) / 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsl(var(--kic-green) / 0.1) 0%, transparent 40%),
            linear-gradient(135deg, hsl(var(--kic-dark)) 0%, hsl(200 45% 13%) 100%)
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-kic-gold/20 text-kic-gold border border-kic-gold/30 animate-fade-in-up">
            Investment Opportunity · February 2026
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Kigali Innovation City
          </h1>

          <p
            className="text-xl sm:text-2xl md:text-3xl text-kic-gold mb-4 font-medium animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            The Digital Heart of Africa
          </p>

          <p
            className="text-base sm:text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            A 62-hectare mixed-use innovation hub — connecting world-class
            universities, technology, healthcare, and investment opportunities
            in Rwanda&apos;s flagship economic zone.
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="cta" size="lg" asChild>
              <a href="/documents/KIC-Investment-Deck-2026.pptx" download>
                <Download className="mr-1" />
                Download Investment Deck
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-1" />
                Contact Our Team
              </a>
            </Button>
          </div>

          <div
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { value: "62", label: "Hectares" },
              { value: "5", label: "Development Phases" },
              { value: "4", label: "Top STEM Institutions" },
              { value: "7.5%", label: "GDP Growth p.a." },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-kic-gold">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-white/60 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-kic-gold/70 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
