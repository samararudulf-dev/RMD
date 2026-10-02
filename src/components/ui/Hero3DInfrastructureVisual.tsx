import React, { useState, useRef, useEffect } from 'react';
import { Server, Cpu, HardDrive, Shield, Activity, Zap, Radio } from 'lucide-react';

export const Hero3DInfrastructureVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 8, y: -12 });
  const [targetRotate, setTargetRotate] = useState({ x: 8, y: -12 });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt tracker
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Calculate rotation between -18 and 18 deg
    const rx = (0.5 - y) * 22;
    const ry = (x - 0.5) * 26;

    setTargetRotate({ x: rx, y: ry });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTargetRotate({ x: 8, y: -12 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Smooth lerp
  useEffect(() => {
    let animId: number;
    const smoothLoop = () => {
      setRotate((prev) => ({
        x: prev.x + (targetRotate.x - prev.x) * 0.1,
        y: prev.y + (targetRotate.y - prev.y) * 0.1
      }));
      animId = requestAnimationFrame(smoothLoop);
    };
    animId = requestAnimationFrame(smoothLoop);
    return () => cancelAnimationFrame(animId);
  }, [targetRotate]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[4/3] sm:aspect-[16/11] select-none perspective-1400 flex items-center justify-center p-4"
    >
      {/* Background radial ambient glow in Latitude.sh high-voltage orange */}
      <div
        className="absolute w-[420px] h-[420px] rounded-full blur-[120px] pointer-events-none transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(255,85,0,0.3) 0%, rgba(249,115,22,0.12) 50%, transparent 75%)',
          transform: `translate(${rotate.y * 3}px, ${-rotate.x * 3}px)`
        }}
      />

      {/* Main 3D Container with real CSS perspective tilt */}
      <div
        className="relative w-full max-w-[480px] preserve-3d transition-transform duration-100 ease-out"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
        }}
      >
        {/* HOLOGRAPHIC FLOATING SATELLITE NODES */}
        
        {/* Node 1: Frankfurt Edge Core */}
        <div
          className="absolute -top-6 -right-4 sm:-right-8 z-30 preserve-3d transition-transform duration-300 pointer-events-auto"
          style={{ transform: 'translateZ(75px)' }}
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#FF5500]/50 bg-[#141414]/95 backdrop-blur-md shadow-2xl shadow-black/80">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
            <div className="text-[11px] font-mono leading-none">
              <span className="text-[#888888]">FRA-1 // </span>
              <strong className="text-[#FF5500]">1.2ms</strong>
            </div>
          </div>
        </div>

        {/* Node 2: 3.2 Tbps DDoS Scrubbing */}
        <div
          className="absolute -top-4 -left-2 sm:-left-6 z-30 preserve-3d transition-transform duration-300 pointer-events-auto"
          style={{ transform: 'translateZ(65px)' }}
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#333333] bg-[#141414]/95 backdrop-blur-md shadow-2xl shadow-black/80">
            <Shield className="w-3.5 h-3.5 text-[#FF5500]" />
            <div className="text-[11px] font-mono leading-none">
              <span className="text-[#888888]">DDoS: </span>
              <strong className="text-white">3.2 Tbps</strong>
            </div>
          </div>
        </div>

        {/* Node 3: NVMe Storage IOPS */}
        <div
          className="absolute -bottom-5 -left-4 z-30 preserve-3d transition-transform duration-300 pointer-events-auto"
          style={{ transform: 'translateZ(70px)' }}
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#333333] bg-[#141414]/95 backdrop-blur-md shadow-2xl shadow-black/80">
            <HardDrive className="w-3.5 h-3.5 text-[#FF5500]" />
            <div className="text-[11px] font-mono leading-none">
              <span className="text-[#888888]">IOPS: </span>
              <strong className="text-white">850K+ Gen4</strong>
            </div>
          </div>
        </div>

        {/* Node 4: 99.99% Core Uptime */}
        <div
          className="absolute -bottom-4 -right-2 sm:-right-6 z-30 preserve-3d transition-transform duration-300 pointer-events-auto"
          style={{ transform: 'translateZ(80px)' }}
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#FF5500]/50 bg-[#141414]/95 backdrop-blur-md shadow-2xl shadow-black/80">
            <Activity className="w-3.5 h-3.5 text-[#FF5500]" />
            <div className="text-[11px] font-mono leading-none">
              <span className="text-[#888888]">SLA: </span>
              <strong className="text-[#FF5500]">99.99%</strong>
            </div>
          </div>
        </div>

        {/* SVG ANIMATED CONNECTIONS / FIBER BEAMS */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
          viewBox="0 0 460 380"
          fill="none"
        >
          <path
            d="M 50 20 Q 180 60 230 110"
            stroke="url(#beamOrange1)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-packet-travel"
          />
          <path
            d="M 410 20 Q 300 80 230 110"
            stroke="url(#beamOrange2)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-packet-travel"
            style={{ animationDelay: '0.8s' }}
          />
          <path
            d="M 40 340 Q 140 280 230 250"
            stroke="url(#beamWhiteOrange)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-packet-travel"
            style={{ animationDelay: '1.4s' }}
          />
          <path
            d="M 420 340 Q 320 280 230 250"
            stroke="url(#beamOrange1)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-packet-travel"
            style={{ animationDelay: '0.4s' }}
          />

          <defs>
            <linearGradient id="beamOrange1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5500" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FFAA00" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="beamOrange2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFAA00" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FF5500" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="beamWhiteOrange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FF5500" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* 3D SERVER CHASSIS TOWER IN GRAPHITE & MATTE BLACK */}
        <div
          className="relative rounded-2xl border border-[#282828] bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] shadow-2xl p-5 sm:p-6 backdrop-blur-xl preserve-3d"
          style={{ transform: 'translateZ(20px)' }}
        >
          {/* Subtle Scanline Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF5500]/[0.05] to-transparent h-16 w-full animate-scanline pointer-events-none rounded-2xl" />

          {/* Top Chassis Control Bar */}
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#262626]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-pulse shadow-sm shadow-[#FF5500]" />
              <span className="font-mono text-xs font-extrabold text-white tracking-wider">
                RMD // BARE METAL FABRIC
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#A3A3A3]">
              <span className="px-2 py-0.5 rounded bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30 font-extrabold">
                100G TRANSIT
              </span>
              <span className="text-white">21.4°C</span>
            </div>
          </div>

          {/* CHASSIS BLADE UNITS */}
          <div className="space-y-3 font-mono text-xs">
            {/* Blade 1: Compute Node (AMD EPYC) */}
            <div className="rounded-xl border border-[#2E2E2E] bg-[#141414] p-3 shadow-md hover:border-[#FF5500]/60 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded bg-[#FF5500]/15 text-[#FF5500]">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-white text-[11px]">
                    AMD EPYC™ 7702 · 64C / 128T
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] animate-ping" />
                  <span className="text-[10px] text-[#FF5500] font-bold">TURBO 3.35G</span>
                </div>
              </div>

              {/* Pulse Waves */}
              <div className="mt-2.5 flex items-center gap-1">
                {[65, 82, 94, 70, 88, 55, 91, 78, 62, 85, 96, 74, 83, 90, 68, 89].map((val, idx) => (
                  <div key={idx} className="h-1.5 flex-1 rounded-sm bg-[#222222] overflow-hidden">
                    <div
                      className="h-full bg-[#FF5500]"
                      style={{
                        width: `${val}%`,
                        opacity: isHovered ? 0.95 : 0.75
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Blade 2: Memory Fabric (256 GB DDR4 ECC) */}
            <div className="rounded-xl border border-[#2E2E2E] bg-[#141414] p-3 shadow-md hover:border-[#FF5500]/60 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded bg-[#FFAA00]/15 text-[#FFAA00]">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-white text-[11px]">
                    256 GB DDR4 3200MHz ECC REG
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFAA00]" />
                  <span className="text-[10px] text-[#FFAA00] font-bold">8-CHANNEL</span>
                </div>
              </div>

              <div className="mt-2.5 flex items-center gap-1">
                {[42, 58, 76, 84, 91, 72, 60, 85, 90, 68, 77, 89, 93, 75, 82, 88].map((val, idx) => (
                  <div key={idx} className="h-1.5 flex-1 rounded-sm bg-[#222222] overflow-hidden">
                    <div
                      className="h-full bg-[#FFAA00]"
                      style={{
                        width: `${val}%`,
                        opacity: isHovered ? 0.95 : 0.75
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Blade 3: Storage Array (4x 1.92TB NVMe RAID) */}
            <div className="rounded-xl border border-[#2E2E2E] bg-[#141414] p-3 shadow-md hover:border-white/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded bg-white/10 text-white">
                    <HardDrive className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-white text-[11px]">
                    4x 1.92 TB NVMe U.2 HARDWARE RAID 10
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-[10px] text-white font-bold">5,200 MB/s</span>
                </div>
              </div>

              <div className="mt-2.5 flex items-center gap-1">
                {[80, 95, 88, 62, 70, 92, 85, 78, 90, 96, 82, 74, 91, 87, 94, 89].map((val, idx) => (
                  <div key={idx} className="h-1.5 flex-1 rounded-sm bg-[#222222] overflow-hidden">
                    <div
                      className="h-full bg-white"
                      style={{
                        width: `${val}%`,
                        opacity: isHovered ? 0.95 : 0.75
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Telemetry Footer */}
          <div className="mt-4 pt-3.5 border-t border-[#262626] flex items-center justify-between text-[11px] text-[#A3A3A3]">
            <div className="flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-[#FF5500] animate-pulse" />
              <span className="text-white font-mono">BGP ANYCAST ROUTED</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#FF5500] font-mono font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
              <span>0% PACKET LOSS</span>
            </div>
          </div>
        </div>

        {/* 3D Base Shadow Floor Matrix */}
        <div
          className="absolute -bottom-8 left-6 right-6 h-12 rounded-full blur-xl bg-[#FF5500]/20 pointer-events-none"
          style={{ transform: 'translateZ(-30px)' }}
        />
      </div>
    </div>
  );
};
