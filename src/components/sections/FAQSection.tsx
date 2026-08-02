"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { theApex } from "@/data/the-apex";
import { kigaliTechTower } from "@/data/kigali-tech-tower";
import { COMPANY_NAME } from "@/data/company";

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const faqs = [
    {
      id: "item-1",
      question: `What is ${COMPANY_NAME}?`,
      answer:
        "Citisquare Africa is a real estate investment consultancy focused on project origination, structuring, and development — building landmark, institutional-grade assets in Africa's most strategically positioned economic zones, led by Dr Uche Nnama.",
    },
    {
      id: "item-2",
      question: "What is The Apex?",
      answer: `${theApex.description} Total project cost: ${theApex.totalCost}. Knight Frank independent feasibility validates projected value at completion of ${theApex.projectedValue}. ${theApex.structure}.`,
    },
    {
      id: "item-3",
      question: "What is Kigali Tech Tower?",
      answer: kigaliTechTower.overview,
    },
    {
      id: "item-4",
      question: "Why is the KIC main entrance location significant?",
      answer:
        "The Apex sits at the sole access point to KIC's 61-hectare campus within the RDB Free Trade Zone. Every institution, investor, and visitor passes it first. SEZ tax incentives structurally support tenant rent capacity — a competitive advantage no building outside the zone can replicate.",
    },
    {
      id: "item-5",
      question: "What are the five revenue streams?",
      answer: theApex.revenueStreams.map((s) => `${s.name} (${s.detail})`).join("; "),
    },
    {
      id: "item-6",
      question: "Who are the target investors?",
      answer:
        "DFIs and impact funds (Africa50, IFC, BADEA), PE and infrastructure investors, sovereign and pension funds, and structured diaspora co-investment vehicles. Anchor tenant LOI precedes equity conversations.",
    },
    {
      id: "item-7",
      question: "How do I get started?",
      answer:
        "Download the investor deck or contact our team through the partnership form. We provide full project materials including Knight Frank feasibility validation and capital structure overview.",
    },
  ];

  return (
    <section
      ref={ref}
      id="faq"
      className={`py-12 sm:py-16 lg:py-24 bg-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Investor questions about The Apex and Kigali Tech Tower
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-semibold text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScf_0y5IZzTQWGdKB9XqyYRDZr-Rrer3VCXE80Z6wKdK4Mwbg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-citisquare-gold text-white px-6 py-3 rounded-md font-medium hover:bg-citisquare-gold/90 transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
