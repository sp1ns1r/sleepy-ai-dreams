
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "DreamyBaby completely transformed our nights. Our 8-month-old went from waking every 2 hours to sleeping through the night within a week.",
    name: "Sarah M.",
    role: "Mother of 8-month-old",
    image: "https://source.unsplash.com/7YVZYZeITc8"
  },
  {
    quote: "The personalized plan addressed our twins' different sleep needs. The 24/7 support was a lifesaver during those middle-of-the-night questions.",
    name: "David & Emma L.",
    role: "Parents of 10-month-old twins",
    image: "https://source.unsplash.com/IF9TK5Uy-KI"
  },
  {
    quote: "I was skeptical about AI advice, but the science-backed approach and constant adaptability as my baby grew made me a believer. Best investment ever!",
    name: "Rachel T.",
    role: "Mother of 14-month-old",
    image: "https://source.unsplash.com/rDEOVtE7vOs"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dreamy-purple mb-4">Hear From Well-Rested Parents</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thousands of families have transformed their sleep with DreamyBaby.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md flex flex-col card-hover"
            >
              <div className="mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14 4.93333 12.2667 6.13333 10.5333C7.33333 8.8 9.06667 7.33333 11.3333 6.13333L13.3333 9.33333C12 10 10.9333 10.8 10.1333 11.7333C9.33333 12.6667 8.93333 13.6 8.93333 14.5333C9.06667 14.4 9.46667 14.3333 10.1333 14.3333C11.2 14.3333 12.1333 14.7333 12.9333 15.5333C13.7333 16.3333 14.1333 17.3333 14.1333 18.5333C14.1333 19.6 13.7333 20.5333 12.9333 21.3333C12.1333 22.1333 11.0667 22.5333 9.73333 22.5333C9.6 22.4 9.46667 21.3333 9.33333 21.3333ZM21.3333 21.3333C19.8667 21.3333 18.6667 20.8 17.7333 19.7333C16.8 18.6667 16.3333 17.3333 16.3333 15.7333C16.3333 14 16.9333 12.2667 18.1333 10.5333C19.3333 8.8 21.0667 7.33333 23.3333 6.13333L25.3333 9.33333C24 10 22.9333 10.8 22.1333 11.7333C21.3333 12.6667 20.9333 13.6 20.9333 14.5333C21.0667 14.4 21.4667 14.3333 22.1333 14.3333C23.2 14.3333 24.1333 14.7333 24.9333 15.5333C25.7333 16.3333 26.1333 17.3333 26.1333 18.5333C26.1333 19.6 25.7333 20.5333 24.9333 21.3333C24.1333 22.1333 23.0667 22.5333 21.7333 22.5333C21.6 22.4 21.4667 21.3333 21.3333 21.3333Z" fill="#7E69AB"/>
                </svg>
              </div>
              <p className="text-gray-700 mb-4 flex-grow italic">{testimonial.quote}</p>
              <div className="flex items-center mt-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <p className="text-sm font-medium text-dreamy-purple">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-dreamy-blue mb-4">See the Results</h3>
          
          <div className="flex justify-center space-x-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-md text-center w-1/3">
              <p className="text-3xl font-bold text-dreamy-purple">85%</p>
              <p className="text-sm text-gray-600">of babies sleep through the night within 7 days</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md text-center w-1/3">
              <p className="text-3xl font-bold text-dreamy-purple">92%</p>
              <p className="text-sm text-gray-600">of parents report less stress and better sleep</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md text-center w-1/3">
              <p className="text-3xl font-bold text-dreamy-purple">3.5h</p>
              <p className="text-sm text-gray-600">average additional sleep parents gain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
