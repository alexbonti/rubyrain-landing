import React from 'react';
import { Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Future-Proof Your SMB With <span className="text-primary">Intelligent Automation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              We design and build tailored AI and automation software that streamlines processes, 
              cuts costs, and drives innovation for small and medium businesses.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors text-center font-medium"
              >
                Get Free Consultation
              </a>
              <a 
                href="#services" 
                className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors text-center font-medium"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-primary opacity-10 rounded-full transform -translate-x-4 translate-y-4"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6 overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-40 h-40 bg-primary opacity-10 rounded-full"></div>
                <div className="relative z-10 flex items-center justify-center p-4">
                  <div className="flex flex-col items-center space-y-4">
                    <Sparkles size={64} className="text-primary" />
                    <div className="text-center">
                      <div className="flex space-x-2 items-center justify-center">
                        <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                        <span className="text-lg font-medium text-gray-900">AI-Powered Solutions</span>
                      </div>
                      <p className="mt-2 text-gray-600">Automating tasks that used to take hours</p>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <div className="bg-gray-100 rounded-md p-2 text-center">
                          <span className="text-primary font-bold text-xl">68%</span>
                          <p className="text-xs text-gray-600">Cost Reduction</p>
                        </div>
                        <div className="bg-gray-100 rounded-md p-2 text-center">
                          <span className="text-primary font-bold text-xl">3.5x</span>
                          <p className="text-xs text-gray-600">Productivity Boost</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;