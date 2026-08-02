import { FileText, DollarSign, Lock, Calculator } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import FeatureCard from "@/components/common/FeatureCard";
import AnimatedSection from "@/components/common/AnimatedSection";
import StaggeredGrid from "@/components/common/StaggeredGrid";

const FundDetailsSection = () => {
  const fundDetails = [
    {
      icon: DollarSign,
      title: "Minimum Investment",
      description: "RWF 500,000 initial subscription with flexible additional investment options. Open to individuals, institutions, and diaspora investors."
    },
    {
      icon: Calculator,
      title: "Fees & Charges",
      description: "Management fee: 2.5% of AUM annually. Performance fee: 15% on returns above benchmark (91-day T-Bill + 2%). Zero redemption fees."
    },
    {
      icon: Lock,
      title: "Liquidity & Lock-in",
      description: "Open-ended fund with daily NAV calculation. Certain investments may have lock-in periods for medium to long-term projects. Minimum 20% held in liquid instruments."
    },
    {
      icon: FileText,
      title: "Regulatory Compliance",
      description: "Fully licensed and regulated by the Capital Market Authority of Rwanda. Audited annually with transparent quarterly reporting to all unitholders."
    }
  ];

  return (
    <AnimatedSection id="fund-details" bgColor="background" animation="fade-in-blur">
      <SectionHeader 
        title="Fund Details & Terms" 
        subtitle="Transparent pricing, flexible investment options, and full regulatory compliance ensure your investment is secure and professionally managed."
      />

      <StaggeredGrid 
        columns={2} 
        className="px-4"
        staggerDelay={200}
      >
        {fundDetails.map((detail, index) => (
          <FeatureCard
            key={index}
            icon={detail.icon}
            title={detail.title}
            description={detail.description}
            size="lg"
            variant="default"
          />
        ))}
      </StaggeredGrid>

      <div className="mt-12 bg-card rounded-2xl p-8 shadow-lg mx-4 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Investment Allocations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-3 h-3 bg-citisquare-gold rounded-full mr-3 mt-1"></div>
              <div>
                <p className="font-semibold text-foreground">Real Estate: 30-40%</p>
                <p className="text-sm text-muted-foreground">Prime developments and commercial properties</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-3 h-3 bg-citisquare-gold rounded-full mr-3 mt-1"></div>
              <div>
                <p className="font-semibold text-foreground">Fixed Income: 30-40%</p>
                <p className="text-sm text-muted-foreground">Bonds, treasury bills, and commercial papers</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-3 h-3 bg-citisquare-gold rounded-full mr-3 mt-1"></div>
              <div>
                <p className="font-semibold text-foreground">Green Energy: 10-20%</p>
                <p className="text-sm text-muted-foreground">Renewable and sustainable energy projects</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-3 h-3 bg-citisquare-gold rounded-full mr-3 mt-1"></div>
              <div>
                <p className="font-semibold text-foreground">Agro-Processing: 10-20%</p>
                <p className="text-sm text-muted-foreground">Export-focused and food security ventures</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-6 text-center italic">
          Minimum 20% maintained in liquid money market instruments for redemptions and stability
        </p>
      </div>
    </AnimatedSection>
  );
};

export default FundDetailsSection;
