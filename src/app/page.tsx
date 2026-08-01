import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import VisionSection from "@/components/sections/VisionSection";
import MasterPlanSection from "@/components/sections/MasterPlanSection";
import WhyRwandaSection from "@/components/sections/WhyRwandaSection";
import OpportunitiesSection from "@/components/sections/OpportunitiesSection";
import AcademicSection from "@/components/sections/AcademicSection";
import TenantsSection from "@/components/sections/TenantsSection";
import ShareholdersSection from "@/components/sections/ShareholdersSection";
import IncentivesSection from "@/components/sections/IncentivesSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import MobileCTA from "@/components/layout/MobileCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <VisionSection />
        <MasterPlanSection />
        <WhyRwandaSection />
        <OpportunitiesSection />
        <AcademicSection />
        <TenantsSection />
        <IncentivesSection />
        <ShareholdersSection />
        <ContactSection />
      </main>
      <FooterSection />
      <MobileCTA />
    </div>
  );
}
