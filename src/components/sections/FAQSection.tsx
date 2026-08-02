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
      question: "What is Citisquare?",
      answer: "Citisquare is a diversified Unit Trust Fund that connects diaspora investors with high-growth opportunities across multiple sectors in Rwanda, including real estate, green energy, agro-processing, and fixed income securities."
    },
    {
      id: "item-2", 
      question: "What sectors does Citisquare invest in?",
      answer: "Our diversified portfolio spans four key sectors: real estate developments, fixed income securities (bonds, treasury bills), green energy initiatives, and agro-processing ventures focused on export opportunities."
    },
    {
      id: "item-3",
      question: "What are the expected returns?",
      answer: "We target annual returns of 8 to 10% through our diversified Unit Trust Fund approach, which balances growth opportunities across multiple high-performing sectors in Rwanda's economy."
    },
    {
      id: "item-4",
      question: "How much is the minimum investment?",
      answer: "The minimum investment starts at $1,000 USD, making it accessible to diaspora investors looking to participate in Africa's growing markets across multiple asset classes."
    },
    {
      id: "item-5",
      question: "What makes Citisquare different from other investment options?",
      answer: "We offer exclusive access to Rwanda's diverse investment landscape through strategic partnerships with Bank of Kigali and BK Capital, professional fund management, and a focus on sustainable, impact-driven investments."
    },
    {
      id: "item-6",
      question: "Can international investors participate?",
      answer: "Absolutely! We specialize in serving African diaspora investors and provide comprehensive support with legal documentation, currency management, and ongoing investment oversight."
    },
    {
      id: "item-7",
      question: "How long is the investment period?",
      answer: "The typical investment period is 3-5 years, allowing sufficient time for diverse sector growth and portfolio appreciation while providing competitive returns across our multi-sector approach."
    },
    {
      id: "item-8",
      question: "What is the target fund size?",
      answer: "We are building toward a $5 million target fund size to ensure adequate diversification across sectors and optimal investment opportunities in Rwanda's fastest-growing asset classes."
    },
    {
      id: "item-9",
      question: "How is risk managed across different sectors?",
      answer: "Risk is managed through strategic diversification across real estate, fixed income, green energy, and agro-processing sectors, combined with professional fund management and partnerships with established financial institutions."
    },
    {
      id: "item-10",
      question: "How do I get started?",
      answer: "Simply download our investment deck, review our detailed prospectus, and contact us through our investment form to speak with our advisors about joining the RiseAfric Unit Trust Fund."
    }
  ];

  return (
    <section 
      ref={ref}
      id="faq" 
      className={`py-12 sm:py-16 lg:py-24 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about investing in Citisquare
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
                <span className="text-lg font-semibold text-foreground">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4 text-center">
            Still have questions?
          </p>
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