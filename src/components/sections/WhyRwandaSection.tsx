import {
  Globe,
  Plane,
  TrendingUp,
  Users,
  Wifi,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/common/SectionHeader";

const reasons = [
  {
    icon: TrendingUp,
    title: "Fastest Growing Economy",
    description:
      "6th fastest growing economy in Africa at 7.5% p.a. since 2007. GDP grew 6.5x from 2006 to 2022.",
    stat: "7.5%",
    statLabel: "Annual GDP Growth",
  },
  {
    icon: Globe,
    title: "Regional Market Access",
    description:
      "Access to AfCFTA (1.3bn market), COMESA, and EAC free trade agreements. Uniquely positioned to serve Uganda, Tanzania, Burundi, and DRC.",
    stat: "1.3B",
    statLabel: "AfCFTA Market",
  },
  {
    icon: ShieldCheck,
    title: "Investment Environment",
    description:
      "#2 in Africa for ease of doing business. 7-year CIT holiday for $50M+ investments. No restrictions on foreign ownership or capital flows.",
    stat: "#2",
    statLabel: "Ease of Business in Africa",
  },
  {
    icon: Users,
    title: "Young, Educated Talent",
    description:
      "65% of population under 30. ~50K higher education graduates annually. Host to 4 of Africa's top STEM institutions.",
    stat: "65%",
    statLabel: "Population Under 30",
  },
  {
    icon: Plane,
    title: "Global Connectivity",
    description:
      "Direct flights to London, Dubai, Mumbai, Johannesburg, Nairobi, and more. 1h25 to Nairobi, overcoming landlockedness.",
    stat: "15+",
    statLabel: "Direct Flight Connections",
  },
  {
    icon: Wifi,
    title: "Digital Ready",
    description:
      "95% 4G LTE network coverage, 7,000 km fibre. 1st in EAC for network readiness. Progressive technology governance.",
    stat: "95%",
    statLabel: "4G LTE Coverage",
  },
];

export default function WhyRwandaSection() {
  return (
    <section id="why-rwanda" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Rwanda"
          title="Connecting Africa, Open to the World"
          subtitle="Rwanda offers a stable, business-friendly environment with strategic access to African and global markets through the Kigali International Financial Centre."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <Card
              key={reason.title}
              className="group hover:border-kic-gold/30 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-kic-green/15 flex items-center justify-center">
                    <reason.icon className="h-5 w-5 text-kic-dark" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-kic-gold">
                      {reason.stat}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {reason.statLabel}
                    </p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-kic-dark to-kic-dark/90 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Kigali International Financial Centre
          </h3>
          <p className="text-white/70 max-w-3xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            KIFC connects businesses to investors seeking opportunities across
            Africa. Open a bank account in under 5 days, access multiple legal
            structures, and benefit from the largest network of double taxation
            avoidance agreements in Africa.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              "<5 days",
              "<6 months",
              "No restrictions",
              "Pan-African hub",
            ].map((item) => (
              <div
                key={item}
                className="px-4 py-3 rounded-lg bg-white/10 text-white text-sm font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
