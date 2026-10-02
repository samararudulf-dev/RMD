import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { X, Server, Check, ArrowRight, ShieldCheck, Globe, Cpu, HardDrive } from 'lucide-react';

export const OrderModal: React.FC = () => {
  const { orderModalPlan, closeOrderModal, locations, formatPrice, billingCycle, setBillingCycle } = useSite();

  const [selectedLocation, setSelectedLocation] = useState<string>('fra-1');
  const [selectedOs, setSelectedOs] = useState<string>('');

  if (!orderModalPlan) return null;

  const currentOsList = orderModalPlan.osSupported || ['Ubuntu 24.04 LTS', 'Debian 12', 'AlmaLinux 9'];
  const activeOs = selectedOs || currentOsList[0];

  const pricing = formatPrice(orderModalPlan.priceMonthly, orderModalPlan.priceAnnually);

  const handleProceedToCheckout = () => {
    let checkoutUrl = orderModalPlan.digitalBergCartUrl;
    const cycleParam = billingCycle === 'annually' ? '&billingcycle=annually' : '&billingcycle=monthly';
    if (!checkoutUrl.includes('billingcycle=')) {
      checkoutUrl += cycleParam;
    }
    window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl border border-[#2A2A2A] bg-[#0E0E0E] shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={closeOrderModal}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#888888] hover:text-white hover:bg-[#1C1C1C] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500]">
            <Server className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white tracking-tight font-mono">
              Deploy Instance: {orderModalPlan.name}
            </h3>
            <p className="text-xs text-[#888888] mt-0.5">
              Review specifications, choose datacenter region, and proceed to checkout
            </p>
          </div>
        </div>

        {/* Plan Core Specs Summary Box */}
        <div className="mt-6 rounded-xl border border-[#222222] bg-[#141414] p-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div>
            <span className="text-[#737373] block text-[11px]">Compute</span>
            <strong className="text-white mt-0.5 block">{orderModalPlan.cpu}</strong>
          </div>
          <div>
            <span className="text-[#737373] block text-[11px]">Memory</span>
            <strong className="text-white mt-0.5 block">{orderModalPlan.ram}</strong>
          </div>
          <div>
            <span className="text-[#737373] block text-[11px]">Storage</span>
            <strong className="text-[#FF5500] mt-0.5 block">{orderModalPlan.storage}</strong>
          </div>
          <div>
            <span className="text-[#737373] block text-[11px]">Uplink</span>
            <strong className="text-white mt-0.5 block">{orderModalPlan.portSpeed}</strong>
          </div>
        </div>

        {/* Step 1: Select Data Center Location */}
        <div className="mt-6">
          <label className="block text-xs font-bold text-[#E5E5E5] uppercase tracking-wider mb-2 font-mono">
            1. Select Datacenter Region
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono">
            {locations.map((loc) => {
              const isSelected = selectedLocation === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc.id)}
                  type="button"
                  className={`p-2.5 rounded-xl border text-left transition-all text-xs ${
                    isSelected
                      ? 'border-[#FF5500] bg-[#FF5500]/15 text-white font-bold shadow-md shadow-[#FF5500]/10'
                      : 'border-[#222222] bg-[#141414] text-[#888888] hover:border-[#383838] hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{loc.city}</span>
                    <span className="text-[10px] text-[#FF5500] font-semibold">{loc.code}</span>
                  </div>
                  <span className="text-[11px] text-[#737373] block mt-0.5 font-sans">{loc.country}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Select Operating System */}
        <div className="mt-6">
          <label className="block text-xs font-bold text-[#E5E5E5] uppercase tracking-wider mb-2 font-mono">
            2. Choose Operating System / Image
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono">
            {currentOsList.map((os) => {
              const isSelected = activeOs === os;
              return (
                <button
                  key={os}
                  onClick={() => setSelectedOs(os)}
                  type="button"
                  className={`p-2.5 rounded-xl border text-left transition-all text-xs flex items-center justify-between ${
                    isSelected
                      ? 'border-[#FF5500] bg-[#FF5500]/15 text-white font-bold'
                      : 'border-[#222222] bg-[#141414] text-[#888888] hover:border-[#383838] hover:text-white'
                  }`}
                >
                  <span>{os}</span>
                  {isSelected && <Check className="w-4 h-4 text-[#FF5500] shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Billing Cycle Option */}
        <div className="mt-6">
          <label className="block text-xs font-bold text-[#E5E5E5] uppercase tracking-wider mb-2 font-mono">
            3. Choose Billing Term
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`p-3 rounded-xl border text-left text-xs transition-all ${
                billingCycle === 'monthly'
                  ? 'border-[#FF5500] bg-[#FF5500]/15 text-white font-bold'
                  : 'border-[#222222] bg-[#141414] text-[#888888] hover:border-[#383838]'
              }`}
            >
              <div className="font-bold text-white">Monthly Billing</div>
              <div className="text-[11px] text-[#737373] mt-0.5">Flexible, cancel anytime</div>
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annually')}
              className={`p-3 rounded-xl border text-left text-xs transition-all ${
                billingCycle === 'annually'
                  ? 'border-[#FF5500] bg-[#FF5500]/15 text-white font-bold'
                  : 'border-[#222222] bg-[#141414] text-[#888888] hover:border-[#383838]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">Annual Billing</span>
                <span className="px-2 py-0.5 rounded bg-[#FF5500]/25 text-[#FF5500] text-[10px] font-mono font-bold">
                  SAVE 20%
                </span>
              </div>
              <div className="text-[11px] text-[#737373] mt-0.5">2 months free equivalent</div>
            </button>
          </div>
        </div>

        {/* Price & Checkout Redirection Box */}
        <div className="mt-8 pt-6 border-t border-[#1F1F1F] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-[#888888]">Total Due Today:</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-sm font-semibold text-[#888888]">{pricing.symbol}</span>
              <span className="text-3xl font-extrabold font-mono text-white tracking-tight">
                {pricing.amount}
              </span>
              <span className="text-xs text-[#888888]">{pricing.period}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[#FF5500] mt-1 font-semibold font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>30-Day Money-Back Guarantee · Instant Setup</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={handleProceedToCheckout}
              className="py-3 px-6 rounded-lg bg-[#FF5500] hover:bg-[#FF6600] text-black font-extrabold text-xs tracking-wide transition-all shadow-xl shadow-[#FF5500]/25 flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <span>Order on DigitalBerg Gateway</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <span className="text-[10px] text-[#666666] text-center font-mono">
              Direct checkout link on DigitalBerg
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
