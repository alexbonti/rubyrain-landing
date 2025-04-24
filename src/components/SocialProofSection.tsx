import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProofSection: React.FC = () => {
  const testimonials = [
    {
      quote: "The AI solution helped us automate our inventory management and demand forecasting. The accuracy of predictions has been remarkable, and the implementation was smooth.",
      author: "David Chen",
      position: "Supply Chain Manager",
      company: "Pacific Coast Distributors",
      stars: 5
    },
    {
      quote: "Their custom automation tools have streamlined our client onboarding process. What used to take days now happens in hours, with fewer errors and better client satisfaction.",
      author: "Maria Rodriguez",
      position: "Operations Lead",
      company: "Innovative Financial Services",
      stars: 5
    },
    {
      quote: "The AI-powered analytics dashboard they built gives us real-time insights into our business metrics. It's been instrumental in helping us make data-driven decisions.",
      author: "James Wilson",
      position: "Analytics Director",
      company: "TechGrowth Solutions",
      stars: 5
    }];

  const renderStars = (count: number) => {
    return Array(count).fill(0).map((_, i) => (
      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Businesses Like Yours
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from SMB owners who have transformed their operations with our AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <Quote className="h-10 w-10 text-primary opacity-30 mb-4" />
              <p className="text-gray-700 italic mb-6 flex-1">
                "{item.quote}"
              </p>
              <div>
                <div className="flex mb-3">
                  {renderStars(item.stars)}
                </div>
                <h4 className="text-gray-900 font-semibold">
                  {item.author}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.position}, {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Companies We've Helped Transform
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="h-12 flex items-center justify-center">
              <div className="text-lg font-bold text-gray-400">ACME Corp</div>
            </div>
            <div className="h-12 flex items-center justify-center">
              <div className="text-lg font-bold text-gray-400">TechNova</div>
            </div>
            <div className="h-12 flex items-center justify-center">
              <div className="text-lg font-bold text-gray-400">Horizon Health</div>
            </div>
            <div className="h-12 flex items-center justify-center">
              <div className="text-lg font-bold text-gray-400">GreenScape</div>
            </div>
            <div className="h-12 flex items-center justify-center">
              <div className="text-lg font-bold text-gray-400">MetroFinance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;