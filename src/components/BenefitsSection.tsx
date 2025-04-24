import React from 'react';
import { TrendingUp, DollarSign, Award, BarChart, Heart } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: 'Increase Efficiency',
      description: 'Streamline operations and reduce manual work to boost productivity by up to 40%'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: 'Reduce Costs',
      description: 'Lower operational expenses through smart automation and optimized resource allocation'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Gain Competitive Edge',
      description: 'Leverage AI capabilities that put your business ahead of competitors still using manual processes'
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: 'Data-Driven Decisions',
      description: 'Make strategic choices based on AI-powered insights derived from your business data'
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: 'Enhance Customer Experience',
      description: 'Deliver faster, more personalized service through intelligent automation'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="benefits">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Partner With Ruby AI
          </h2>
          <p className="text-gray-600 text-lg">
            Our solutions deliver tangible results that positively impact your bottom line.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start p-2"
            >
              <div className="mr-4 p-2 bg-primary bg-opacity-10 rounded-lg mt-1">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-50 rounded-xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Proven Results for SMBs Like Yours
            </h3>
            <p className="text-gray-600">
              Our clients experience remarkable improvements after implementing our solutions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">68%</p>
              <p className="text-gray-700">Reduction in manual processing time</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">42%</p>
              <p className="text-gray-700">Average cost savings</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">3.5x</p>
              <p className="text-gray-700">ROI in the first year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;