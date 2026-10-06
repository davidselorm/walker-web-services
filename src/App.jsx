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
    <div className="min-h-screen bg-white text-[#0B0D11] flex flex-col font-inter selection:bg-[#0066FF] selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOrderNow={scrollToContact} />

      {/* Main Content Area */}
      <main className="flex-1">
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
