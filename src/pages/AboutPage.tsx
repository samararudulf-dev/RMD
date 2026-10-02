import React from 'react';
import { useSite } from '../context/SiteContext';
import { Server, Shield, Globe, Cpu, CheckCircle, ArrowRight, Layers } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useSite();

  return (
    <div className="space-y-20 pb-20">
      {/* Header */}
      <section className="relative pt-12 md:pt-16 pb-10 border-b border-[#1F1F1F] bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF5500]">
              <Server className="w-4 h-4" />
              <span>COMPANY & INFRASTRUCTURE MISSION</span>
              <span aria-hidden="true" className="text-[#555555]">/</span>
              <span>ENTERPRISE STANDARDS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
              About RMDHost
            </h1>
            <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
              Engineered to eliminate hypervisor bloat and sluggish spinning disks. RMDHost delivers high-frequency NVMe cloud virtualization, licensed Windows Server environments, and bare metal dedicated hardware with low-latency global reach.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values & Technology Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl border border-[#262626] bg-[#111111] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-sans">Strict Hardware Integrity</h3>
            <p className="text-xs text-[#A3A3A3] leading-relaxed">
              We never use desktop-grade components in our server racks. Every node is constructed with enterprise Supermicro or Dell PowerEdge chassis, ECC registered DDR4/DDR5 RAM, and high-endurance enterprise NVMe solid-state drives.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-[#262626] bg-[#111111] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-sans">Inline Autonomous Defense</h3>
            <p className="text-xs text-[#A3A3A3] leading-relaxed">
              DDoS attacks shouldn&apos;t knock your business offline or cost extra. Every single server includes 3.2 Tbps always-on automated packet scrubbing from Arbor Networks and Corero without additional fees or throttling.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-[#262626] bg-[#111111] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-sans">Direct Tier-1 Peering</h3>
            <p className="text-xs text-[#A3A3A3] leading-relaxed">
              We interconnect directly at premier carrier exchange points including DE-CIX Frankfurt, AMS-IX Amsterdam, and LINX London, routing data through Arelion, Lumen, and NTT for minimal latency and zero packet loss.
            </p>
          </div>
        </div>
      </section>

      {/* SLA & Guarantees */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#262626] bg-[#111111] p-8 sm:p-12 space-y-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono text-[#FF5500] font-bold">OUR COMMITMENT</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
              99.99% Availability Backed by Financial Credit
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
              We stand behind our infrastructure. If our network or power availability drops below our strict 99.99% threshold in any calendar month, we issue immediate billing credits in accordance with our Service Level Agreement.
            </p>
          </div>

          <div className="pt-4 border-t border-[#1F1F1F] flex flex-wrap gap-4">
            <button
              onClick={() => navigateTo('vps')}
              className="py-3 px-6 rounded-lg bg-[#FF5500] hover:bg-[#FF6600] text-black font-extrabold text-xs tracking-wide transition-all shadow-lg shadow-[#FF5500]/25"
            >
              Explore Cloud VPS Plans
            </button>
            <button
              onClick={() => navigateTo('datacentres')}
              className="py-3 px-6 rounded-lg border border-[#2E2E2E] bg-[#161616] hover:bg-[#202020] text-white text-xs font-mono transition-all"
            >
              View Global Datacenters →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
