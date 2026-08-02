"use client";

import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/common/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import kigaliInnovationCityImage from "@/assets/kigali-innovation-city.jpeg";
import { theApex } from "@/data/the-apex";

export default function TheApexSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="the-apex"
      className={`py-12 sm:py-16 lg:py-20 bg-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="The Address Is the Asset"
          subtitle="The sole building at the main entrance to Kigali Innovation City — within the RDB Free Trade Zone. No competitor can replicate this position."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            {theApex.addressPoints.map((point) => (
              <div key={point.title} className="border-l-4 border-citisquare-gold pl-5">
                <h4 className="font-bold text-foreground mb-1">{point.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={kigaliInnovationCityImage.src}
              alt="Kigali Innovation City — The Apex development site"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">De-Risking Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {theApex.deRisking.map((item) => (
              <Card key={item.title} className="border-none shadow-md">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-citisquare-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-citisquare-gold/10 to-citisquare-gold-light/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-6">Key Credentials</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {theApex.credentials.map((cred) => (
              <div key={cred.label} className="text-center p-4">
                <Badge variant="outline" className="mb-2 border-citisquare-gold/30 text-citisquare-gold">
                  {cred.label}
                </Badge>
                <p className="text-sm text-muted-foreground">{cred.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
