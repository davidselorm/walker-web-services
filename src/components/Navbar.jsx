import React, { useState } from 'react';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Navbar({ onOrderNow }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
      <div className={`max-w-5xl mx-auto ios-glass ${mobileMenuOpen ? 'rounded-3xl' : 'rounded-full'} px-4 sm:px-6 py-2.5 sm:py-3 transition-all pointer-events-auto`}>
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Presentation */}
          <a href="#" className="flex items-center gap-2 sm:gap-2.5 group pl-1">
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
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/60 border border-white/60 p-1 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-inter text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0066FF] hover:bg-white/90 hover:shadow-xs px-4 py-1.5 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Order Now Button (Fully Rounded Pill with iOS specular highlight) */}
          <div className="hidden sm:flex items-center pr-1">
            <button
              onClick={onOrderNow}
              className="font-inter inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-[0_4px_16px_rgba(0,102,255,0.3),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_8px_24px_rgba(0,102,255,0.4),inset_0_1px_1px_rgba(255,255,255,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all cursor-pointer group"
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
          <div className="sm:hidden pt-3 pb-2 mt-2 border-t border-slate-100 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-inter px-4 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#0066FF] hover:bg-slate-50 rounded-xl transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOrderNow) onOrderNow();
                }}
                className="font-inter w-full py-3 px-4 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-sm text-center shadow-md shadow-blue-500/20 transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Walker%20Web%20Services!`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter w-full py-2.5 px-4 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 font-bold text-xs text-center transition flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Quick WhatsApp ({siteConfig.phone})</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
