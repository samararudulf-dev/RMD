import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { InteractiveWorldMap } from '../components/ui/InteractiveWorldMap';
import { Globe, MapPin, Server, Activity, Copy, Check, ArrowRight } from 'lucide-react';

export const DataCentresPage: React.FC = () => {
  const { locations, openOrderModal, products } = useSite();
  const [copiedIp, setCopiedIp] = useState<string | null>(null);

  const handleCopy = (ip: string) => {
    navigator.clipboard.writeText(ip);
    setCopiedIp(ip);
    setTimeout(() => setCopiedIp(null), 2000);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Header */}
      <section className="relative pt-12 md:pt-16 pb-10 border-b border-[#1F1F1F] bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF5500]">
              <Globe className="w-4 h-4" />
              <span>GLOBAL INFRASTRUCTURE FOOTPRINT</span>
              <span aria-hidden="true" className="text-[#555555]">/</span>
              <span>TIER-3 & TIER-4 CERTIFIED</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
              Global Datacenters & Looking Glass
            </h1>
            <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
              Strategically placed in key international interconnect hubs across Europe, North America, and Asia-Pacific. Directly connected to Tier-1 telecom backbones and local internet exchanges for ultra-low latency.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive World Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveWorldMap />
      </section>

      {/* Complete Locations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 pb-4 border-b border-[#1F1F1F]">
          <h2 className="text-2xl font-bold text-white tracking-tight font-sans">
            All 9 Operational Facilities & Looking Glass IPs
          </h2>
          <p className="text-xs text-[#888888] mt-1">
            Test packet round-trip time (RTT), verify routing paths, and provision servers directly in your target market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="rounded-xl border border-[#262626] bg-[#111111] p-6 flex flex-col justify-between space-y-4 hover:border-[#FF5500]/60 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-[#FF5500] font-bold block">{loc.region}</span>
                    <h3 className="text-xl font-bold text-white mt-0.5 font-sans">
                      {loc.city}, {loc.country}
                    </h3>
                    <p className="text-xs text-[#888888] font-mono">{loc.facility}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#FF5500]/15 border border-[#FF5500]/30 font-mono text-xs text-[#FF5500] font-bold">
                    {loc.code}
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-[#1F1F1F] space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-[#737373]">Reliability Tier:</span>
                    <span className="text-white font-semibold">{loc.tier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#737373]">DDoS Mitigation:</span>
                    <span className="text-white font-semibold">{loc.ddosCapacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#737373]">Power Redundancy:</span>
                    <span className="text-white font-semibold">{loc.powerRedundancy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#737373]">Est. Global Ping:</span>
                    <span className="text-[#FF5500] font-bold">~{loc.pingMs} ms</span>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="text-[11px] text-[#737373] block mb-1 font-mono">Transit Carriers:</span>
                  <div className="flex flex-wrap gap-1">
                    {loc.transitProviders.map((p, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-[#181818] border border-[#2A2A2A] text-[10px] font-mono text-[#D4D4D4]">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Looking Glass Copy Bar */}
              <div className="pt-4 border-t border-[#1F1F1F] flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-1.5 text-white">
                  <span className="text-[#737373]">IP:</span>
                  <span className="bg-black px-2 py-0.5 rounded border border-[#262626]">{loc.testIp}</span>
                </div>
                <button
                  onClick={() => handleCopy(loc.testIp)}
                  className="px-2.5 py-1 rounded bg-[#1A1A1A] hover:bg-[#FF5500] hover:text-black border border-[#2E2E2E] hover:border-[#FF5500] text-xs transition-colors flex items-center gap-1"
                >
                  {copiedIp === loc.testIp ? (
                    <>
                      <Check className="w-3 h-3 text-green-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-[#888888]" />
                      <span>Copy IP</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
