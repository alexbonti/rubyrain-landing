import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import ServicesSection from './components/ServicesSection';
import BenefitsSection from './components/BenefitsSection';
import ProcessSection from './components/ProcessSection';
import SocialProofSection from './components/SocialProofSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Ruby AI | AI & Automation for SMBs";
    
    // Add Inter font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        <SocialProofSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;