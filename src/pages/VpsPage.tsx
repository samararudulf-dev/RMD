import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { PlanCard } from '../components/ui/PlanCard';
import {
  Server,
  Cpu,
  HardDrive,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  ArrowRight,
  Sliders,
  Check
} from 'lucide-react';

export const VpsPage: React.FC = () => {
  const { products, billingCycle, setBillingCycle } = useSite();
  const vpsPlans = products.filter((p) => p.type === 'vps');

  // Interactive RAM filter
  const [minRam, setMinRam] = useState<number>(0);

  const filteredPlans = vpsPlans.filter((p) => {
    const ramNum = parseInt(p.ram) || 0;
    return ramNum >= minRam;
  });

  const osList = [
    { name: 'Ubuntu 24.04 LTS / 22.04 LTS', category: 'Developer Standard' },
    { name: 'Debian 12 Bookworm / 11 Bullseye', category: 'Rock Solid Stability' },
    { name: 'AlmaLinux 9 / 8', category: 'Enterprise RHEL Compatible' },
    { name: 'Rocky Linux 9 / 8', category: 'Enterprise Production' },
    { name: 'CentOS Stream 9', category: 'Upstream Development' }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="relative pt-12 md:pt-16 pb-10 border-b border-[#1F1F1F] bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF5500]">
                <span>VIRTUAL PRIVATE SERVERS</span>
                <span aria-hidden="true" className="text-[#555555]">/</span>
                <span>KVM ENTERPRISE HYPERVISOR</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
                High-Frequency NVMe Cloud VPS
              </h1>
              <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                Deploy instant-launch virtual instances powered by dedicated AMD EPYC and Intel Xeon processors. Full root access, unmetered port speeds, and enterprise PCIe 4.0 NVMe arrays.
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

      {/* Filter by RAM Slider */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-[#262626] bg-[#111111]">
          <div className="flex items-center gap-3">
            <Sliders className="w-4 h-4 text-[#FF5500]" />
            <span className="text-xs font-mono text-[#D4D4D4]">Filter by minimum RAM allocation:</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            {[0, 2, 4, 8].map((ram) => (
              <button
                key={ram}
                onClick={() => setMinRam(ram)}
                className={`px-3 py-1.5 rounded-lg border transition-all ${
                  minRam === ram
                    ? 'border-[#FF5500] bg-[#FF5500]/15 text-[#FF5500] font-bold'
                    : 'border-[#222222] bg-[#161616] text-[#888888] hover:border-[#333333]'
                }`}
              >
                {ram === 0 ? 'All Plans' : `${ram}GB+ RAM`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4 DigitalBerg VPS Plans Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      {/* Supported Operating Systems Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#262626] bg-[#111111] p-8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF5500]">
            <Terminal className="w-4 h-4" />
            <span>OPERATING SYSTEM DISTRIBUTION MATRIX</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight font-sans">
            Ready-to-Deploy Linux Distributions & Custom ISO Uploads
          </h2>
          <p className="text-xs text-[#888888] max-w-2xl leading-relaxed">
            All Cloud VPS instances feature 1-click operating system reinstallation through our portal, full root SSH credentials, and the ability to mount custom bootable ISO images.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {osList.map((os, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-[#222222] bg-[#141414] flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-mono font-bold text-white block">{os.name}</span>
                  <span className="text-[11px] text-[#737373] mt-0.5 block">{os.category}</span>
                </div>
                <Check className="w-4 h-4 text-[#FF5500] shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VPS Hardware & Architecture Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-[#262626] bg-[#111111] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-sans">Dedicated CPU Slices</h3>
            <p className="text-xs text-[#888888] leading-relaxed">
              We enforce strict hypervisor resource quotas. Zero noisy neighbors, zero overcommitting, guaranteed compute cycles for database and compilation workloads.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#262626] bg-[#111111] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
              <HardDrive className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-sans">Hardware RAID-10 NVMe</h3>
            <p className="text-xs text-[#888888] leading-relaxed">
              Mirrored and striped enterprise Gen4 solid-state drives protect your files against simultaneous dual SSD failures with hot-swap rebuild capabilities.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#262626] bg-[#111111] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-sans">Automated Snapshots</h3>
            <p className="text-xs text-[#888888] leading-relaxed">
              Create instant differential snapshots before executing system updates, docker deployments, or kernel modifications. Roll back in seconds.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
