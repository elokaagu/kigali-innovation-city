"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const faqs = [
    {
      id: "item-1",
      question: "What is Citisquare Africa?",
      answer:
        "Citisquare Africa is a real estate investment consultancy organisation on a mission to democratise access to legally structured, high-return, capital-growth real estate opportunities across the continent. We specialise in project origination, structuring, and development — identifying high-potential opportunities, structuring them into sound investable vehicles, and guiding them through to delivery.",
    },
    {
      id: "item-2",
      question: "What services does Citisquare Africa provide?",
      answer:
        "We provide end-to-end real estate investment consultancy: project origination (identifying high-potential assets), structuring (creating legally sound, investable vehicles), and development (guiding projects through to delivery). We work with individual investors, institutions, and development finance partners across Africa.",
    },
    {
      id: "item-3",
      question: "What types of projects does Citisquare Africa work on?",
      answer:
        "Our portfolio includes flagship developments such as Vision City 2 in Kigali and Kigali Innovation City in Rwanda, alongside opportunities across Nigeria's real estate and financial services ecosystem. We focus on high-return, capital-growth real estate with strong governance structures.",
    },
    {
      id: "item-4",
      question: "Who can invest with Citisquare Africa?",
      answer:
        "We work with individual investors, institutions, family offices, and development finance partners. Whether you are a diaspora investor seeking structured co-ownership or an institutional partner looking for origination and development mandates, our team can guide you through the process.",
    },
    {
      id: "item-5",
      question: "What makes Citisquare Africa different?",
      answer:
        "We combine project origination, legal structuring, and development delivery under one governance-led consultancy — backed by strong partnerships across Nigeria's real estate and financial services ecosystem. Every opportunity is structured for transparency and investor protection.",
    },
    {
      id: "item-6",
      question: "Can international investors participate?",
      answer:
        "Yes. We specialise in serving African diaspora investors and international partners, providing comprehensive support with legal documentation, project due diligence, and ongoing investment oversight.",
    },
    {
      id: "item-7",
      question: "How do I get started?",
      answer:
        "Download our investment deck to review current opportunities, then contact us through our partnership form. Our team will walk you through available projects and co-investment structures.",
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
            Get answers to the most common questions about working with Citisquare Africa
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
          <p className="text-muted-foreground mb-4 text-center">Still have questions?</p>
          <div className="flex justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScf_0y5IZzTQWGdKB9XqyYRDZr-Rrer3VCXE80Z6wKdK4Mwbg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-citisquare-gold text-white px-6 py-3 rounded-md font-medium hover:bg-citisquare-gold/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
