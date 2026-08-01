import {
  Building2,
  GraduationCap,
  Leaf,
  Map,
  Shield,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/common/SectionHeader";

const pillars = [
  {
    icon: Map,
    title: "Masterplanned by Surbana Jurong",
    description:
      "Designed by a globally reputable urban and infrastructure firm, aligned with international IFC performance standards.",
  },
  {
    icon: Building2,
    title: "Live-Work-Play Cluster",
    description:
      "Complementary real estate asset classes — universities, offices, retail, hotels, and residential — creating balanced synergies.",
  },
  {
    icon: Leaf,
    title: "Green, Compact & Connected",
    description:
      "Zoning regulations and urban design guidelines ensure development aligns with the vision of becoming the Digital Heart of Africa.",
  },
  {
    icon: Shield,
    title: "Five-Phase Implementation",
    description:
      "Implemented in five phases, each designed to encourage synergies amongst different asset classes and tenants.",
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "Home to ALU, CMU, AIMS, and UoR — four of the continent's top STEM higher learning institutions.",
  },
  {
    icon: Users,
    title: "Community Asset Programme",
    description:
      "Centralized facilities management, parks, green spaces, and bulk utilities serving all tenants and residents.",
  },
];

const assetClasses = [
  "International Universities",
  "Student Accommodation",
  "Data Center",
  "Commercial Office",
  "Community Retail Center",
  "Science & Technology Museum",
  "Vaccine Research & Manufacturing",
  "Hotel & Conference Facility",
  "Community Recreation",
  "High-End Villas & Townhouses",
  "Apartments",
  "Light Industrial",
];

export default function VisionSection() {
  return (
    <section id="vision" className="py-20 sm:py-28 bg-kic-grey-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Vision"
          title="The Digital Heart of Africa"
          subtitle="Kigali Innovation City is a 62-hectare mixed-use development designed to become Africa's premier innovation and investment destination."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              className="border-0 shadow-md hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-kic-gold/15 flex items-center justify-center mb-4">
                  <pillar.icon className="h-6 w-6 text-kic-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-kic-dark rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            Asset Classes & Land Uses
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {assetClasses.map((asset) => (
              <span
                key={asset}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white/90 border border-white/10"
              >
                {asset}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
