import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import TickerSection from "@/components/sections/TickerSection";
import AboutSection from "@/components/sections/AboutSection";
import InvestmentHighlightsSection from "@/components/sections/InvestmentHighlightsSection";
import AlphaThesisSection from "@/components/sections/AlphaThesisSection";
import MarketContextSection from "@/components/sections/MarketContextSection";
import TheApexSection from "@/components/sections/TheApexSection";
import KigaliTechTowerSection from "@/components/sections/KigaliTechTowerSection";
import PartnersSection from "@/components/sections/PartnersSection";
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
      <SectionSeparator variant="subtle" />
      <AboutSection />
      <SectionSeparator />
      <InvestmentHighlightsSection />
      <SectionSeparator />
      <AlphaThesisSection />
      <SectionSeparator variant="subtle" />
      <MarketContextSection />
      <SectionSeparator />
      <TheApexSection />
      <SectionSeparator variant="gradient" />
      <KigaliTechTowerSection />
      <SectionSeparator variant="gradient" />
      <PartnersSection />
      <SectionSeparator variant="subtle" />
      <FAQSection />
      <FooterSection />
      <MobileCTA />
    </div>
  );
}
