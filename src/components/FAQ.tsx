
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How much does it cost to automate my business processes?",
    answer: "Our automation solutions are custom-built for your specific needs, so pricing varies based on complexity and scope. We offer packages starting from $2,500 for targeted automation systems, with ongoing support options available. During your free strategy call, we'll provide a detailed quote based on your requirements."
  },
  {
    question: "Do I need technical skills to use the automation systems?",
    answer: "Not at all. We design all our automation systems to be user-friendly with simple interfaces. Our team handles all the technical implementation and provides comprehensive training for you and your team. We also offer ongoing support to ensure you're getting the most from your systems."
  },
  {
    question: "How long does it take to implement automation solutions?",
    answer: "Most automation projects take between 2-6 weeks from our initial call to full implementation, depending on complexity. Simple workflows can be up and running in as little as a week, while more complex, multi-platform automations may take longer. We work efficiently to deliver value as quickly as possible."
  },
  {
    question: "What types of businesses do you work with?",
    answer: "We specialize in working with coaches, consultants, agencies, and service-based businesses. Our clients typically have established processes that are taking up too much time, experiencing scaling challenges, or looking to improve client experience through automation."
  },
  {
    question: "What can be automated in my business?",
    answer: "Almost any repetitive, rule-based process can be automated. Common areas include client onboarding, lead generation, email follow-ups, appointment scheduling, document creation, invoicing, reporting, data entry, and social media management. During our consultation, we'll identify the highest-impact automation opportunities for your specific business."
  },
  {
    question: "What automation tools do you use?",
    answer: "We're experts in leading automation platforms including Make (formerly Integromat), Zapier, n8n, and custom AI solutions. We select the best tools for your specific needs, ensuring they integrate seamlessly with your existing software and workflows."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Get answers to common questions about our automation services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
