import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Mail, MessageSquare, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { settings } = useSite();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Sales & Custom Solution Architecture',
    productInterest: 'vps',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="relative pt-12 md:pt-16 pb-10 border-b border-[#1F1F1F] bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF5500]">
              <MessageSquare className="w-4 h-4" />
              <span>DIRECT ENTERPRISE INQUIRIES</span>
              <span aria-hidden="true" className="text-[#555555]">/</span>
              <span>GLOBAL SALES</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
              Contact RMDHost Solutions
            </h1>
            <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
              Consult with our cloud architects for custom bare metal clusters, high-bandwidth streaming uplinks, private IP blocks, and volume pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form and Contact Details Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-[#262626] bg-[#111111] p-6 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-sans">Sales & Technical Inquiries</h3>
              <p className="text-xs text-[#A3A3A3] leading-relaxed">
                Connect directly with our operations team for bespoke configurations, contract inquiries, or custom operating system ISO mounts.
              </p>
              <div className="space-y-2 pt-2 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-[#1F1F1F]">
                  <span className="text-[#737373]">Sales:</span>
                  <span className="text-[#FF5500]">{settings.salesEmail}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#1F1F1F]">
                  <span className="text-[#737373]">Support:</span>
                  <span className="text-[#FF5500]">{settings.supportEmail}</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[#262626] bg-[#111111] p-6 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-sans">Guaranteed Response SLA</h3>
              <p className="text-xs text-[#A3A3A3] leading-relaxed">
                Enterprise support tickets submitted through the official portal receive priority routing with guaranteed engineer response times under 15 minutes.
              </p>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7 rounded-2xl border border-[#262626] bg-[#111111] p-6 sm:p-8">
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#FF5500]/20 text-[#FF5500] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-sans">Message Dispatched Successfully</h3>
                <p className="text-xs text-[#A3A3A3] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. A systems engineer or account manager will review your deployment requirements and get back to you within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-lg bg-[#181818] border border-[#2E2E2E] text-xs font-mono text-white hover:border-[#FF5500]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <h3 className="text-xl font-extrabold text-white tracking-tight font-sans">
                  Submit Project Specifications
                </h3>
                <p className="text-xs text-[#888888] font-sans pb-2">
                  Fill out the parameters below and our sales engineering desk will formulate a custom quote.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#D4D4D4] mb-1 font-bold">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Mercer"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#161616] border border-[#282828] text-white focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#D4D4D4] mb-1 font-bold">Work Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#161616] border border-[#282828] text-white focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#D4D4D4] mb-1 font-bold">Product of Interest</label>
                    <select
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#161616] border border-[#282828] text-white focus:outline-none focus:border-[#FF5500]"
                    >
                      <option value="vps">Linux NVMe Cloud VPS</option>
                      <option value="windows-vps">Windows Remote Desktop VPS</option>
                      <option value="dedicated">Bare Metal Dedicated Server</option>
                      <option value="custom">Multi-Server Cluster / Custom Rack</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#D4D4D4] mb-1 font-bold">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#161616] border border-[#282828] text-white focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#D4D4D4] mb-1 font-bold">Project Details / Specifications Needed</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about required CPU cores, RAM, monthly bandwidth, preferred datacenter region (e.g. Frankfurt, London, NYC)..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#161616] border border-[#282828] text-white focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-[#FF5500] hover:bg-[#FF6600] text-black font-extrabold text-xs tracking-wide transition-all shadow-xl shadow-[#FF5500]/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>Transmit Enterprise Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
