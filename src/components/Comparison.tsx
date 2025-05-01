
import React from 'react';
import { Check } from 'lucide-react';

const comparisonData = [
  { feature: "Personalized Plans", ai: true, traditional: true },
  { feature: "24/7 Availability", ai: true, traditional: false },
  { feature: "Real-Time Adjustments", ai: true, traditional: false },
  { feature: "Cost Efficiency", ai: true, traditional: false },
  { feature: "Human Empathy", ai: false, traditional: true }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="comparison" className="py-16 bg-dreamy-lightblue/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dreamy-blue mb-4">Why Choose Our AI Solution?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI sleep consultant offers unique advantages over traditional methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-dreamy-purple mb-4">Personalization at Scale</h3>
            <p className="text-gray-600">Unlike generic advice, our AI crafts plans specific to your baby's unique circumstances.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-dreamy-purple mb-4">Immediate Support</h3>
            <p className="text-gray-600">No waiting for appointments; get instant answers and adjustments anytime.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-dreamy-purple mb-4">Cost-Effective</h3>
            <p className="text-gray-600">High-quality guidance without the premium price tag of traditional consultants.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-dreamy-purple mb-4">Consistency</h3>
            <p className="text-gray-600">AI ensures uniform advice, reducing confusion from conflicting human opinions.</p>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-dreamy-blue mb-4">Comparison: AI Consultant vs. Traditional Methods</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-dreamy-purple text-white">
              <tr>
                <th className="py-3 px-6 text-left">Feature</th>
                <th className="py-3 px-6 text-center">AI Consultant</th>
                <th className="py-3 px-6 text-center">Traditional Consultant</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {comparisonData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-4 px-6 font-medium">{item.feature}</td>
                  <td className="py-4 px-6 text-center">
                    {item.ai ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <svg className="h-5 w-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {item.traditional ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <svg className="h-5 w-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
