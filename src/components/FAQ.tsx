
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const faqItems = [
  {
    question: "How much time will automation save my business?",
    answer: "Most of our clients save 10-20 hours per week. For a small business owner or service provider, that's approximately 80 hours per month that you can redirect to high-value activities or simply enjoy more personal time. The exact amount depends on your current workflows, but we guarantee you'll see significant time savings."
  },
  {
    question: "How quickly will I see results from automation?",
    answer: "You'll see initial results within the first week of implementation. Our quick-win automations can be deployed within 48 hours, with full systems typically operational within 2-3 weeks. By the end of the first month, you'll see measurable time savings and operational improvements reflected in your business metrics."
  },
  {
    question: "What's the investment for automation services?",
    answer: "Our automation solutions start from $2,500 for targeted systems, with comprehensive business automation packages available. Most clients see a positive ROI within 30-60 days through time savings, increased capacity to take on more clients, and reduced errors. During your free strategy call, we'll provide a detailed quote based on your specific needs."
  },
  {
    question: "Do I need technical skills to use the automated systems?",
    answer: "Absolutely not. We design all our systems with user-friendly interfaces that require zero technical knowledge. Our team handles 100% of the technical setup, provides comprehensive training, and offers ongoing support. You'll be able to use your automation systems confidently after just one short training session."
  },
  {
    question: "What happens after the free strategy call?",
    answer: "After your call, we'll send you a detailed proposal outlining the specific automation solutions for your business, expected outcomes, implementation timeline, and investment options. There's no obligation to proceed, but if you choose to move forward, we can start implementation within 48 hours and have your first automation live within a week."
  }
];

const FAQ = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="section bg-gray-950 text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Common <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Get answers to the most frequently asked questions about our automation services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto glass-card p-6 mb-10">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                <AccordionTrigger className="text-left font-semibold text-lg text-white">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center">
          <div className="mb-4 text-xl font-medium">Still have questions? Get answers on your free strategy call</div>
          <Button 
            onClick={scrollToBooking}
            className="bg-zerotrigger-600 hover:bg-zerotrigger-700 text-white font-medium px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all animated-btn"
          >
            Book Your Free Call Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
