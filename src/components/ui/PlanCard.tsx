import React, { useState } from 'react';
import { ProductPlan } from '../../types';
import { useSite } from '../../context/SiteContext';
import { Server, Cpu, HardDrive, ShieldCheck, Zap, ArrowRight, Check, Activity } from 'lucide-react';

interface PlanCardProps {
  plan: ProductPlan;
  onOrder?: (plan: ProductPlan) => void;
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan, onOrder }) => {
  const { formatPrice, openOrderModal, billingCycle } = useSite();
  const pricing = formatPrice(plan.priceMonthly, plan.priceAnnually);
  const [isCardHovered, setIsCardHovered] = useState(false);

  const handleOrder = () => {
    if (onOrder) {
      onOrder(plan);
    } else {
      openOrderModal(plan);
    }
  };

  return (
    <div
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      className={`relative flex flex-col justify-between rounded-xl bg-[#111111] backdrop-blur-xl p-6 sm:p-7 transition-all duration-300 group border ${
        plan.popular
          ? 'border-[#FF5500] shadow-2xl shadow-[#FF5500]/15 hover:-translate-y-1.5 hover:shadow-[#FF5500]/25'
          : 'border-[#262626] hover:border-[#FF5500]/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/80 hover:bg-[#141414]'
      }`}
    >
      {/* Background radial accent glow on hover */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-b from-[#FF5500]/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-300 pointer-events-none ${
          isCardHovered || plan.popular ? 'opacity-100' : ''
        }`}
      />

      {/* Latitude.sh style popular badge */}
      {plan.popular && (
        <div className="absolute -top-3 left-6 z-10">
          <span className="inline-flex items-center gap-1.5 rounded bg-[#FF5500] px-2.5 py-0.5 text-[10px] font-mono font-extrabold text-black tracking-wider uppercase shadow-md shadow-[#FF5500]/30">
            <Zap className="w-2.5 h-2.5 fill-black stroke-black" />
            POPULAR SPEC
          </span>
        </div>
      )}

      <div className="relative z-10">
        {/* Header & Tagline */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-extrabold tracking-tight text-white group-hover:text-[#FF5500] transition-colors font-mono">
              {plan.name}
            </h3>
            <p className="mt-1 text-xs text-[#888888] leading-relaxed min-h-[34px]">
              {plan.tagline}
            </p>
          </div>
          <div className="p-2.5 rounded-lg bg-[#1A1A1A] text-[#FF5500] border border-[#2E2E2E] shrink-0 group-hover:border-[#FF5500]/50 transition-colors">
            <Server className="w-4 h-4" />
          </div>
        </div>

        {/* Pricing Display with Tabular Figures */}
        <div className="mt-5 pb-5 border-b border-[#222222]">
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-semibold text-[#888888] font-sans">{pricing.symbol}</span>
            <span className="text-4xl font-extrabold font-mono tracking-tight text-white group-hover:scale-105 origin-left transition-transform duration-200">
              {pricing.amount}
            </span>
            <span className="text-xs text-[#888888] font-sans">{pricing.period}</span>
          </div>
          <div className="mt-1.5 text-xs text-[#737373] flex items-center gap-1.5">
            {billingCycle === 'annually' ? (
              <span className="text-[#FF5500] font-semibold flex items-center gap-1 font-mono text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                Annual Plan (20% Discount Saved)
              </span>
            ) : (
              <span>Monthly billing · No contract · 30-day refund</span>
            )}
          </div>
        </div>

        {/* Core Hardware Specs Grid - Latitude.sh Spec Sheet Style */}
        <div className="mt-5 space-y-2.5 text-xs font-mono">
          {/* CPU */}
          <div className="flex items-center justify-between py-1 border-b border-[#1E1E1E]">
            <div className="flex items-center gap-2 text-[#888888]">
              <Cpu className="w-3.5 h-3.5 text-[#555555] group-hover:text-[#FF5500] transition-colors" />
              <span>CPU</span>
            </div>
            <span className="font-semibold text-white">{plan.cpu}</span>
          </div>

          {/* RAM */}
          <div className="flex items-center justify-between py-1 border-b border-[#1E1E1E]">
            <div className="flex items-center gap-2 text-[#888888]">
              <Zap className="w-3.5 h-3.5 text-[#555555] group-hover:text-[#FF5500] transition-colors" />
              <span>RAM</span>
            </div>
            <span className="font-semibold text-white">{plan.ram}</span>
          </div>

          {/* Storage */}
          <div className="flex items-center justify-between py-1 border-b border-[#1E1E1E]">
            <div className="flex items-center gap-2 text-[#888888]">
              <HardDrive className="w-3.5 h-3.5 text-[#555555] group-hover:text-[#FF5500] transition-colors" />
              <span>NVMe Disk</span>
            </div>
            <span className="font-bold text-[#FF5500]">{plan.storage}</span>
          </div>

          {/* Bandwidth & Uplink */}
          <div className="flex items-center justify-between py-1 border-b border-[#1E1E1E]">
            <span className="text-[#888888]">Bandwidth</span>
            <span className="text-[#D4D4D4]">
              {plan.bandwidth} · {plan.portSpeed}
            </span>
          </div>

          {/* IP Addresses */}
          <div className="flex items-center justify-between py-1 border-b border-[#1E1E1E]">
            <span className="text-[#888888]">IP Addresses</span>
            <span className="text-[#D4D4D4]">{plan.ipv4}</span>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-5 space-y-2">
          {plan.specs.slice(0, 3).map((spec, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-[#A3A3A3]">
              <Check className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
              <span>
                <span className="text-[#737373]">{spec.label}:</span>{' '}
                <strong className="font-medium text-white">{spec.value}</strong>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer - Latitude.sh style high-contrast CTA */}
      <div className="mt-7 pt-4 border-t border-[#222222] relative z-10">
        <button
          onClick={handleOrder}
          className={`w-full py-3 px-4 rounded-lg font-bold text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-2 shadow-lg ${
            plan.popular
              ? 'bg-[#FF5500] hover:bg-[#FF6600] text-black shadow-[#FF5500]/25'
              : 'bg-[#1C1C1C] hover:bg-[#FF5500] hover:text-black text-white border border-[#2E2E2E] hover:border-[#FF5500]'
          }`}
        >
          <span>Deploy Instance</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
        <div className="mt-2.5 text-center">
          <span className="text-[11px] text-[#666666] font-mono flex items-center justify-center gap-1.5">
            <Activity className="w-3 h-3 text-[#FF5500]" />
            <span>&lt; 60s Provisioning · 99.99% SLA</span>
          </span>
        </div>
      </div>
    </div>
  );
};
