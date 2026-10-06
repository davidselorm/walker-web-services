import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside 
      aria-label="Contact options"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center group"
    >
      <a
        href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Walker%20Web%20Services!%20I'd%20like%20to%20order%20a%20website.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Walker Web Services on WhatsApp"
        className="flex items-center gap-2 px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-full bg-[#25D366] text-white font-inter font-bold text-xs sm:text-sm shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.5)] hover:scale-105 active:scale-95 transition-all"
      >
        <MessageSquare className="w-5 h-5 fill-current shrink-0" />
        <span className="hidden xs:inline sm:inline">Chat with Us</span>
      </a>
    </aside>
  );
}
