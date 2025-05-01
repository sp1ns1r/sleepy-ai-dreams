
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dreamy-purple mb-4">Ready for Better Sleep? Start Your Journey Today</h2>
          <p className="text-xl text-gray-700 mb-8">
            Join thousands of well-rested families who have transformed their nights with DreamyBaby
          </p>
          
          <Button size="lg" className="px-8 py-6 text-lg bg-dreamy-purple hover:bg-dreamy-purple/90">
            Create My Sleep Plan Now
          </Button>
          
          <p className="mt-6 text-gray-600">
            <span className="font-medium">60-day money-back guarantee</span> if you're not completely satisfied
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
