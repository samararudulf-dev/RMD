import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { Globe, Server, Activity, Shield, MapPin, Copy, Check, ArrowRight, Zap, Radio } from 'lucide-react';

export const InteractiveWorldMap: React.FC = () => {
  const { locations, openOrderModal, products } = useSite();
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'Europe' | 'North America' | 'Asia-Pacific'>('All');
  const [activeLocationId, setActiveLocationId] = useState<string>('fra-1');
  const [copiedIp, setCopiedIp] = useState<string | null>(null);
  const [pingTesting, setPingTesting] = useState<boolean>(false);
  const [pingResult, setPingResult] = useState<number | null>(null);

  const activeLocation = locations.find((l) => l.id === activeLocationId) || locations[0];

  const filteredLocations = selectedRegion === 'All'
    ? locations
    : locations.filter((l) => l.region === selectedRegion);

  const handleCopyIp = (ip: string) => {
    navigator.clipboard.writeText(ip);
    setCopiedIp(ip);
    setTimeout(() => setCopiedIp(null), 2000);
  };

  const handleRunPing = () => {
    setPingTesting(true);
    setPingResult(null);
    setTimeout(() => {
      const variance = Math.floor(Math.random() * 4) - 2;
      setPingResult(Math.max(8, activeLocation.pingMs + variance));
      setPingTesting(false);
    }, 600);
  };

  const locationProducts = products.filter((p) =>
    activeLocation.productsAvailable.includes(p.type)
  ).slice(0, 3);

  return (
    <div className="rounded-2xl border border-[#262626] bg-[#0D0D0D]/95 backdrop-blur-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden">
      {/* Orange background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF5500]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Top Filter and Region Selectors */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#1F1F1F] relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF5500]">
            <Radio className="w-3.5 h-3.5 animate-pulse text-[#FF5500]" />
            <span>GLOBAL TRANSIT BACKBONE // 100G CORE ACTIVE</span>
          </div>
          <h3 className="mt-1 text-2xl font-extrabold text-white tracking-tight font-sans">
            Interactive Global Infrastructure Map
          </h3>
          <p className="text-xs text-[#888888] mt-0.5">
            Click any regional node to inspect carrier transits, test latency, and provision nodes
          </p>
        </div>

        {/* Region Segmented Controls */}
        <div className="flex items-center gap-1 p-1 bg-[#141414] border border-[#262626] rounded-xl shrink-0">
          {(['All', 'Europe', 'North America', 'Asia-Pacific'] as const).map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                selectedRegion === reg
                  ? 'bg-[#FF5500] text-black shadow-md shadow-[#FF5500]/25'
                  : 'text-[#888888] hover:text-white'
              }`}
            >
              {reg}
            </button>
          ))}
        </div>
      </div>

      {/* Main Map & Detail Split View */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Left Side: Visual Map Display with Animated Fiber Lines */}
        <div className="lg:col-span-7">
          <div className="relative w-full aspect-[16/9] rounded-xl border border-[#262626] bg-[#050505] overflow-hidden p-4 select-none">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

            {/* Radar Sweep Effect in Latitude Orange */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-[#FF5500]/10 pointer-events-none">
              <div className="w-full h-full rounded-full border border-dashed border-[#FF5500]/25 animate-radar" />
            </div>

            {/* Stylized Vector World Silhouette */}
            <svg
              className="absolute inset-0 w-full h-full opacity-25 text-[#444444] pointer-events-none"
              viewBox="0 0 1000 500"
              fill="currentColor"
            >
              <path d="M150,110 Q210,90 280,110 Q320,150 290,210 Q220,240 180,210 Q140,160 150,110 Z" />
              <path d="M260,260 Q320,270 330,340 Q310,430 270,450 Q240,380 240,310 Z" />
              <path d="M460,90 Q540,80 570,120 Q560,170 510,180 Q470,150 460,90 Z" />
              <path d="M470,200 Q560,190 580,260 Q570,360 520,380 Q460,320 460,240 Z" />
              <path d="M580,80 Q780,70 850,150 Q830,260 720,270 Q620,220 580,130 Z" />
              <path d="M780,330 Q870,320 890,380 Q870,440 800,430 Q760,380 780,330 Z" />
            </svg>

            {/* ANIMATED GREAT-CIRCLE FIBER CONNECTION ARCS IN HIGH-VOLTAGE ORANGE */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 1000 500"
              fill="none"
            >
              <path d="M 470 155 Q 482 145 495 150" stroke="#FF5500" strokeWidth="1.5" strokeOpacity="0.4" />
              <path d="M 495 150 Q 500 155 505 160" stroke="#FF5500" strokeWidth="1.5" strokeOpacity="0.4" />
              <path
                d="M 470 155 Q 375 100 280 180"
                stroke="url(#arcOrange)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-packet-travel"
              />
              <path
                d="M 280 180 Q 250 200 220 220"
                stroke="url(#arcOrange)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-packet-travel"
                style={{ animationDelay: '0.6s' }}
              />
              <path
                d="M 220 220 Q 185 210 150 205"
                stroke="url(#arcOrange)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-packet-travel"
                style={{ animationDelay: '1.2s' }}
              />
              <path
                d="M 150 205 Q 400 60 860 200"
                stroke="url(#arcWhiteOrange)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-packet-travel"
                style={{ animationDelay: '1.8s' }}
              />
              <path
                d="M 505 160 Q 640 210 780 280"
                stroke="url(#arcOrange)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-packet-travel"
                style={{ animationDelay: '0.9s' }}
              />
              <path
                d="M 780 280 Q 820 240 860 200"
                stroke="url(#arcOrange)"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="animate-packet-travel"
                style={{ animationDelay: '1.5s' }}
              />
              <path
                d="M 780 280 Q 835 335 890 390"
                stroke="url(#arcWhiteOrange)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-packet-travel"
                style={{ animationDelay: '0.4s' }}
              />

              <defs>
                <linearGradient id="arcOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF5500" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#FFAA00" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="arcWhiteOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#FF5500" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>

            {/* Interactive Data Center Nodes */}
            {locations.map((loc) => {
              const isSelected = loc.id === activeLocationId;
              const isFiltered =
                selectedRegion === 'All' || loc.region === selectedRegion;

              return (
                <button
                  key={loc.id}
                  onClick={() => setActiveLocationId(loc.id)}
                  style={{
                    left: `${loc.coordinates.x}%`,
                    top: `${loc.coordinates.y}%`
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 z-10 ${
                    !isFiltered ? 'opacity-25 hover:opacity-100' : 'opacity-100'
                  }`}
                  title={`${loc.city}, ${loc.country} (${loc.code})`}
                >
                  <span
                    className={`absolute -inset-2.5 rounded-full transition-opacity ${
                      isSelected
                        ? 'bg-[#FF5500]/40 animate-ping'
                        : 'bg-transparent group-hover:bg-[#FF5500]/20'
                    }`}
                  />

                  {/* Node Dot with Glow */}
                  <div
                    className={`w-3.5 h-3.5 rounded-full border transition-all flex items-center justify-center ${
                      isSelected
                        ? 'bg-[#FF5500] border-white scale-125 shadow-lg shadow-[#FF5500]/80 ring-4 ring-[#FF5500]/30'
                        : 'bg-black border-[#FF5500] group-hover:border-white group-hover:scale-110'
                    }`}
                  >
                    <span
                      className={`w-1 h-1 rounded-full ${
                        isSelected ? 'bg-black' : 'bg-[#FF5500]'
                      }`}
                    />
                  </div>

                  {/* Floating Tag */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-4 mt-1 px-2 py-0.5 rounded border text-[10px] font-mono whitespace-nowrap pointer-events-none transition-all ${
                      isSelected
                        ? 'text-black border-[#FF5500] font-bold shadow-lg shadow-[#FF5500]/20 bg-[#FF5500]'
                        : 'text-[#A3A3A3] border-[#262626] bg-[#111111]/95 group-hover:text-white'
                    }`}
                  >
                    {loc.city} ({loc.code})
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick Location Pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {filteredLocations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveLocationId(loc.id)}
                className={`px-3 py-1.5 text-xs rounded-lg border font-mono transition-all flex items-center gap-2 ${
                  loc.id === activeLocationId
                    ? 'border-[#FF5500] bg-[#FF5500]/15 text-[#FF5500] font-bold shadow-sm'
                    : 'border-[#262626] bg-[#121212] text-[#888888] hover:border-[#383838] hover:text-white'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${loc.id === activeLocationId ? 'bg-[#FF5500]' : 'bg-[#555555]'}`} />
                <span>{loc.city}</span>
                <span className="text-[10px] text-[#666666]">
                  {loc.code}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Active Location Deep-Dive & Test Console */}
        <div className="lg:col-span-5 rounded-xl border border-[#262626] bg-[#111111] p-6 space-y-5 shadow-xl">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#888888]">
                <span>{activeLocation.region}</span>
                <span>·</span>
                <span className="text-[#FF5500] font-bold">{activeLocation.tier}</span>
              </div>
              <h4 className="text-2xl font-extrabold text-white mt-1">
                {activeLocation.city}, {activeLocation.country}
              </h4>
              <p className="text-xs text-[#888888] mt-0.5 font-mono">
                {activeLocation.facility}
              </p>
            </div>
            <div className="px-3 py-1.5 rounded bg-[#FF5500]/15 border border-[#FF5500]/30 font-mono text-xs text-[#FF5500] font-bold">
              {activeLocation.code}
            </div>
          </div>

          {/* Network Specs Cards */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-lg border border-[#222222] bg-[#141414]">
              <span className="text-[#737373] block text-[11px] font-mono">DDoS Capacity</span>
              <strong className="text-white font-mono block mt-1">
                {activeLocation.ddosCapacity}
              </strong>
            </div>
            <div className="p-3.5 rounded-lg border border-[#222222] bg-[#141414]">
              <span className="text-[#737373] block text-[11px] font-mono">Power Architecture</span>
              <strong className="text-white font-mono block mt-1">
                {activeLocation.powerRedundancy}
              </strong>
            </div>
          </div>

          {/* Transit Uplinks */}
          <div>
            <span className="text-xs text-[#737373] block mb-2 font-mono">Transit Carriers & Exchanges:</span>
            <div className="flex flex-wrap gap-1.5">
              {activeLocation.transitProviders.map((provider, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#181818] border border-[#2A2A2A] text-[11px] font-mono text-[#D4D4D4]"
                >
                  {provider}
                </span>
              ))}
            </div>
          </div>

          {/* Looking Glass / Speed Test Terminal */}
          <div className="pt-4 border-t border-[#1F1F1F] space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#888888]">Looking Glass IP:</span>
              <div className="flex items-center gap-2 text-white">
                <span className="px-2 py-0.5 rounded bg-black border border-[#262626]">{activeLocation.testIp}</span>
                <button
                  onClick={() => handleCopyIp(activeLocation.testIp)}
                  className="p-1 hover:text-[#FF5500] transition-colors"
                  title="Copy IP"
                >
                  {copiedIp === activeLocation.testIp ? (
                    <Check className="w-4 h-4 text-[#FF5500]" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#888888]" />
                  )}
                </button>
              </div>
            </div>

            {/* Interactive Ping Runner */}
            <div className="p-3.5 rounded-lg bg-black border border-[#262626] flex items-center justify-between font-mono">
              <div className="flex items-center gap-2.5">
                <Activity className="w-4 h-4 text-[#FF5500]" />
                <div className="text-xs">
                  <span className="text-[#737373]">RTT:</span>{' '}
                  <span className="text-white">
                    {pingTesting ? (
                      <span className="text-[#FF5500] animate-pulse font-bold">
                        ICMP 64 bytes...
                      </span>
                    ) : pingResult ? (
                      <strong className="text-[#FF5500] font-bold text-sm">
                        {pingResult} ms
                      </strong>
                    ) : (
                      `~${activeLocation.pingMs} ms`
                    )}
                  </span>
                </div>
              </div>
              <button
                onClick={handleRunPing}
                disabled={pingTesting}
                className="px-3.5 py-1.5 text-xs font-bold rounded bg-[#FF5500] hover:bg-[#FF6600] text-black disabled:opacity-50 transition-all shadow-md shadow-[#FF5500]/20"
              >
                {pingTesting ? 'Pinging...' : 'Test Latency'}
              </button>
            </div>
          </div>

          {/* Available Hardware In This Facility */}
          <div className="pt-3 border-t border-[#1F1F1F]">
            <span className="text-xs text-[#737373] block mb-2 font-mono">Available Configurations:</span>
            <div className="space-y-2">
              {locationProducts.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#161616] border border-[#262626] text-xs font-mono"
                >
                  <div>
                    <span className="font-bold text-white">{p.name}</span>
                    <span className="text-[11px] text-[#888888] block">
                      {p.cpu} · {p.ram} · {p.storage}
                    </span>
                  </div>
                  <button
                    onClick={() => openOrderModal(p)}
                    className="px-3 py-1.5 rounded bg-[#FF5500] hover:bg-[#FF6600] text-black transition-all font-bold text-xs flex items-center gap-1.5"
                  >
                    <span>Deploy</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
