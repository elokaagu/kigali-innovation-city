import { Building, TrendingUp, Leaf, Wheat } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import FeatureCard from "@/components/common/FeatureCard";
import AnimatedSection from "@/components/common/AnimatedSection";
import StaggeredGrid from "@/components/common/StaggeredGrid";

const InvestmentStrategySection = () => {
  const investmentAllocations = [
    {
      icon: Building,
      title: "Real Estate Investments",
      description: "Strategic investments in prime real estate developments and commercial properties across Rwanda's growing markets."
    },
    {
      icon: TrendingUp,
      title: "Fixed Income Securities",
      description: "Income-generating assets including bonds, treasury bills, and commercial papers for stable returns."
    },
    {
      icon: Leaf,
      title: "Green Energy Initiatives",
      description: "Supporting sustainable energy solutions and renewable projects that drive environmental and economic growth."
    },
    {
      icon: Wheat,
      title: "Agro-Processing Development",
      description: "Dedicated investments in agro-processing ventures focused on export opportunities and food security."
    }
  ];

  return (
    <AnimatedSection id="investment-strategy" bgColor="background" animation="fade-in-blur">
      <SectionHeader 
        title="Investment Strategy" 
        subtitle="Our diversified financing strategy allocates funds across multiple high-growth sectors to maximize returns while managing risk through strategic diversification."
      />

      <StaggeredGrid 
        columns={2} 
        className="px-4"
        staggerDelay={200}
      >
        {investmentAllocations.map((allocation, index) => (
          <FeatureCard
            key={index}
            icon={allocation.icon}
            title={allocation.title}
            description={allocation.description}
            size="lg"
            variant="default"
          />
        ))}
      </StaggeredGrid>
    </AnimatedSection>
  );
};

export default InvestmentStrategySection;