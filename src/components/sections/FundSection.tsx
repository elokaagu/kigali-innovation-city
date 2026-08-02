import { Building, Shield, TrendingUp, CheckCircle, Users } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import FeatureCard from "@/components/common/FeatureCard";

const FundSection = () => {
  const structureComponents = [
    {
      icon: Building,
      title: "Trust Structure",
      description: "The unit trust is typically established as a trust. Investors (also known as unitholders) buy units in the trust, which represents their share of the total investments made by the trust."
    },
    {
      icon: Users,
      title: "Sponsor (Citisquare Africa Ltd)",
      description: "Promoter of the fund with RWF 100M seed capital, responsible for strategic direction and investor relations."
    },
    {
      icon: CheckCircle,
      title: "Trustee (BPR PLC)",
      description: "Independent oversight ensuring compliance with the Trust Deed, protecting unitholders' interests, and supervising fund operations."
    },
    {
      icon: Shield,
      title: "Custodian (Bank of Kigali PLC)",
      description: "Securely holds and safeguards the Fund's assets, ensuring protection against misuse or misappropriation."
    },
    {
      icon: TrendingUp,
      title: "Fund Manager (BK Capital Ltd)",
      description: "Licensed fund manager executing investment strategies, managing portfolio allocation, and providing performance reports. Management fee: 2.5% of AUM annually, plus 15% performance fee on returns above benchmark."
    }
  ];

  return (
    <section id="fund" className="py-12 sm:py-16 lg:py-20 bg-citisquare-grey-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader 
        title="The Fund" 
        subtitle="The RiseAfric Unit Trust Fund is a CMA-licensed collective investment scheme that pools resources from individuals, corporates, institutions, and diaspora investors into a professionally managed portfolio of diversified assets across Rwanda's high-growth sectors."
      />
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-8">
        <strong>Open-ended structure</strong> with daily NAV calculation | <strong>Minimum investment:</strong> RWF 500,000
      </p>
      <p className="text-base text-muted-foreground max-w-3xl mx-auto text-center mb-16">
        The Fund operates under a Trust Deed with BPR PLC as Trustee, BK Capital Ltd as Fund Manager, and Bank of Kigali PLC as Custodian, ensuring professional management, security of assets, and investor protection in full compliance with the Capital Market Authority of Rwanda.
      </p>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-citisquare-gold mb-8 text-center">
            1. STRUCTURE
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {structureComponents.map((component, index) => (
              <FeatureCard
                key={index}
                icon={component.icon}
                title={component.title}
                description={component.description}
                variant="dark"
                size="lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundSection;