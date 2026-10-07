import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { ArrowRight, CheckCircle2, MessageSquare, Loader2, AlertCircle } from 'lucide-react';

export default function Contact({ defaultService }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('500');
  const [prevDefaultService, setPrevDefaultService] = useState(defaultService);
  const [serviceType, setServiceType] = useState(defaultService || 'Business & Corporate Website');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

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

  const getWhatsAppUrl = () => {
    const text = `*NEW WEBSITE INQUIRY - Walker Web Services*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${name || 'Prospective Client'}
💰 *Budget:* GH₵ ${budget || '500+'}
📞 *Phone/WhatsApp:* ${phone || 'Not provided'}
✉️ *Email:* ${email || 'Not provided'}
🌐 *Website Needed:* ${serviceType}
📝 *Project Notes:* ${message || 'Ready to start! Please contact me with details.'}
━━━━━━━━━━━━━━━━━━━━━━
_Sent via Walker Web Services Website_`;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please provide your name and phone number.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    let isSuccess = false;

    // 1. Send directly to verified walkerwebservices1@gmail.com token
    try {
      const tokenRes = await fetch('https://formsubmit.co/ajax/ea7a4eb6bc1dda72e98594fd60ca9b05', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `🚀 New Website Order: ${name} (Budget: GH₵${budget || '500+'})`,
          _template: 'table',
          'Client Name': name,
          'Client Budget': budget ? `GH₵ ${budget}` : 'Starting from GH₵500',
          'Phone / WhatsApp': phone,
          'Client Email': email || 'Not provided',
          'Website Type': serviceType,
          'Project Details': message || 'None provided'
        })
      });

      const tokenData = await tokenRes.json();
      if (tokenRes.ok && (tokenData.success === 'true' || tokenData.success === true)) {
        isSuccess = true;
      }
    } catch (e) {
      console.warn('FormSubmit token submission error:', e);
    }

    // 2. Also trigger Vercel Serverless Function backend
    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          serviceType,
          budget,
          message
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        isSuccess = true;
      }
    } catch (err) {
      console.warn('Backend /api/order call:', err);
    }

    if (isSuccess) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage('Could not deliver email automatically. Please connect with us directly on WhatsApp below!');
    }
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
            Tell us about your project and your budget (starting from <strong className="text-[#0B0D11]">GH₵500</strong>). We'll review your details and get back to you promptly.
          </p>
        </div>

        {/* Clean White Card Form */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-12 shadow-sm text-left">
          
          {status === 'success' ? (
            <div className="space-y-6 text-center py-6 animate-in fade-in duration-200">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h3 className="font-poppins font-bold text-2xl text-[#0B0D11]">
                  Order Sent Successfully!
                </h3>
                <p className="font-inter text-slate-600 text-sm sm:text-base max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{name}</strong>. Your order details have been delivered to our team at <strong className="text-[#0066FF]">{siteConfig.email}</strong>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs sm:text-sm font-inter text-slate-700">
                <div className="font-bold text-slate-900 border-b border-slate-200 pb-1.5">Order Summary:</div>
                <div>• <strong>Service:</strong> {serviceType}</div>
                <div>• <strong>Your Budget:</strong> GH₵ {budget}</div>
                <div>• <strong>Phone:</strong> {phone}</div>
                {email && <div>• <strong>Email:</strong> {email}</div>}
              </div>

              {/* Seamless WhatsApp Hand-off */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto font-inter inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Continue on WhatsApp Now</span>
                </a>

                <button
                  onClick={() => {
                    setStatus('idle');
                    setName('');
                    setPhone('');
                    setEmail('');
                    setBudget('500');
                    setMessage('');
                  }}
                  className="w-full sm:w-auto font-inter inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition"
                >
                  Submit Another Order
                </button>
              </div>
            </div>
          ) : (
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
                    placeholder="Enter your full name"
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
                    placeholder="Enter your phone or WhatsApp number"
                    className="font-inter w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:bg-white text-base sm:text-sm transition"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block font-inter text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Website Type Needed *
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
                  <label className="block font-inter text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 flex items-center justify-between">
                    <span>Your Budget (GH₵) *</span>
                    <span className="text-[10px] font-semibold text-[#0066FF] bg-blue-50 px-2 py-0.5 rounded-full">Min GH₵500</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-inter font-bold text-slate-500 text-sm">GH₵</span>
                    <input
                      type="number"
                      min="500"
                      step="50"
                      required
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="500"
                      className="font-inter w-full pl-14 pr-4 py-3 sm:py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:bg-white text-base sm:text-sm font-semibold transition"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-inter text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Your Email Address (Optional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="font-inter w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:bg-white text-base sm:text-sm transition"
                />
              </div>

              <div>
                <label className="block font-inter text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Tell Us About Your Project (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Briefly describe what your business does, preferred design styles, features you need, or special requests..."
                  className="font-inter w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:bg-white text-base sm:text-sm transition resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm font-inter flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Action Buttons: Submit Order to Email + Direct WhatsApp Chat */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 sm:py-4 px-6 rounded-full bg-[#0066FF] hover:bg-blue-700 disabled:bg-blue-400 text-white font-inter font-bold text-sm sm:text-base transition-all shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Order...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Order</span>
                      <ArrowRight className="w-5 h-5 shrink-0" />
                    </>
                  )}
                </button>

                <div className="text-center">
                  <span className="font-inter text-xs text-slate-400 uppercase tracking-wider">or chat directly</span>
                </div>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] font-inter font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                  <span>Chat on WhatsApp Directly ({siteConfig.phone})</span>
                </a>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
