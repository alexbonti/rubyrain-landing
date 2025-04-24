import React from 'react';
import { Search, Cpu, Database, HeartHandshake } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: 'Discovery & Strategy',
      description: 'We analyze your business processes and identify the best opportunities for AI and automation.'
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: 'Design & Development',
      description: 'Our experts create custom AI solutions tailored specifically to your business needs.'
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: 'Implementation & Testing',
      description: 'We carefully integrate the solution with your existing systems and thoroughly test it.'
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-primary" />,
      title: 'Support & Optimization',
      description: 'We provide ongoing support and continuously optimize your solution for maximum performance.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="process">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Simple Process
          </h2>
          <p className="text-gray-600 text-lg">
            We make implementing AI and automation straightforward and hassle-free.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-light transform -translate-x-1/2"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
                  <div className="bg-white rounded-xl shadow-sm p-6 max-w-md">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary bg-opacity-10 rounded-full mr-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;