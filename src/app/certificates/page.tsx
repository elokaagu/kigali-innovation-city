import Navigation from "@/components/layout/Navigation";
import FooterSection from "@/components/sections/FooterSection";
import { Building, Shield, CheckCircle, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const registrations = [
  {
    number: "1",
    icon: Building,
    title: "Multi-Jurisdictional Registration",
    description: "Registered in Nigeria, Rwanda and the USA.",
    highlight: "International Presence",
  },
  {
    number: "2",
    icon: Shield,
    title: "Anti Money Laundering Compliance",
    description:
      "Registered with the Special Control Unit Against Money Laundering (SCUML).",
    highlight: "Financial Security",
  },
  {
    number: "3",
    icon: CheckCircle,
    title: "Tourism Development Authority",
    description: "Registered with the Nigerian Tourism Development Authority.",
    highlight: "Industry Recognition",
  },
  {
    number: "4",
    icon: Users,
    title: "Chamber of Commerce Membership",
    description:
      "Member of Nigerian Association of Chambers of Commerce, Industry, Mines, and Agriculture (NACCIMA).",
    highlight: "Professional Standing",
  },
];

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Certificates and Registrations
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
              Our comprehensive regulatory compliance and professional memberships
              demonstrate our commitment to transparency, security, and industry best
              practices across multiple jurisdictions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {registrations.map((registration) => (
              <Card
                key={registration.number}
                className="group hover:shadow-xl transition-all duration-300 border border-border/50 bg-card"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-citisquare-gold/10 rounded-2xl flex items-center justify-center group-hover:bg-citisquare-gold/20 transition-colors mb-4">
                        <span className="text-2xl font-bold text-citisquare-gold">
                          {registration.number}
                        </span>
                      </div>
                      <div className="w-12 h-12 bg-citisquare-gold/5 rounded-xl flex items-center justify-center">
                        <registration.icon className="h-6 w-6 text-citisquare-gold" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-citisquare-gold mb-2">
                        {registration.highlight}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        {registration.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {registration.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
