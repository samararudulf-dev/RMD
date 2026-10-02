import React from 'react';
import { useSite } from '../context/SiteContext';
import {
  LifeBuoy,
  MessageSquare,
  Server,
  CheckCircle,
  ExternalLink,
  Mail,
  ShieldCheck,
  BookOpen
} from 'lucide-react';

export const SupportPage: React.FC = () => {
  const { locations, navigateTo, settings } = useSite();

  return (
    <div className="space-y-20 pb-20">
      {/* Header */}
      <section className="relative pt-12 md:pt-16 pb-10 border-b border-[#1F1F1F] bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF5500]">
              <LifeBuoy className="w-4 h-4" />
              <span>SUPPORT OPERATIONS & STATUS</span>
              <span aria-hidden="true" className="text-[#555555]">/</span>
              <span>24/7/365 RESPONSE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
              Support Center & Live Network Status
            </h1>
            <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
              Our Tier-3 support engineers and network operations center (NOC) monitor all global clusters 24/7/365. Average initial response time is under 15 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-[#262626] bg-[#111111] space-y-4 shadow-lg hover:border-[#FF5500]/60 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-sans">Official Ticket Helpdesk</h3>
            <p className="text-xs text-[#A3A3A3] leading-relaxed">
              Submit technical inquiries, reverse DNS (rDNS) delegation requests, or hardware configuration tickets directly into our secure billing gateway.
            </p>
            <a
              href="https://my.digitalberg.com/submitticket.php"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF5500] hover:text-[#FFAA00]"
            >
              <span>Open Support Ticket</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-6 rounded-xl border border-[#262626] bg-[#111111] space-y-4 shadow-lg hover:border-[#FF5500]/60 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-sans">Knowledge Base & Tutorials</h3>
            <p className="text-xs text-[#A3A3A3] leading-relaxed">
              Step-by-step documentation covering SSH key configuration, firewall policies, MySQL performance tuning on NVMe, and Windows RDP hardening.
            </p>
            <button
              onClick={() => navigateTo('blog')}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF5500] hover:text-[#FFAA00]"
            >
              <span>Explore Knowledge Base</span>
              <span>→</span>
            </button>
          </div>

          <div className="p-6 rounded-xl border border-[#262626] bg-[#111111] space-y-4 shadow-lg hover:border-[#FF5500]/60 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-sans">Direct Email Inquiries</h3>
            <p className="text-xs text-[#A3A3A3] leading-relaxed">
              Need custom dedicated bare metal quotes or enterprise enterprise SLAs? Connect directly with our network engineering team.
            </p>
            <div className="font-mono text-xs text-[#FF5500]">
              {settings.supportEmail}
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Infrastructure Network Status */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#262626] bg-[#111111] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1F1F1F]">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#FF5500] animate-ping" />
              <h2 className="text-xl font-bold text-white tracking-tight font-sans">
                Real-Time Node Operational Status
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4D4D4]">
              <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
              <span>All 9 Facilities 100% Operational (Zero Incidents Reported)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="p-4 rounded-xl border border-[#222222] bg-[#141414] flex items-center justify-between font-mono text-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">{loc.city}</span>
                    <span className="text-[10px] text-[#FF5500] font-semibold">{loc.code}</span>
                  </div>
                  <span className="text-[11px] text-[#737373] block">{loc.facility}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#FF5500] font-bold text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>OPERATIONAL</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
