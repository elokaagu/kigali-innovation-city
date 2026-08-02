import { Shield, CheckCircle, Building, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CertificatesRegistrationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const registrations = [
    {
      number: "1",
      icon: Building,
      title: "Multi-Jurisdictional Registration",
      description: "Registered in Nigeria, Rwanda and the USA.",
      highlight: "International Presence"
    },
    {
      number: "2", 
      icon: Shield,
      title: "Anti Money Laundering Compliance",
      description: "Registered with the Special Control Unit Against Money Laundering (SCUML).",
      highlight: "Financial Security"
    },
    {
      number: "3",
      icon: CheckCircle,
      title: "Tourism Development Authority",
      description: "Registered with the Nigerian Tourism Development Authority.",
      highlight: "Industry Recognition"
    },
    {
      number: "4",
      icon: Users,
      title: "Chamber of Commerce Membership",
      description: "Member of Nigerian Association of Chambers of Commerce, Industry, Mines, and Agriculture (NACCIMA).",
      highlight: "Professional Standing"
    }
  ];

  return (
    <section 
      ref={ref}
      id="certificates-registrations" 
      className={`py-12 sm:py-16 lg:py-20 bg-citisquare-dark text-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-citisquare-gold mb-8" style={{ letterSpacing: 'var(--font-display-tracking)' }}>
            Certificates and Registrations
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Our comprehensive regulatory compliance and professional memberships demonstrate our commitment 
            to transparency, security, and industry best practices across multiple jurisdictions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {registrations.map((registration, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-none shadow-lg bg-citisquare-grey-light">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-citisquare-gold/20 rounded-xl flex items-center justify-center group-hover:bg-citisquare-gold/30 transition-colors mb-4">
                      <span className="text-2xl font-bold text-citisquare-gold">{registration.number}</span>
                    </div>
                    <div className="w-12 h-12 bg-citisquare-gold/10 rounded-lg flex items-center justify-center">
                      <registration.icon className="h-6 w-6 text-citisquare-gold" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-citisquare-gold mb-2">{registration.highlight}</div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{registration.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{registration.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/5 rounded-xl">
            <Shield className="h-12 w-12 text-citisquare-gold mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Regulatory Compliance</h4>
            <p className="text-white/70 text-sm">Full compliance with international anti money laundering regulations</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl">
            <Building className="h-12 w-12 text-citisquare-gold mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Multi-Jurisdictional</h4>
            <p className="text-white/70 text-sm">Operations across Nigeria, Rwanda, and USA with proper registrations</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl">
            <Users className="h-12 w-12 text-citisquare-gold mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Industry Recognition</h4>
            <p className="text-white/70 text-sm">Active membership in leading business and tourism associations</p>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center bg-citisquare-gold/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Built on Trust and Transparency
          </h3>
          <p className="text-lg text-white/80 mb-6 max-w-3xl mx-auto">
            Our extensive registrations and certifications across multiple jurisdictions provide investors 
            with the confidence and security needed for international investment opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-citisquare-gold">3</div>
              <div className="text-sm text-white/70">Countries</div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-citisquare-gold">4</div>
              <div className="text-sm text-white/70">Key Registrations</div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-citisquare-gold">100%</div>
              <div className="text-sm text-white/70">Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesRegistrationsSection;