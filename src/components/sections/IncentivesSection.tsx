import {
  Banknote,
  Building,
  Clapperboard,
  Cpu,
  Film,
  Plane,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/common/SectionHeader";

const incentiveCategories = [
  {
    icon: Banknote,
    title: "Financial Services",
    items: [
      "CIT & WHT exemptions on capital gains",
      "Deductions on CIT for holding companies & headquarters",
      "Fund management & FinTech incentives",
    ],
  },
  {
    icon: Cpu,
    title: "Innovation & Talent",
    items: [
      "Specialised Innovation Parks — reduced CIT (30% & 50% bands)",
      "Seed innovation fund & angel investor deductions",
      "Visas for entrepreneurs, digital nomads & students",
    ],
  },
  {
    icon: Building,
    title: "Construction Cost Reduction",
    items: [
      "Import duty & VAT exemptions",
      "Property tax exemptions",
      "CIT discounts for priority sectors",
    ],
  },
  {
    icon: Plane,
    title: "Anchor Investments",
    items: [
      "$50M+ investments in priority sectors",
      "Tax holidays & CIT discounts",
      "Additional immigration incentives for headquarters",
    ],
  },
  {
    icon: Film,
    title: "Film Production",
    items: [
      "VAT & WHT exemptions for local and international productions",
      "Defined eligibility: spend, budget, shooting duration",
      "Film visas for production teams",
    ],
  },
  {
    icon: Clapperboard,
    title: "General Investment",
    items: [
      "7-year CIT holiday for $50M+ investments",
      "15% preferential CIT for exporters & priority sectors",
      "0% tax for regional HQ in Rwanda",
    ],
  },
];

export default function IncentivesSection() {
  return (
    <section id="incentives" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Incentives"
          title="Priority Sectors & Investment Incentives"
          subtitle="Rwanda's new investment code offers comprehensive tax and regulatory incentives across nine priority sectors to lower the cost of doing business."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {incentiveCategories.map((cat) => (
            <Card key={cat.title} className="hover:border-kic-gold/20 transition-colors">
              <CardContent className="p-6">
                <div className="w-11 h-11 rounded-lg bg-kic-purple/10 flex items-center justify-center mb-4">
                  <cat.icon className="h-5 w-5 text-kic-purple" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-kic-purple mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
