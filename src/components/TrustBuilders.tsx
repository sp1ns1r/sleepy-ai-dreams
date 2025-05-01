
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const experts = [
  {
    name: "Dr. Sarah Thompson",
    role: "Pediatric Sleep Specialist",
    image: "https://source.unsplash.com/IF9TK5Uy-KI",
    bio: "20+ years of clinical experience, author of 'Sleep Solutions for Modern Families'"
  },
  {
    name: "Emily Rodriguez",
    role: "Certified Sleep Consultant",
    image: "https://source.unsplash.com/7YVZYZeITc8",
    bio: "Helped over 1,000 families establish healthy sleep habits, specializing in multiple birth situations"
  },
  {
    name: "Dr. Michael Chen",
    role: "Child Development Researcher",
    image: "https://source.unsplash.com/rDEOVtE7vOs",
    bio: "Published researcher on infant sleep patterns and cognitive development at Stanford University"
  }
];

const TrustBuilders: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dreamy-purple mb-4">Built on Expert Knowledge, Refined by AI</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI was trained by leading pediatric sleep specialists with decades of combined experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {experts.map((expert, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md text-center border border-dreamy-lightpurple/50"
            >
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src={expert.image} alt={expert.name} />
                <AvatarFallback>{expert.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold text-dreamy-purple">{expert.name}</h3>
              <p className="text-dreamy-blue font-medium mb-2">{expert.role}</p>
              <p className="text-gray-600 text-sm">{expert.bio}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-dreamy-lightpurple/30 to-dreamy-lightblue/30 rounded-lg p-8">
          <h3 className="text-xl font-bold text-dreamy-purple mb-4 text-center">Data Security & Privacy</h3>
          <p className="text-gray-700 text-center">
            We take your family's privacy seriously. All data is encrypted end-to-end, and we never sell your information to third parties. 
            Your baby's data is used solely to improve their personalized sleep plan, and you maintain complete control over your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustBuilders;
