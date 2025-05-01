
import React from 'react';
import { Check } from 'lucide-react';

const painPoints = [
  "Endless night wakings leaving you exhausted",
  "Inconsistent nap schedules disrupting your day",
  "Bedtime battles that drain everyone's energy",
  "Conflicting advice from family, friends, and internet searches",
  "Expensive consultants with long waiting lists"
];

const PainPoints: React.FC = () => {
  return (
    <section className="py-16 bg-dreamy-lightpurple/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dreamy-purple mb-4">Tired of Being Tired?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            You're not alone. Many parents struggle with these common sleep challenges:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md flex items-start space-x-4 card-hover"
            >
              <div className="bg-dreamy-purple rounded-full p-1 flex-shrink-0">
                <Check className="h-5 w-5 text-white" />
              </div>
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
