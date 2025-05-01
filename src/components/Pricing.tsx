
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const features = [
  "Personalized sleep plan",
  "Adaptive recommendations",
  "24/7 AI support",
  "Sleep tracking tools",
  "Progress reports",
  "Plan adjustments as baby grows"
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-dreamy-lightpurple/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dreamy-purple mb-4">Affordable Sleep Solutions for Every Family</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Invest in better sleep for your entire family at a fraction of the cost of traditional sleep consultants.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-dreamy-purple text-white p-6 text-center">
              <h3 className="text-2xl font-bold">Complete Package</h3>
              <div className="mt-4 flex items-center justify-center">
                <span className="text-4xl font-bold">$49</span>
                <span className="ml-2 text-dreamy-lightpurple">for 60 days</span>
              </div>
              <p className="mt-2 text-sm opacity-80">One-time payment</p>
            </div>
            
            <div className="p-6">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-dreamy-purple" />
                    </div>
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full mt-8 bg-dreamy-purple hover:bg-dreamy-purple/90 py-6 text-lg">
                Create My Sleep Plan Now
              </Button>
              
              <p className="mt-4 text-sm text-center text-gray-500">
                60-day money-back guarantee if you're not completely satisfied
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
