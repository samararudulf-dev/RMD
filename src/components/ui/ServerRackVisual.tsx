import React from 'react';

interface ServerRackVisualProps {
  className?: string;
  variant?: 'rack' | 'blade' | 'network';
}

export const ServerRackVisual: React.FC<ServerRackVisualProps> = ({ className = '', variant = 'rack' }) => {
  return (
    <div className={`relative rounded-2xl overflow-hidden tech-border bg-[#0E0E0E]/90 backdrop-blur-md p-6 ${className}`}>
      {/* Top chassis bar */}
      <div className="flex items-center justify-between border-b border-[#222222] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-pulse shadow-sm shadow-[#FF5500]" />
          <span className="text-xs font-mono text-[#FF5500] font-bold">RMD-FABRIC // 100G CORE ACTIVE</span>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono text-[#888888]">
          <span>PORT: 01-48</span>
          <span className="text-[#333333]">|</span>
          <span className="text-white">TEMP: 21.4°C</span>
          <span className="text-[#333333]">|</span>
          <span className="text-[#FF5500] font-bold">STATUS: OPTIMAL</span>
        </div>
      </div>

      {/* Rack Blade Units */}
      <div className="space-y-2.5 font-mono text-[11px]">
        {/* Blade 01 */}
        <div className="group rounded-xl border border-[#222222] bg-[#141414] p-3 transition-all hover:border-[#FF5500]/60 hover:bg-[#181818]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-[#666666] font-semibold">UNIT 01</span>
              <span className="text-white font-medium">AMD EPYC 7702 · 64C / 128T</span>
              <span className="px-1.5 py-0.5 rounded bg-[#FF5500]/15 text-[#FF5500] text-[10px] font-bold">ECC DDR4</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] animate-ping" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#333333]" />
              </div>
              <span className="text-[#A3A3A3] text-[10px]">NVMe GEN4 RAID</span>
            </div>
          </div>
          {/* Activity trace */}
          <div className="mt-2.5 flex items-center gap-1">
            {[45, 65, 80, 50, 90, 75, 60, 85, 95, 40, 70, 88, 62, 54, 78, 92].map((val, idx) => (
              <div
                key={idx}
                className="h-1 flex-1 rounded-sm bg-[#222222] overflow-hidden"
              >
                <div
                  className="h-full bg-[#FF5500]"
                  style={{ width: `${val}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Blade 02 */}
        <div className="group rounded-xl border border-[#222222] bg-[#141414] p-3 transition-all hover:border-[#FF5500]/60 hover:bg-[#181818]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-[#666666] font-semibold">UNIT 02</span>
              <span className="text-white font-medium">INTEL XEON 4210 · DUAL-SOCKET</span>
              <span className="px-1.5 py-0.5 rounded bg-[#FFAA00]/15 text-[#FFAA00] text-[10px] font-bold">128 GB RAM</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] animate-pulse" />
              </div>
              <span className="text-[#A3A3A3] text-[10px]">10G UPLINK</span>
            </div>
          </div>
          {/* Activity trace */}
          <div className="mt-2.5 flex items-center gap-1">
            {[72, 85, 90, 65, 58, 80, 92, 45, 60, 78, 82, 91, 55, 68, 74, 86].map((val, idx) => (
              <div
                key={idx}
                className="h-1 flex-1 rounded-sm bg-[#222222] overflow-hidden"
              >
                <div
                  className="h-full bg-[#FFAA00]"
                  style={{ width: `${val}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Blade 03 */}
        <div className="group rounded-xl border border-[#222222] bg-[#141414] p-3 transition-all hover:border-[#FF5500]/60 hover:bg-[#181818]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-[#666666] font-semibold">UNIT 03</span>
              <span className="text-white font-medium">NVMe STORAGE FABRIC · CEPH CLOUD</span>
              <span className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px] font-bold">PCIe 4.0</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#333333]" />
              </div>
              <span className="text-[#A3A3A3] text-[10px]">HOT-SWAP</span>
            </div>
          </div>
          {/* Activity trace */}
          <div className="mt-2.5 flex items-center gap-1">
            {[90, 95, 88, 70, 85, 92, 60, 75, 80, 95, 89, 78, 92, 84, 91, 98].map((val, idx) => (
              <div
                key={idx}
                className="h-1 flex-1 rounded-sm bg-[#222222] overflow-hidden"
              >
                <div
                  className="h-full bg-[#FF5500]"
                  style={{ width: `${val}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optical fiber routing footer */}
      <div className="mt-4 pt-3 border-t border-[#222222] flex items-center justify-between text-[10px] font-mono text-[#888888]">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
          <span>FIBER CHANNEL: ACTIVE (LACP TRUNK)</span>
        </div>
        <div className="text-white">AGGREGATE: 160 Gbps</div>
      </div>
    </div>
  );
};
