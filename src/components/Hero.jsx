import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onOrderNow }) {
  return (
    <section className="bg-white min-h-[92vh] pt-32 sm:pt-36 pb-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10 flex flex-col items-center">
        
        {/* Main Bold Headline in 4 Stacked Lines */}
        <h1 className="font-poppins font-black text-5xl sm:text-7xl md:text-8xl text-[#0B0D11] tracking-tight leading-[1.08] text-center">
          <span className="block">Get your</span>
          <span className="block">Professional</span>
          <span className="block">Website</span>
          <span className="block">Today!</span>
        </h1>

        {/* Order Now Button in Blue */}
        <div>
          <button
            onClick={onOrderNow}
            className="font-inter inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-base sm:text-lg shadow-[0_4px_16px_rgba(0,102,255,0.28)] hover:shadow-[0_6px_24px_rgba(0,102,255,0.38)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all cursor-pointer group"
          >
            <span>Order Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
