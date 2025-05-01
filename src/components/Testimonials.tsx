
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';

const testimonials = [
  {
    name: "Emily J.",
    location: "Austin, TX",
    image: "https://source.unsplash.com/hWXud91NbOQ",
    quote: "Our 9-month-old went from waking up 4 times a night to sleeping 11 hours straight after just 5 days on our DreamyBaby plan. The AI coach helped me stay consistent when I was ready to give up.",
    improvement: "11 hours of uninterrupted sleep"
  },
  {
    name: "Marcus T.",
    location: "Chicago, IL",
    image: "https://source.unsplash.com/7YVZYZeITc8",
    quote: "As a single dad, I was struggling with my twins' different sleep needs. The personalized plans for each baby made all the difference. Worth every penny for my sanity!",
    improvement: "Synchronized nap schedules"
  },
  {
    name: "Sophia & David",
    location: "Seattle, WA",
    image: "https://source.unsplash.com/IF9TK5Uy-KI",
    quote: "We tried everything before DreamyBaby. The 24/7 support was a game-changer during those 3am moments of doubt. Our toddler now looks forward to bedtime instead of fighting it.",
    improvement: "45-minute bedtime to 10 minutes"
  }
];

const StarRating = () => (
  <div className="flex mb-2">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

const BeforeAfter = ({ improvement }: { improvement: string }) => (
  <div className="mt-3 bg-dreamy-purple/10 rounded-md px-3 py-2 text-sm">
    <span className="font-bold text-dreamy-purple">Result: </span> 
    {improvement}
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 dreamcloud">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dreamy-purple mb-4">What Parents Are Saying</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of families who have transformed their nights with DreamyBaby.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-dreamy-lightpurple/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-dreamy-purple">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <StarRating />
                <p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <BeforeAfter improvement={testimonial.improvement} />
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Removed the "mt-12 text-center" div that was here */}
      </div>
    </section>
  );
};

export default Testimonials;
