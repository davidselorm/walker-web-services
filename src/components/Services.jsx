import React from 'react';
import { 
  Briefcase, 
  ShoppingBag, 
  Globe, 
  Wrench, 
  ArrowRight, 
  Check, 
  Clock 
} from 'lucide-react';

export default function Services({ onSelectService }) {
  const services = [
    {
      id: "business",
      title: "Business & Corporate Websites",
      desc: "Tailored multi-page websites that establish instant authority, showcase your services, and turn visitors into paying clients.",
      turnaround: "5 - 8 Days",
      popular: true,
      icon: Briefcase,
      features: [
        "Custom pages (Home, About, Services, Contact, etc.)",
        "100% mobile, tablet & desktop responsive",
        "Lead inquiry form & Google Maps location",
        "Search engine optimization (SEO) setup",
        "Free post-launch support and walkthrough"
      ]
    },
    {
      id: "ecommerce",
      title: "E-Commerce Online Stores",
      desc: "Full online store with catalog, shopping cart, Mobile Money (MoMo) payments, and direct WhatsApp order notifications.",
      turnaround: "7 - 12 Days",
      popular: false,
      icon: ShoppingBag,
      features: [
        "Product catalog with categories and search",
        "Mobile Money & Card payment integration",
        "Direct 1-click WhatsApp order button",
        "Inventory and order tracking dashboard",
        "Automated customer receipt generation"
      ]
    },
    {
      id: "landing",
      title: "Landing Pages & Portfolios",
      desc: "High-converting single-page websites built for advertising campaigns, product launches, or creative professional portfolios.",
      turnaround: "3 - 5 Days",
      popular: false,
      icon: Globe,
      features: [
        "High-conversion layout with clear calls to action",
        "Ultra-fast loading speed (< 1.5 seconds)",
        "Social media and contact integration",
        "Mobile-first touch-friendly design",
        "Express 48-hour rush delivery available"
      ]
    },
    {
      id: "redesign",
      title: "Website Redesign & Upgrades",
      desc: "Modernize slow or outdated websites into modern, high-speed digital assets that elevate your brand image.",
      turnaround: "3 - 6 Days",
      popular: false,
      icon: Wrench,
      features: [
        "Complete visual and UX modernization",
        "Speed audit and Core Web Vitals optimization",
        "Mobile layout overhaul",
        "SSL security setup",
        "Zero downtime transition"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0066FF] text-xs font-inter font-bold uppercase tracking-wider">
            <span>What We Build</span>
          </div>

          <h2 className="font-poppins font-black text-3xl sm:text-5xl text-[#0B0D11] tracking-tight">
            Any Kind of Website Today
          </h2>

          <p className="font-inter text-slate-600 text-sm sm:text-base leading-relaxed">
            High-speed, custom-crafted websites engineered to elevate your brand. Tell us your budget and requirements, and we'll tailor the ideal solution for your business.
          </p>
        </div>

        {/* Services Grid (4 Clean White Cards with iOS Frosted Glass) */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="ios-glass-interactive rounded-3xl p-6 sm:p-9 flex flex-col justify-between relative text-left group"
              >
                {service.popular && (
                  <span className="absolute top-5 right-5 sm:top-7 sm:right-7 text-[10px] font-inter font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#0066FF] text-white shadow-[0_2px_10px_rgba(0,102,255,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)]">
                    Most Popular
                  </span>
                )}

                <div className="space-y-4 sm:space-y-5">
                  {/* Service Icon in Frosted Pill */}
                  <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-blue-50/90 border border-blue-100/80 text-[#0066FF] flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-poppins font-bold text-xl sm:text-2xl text-[#0B0D11] group-hover:text-[#0066FF] transition-colors pr-16 sm:pr-0">
                      {service.title}
                    </h3>
                    <p className="font-inter text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Turnaround Badge in iOS Glass Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full ios-glass-pill text-slate-700 text-xs font-inter font-semibold">
                    <Clock className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span>Turnaround: {service.turnaround}</span>
                  </div>

                  {/* Features List */}
                  <div className="pt-3 space-y-2 border-t border-slate-200/50">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-inter text-slate-700">
                        <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button (Pill shaped with iOS specular sheen) */}
                <div className="pt-5 mt-5 sm:pt-7 sm:mt-7 border-t border-slate-200/50">
                  <button
                    onClick={() => onSelectService && onSelectService(service.id)}
                    className="w-full py-3.5 px-5 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white font-inter font-bold text-sm transition-all shadow-[0_4px_16px_rgba(0,102,255,0.25),inset_0_1px_1px_rgba(255,255,255,0.35)] hover:shadow-[0_8px_24px_rgba(0,102,255,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] active:scale-95 flex items-center justify-center gap-2 cursor-pointer group/btn"
                  >
                    <span>Order {service.title.split(' ')[0]} Site</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
