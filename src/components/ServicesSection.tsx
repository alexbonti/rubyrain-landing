import React from 'react';
import { Bot, Cog, LineChart, Lightbulb } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Bot className="h-12 w-12 text-primary" />,
      title: 'Custom AI Development',
      description: 'Tailored artificial intelligence solutions designed specifically for your business needs and workflows.'
    },
    {
      icon: <Cog className="h-12 w-12 text-primary" />,
      title: 'Workflow Automation',
      description: 'Streamline your business processes by automating repetitive tasks and complex workflows.'
    },
    {
      icon: <LineChart className="h-12 w-12 text-primary" />,
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with machine learning and predictive analytics.'
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-primary" />,
      title: 'Process Optimization',
      description: 'Identify inefficiencies and implement intelligent solutions to optimize your business operations.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our AI & Automation Services
          </h2>
          <p className="text-gray-600 text-lg">
            We provide innovative solutions that help your business operate more efficiently and effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] flex flex-col"
            >
              <div className="bg-primary bg-opacity-10 rounded-full p-4 w-fit mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-1">
                {service.description}
              </p>
              <a 
                href="#contact" 
                className="mt-4 text-primary font-medium hover:underline inline-flex items-center"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;