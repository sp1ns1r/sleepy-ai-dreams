
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 dreamcloud">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dreamy-purple mb-4 leading-tight">
              Expert Sleep Training, Personalized for Your Baby
              <span className="block text-dreamy-blue">Available 24/7</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              AI-powered sleep plans created by certified pediatric sleep experts that adapt to your baby's unique needs
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button size="lg" className="px-6 py-6 text-lg bg-dreamy-purple hover:bg-dreamy-purple/90">
                Get Your Personalized Sleep Plan
              </Button>
              <Button variant="outline" size="lg" className="px-6 py-6 text-lg border-dreamy-purple text-dreamy-purple">
                Learn More
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl animate-float">
              <img 
                src="https://source.unsplash.com/S9NQnIV4zOI" 
                alt="Peaceful sleeping baby" 
                className="w-full h-auto object-cover rounded-t-2xl" 
              />
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
                <img 
                  src="https://source.unsplash.com/a82uYdyJm8Q" 
                  alt="Well-rested parents" 
                  className="w-full h-full object-cover border-4 border-white rounded-2xl shadow-lg" 
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-dreamy-lightpurple rounded-full z-[-1]"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-dreamy-lightblue rounded-full z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
