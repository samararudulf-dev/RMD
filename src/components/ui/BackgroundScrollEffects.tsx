import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const BackgroundScrollEffects: React.FC = () => {
  const { scrollY, scrollYProgress } = useScroll();

  // Smooth springs for buttery smooth 60fps parallax motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax transforms for background layers
  const gridY = useTransform(scrollY, (v) => `${(v * 0.18) % 32}px`);
  const orb1Y = useTransform(smoothProgress, [0, 1], [-50, 450]);
  const orb1X = useTransform(smoothProgress, [0, 1], [0, 100]);
  const orb2Y = useTransform(smoothProgress, [0, 1], [100, -350]);
  const orb2Scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.25, 0.9]);
  const orb3Y = useTransform(smoothProgress, [0, 1], [300, -150]);
  const starFieldY = useTransform(scrollY, (v) => -v * 0.12);
  const fastStarsY = useTransform(scrollY, (v) => -v * 0.28);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#0A0A0A]">
      {/* 1. Hairline Top Scroll Progress Indicator in Latitude.sh Orange */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#FF5500] via-[#FFAA00] to-white origin-left z-50 shadow-[0_0_14px_rgba(255,85,0,0.85)]"
        style={{ scaleX: smoothProgress }}
      />

      {/* 2. Parallax Infinite Grid Layer */}
      <motion.div
        className="absolute inset-0 opacity-40 bg-grid-pattern"
        style={{
          y: gridY,
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 100%)'
        }}
      />

      {/* 3. Floating Parallax Ambient Orbs */}
      {/* Orb 1: Upper High-Voltage Orange Core */}
      <motion.div
        className="absolute -top-32 left-[10%] w-[650px] h-[650px] rounded-full blur-[150px] opacity-40"
        style={{
          y: orb1Y,
          x: orb1X,
          background: 'radial-gradient(circle, rgba(255,85,0,0.38) 0%, rgba(251,146,60,0.12) 50%, transparent 70%)'
        }}
      />

      {/* Orb 2: Mid-Right Amber Beam */}
      <motion.div
        className="absolute top-[35%] right-[5%] w-[550px] h-[550px] rounded-full blur-[160px] opacity-35"
        style={{
          y: orb2Y,
          scale: orb2Scale,
          background: 'radial-gradient(circle, rgba(255,102,0,0.32) 0%, rgba(245,158,11,0.12) 55%, transparent 75%)'
        }}
      />

      {/* Orb 3: Lower Infrastructure Warm Matrix */}
      <motion.div
        className="absolute bottom-[-100px] left-[20%] w-[750px] h-[600px] rounded-full blur-[170px] opacity-30"
        style={{
          y: orb3Y,
          background: 'radial-gradient(circle, rgba(234,88,12,0.35) 0%, rgba(255,85,0,0.12) 60%, transparent 75%)'
        }}
      />

      {/* 4. Multi-Plane Parallax Data Dust Particles */}
      <motion.svg
        className="absolute inset-0 w-full h-[150%] opacity-35"
        style={{ y: starFieldY }}
        viewBox="0 0 1440 1200"
        fill="none"
      >
        <circle cx="120" cy="180" r="1.5" fill="#FF5500" opacity="0.7" />
        <circle cx="340" cy="420" r="1" fill="#FFFFFF" opacity="0.8" />
        <circle cx="580" cy="140" r="2" fill="#FFAA00" opacity="0.6" />
        <circle cx="890" cy="310" r="1.5" fill="#FF5500" opacity="0.7" />
        <circle cx="1120" cy="220" r="2" fill="#FFFFFF" opacity="0.6" />
        <circle cx="1320" cy="540" r="1" fill="#FFAA00" opacity="0.8" />
        <circle cx="210" cy="780" r="1.5" fill="#FF5500" opacity="0.7" />
        <circle cx="480" cy="920" r="2" fill="#FFFFFF" opacity="0.7" />
        <circle cx="750" cy="680" r="1" fill="#FFAA00" opacity="0.6" />
        <circle cx="980" cy="840" r="2.5" fill="#FF5500" opacity="0.8" />
        <circle cx="1240" cy="960" r="1.5" fill="#FFAA00" opacity="0.9" />
      </motion.svg>

      <motion.svg
        className="absolute inset-0 w-full h-[200%] opacity-25"
        style={{ y: fastStarsY }}
        viewBox="0 0 1440 1600"
        fill="none"
      >
        <circle cx="240" cy="280" r="2" fill="#FFFFFF" opacity="0.9" />
        <circle cx="680" cy="380" r="2.5" fill="#FF5500" opacity="0.8" />
        <circle cx="920" cy="520" r="2" fill="#FFAA00" opacity="0.9" />
        <circle cx="1180" cy="380" r="3" fill="#FFFFFF" opacity="0.8" />
        <circle cx="360" cy="850" r="2" fill="#FF5500" opacity="0.85" />
        <circle cx="840" cy="1120" r="2.5" fill="#FFFFFF" opacity="0.85" />
        <circle cx="1060" cy="1320" r="2" fill="#FFAA00" opacity="0.8" />
        
        {/* Subtle circuit connection hairlines */}
        <line x1="240" y1="280" x2="310" y2="350" stroke="#FF5500" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.5" />
        <line x1="920" y1="520" x2="990" y2="470" stroke="#FFAA00" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.5" />
        <line x1="840" y1="1120" x2="900" y2="1170" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="2 4" opacity="0.4" />
      </motion.svg>

      {/* 5. Vignette Scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]" />
    </div>
  );
};
