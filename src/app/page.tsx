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
import AnimatedSection from "@/components/common/AnimatedSection";
import ImageBand from "@/components/common/ImageBand";
import QuoteStrip from "@/components/common/QuoteStrip";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />

        <AnimatedSection>
          <VisionSection />
        </AnimatedSection>

        <ImageBand
          src="/images/kigali-innovation-city.jpeg"
          alt="Aerial view of Kigali Innovation City development"
          title="62 Hectares of Innovation"
          subtitle="Masterplanned by Surbana Jurong to international IFC performance standards"
        />

        <AnimatedSection delay={100}>
          <MasterPlanSection />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <WhyRwandaSection />
        </AnimatedSection>

        <QuoteStrip
          quote="Vision 2050 has to be about the future we choose, because we can, and because we deserve it."
          attribution="H.E. President Paul Kagame"
        />

        <AnimatedSection delay={100}>
          <OpportunitiesSection />
        </AnimatedSection>

        <ImageBand
          src="/images/vision-city-2-interior.png"
          alt="Modern commercial interior at Kigali Innovation City"
          title="World-Class Infrastructure"
          subtitle="LEED-certified buildings, bulk utilities, and shared community assets already operational"
        />

        <AnimatedSection delay={100}>
          <AcademicSection />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <TenantsSection />
        </AnimatedSection>

        <QuoteStrip
          quote="Kigali is positioning itself as a premier financial services hub in Africa — and KIC is its innovation engine."
          attribution="Kigali International Financial Centre"
        />

        <AnimatedSection delay={100}>
          <IncentivesSection />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <ShareholdersSection />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <ContactSection />
        </AnimatedSection>
      </main>
      <FooterSection />
      <MobileCTA />
    </div>
  );
}
