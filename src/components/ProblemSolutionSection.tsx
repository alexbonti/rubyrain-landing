import React from 'react';
import { ClipboardList, FileWarning, BarChart4, Workflow } from 'lucide-react';

const ProblemSolutionSection: React.FC = () => {
  const challenges = [
    {
      icon: <ClipboardList className="h-10 w-10 text-primary" />,
      title: 'Repetitive Manual Tasks',
      problem: 'Hours wasted on administrative work and data entry',
      solution: 'Automate routine tasks with smart workflows and AI assistants'
    },
    {
      icon: <Workflow className="h-10 w-10 text-primary" />,
      title: 'Inefficient Processes',
      problem: 'Bottlenecks and delays hampering productivity',
      solution: 'Streamline workflows with intelligent process automation'
    },
    {
      icon: <FileWarning className="h-10 w-10 text-primary" />,
      title: 'Data Overload',
      problem: 'Unable to effectively utilize business data',
      solution: 'Extract actionable insights with AI-powered analytics'
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-primary" />,
      title: 'Scaling Difficulties',
      problem: 'Growth limited by manual operations',
      solution: 'Scale operations efficiently with customized automation'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="challenges">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Overcome Common SMB Challenges with AI
          </h2>
          <p className="text-gray-600 text-lg">
            Small and medium businesses face unique obstacles that our tailored AI solutions are designed to solve.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                <div className="mb-4 sm:mb-0 sm:mr-4 p-2 bg-primary bg-opacity-10 rounded-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              </div>
              <div className="pl-0 sm:pl-16">
                <p className="text-red-500 mb-2">
                  <span className="font-medium">Problem:</span> {item.problem}
                </p>
                <p className="text-green-600">
                  <span className="font-medium">Solution:</span> {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;