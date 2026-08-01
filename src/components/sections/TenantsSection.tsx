import Image from "next/image";
import { Building2, Factory, FlaskConical, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/common/SectionHeader";
import InstitutionMark from "@/components/common/InstitutionMark";

const tenants = [
  {
    mark: "Cooper",
    icon: Factory,
    name: "Cooper Pharma",
    category: "Pharmaceutical Manufacturing",
    image: null as string | null,
    description:
      "First pharma manufacturing facility in Rwanda. Produces beta-lactam/antibiotics with 2.3 million bottles per year capacity. Key player across Africa and the Middle East.",
    highlight: "1st in Rwanda",
  },
  {
    mark: "Kofisi",
    icon: Building2,
    name: "Kofisi Building",
    category: "Commercial Office",
    image: "/images/vision-city-2-interior.png",
    description:
      "A-grade commercial office space, fully leased. LEED Gold certified construction. Premium workspace serving KIC's growing corporate tenant base.",
    highlight: "LEED Gold",
  },
  {
    mark: "STC",
    icon: FlaskConical,
    name: "Science & Technology Center",
    category: "Innovation Hub",
    image: "/images/kigali-innovation-city.jpeg",
    description:
      "Auditorium, retail space, university exhibition, and temporary exhibition facilities. A landmark destination within the KIC masterplan.",
    highlight: "Landmark Asset",
  },
  {
    mark: "Infra",
    icon: Award,
    name: "Infrastructure Works",
    category: "Shared Infrastructure",
    image: "/images/vision-city.jpg",
    description:
      "Phase 1 & 2 complete: roads, bulk utilities (power, internet, water, stormwater, sewerage, fire network), and landscaping. Extension to Phase 3 & 4 underway.",
    highlight: "Completed 2026",
  },
];

export default function TenantsSection() {
  return (
    <section id="tenants" className="py-20 sm:py-28 bg-kic-grey-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Ecosystem"
          title="Current Tenants & Infrastructure"
          subtitle="KIC is already home to operational tenants and completed infrastructure, demonstrating the project's viability and momentum."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tenants.map((tenant) => (
            <Card key={tenant.name} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all group">
              {tenant.image && (
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={tenant.image}
                    alt={tenant.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kic-dark/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <InstitutionMark abbr={tenant.mark} size="sm" />
                  </div>
                </div>
              )}
              <CardContent className={`p-6 ${!tenant.image ? "pt-6" : ""}`}>
                {!tenant.image && (
                  <div className="flex items-center gap-3 mb-4">
                    <InstitutionMark abbr={tenant.mark} size="md" />
                    <tenant.icon className="h-5 w-5 text-kic-gold ml-auto" />
                  </div>
                )}
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <h3 className="text-lg font-semibold">{tenant.name}</h3>
                  <Badge variant="gold">{tenant.highlight}</Badge>
                </div>
                <p className="text-sm text-kic-gold font-medium mb-3">{tenant.category}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tenant.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
