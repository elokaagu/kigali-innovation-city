"use client";

import { Building2, FlaskConical, Cpu, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/common/SectionHeader";
import StatsGrid from "@/components/common/StatsGrid";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { kigaliTechTower } from "@/data/kigali-tech-tower";

const featureIcons = [FlaskConical, Cpu, Building2, Users];

export default function KigaliTechTowerSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="kigali-tech-tower"
      className={`py-12 sm:py-16 lg:py-20 bg-citisquare-grey-light transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Flagship Development"
          title={kigaliTechTower.name}
          subtitle={kigaliTechTower.overview}
        />

        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10 -mt-8 px-4">
          {kigaliTechTower.kicContext}
        </p>

        <StatsGrid stats={kigaliTechTower.kicStats} columns={4} className="mb-16 px-4" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Mixed-Use Development</h3>
            <ul className="space-y-3">
              {kigaliTechTower.mixedUseComponents.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-citisquare-gold rounded-full mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Project Objectives</h3>
            <ul className="space-y-3">
              {kigaliTechTower.objectives.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-citisquare-gold rounded-full mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-foreground text-center mb-8">Special Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {kigaliTechTower.specialFeatures.map((feature, index) => {
            const Icon = featureIcons[index] ?? Building2;
            return (
              <Card key={feature.title} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-citisquare-gold/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-citisquare-gold" />
                    </div>
                    <h4 className="font-bold text-foreground">{feature.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {feature.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-citisquare-gold">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Target Tenant Profile</h3>
            <ul className="space-y-2">
              {kigaliTechTower.targetTenants.map((tenant) => (
                <li key={tenant} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-citisquare-gold font-bold">→</span>
                  {tenant}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Unique Value Proposition</h3>
            <div className="space-y-4">
              {kigaliTechTower.valuePropositions.map((vp) => (
                <div key={vp.audience} className="bg-card rounded-lg p-4 shadow-sm">
                  <p className="font-semibold text-citisquare-gold text-sm mb-1">{vp.audience}</p>
                  <p className="text-muted-foreground text-sm">{vp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
