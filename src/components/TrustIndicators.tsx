
import React from 'react';

const TrustIndicators: React.FC = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">Trusted by thousands of families</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Trust logos - using placeholder grayscale logos */}
          <div className="w-24 h-12 opacity-70 flex items-center justify-center">
            <div className="text-gray-400 font-semibold text-lg">Parents+</div>
          </div>
          <div className="w-24 h-12 opacity-70 flex items-center justify-center">
            <div className="text-gray-400 font-semibold text-lg">BabyTime</div>
          </div>
          <div className="w-24 h-12 opacity-70 flex items-center justify-center">
            <div className="text-gray-400 font-semibold text-lg">SleepWell</div>
          </div>
          <div className="w-24 h-12 opacity-70 flex items-center justify-center">
            <div className="text-gray-400 font-semibold text-lg">NurseryMag</div>
          </div>
          <div className="w-24 h-12 opacity-70 flex items-center justify-center">
            <div className="text-gray-400 font-semibold text-lg">BabyTech</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
