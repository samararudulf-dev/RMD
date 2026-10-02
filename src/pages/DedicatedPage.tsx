import React from 'react';
import { useSite } from '../context/SiteContext';
import { PlanCard } from '../components/ui/PlanCard';
import {
  Server,
  Cpu,
  HardDrive,
  ShieldCheck,
  CheckCircle,
  Layers,
  Wrench,
  Clock,
  ArrowRight
} from 'lucide-react';

export const DedicatedPage: React.FC = () => {
  const { products, navigateTo, billingCycle, setBillingCycle } = useSite();
  const dediPlans = products.filter((p) => p.type === 'dedicated');

  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="relative pt-12 md:pt-16 pb-10 border-b border-[#1F1F1F] bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF5500]">
                <span>RAW UNVIRTUALIZED COMPUTE</span>
                <span aria-hidden="true" className="text-[#555555]">/</span>
                <span>ENTERPRISE BARE METAL</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
                Bare Metal Dedicated Servers
              </h1>
              <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                Zero hypervisor overhead and 100% dedicated hardware. High-density AMD EPYC and Intel Xeon server motherboards with enterprise ECC memory, redundant NVMe storage, and dedicated IPMI out-of-band remote control.
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

      {/* 4 Dedicated Bare Metal Plans Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dediPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      {/* Bare Metal Architecture & SLA Rigor */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#262626] bg-[#111111] p-8 sm:p-10 space-y-8">
          <div>
            <div className="text-xs font-mono text-[#FF5500] mb-1">
              ZERO VIRTUALIZATION PENALTY · PURE SILICON ACCESS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
              Single-Tenant Bare Metal for Heavy Database & Virtualization Nodes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base font-sans">Dedicated Unshared Silicon</h4>
              <p className="text-xs text-[#888888] leading-relaxed">
                Direct access to CPU instruction sets (AVX-512, Intel QuickAssist, AMD SEV). Run custom Proxmox VE, VMware ESXi, or bare-metal Kubernetes clusters with complete hardware pass-through.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base font-sans">Dedicated IPMI / KVM Console</h4>
              <p className="text-xs text-[#888888] leading-relaxed">
                Each dedicated machine includes dedicated remote lights-out management (iDRAC9 or Supermicro IPMI 2.0). Power cycle, mount boot ISOs, and debug kernels remotely 24/7/365.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base font-sans">Hardware Replacement SLA</h4>
              <p className="text-xs text-[#888888] leading-relaxed">
                In the rare event of disk, power supply, or RAM failure, our on-site datacenter technicians guarantee physical component hot-swap replacement within 4 hours.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#1F1F1F] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-sm font-bold text-white font-sans">Need a custom cluster or multi-server private network?</span>
              <p className="text-xs text-[#888888]">Our sales architects can configure private VLANs, BGP announcements, and customized drive topologies.</p>
            </div>
            <button
              onClick={() => navigateTo('contact')}
              className="py-2.5 px-5 rounded-lg bg-[#FF5500] hover:bg-[#FF6600] text-black font-extrabold text-xs tracking-wide shrink-0 transition-all font-mono"
            >
              Contact Solution Architects →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
