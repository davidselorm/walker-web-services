import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedService, setSelectedService] = useState('Business & Corporate Website');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceId) => {
    const serviceNames = {
      business: 'Business & Corporate Website',
      ecommerce: 'E-Commerce Online Store',
      landing: 'Landing Page & Portfolio',
      redesign: 'Website Redesign & Upgrades'
    };
    setSelectedService(serviceNames[serviceId] || 'Business & Corporate Website');
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#0B0D11] flex flex-col font-inter selection:bg-[#0066FF] selection:text-white relative overflow-x-hidden">
      {/* Ambient Apple-style Mesh Glow Orbs (Subtle color bleeding behind frosted glass) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-blue-500/12 rounded-full blur-[100px]" />
        <div className="absolute top-[28%] -right-40 w-[34rem] h-[34rem] bg-sky-400/14 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] -left-36 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[110px]" />
        <div className="absolute -bottom-24 right-1/4 w-[28rem] h-[28rem] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Navigation Bar */}
      <Navbar onOrderNow={scrollToContact} />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        <Hero onOrderNow={scrollToContact} />
        <Services onSelectService={handleSelectService} />
        <AboutUs />
        <Contact defaultService={selectedService} />
      </main>

      {/* Signature Flyer Footer */}
      <Footer />

      {/* Quick Mobile/Desktop Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
