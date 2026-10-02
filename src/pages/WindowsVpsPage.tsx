import React from 'react';
import { useSite } from '../context/SiteContext';
import { PlanCard } from '../components/ui/PlanCard';
import {
  Monitor,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  CheckCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

export const WindowsVpsPage: React.FC = () => {
  const { products, billingCycle, setBillingCycle } = useSite();
  const winPlans = products.filter((p) => p.type === 'windows-vps');

  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="relative pt-12 md:pt-16 pb-10 border-b border-[#1F1F1F] bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF5500]">
                <span>WINDOWS SERVER INFRASTRUCTURE</span>
                <span aria-hidden="true" className="text-[#555555]">/</span>
                <span>GENUINE MICROSOFT LICENSING INCLUDED</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
                High-Frequency Windows VPS & Remote Desktop
              </h1>
              <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                Pre-activated Windows Server 2022 and 2019 Standard virtual machines. Built for 24/7 automated Forex trading (MT4/MT5), ASP.NET web applications, QuickBooks, and high-speed RDP workstations.
              </p>
            </div>

            {/* Billing switcher box */}
            <div className="p-4 rounded-xl border border-[#262626] bg-[#141414] shrink-0 space-y-2 font-mono">
              <span className="text-xs text-[#888888] block font-medium">Select Billing Term:</span>
              <div className="flex items-center gap-2 bg-[#0A0A0A] border border-[#222222] p-1 rounded-lg text-xs">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-3 py-1.5 rounded transition-colors ${
                    billingCycle === 'monthly' ? 'bg-[#222222] text-white font-semibold' : 'text-[#888888]'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annually')}
                  className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
                    billingCycle === 'annually' ? 'bg-[#FF5500] text-black font-bold' : 'text-[#888888] hover:text-white'
                  }`}
                >
                  <span>Annually</span>
                  <span className="text-[10px] font-extrabold">-20%</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Windows VPS Plans Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {winPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      {/* Why Choose RMDHost for Windows Server */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#262626] bg-[#111111] p-8 sm:p-10 space-y-8">
          <div>
            <div className="text-xs font-mono text-[#FF5500] mb-1">
              BENCHMARKED LOW RDP LATENCY & ZERO DRIFT
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
              Optimized for Forex Trading (MT4 / MT5) & Heavy Windows Workloads
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base font-sans">Ultra-Low Broker Latency</h4>
              <p className="text-xs text-[#888888] leading-relaxed">
                Sub-millisecond cross-connects to primary FX liquidity providers in London LD4, New York NY4, and Frankfurt FR2. Execute EA trading with minimal slippage.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
                <Monitor className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base font-sans">Full Administrator RDP Access</h4>
              <p className="text-xs text-[#888888] leading-relaxed">
                Connect via native Remote Desktop on Windows, macOS, iOS, or Android. Install custom software, automated bots, and .NET runtime versions without restrictions.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base font-sans">24/7 Guaranteed Continuous Runtime</h4>
              <p className="text-xs text-[#888888] leading-relaxed">
                Unlike home desktop connections or unpredictable broadband, RMDHost enterprise hosts run on redundant dual UPS and diesel backup generators with 99.99% uptime.
              </p>
            </div>
          </div>

          {/* Windows Features Checklist */}
          <div className="pt-6 border-t border-[#1F1F1F] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#D4D4D4]">
              <CheckCircle className="w-4 h-4 text-[#FF5500] shrink-0" />
              <span>Windows 2022 Std 64-bit</span>
            </div>
            <div className="flex items-center gap-2 text-[#D4D4D4]">
              <CheckCircle className="w-4 h-4 text-[#FF5500] shrink-0" />
              <span>Full Administrator Rights</span>
            </div>
            <div className="flex items-center gap-2 text-[#D4D4D4]">
              <CheckCircle className="w-4 h-4 text-[#FF5500] shrink-0" />
              <span>Dedicated IPv4 Included</span>
            </div>
            <div className="flex items-center gap-2 text-[#D4D4D4]">
              <CheckCircle className="w-4 h-4 text-[#FF5500] shrink-0" />
              <span>DDoS Scrubbing Included</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
