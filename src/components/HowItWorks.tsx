
import React from 'react';

const steps = [
  {
    number: 1,
    title: "Tell Us About Your Baby",
    description: "Easy questionnaire about your baby and current sleep situation"
  },
  {
    number: 2,
    title: "Get Your Custom Plan",
    description: "AI analyzes your situation and creates a personalized sleep training approach"
  },
  {
    number: 3,
    title: "Implement With Support",
    description: "Follow your plan with 24/7 guidance from your AI sleep consultant"
  },
  {
    number: 4,
    title: "Track Progress & Adapt",
    description: "Log sleep patterns and receive real-time adjustments as your baby progresses"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dreamy-purple mb-4">Your Path to Better Sleep</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple process helps you transform sleepless nights into peaceful rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="bg-white rounded-lg p-6 shadow-md text-center gradient-bg card-hover"
            >
              <div className="w-12 h-12 bg-dreamy-purple text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-dreamy-purple mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
