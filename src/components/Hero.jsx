import React from 'react';
import { ArrowRight, MessageSquare, Zap, ShieldCheck, Smartphone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Hero({ onOrderNow }) {
  return (
    <section className="bg-white min-h-[85vh] sm:min-h-[90vh] pt-28 sm:pt-36 pb-14 sm:pb-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-7 sm:space-y-10 flex flex-col items-center">
        
        {/* Mobile Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0066FF] text-xs font-inter font-semibold shadow-xs">
          <Zap className="w-3.5 h-3.5 shrink-0" />
          <span>Fast Turnaround • 100% Mobile Ready</span>
        </div>

        {/* Main Bold Headline with mobile-optimized font sizing */}
        <h1 className="font-poppins font-black text-4xl xs:text-5xl sm:text-7xl md:text-8xl text-[#0B0D11] tracking-tight leading-[1.08] text-center max-w-full">
          <span className="block">Get your</span>
          <span className="block text-[#0066FF] sm:text-[#0B0D11]">Professional</span>
          <span className="block">Website</span>
          <span className="block">Today!</span>
        </h1>

        {/* Subtitle explaining the offer for mobile visitors */}
        <p className="font-inter text-slate-600 text-sm sm:text-lg max-w-xl leading-relaxed px-2">
          Tailored business websites, online stores, and portfolios engineered to look stunning on every phone, tablet, and computer.
        </p>

        {/* Action Buttons: Stack on mobile, row on desktop */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto px-4 sm:px-0">
          <button
            onClick={onOrderNow}
            className="w-full sm:w-auto font-inter inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-[0_4px_16px_rgba(0,102,255,0.28)] hover:shadow-[0_6px_24px_rgba(0,102,255,0.38)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all cursor-pointer group"
          >
            <span>Order Your Website</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Walker%20Web%20Services!%20I'd%20like%20to%20inquire%20about%20getting%20a%20website.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto font-inter inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm sm:text-base transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Feature Highlights on Mobile */}
        <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-6 text-slate-500 text-[11px] sm:text-xs font-medium max-w-md w-full">
          <div className="flex flex-col items-center gap-1 text-center">
            <Zap className="w-4 h-4 text-[#0066FF]" />
            <span>3 - 8 Days Delivery</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <Smartphone className="w-4 h-4 text-[#0066FF]" />
            <span>100% Mobile Ready</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
            <span>Dedicated Support</span>
          </div>
        </div>

      </div>
    </section>
  );
}
