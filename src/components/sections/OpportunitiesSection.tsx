"use client";

import Link from "next/link";
import {
  Building,
  Hotel,
  Home,
  Microscope,
  Server,
  ShoppingBag,
  Users,
  FlaskConical,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/common/SectionHeader";
import { opportunities } from "@/data/opportunities";

const iconMap: Record<string, LucideIcon> = {
  "nsc2-mixed-use": ShoppingBag,
  "retail-nsc": ShoppingBag,
  "international-hotel": Hotel,
  "student-accommodation": Users,
  "data-center": Server,
  "commercial-office": Building,
  residential: Home,
  "vaccine-pharma-research": FlaskConical,
};

export default function OpportunitiesSection() {
  return (
    <section id="opportunities" className="py-20 sm:py-28 bg-kic-grey-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Invest"
          title="Investment Opportunities"
          subtitle="A variety of development options across KIC's 62-hectare masterplan, each with captive internal demand and government-backed incentives."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {opportunities.map((opp) => {
            const Icon = iconMap[opp.slug] ?? Microscope;
            return (
              <Card
                key={opp.slug}
                className="hover:shadow-lg transition-all hover:-translate-y-0.5 border-0 shadow-md group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-kic-dark flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 text-kic-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg mb-1">{opp.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {opp.plotId ? `Plot ${opp.plotId}` : opp.category} · {opp.category}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {opp.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {opp.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="gold">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild className="group-hover:border-kic-gold group-hover:text-kic-dark">
                    <Link href={`/opportunities/${opp.slug}`}>
                      View Details
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
