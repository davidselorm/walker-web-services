import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { MessageSquare, ArrowUp } from 'lucide-react';

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-800 pt-16 pb-12 border-t border-slate-200/70">
      
      {/* SIGNATURE FLYER CONTACT BAR (Exact recreation of the bottom of the flyer) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="rounded-3xl bg-[#0B0D11] text-white p-5 sm:p-7 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            
            {/* White pill "contact us:" from flyer */}
            <div className="px-6 py-2.5 rounded-full bg-white text-[#0B0D11] font-inter font-black text-sm uppercase tracking-wider shadow-sm shrink-0">
              contact us:
            </div>

            {/* WhatsApp Contact from flyer */}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Walker%20Web%20Services!%20I'm%20contacting%20you%20from%20your%20website.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-[#25D366] font-inter font-bold text-base transition-colors group"
            >
              <div className="w-9 h-9 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <span className="tracking-wide text-base">{siteConfig.phone}</span>
            </a>

            {/* Instagram Contact from flyer */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-pink-400 font-inter font-bold text-base transition-colors group"
            >
              <div className="w-9 h-9 rounded-full bg-[#E1306C]/20 text-[#E1306C] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <span className="tracking-wide text-base">{siteConfig.instagramHandle.replace('@', '')}</span>
            </a>

          </div>
        </div>
      </div>

      {/* Brand & Bottom Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/70">
          
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Walker Web Services Logo" 
              className="h-9 w-9 object-contain shrink-0"
            />
            <div className="flex flex-col text-left">
              <span className="font-poppins font-black text-base text-[#0B0D11] tracking-tight leading-none">
                WALKER <span className="text-[#0066FF]">WEB</span>
              </span>
              <span className="font-inter text-[8px] font-bold tracking-[0.25em] text-slate-400 uppercase mt-0.5">
                SERVICES
              </span>
            </div>
          </div>

          <p className="font-inter text-xs text-slate-500 max-w-md text-center md:text-left">
            Need A Website? Contact Walker Web Services for any kind of website today. Fast Delivery • Professionalism • Trustworthy.
          </p>

          <button
            onClick={scrollToTop}
            className="font-inter text-xs font-semibold text-slate-500 hover:text-[#0066FF] flex items-center gap-1.5 transition cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        <div className="pt-6 text-center text-xs font-inter text-slate-400">
          © {currentYear} Walker Web Services. All rights reserved.
        </div>
      </div>

    </footer>
  );
}
