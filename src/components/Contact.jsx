import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Contact({ defaultService }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [prevDefaultService, setPrevDefaultService] = useState(defaultService);
  const [serviceType, setServiceType] = useState(defaultService || 'Business & Corporate Website');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (defaultService !== prevDefaultService) {
    setPrevDefaultService(defaultService);
    setServiceType(defaultService || 'Business & Corporate Website');
  }

  const serviceOptions = [
    'Business & Corporate Website',
    'E-Commerce Online Store',
    'Landing Page & Portfolio',
    'Website Redesign & Upgrades',
    'Custom Web Project / Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please provide your name and phone number.');
      return;
    }

    const text = `*NEW WEBSITE INQUIRY - Walker Web Services*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${name}
📞 *Phone/WhatsApp:* ${phone}
🌐 *Website Needed:* ${serviceType}
📝 *Project Notes:* ${message || 'Ready to start! Please contact me with details.'}
━━━━━━━━━━━━━━━━━━━━━━
_Sent via Walker Web Services Website_`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;

    setSent(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0066FF] text-xs font-inter font-bold uppercase tracking-wider">
            <span>Get Started</span>
          </div>

          <h2 className="font-poppins font-black text-3xl sm:text-5xl text-[#0B0D11] tracking-tight">
            Order Your Website Today
          </h2>

          <p className="font-inter text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Fill in your project details below to send your request directly to our official WhatsApp line (<strong className="text-[#0B0D11]">{siteConfig.phone}</strong>) for instant review and kickoff.
          </p>
        </div>

        {/* Clean White Card Form */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-12 shadow-sm text-left">
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block font-inter text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Samuel Walker"
                  className="font-inter w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:bg-white text-base sm:text-sm transition"
                />
              </div>

              <div>
                <label className="block font-inter text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 0537968981"
                  className="font-inter w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:bg-white text-base sm:text-sm transition"
                />
              </div>
            </div>

            <div>
              <label className="block font-inter text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                What Type of Website Do You Need?
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="font-inter w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#0066FF] focus:bg-white text-base sm:text-sm transition cursor-pointer"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-inter text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                Tell Us About Your Project (Optional)
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Briefly describe what your business does, preferred colors, reference websites you like, or any specific questions..."
                className="font-inter w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:bg-white text-base sm:text-sm transition resize-none"
              />
            </div>

            <div className="pt-2 space-y-4">
              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 px-6 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white font-inter font-bold text-sm sm:text-base transition-all shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send Order via WhatsApp</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </button>
            </div>

            {sent && (
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-inter flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0066FF] shrink-0" />
                <span>WhatsApp has opened with your inquiry! Walker Web Services will respond promptly.</span>
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
