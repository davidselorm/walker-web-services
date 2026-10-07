import React from 'react';
import { Zap, UserCheck, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  const pillars = [
    {
      id: "fast-delivery",
      title: "Fast Delivery",
      badge: "3 - 8 Days Turnaround",
      icon: Zap,
      description: "We value your business momentum. While traditional agencies take months, Walker Web Services delivers fully functional, high-converting websites in days.",
      points: [
        "Rapid onboarding with zero red tape",
        "Same-week live demo preview",
        "48-hour rush delivery available for urgent launches"
      ]
    },
    {
      id: "professionalism",
      title: "Professionalism",
      badge: "Modern UI/UX Standards",
      icon: UserCheck,
      description: "Clean modern design, mobile-first responsiveness, and clean code that elevates your brand and gives your business an unfair advantage.",
      points: [
        "100% mobile, tablet & desktop responsiveness",
        "Conversion-focused layouts that turn clicks to clients",
        "Optimized speed and search engine readiness"
      ]
    },
    {
      id: "trustworthy",
      title: "Trustworthy",
      badge: "Guaranteed Satisfaction",
      icon: ShieldCheck,
      description: "Direct, transparent communication with fixed upfront pricing. We build lasting relationships and provide dependable support long after launch.",
      points: [
        "Transparent pricing with zero hidden fees",
        "Complimentary post-launch walkthrough & training",
        "Direct communication whenever you need assistance"
      ]
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0066FF] text-xs font-inter font-bold uppercase tracking-wider">
            <span>About Us:</span>
          </div>

          <h2 className="font-poppins font-black text-3xl sm:text-5xl text-[#0B0D11] tracking-tight">
            The Walker Standard
          </h2>

          <p className="font-inter text-slate-600 text-sm sm:text-base leading-relaxed">
            Every website we engineer is guided by our 3 foundational pillars: Fast Delivery, Professionalism, and Trustworthy partnership.
          </p>
        </div>

        {/* 3 Pillars Grid (iOS Frosted Glass) */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="ios-glass-interactive rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-left group"
              >
                <div className="space-y-4 sm:space-y-5">
                  {/* Top Icon & Badge Row */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#0066FF] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,102,255,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-transform group-hover:scale-105">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                    </div>
                    <span className="font-inter text-[11px] font-bold px-3 py-1 rounded-full ios-glass-pill text-slate-700">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-poppins font-black text-xl sm:text-2xl text-[#0B0D11] group-hover:text-[#0066FF] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="font-inter text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Highlights Bullet Points */}
                  <div className="pt-4 space-y-2 border-t border-slate-200/50">
                    {pillar.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-inter text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
