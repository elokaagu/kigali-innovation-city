import { Building2, Factory, FlaskConical, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/common/SectionHeader";

const tenants = [
  {
    icon: Factory,
    name: "Cooper Pharma",
    category: "Pharmaceutical Manufacturing",
    description:
      "First pharma manufacturing facility in Rwanda. Produces beta-lactam/antibiotics with 2.3 million bottles per year capacity. Key player across Africa and the Middle East.",
    highlight: "1st in Rwanda",
  },
  {
    icon: Building2,
    name: "Kofisi Building",
    category: "Commercial Office",
    description:
      "A-grade commercial office space, fully leased. LEED Gold certified construction. Premium workspace serving KIC's growing corporate tenant base.",
    highlight: "LEED Gold",
  },
  {
    icon: FlaskConical,
    name: "Science & Technology Center",
    category: "Innovation Hub",
    description:
      "Auditorium, retail space, university exhibition, and temporary exhibition facilities. A landmark destination within the KIC masterplan.",
    highlight: "Landmark Asset",
  },
  {
    icon: Award,
    name: "Infrastructure Works",
    category: "Shared Infrastructure",
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
            <Card key={tenant.name} className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-kic-dark flex items-center justify-center shrink-0">
                    <tenant.icon className="h-6 w-6 text-kic-gold" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-semibold">{tenant.name}</h3>
                      <Badge variant="gold">{tenant.highlight}</Badge>
                    </div>
                    <p className="text-sm text-kic-gold font-medium">
                      {tenant.category}
                    </p>
                  </div>
                </div>
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
