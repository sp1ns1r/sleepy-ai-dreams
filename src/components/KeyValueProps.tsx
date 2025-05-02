
import React from 'react';
import { Clock, DollarSign, Check, MessageCircle } from 'lucide-react';

const valueProps = [
  {
    title: "Fast Results",
    description: "Most families see improvement within 3-5 days of consistent implementation",
    icon: <Clock className="h-6 w-6 text-dreamy-purple" />
  },
  {
    title: "24/7 Support",
    description: "Instant guidance whenever you need it, day or night",
    icon: <MessageCircle className="h-6 w-6 text-dreamy-purple" />
  },
  {
    title: "Personalized Plan",
    description: "Custom sleep strategies based on your baby's unique temperament",
    icon: <Check className="h-6 w-6 text-dreamy-purple" />
  },
  {
    title: "Affordable Solution",
    description: "Up to 90% less than traditional sleep consultants",
    icon: <DollarSign className="h-6 w-6 text-dreamy-purple" />
  }
];

const KeyValueProps: React.FC = () => {
  return (
    <section id="key-value-props" className="py-12 bg-white border-b border-gray-100 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-dreamy-purple mb-12">
          Quality sleep training — faster, better, cheaper
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {valueProps.map((prop, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center md:items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="bg-dreamy-lightpurple/30 p-3 rounded-full mb-4">
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold text-dreamy-purple mb-2">{prop.title}</h3>
              <p className="text-gray-600 text-center md:text-left">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyValueProps;
