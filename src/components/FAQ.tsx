
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How soon can we expect to see results?",
    answer: "Most families see significant improvements within 3-7 days of consistently implementing their personalized sleep plan. However, every baby is unique, and some may take a bit longer to adjust to new sleep routines."
  },
  {
    question: "What sleep training methods does the AI use?",
    answer: "Our AI has been trained on multiple evidence-based sleep training methods including gentle approaches, gradual withdrawal, chair method, and more structured methods. Your personalized plan will recommend the approach best suited to your baby's temperament and your parenting philosophy."
  },
  {
    question: "Is this appropriate for my baby's age?",
    answer: "DreamyBaby is designed for babies from 4 months to 3 years old. For younger babies, we focus on establishing healthy sleep foundations rather than formal sleep training. The AI adjusts recommendations based on your child's specific developmental stage."
  },
  {
    question: "What if the initial plan doesn't work for us?",
    answer: "Our AI continually learns from your feedback and your baby's progress. If the initial approach isn't working, the system will suggest modifications or alternative methods based on your baby's responses and your comfort level."
  },
  {
    question: "How does the AI differ from a human consultant?",
    answer: "While human consultants offer empathy and personal experience, our AI provides 24/7 availability, consistency in advice, and the ability to process thousands of similar cases to predict what might work best for your family. The AI was trained by certified pediatric sleep consultants to ensure quality advice."
  },
  {
    question: "Can I switch methods if one isn't working for us?",
    answer: "Absolutely. Our system is designed to be flexible. You can provide feedback at any time, and the AI will adjust your plan or suggest alternative approaches that might work better for your family situation."
  },
  {
    question: "Is the data from my baby used to train the AI further?",
    answer: "We take your privacy seriously. Your data is used only to personalize your experience and improve your baby's sleep plan. We may use anonymized, aggregate data to improve our algorithms, but no personally identifiable information is ever shared or used in AI training without explicit consent."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dreamy-purple mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our AI sleep consultant.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-dreamy-purple hover:text-dreamy-purple/80 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
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
