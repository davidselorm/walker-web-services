import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOrderNow }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-xl rounded-full border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-4 sm:px-6 py-2.5 sm:py-3 transition-all pointer-events-auto">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Presentation */}
          <a href="#" className="flex items-center gap-2.5 group pl-1">
            <img 
              src="/logo.png" 
              alt="Walker Web Services Logo" 
              className="h-8 w-8 sm:h-9 sm:w-9 object-contain shrink-0 transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col text-left">
              <span className="font-poppins font-black text-base sm:text-lg text-[#0B0D11] tracking-tight leading-none">
                WALKER <span className="text-[#0066FF]">WEB</span>
              </span>
              <span className="font-inter text-[8px] sm:text-[9px] font-bold tracking-[0.25em] text-slate-400 uppercase mt-0.5">
                SERVICES
              </span>
            </div>
          </a>

          {/* Desktop Center Links in rounded pill style */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-50/80 border border-slate-200/60 p-1 rounded-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-inter text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0066FF] hover:bg-white px-4 py-1.5 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Order Now Button (Fully Rounded Pill) */}
          <div className="hidden sm:flex items-center pr-1">
            <button
              onClick={onOrderNow}
              className="font-inter inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-[0_4px_14px_rgba(0,102,255,0.25)] hover:shadow-[0_6px_20px_rgba(0,102,255,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all cursor-pointer group"
            >
              <span>Order Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center sm:hidden pr-1">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0066FF] rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="sm:hidden pt-4 pb-2 mt-3 border-t border-slate-100 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-inter px-4 py-2 text-sm font-semibold text-slate-800 hover:text-[#0066FF] hover:bg-slate-50 rounded-full transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOrderNow) onOrderNow();
                }}
                className="font-inter w-full py-2.5 px-4 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-sm text-center shadow-md shadow-blue-500/20 transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
