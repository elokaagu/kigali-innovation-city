import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import TickerSection from "@/components/sections/TickerSection";
import AboutSection from "@/components/sections/AboutSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FundSection from "@/components/sections/FundSection";
import FundDetailsSection from "@/components/sections/FundDetailsSection";
import InvestmentStrategySection from "@/components/sections/InvestmentStrategySection";
import WhyKigaliSection from "@/components/sections/WhyKigaliSection";
import ProjectsShowcaseSection from "@/components/sections/ProjectsShowcaseSection";
import PartnersSection from "@/components/sections/PartnersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";
import MobileCTA from "@/components/layout/MobileCTA";
import SectionSeparator from "@/components/ui/SectionSeparator";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TickerSection />
      <div
        className="animate-fade-in"
        style={{ animationDelay: "1.2s", animationFillMode: "both" }}
      >
        <SectionSeparator variant="subtle" />
      </div>
      <AboutSection />
      <SectionSeparator />
      <BenefitsSection />
      <SectionSeparator />
      <FundSection />
      <SectionSeparator />
      <FundDetailsSection />
      <SectionSeparator />
      <InvestmentStrategySection />
      <SectionSeparator variant="subtle" />
      <WhyKigaliSection />
      <SectionSeparator />
      <ProjectsShowcaseSection />
      <SectionSeparator variant="gradient" />
      <PartnersSection />
      <SectionSeparator variant="gradient" />
      <TestimonialsSection />
      <SectionSeparator variant="subtle" />
      <FAQSection />
      <FooterSection />
      <MobileCTA />
    </div>
  );
}
