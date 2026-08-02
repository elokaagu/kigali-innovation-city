"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/kigali-skyline.jpg"
        alt="Kigali skyline at dusk"
        fill
        className="object-cover object-center scale-105"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-citisquare-dark/80 via-citisquare-dark/65 to-citisquare-dark/90" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, hsl(var(--citisquare-gold) / 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--citisquare-green) / 0.15) 0%, transparent 40%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-citisquare-gold/20 text-citisquare-gold border border-citisquare-gold/30 backdrop-blur-sm animate-fade-in-up">
            Africa&apos;s Investment Platform · February 2026
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up drop-shadow-lg">
            Citisquare
          </h1>

          <p
            className="text-xl sm:text-2xl md:text-3xl text-citisquare-gold mb-4 font-medium animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Connecting Global Capital to Africa&apos;s Highest-Impact Opportunities
          </p>

          <p
            className="text-base sm:text-lg md:text-xl text-white/85 mb-6 max-w-2xl mx-auto animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Citisquare is an investment platform unlocking world-class development
            opportunities across Africa — from mixed-use innovation hubs to
            commercial, hospitality, and education assets.
          </p>

          <p
            className="text-sm sm:text-base text-white/70 mb-10 max-w-xl mx-auto animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.25s" }}
          >
            <span className="text-citisquare-gold font-semibold">Flagship project:</span>{" "}
            Kigali Innovation City — a 62-hectare mixed-use innovation hub in
            Rwanda&apos;s premier economic zone.
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="cta" size="lg" asChild>
              <a href="/documents/KIC-Investment-Deck-2026.pptx" download>
                <Download className="mr-1" />
                Download KIC Investment Deck
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 hover:text-white bg-white/5 backdrop-blur-sm"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-1" />
                Contact Our Team
              </a>
            </Button>
          </div>

          <div
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { value: "62", label: "Hectares (KIC)" },
              { value: "5", label: "Development Phases" },
              { value: "4", label: "Top STEM Institutions" },
              { value: "7.5%", label: "GDP Growth p.a." },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <p className="text-2xl sm:text-3xl font-bold text-citisquare-gold">
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-citisquare-gold/80 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
