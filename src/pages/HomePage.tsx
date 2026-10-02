import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Hero3DInfrastructureVisual } from '../components/ui/Hero3DInfrastructureVisual';
import { PlanCard } from '../components/ui/PlanCard';
import { InteractiveWorldMap } from '../components/ui/InteractiveWorldMap';
import { ProductType } from '../types';
import {
  Server,
  Cpu,
  Zap,
  ShieldCheck,
  Globe,
  HardDrive,
  Activity,
  ArrowRight,
  Terminal,
  CheckCircle,
  Layers,
  ChevronDown,
  Sparkles,
  Radio,
  Search,
  Copy,
  Check,
  Code2
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { products, navigateTo, billingCycle, setBillingCycle, faqs } = useSite();
  const [selectedProductType, setSelectedProductType] = useState<ProductType>('vps');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [faqCategory, setFaqCategory] = useState<string>('All');
  const [faqSearch, setFaqSearch] = useState<string>('');
  const [copiedCli, setCopiedCli] = useState(false);
  const [activeCliTab, setActiveCliTab] = useState<'cli' | 'terraform' | 'curl'>('cli');

  const filteredPlans = products.filter((p) => p.type === selectedProductType);

  const filteredFaqs = faqs.filter((f) => {
    const matchesCat = faqCategory === 'All' || f.category === faqCategory;
    const matchesSearch =
      f.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      f.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const cliSnippets = {
    cli: `rmd instances create \\
  --plan vps-enterprise-nvme \\
  --region fra-frankfurt \\
  --os ubuntu-24.04-lts \\
  --ssh-key ~/.ssh/id_ed25519.pub`,
    terraform: `resource "rmdhost_instance" "production_web" {
  plan     = "vps-3-nvme"
  region   = "fra-1"
  image    = "ubuntu-24.04"
  backups  = true
  firewall = "strict-web"
}`,
    curl: `curl -X POST https://api.rmdhost.com/v1/servers \\
  -H "Authorization: Bearer $RMD_API_TOKEN" \\
  -d '{"plan":"c3.large.x86","location":"fra"}'`
  };

  const handleCopyCli = () => {
    navigator.clipboard.writeText(cliSnippets[activeCliTab]);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  return (
    <div className="space-y-28 pb-24">
      {/* 🌌 HERO SECTION WITH 3D INTERACTIVE VISUAL & LATITUDE.SH STYLING */}
      <section className="relative pt-12 md:pt-20 lg:pt-24 overflow-hidden">
        {/* Futuristic glowing atmospheric spotlights in Latitude.sh Orange */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-[#FF5500]/[0.08] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-[#FFAA00]/[0.05] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Bold Typography & Hierarchy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Latitude.sh Signature Orange Kicker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF5500]/30 bg-[#161616]/90 text-[#FF5500] text-xs font-mono backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
                <span className="font-bold tracking-wide">ENTERPRISE CLOUD // 100G BACKBONE</span>
                <span className="text-[#444444]">/</span>
                <span className="text-[#D4D4D4] font-medium">TIER-4 GLOBAL NODES</span>
              </div>

              {/* Marquee Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight text-white leading-[1.08] text-balance font-sans">
                Next-Gen Cloud VPS & <br />
                <span className="bg-gradient-to-r from-[#FF5500] via-[#FFAA00] to-white bg-clip-text text-transparent">
                  Bare Metal Infrastructure.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-[#A3A3A3] max-w-2xl leading-relaxed">
                Deploy high-frequency AMD EPYC & Intel Xeon compute nodes in under 60 seconds. Powered by enterprise NVMe Gen4 storage, 10Gbps unmetered network uplinks, and 99.99% guaranteed uptime.
              </p>

              {/* Primary Call-to-Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    setSelectedProductType('vps');
                    document.getElementById('plans-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="py-3.5 px-7 rounded-lg bg-[#FF5500] hover:bg-[#FF6600] text-black font-extrabold text-sm tracking-wide transition-all shadow-xl shadow-[#FF5500]/25 hover:scale-[1.02] flex items-center gap-2.5"
                >
                  <span>Deploy Cloud VPS</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <button
                  onClick={() => {
                    setSelectedProductType('dedicated');
                    document.getElementById('plans-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="py-3.5 px-6 rounded-lg bg-[#141414] hover:bg-[#1E1E1E] text-white border border-[#2E2E2E] font-mono text-sm transition-all hover:border-[#FF5500]/60 flex items-center gap-2"
                >
                  <Server className="w-4 h-4 text-[#FF5500]" />
                  <span>Bare Metal Dedicated</span>
                </button>

                <button
                  onClick={() => navigateTo('datacentres')}
                  className="py-3.5 px-5 rounded-lg border border-transparent hover:border-[#262626] text-[#888888] hover:text-white text-xs font-mono transition-all flex items-center gap-1.5"
                >
                  <Globe className="w-4 h-4 text-[#FF5500]" />
                  <span>Looking Glass & Map</span>
                </button>
              </div>

              {/* Claim to Proof Metrics */}
              <div className="pt-8 border-t border-[#1F1F1F] grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-extrabold font-mono text-white tracking-tight">
                    &lt; 60s
                  </div>
                  <div className="text-xs text-[#888888] mt-1 font-mono">Automated Provisioning</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold font-mono text-[#FF5500] tracking-tight">
                    99.99%
                  </div>
                  <div className="text-xs text-[#888888] mt-1 font-mono">SLA Availability</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold font-mono text-white tracking-tight">
                    3.2 Tbps
                  </div>
                  <div className="text-xs text-[#888888] mt-1 font-mono">Inline DDoS Defense</div>
                </div>
              </div>
            </div>

            {/* Right Column: 🌌 Animated 3D Interactive Server Visual */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <Hero3DInfrastructureVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 💻 LATITUDE.SH SIGNATURE DEVELOPER CLI & API SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#262626] bg-[#0E0E0E] p-6 lg:p-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF5500]">
                <Code2 className="w-3.5 h-3.5" />
                <span>PROGRAMMABLE CLOUD & BARE METAL</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Built for Developers. Automated via API & CLI.
              </h3>
              <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                Spin up isolated virtual private servers or dedicated physical servers via terminal, Terraform provider, or direct REST API calls. Complete with cloud-init user data scripts.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="px-3 py-1 rounded bg-[#181818] border border-[#2E2E2E] text-xs font-mono text-[#D4D4D4]">
                  Terraform
                </span>
                <span className="px-3 py-1 rounded bg-[#181818] border border-[#2E2E2E] text-xs font-mono text-[#D4D4D4]">
                  cURL / REST
                </span>
                <span className="px-3 py-1 rounded bg-[#181818] border border-[#2E2E2E] text-xs font-mono text-[#D4D4D4]">
                  Python SDK
                </span>
                <span className="px-3 py-1 rounded bg-[#181818] border border-[#2E2E2E] text-xs font-mono text-[#D4D4D4]">
                  Go SDK
                </span>
              </div>
            </div>

            <div className="lg:col-span-7">
              {/* Terminal Frame */}
              <div className="rounded-xl border border-[#2A2A2A] bg-black overflow-hidden shadow-2xl font-mono text-xs">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#141414] border-b border-[#262626]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5500]/60 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#FF8800]/50 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#444444] inline-block" />
                    <div className="ml-4 flex items-center gap-2 text-xs">
                      {(['cli', 'terraform', 'curl'] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveCliTab(tab)}
                          className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                            activeCliTab === tab
                              ? 'bg-black text-[#FF5500] font-bold border border-[#2E2E2E]'
                              : 'text-[#888888] hover:text-white'
                          }`}
                        >
                          {tab === 'cli' ? 'RMD CLI' : tab === 'terraform' ? 'main.tf' : 'cURL'}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={handleCopyCli}
                    className="flex items-center gap-1.5 text-[#888888] hover:text-[#FF5500] transition-colors"
                  >
                    {copiedCli ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#FF5500]" />
                        <span className="text-[11px] text-[#FF5500]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
                {/* Body */}
                <div className="p-4 sm:p-5 text-[#E5E5E5] leading-relaxed overflow-x-auto whitespace-pre selection:bg-[#FF5500] selection:text-black">
                  <span className="text-[#FF5500] font-bold">$ </span>
                  {cliSnippets[activeCliTab]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 PRODUCT CONFIGURATIONS & PRICING SHOWCASE */}
      <section id="plans-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#1F1F1F]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF5500] mb-1.5">
              <span>01. COMPUTE ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Enterprise Hosting Configurations
            </h2>
            <p className="text-sm text-[#888888] mt-1.5 max-w-xl">
              Transparent specifications with zero hidden fees. Includes dedicated IP, full root / administrator access, and automated backups.
            </p>
          </div>

          {/* Product Type Tabs & Billing Term Switcher */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 font-mono">
            {/* Category Segmented Tabs */}
            <div className="flex items-center gap-1 p-1 bg-[#141414] border border-[#262626] rounded-xl">
              <button
                onClick={() => setSelectedProductType('vps')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                  selectedProductType === 'vps'
                    ? 'bg-[#FF5500] text-black shadow-md shadow-[#FF5500]/25'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                Linux Cloud VPS
              </button>
              <button
                onClick={() => setSelectedProductType('windows-vps')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                  selectedProductType === 'windows-vps'
                    ? 'bg-[#FF5500] text-black shadow-md shadow-[#FF5500]/25'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                Windows VPS (RDP)
              </button>
              <button
                onClick={() => setSelectedProductType('dedicated')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                  selectedProductType === 'dedicated'
                    ? 'bg-[#FF5500] text-black shadow-md shadow-[#FF5500]/25'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                Bare Metal Dedicated
              </button>
            </div>

            {/* Monthly / Annual Toggle */}
            <div className="flex items-center gap-2 bg-[#141414] border border-[#262626] p-1 rounded-xl text-xs">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  billingCycle === 'monthly' ? 'bg-[#222222] text-white font-semibold' : 'text-[#888888]'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annually')}
                className={`px-3 py-1 rounded-lg transition-colors flex items-center gap-1.5 ${
                  billingCycle === 'annually' ? 'bg-[#FF5500] text-black font-bold' : 'text-[#888888] hover:text-white'
                }`}
              >
                <span>Annual</span>
                <span className="text-[10px] font-mono font-extrabold">-20%</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid with Hover Lift & Latitude.sh Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Quick jump to specialized page */}
        <div className="mt-10 text-center">
          <button
            onClick={() =>
              navigateTo(
                selectedProductType === 'vps'
                  ? 'vps'
                  : selectedProductType === 'windows-vps'
                  ? 'windows-vps'
                  : 'dedicated'
              )
            }
            className="text-xs font-mono text-[#888888] hover:text-[#FF5500] transition-colors inline-flex items-center gap-2 py-2 px-4 rounded-xl border border-[#262626] hover:border-[#FF5500]/40 bg-[#121212]"
          >
            <span>View deep-dive hardware comparisons & benchmarks for {selectedProductType.toUpperCase()}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FF5500]" />
          </button>
        </div>
      </section>

      {/* ✨ ANIMATED GLOBAL DATA CENTRE MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF5500] mb-1.5">
            <Radio className="w-3.5 h-3.5 animate-pulse text-[#FF5500]" />
            <span>02. LOW-LATENCY EDGE & TRANSIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Animated Global Datacenter Network
          </h2>
        </div>

        <InteractiveWorldMap />
      </section>

      {/* 💎 LATITUDE.SH STYLE BENTO-GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 pb-4 border-b border-[#1F1F1F]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF5500] mb-1.5">
            <span>03. HARDWARE SPECIFICATION RIGOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Engineered for Extreme Throughput & Zero Downtime
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1: Col Span 2 */}
          <div className="md:col-span-2 rounded-2xl border border-[#262626] bg-[#111111] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl hover:border-[#FF5500]/60 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
                <HardDrive className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
                Enterprise NVMe Gen4 Block Storage Fabric
              </h3>
              <p className="text-sm text-[#A3A3A3] max-w-xl leading-relaxed">
                Traditional SATA and SAS drives throttle database queries and build pipelines. RMDHost leverages dedicated PCIe 4.0 NVMe arrays delivering over 850,000 IOPS and read speeds exceeding 5,200 MB/s per volume.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1F1F1F] grid grid-cols-3 gap-4 font-mono text-xs">
              <div>
                <span className="text-[#737373] block text-[11px]">Sequential Read</span>
                <strong className="text-white text-lg font-bold mt-1 block">5,200 MB/s</strong>
              </div>
              <div>
                <span className="text-[#737373] block text-[11px]">Random 4K IOPS</span>
                <strong className="text-[#FF5500] text-lg font-bold mt-1 block">850,000+</strong>
              </div>
              <div>
                <span className="text-[#737373] block text-[11px]">Latency Overhead</span>
                <strong className="text-white text-lg font-bold mt-1 block">&lt; 0.08 ms</strong>
              </div>
            </div>
          </div>

          {/* Bento Card 2: 1 Col */}
          <div className="rounded-2xl border border-[#262626] bg-[#111111] p-8 sm:p-10 flex flex-col justify-between shadow-xl hover:border-[#FF5500]/60 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
                3.2 Tbps Always-On Inline DDoS Defense
              </h3>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                Multilayer scrubbing detects and neutralizes UDP/SYN floods, NTP amplification, and Layer 7 HTTP flood vectors within milliseconds without injecting latency into genuine customer connections.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1F1F1F]">
              <span className="text-xs font-mono text-[#FF5500] flex items-center gap-2 font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Corero & Arbor SmartWall Active</span>
              </span>
            </div>
          </div>

          {/* Bento Card 3: 1 Col */}
          <div className="rounded-2xl border border-[#262626] bg-[#111111] p-8 sm:p-10 flex flex-col justify-between shadow-xl hover:border-[#FF5500]/60 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
                HTML5 KVM & IPMI Out-of-Band Console
              </h3>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                Direct bios-level control even if your operating system network configuration locks up. Mount custom ISOs, inspect kernel boot logs, and execute hard power cycles on demand.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1F1F1F] font-mono text-xs text-[#FF8800]">
              Virtual Media & iDRAC / Supermicro IPMI
            </div>
          </div>

          {/* Bento Card 4: Col Span 2 */}
          <div className="md:col-span-2 rounded-2xl border border-[#262626] bg-[#111111] p-8 sm:p-10 flex flex-col justify-between shadow-xl hover:border-[#FF5500]/60 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
                Multi-Homed Tier-1 Upstream Peering
              </h3>
              <p className="text-sm text-[#A3A3A3] max-w-xl leading-relaxed">
                Redundant BGP routing through Tier-1 carriers including Arelion (Telia), Deutsche Telekom, Lumen, NTT, and direct internet exchanges like DE-CIX Frankfurt, AMS-IX Amsterdam, and LINX London.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1F1F1F] flex flex-wrap gap-2 text-xs font-mono text-[#D4D4D4]">
              <span className="px-3 py-1.5 rounded-lg bg-[#181818] border border-[#2A2A2A]">DE-CIX Frankfurt</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#181818] border border-[#2A2A2A]">AMS-IX Amsterdam</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#181818] border border-[#2A2A2A]">LINX London</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#181818] border border-[#2A2A2A]">NYIIX New York</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#181818] border border-[#2A2A2A]">SGIX Singapore</span>
            </div>
          </div>
        </div>
      </section>

      {/* 💬 INTERACTIVE FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="text-xs font-mono text-[#FF5500] mb-1.5">
            <span>04. TRANSPARENCY & POLICIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#888888] mt-2 max-w-lg mx-auto">
            Instant answers regarding automated deployment timelines, licensing, and our 30-day money-back guarantee.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#141414] border border-[#262626] rounded-xl font-mono">
            {(['All', 'General', 'VPS', 'Windows', 'Dedicated', 'Billing & Network'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFaqCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  faqCategory === cat
                    ? 'bg-[#FF5500] text-black font-bold shadow-sm'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search FAQs..."
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-xs text-white placeholder-[#666666] focus:outline-none focus:border-[#FF5500]"
            />
          </div>
        </div>

        {/* FAQ Accordion with Smooth Hover */}
        <div className="space-y-3">
          {filteredFaqs.slice(0, 6).map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-[#262626] bg-[#111111] transition-all hover:border-[#FF5500]/60"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-[#F0F0F0] hover:text-[#FF5500] transition-colors"
                >
                  <span>{faq.question}</span>
                  <div className={`p-1 rounded-lg bg-[#1C1C1C] text-[#FF5500] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#FF5500]/20' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#A3A3A3] leading-relaxed border-t border-[#1F1F1F] font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigateTo('faq')}
            className="text-xs font-mono text-[#888888] hover:text-[#FF5500] transition-colors inline-flex items-center gap-1.5"
          >
            <span>Browse all questions in our full knowledge base</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FF5500]" />
          </button>
        </div>
      </section>

      {/* FINAL HIGH-CONVERTING CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#FF5500]/30 bg-gradient-to-r from-[#141414] via-[#1A1412] to-[#111111] p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 bottom-0 w-96 bg-[#FF5500]/10 blur-[130px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-mono text-[#FF5500] font-bold tracking-wide">
              UNMATCHED RAW POWER · ZERO COMPROMISE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
              Ready to Upgrade to Low-Latency Cloud VPS or Bare Metal?
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
              Order your server today with our unconditional 30-day money-back guarantee. Instant provisioning with dedicated IPv4, native IPv6, and redundant Tier-1 transit backbones.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => {
                  setSelectedProductType('vps');
                  document.getElementById('plans-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="py-3.5 px-7 rounded-lg bg-[#FF5500] hover:bg-[#FF6600] text-black font-extrabold text-xs tracking-wide transition-all shadow-xl shadow-[#FF5500]/25 hover:scale-[1.02] flex items-center gap-2"
              >
                <span>Deploy Cloud VPS Now</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className="py-3.5 px-6 rounded-lg border border-[#2E2E2E] bg-[#181818] hover:bg-[#222222] text-white text-xs font-bold font-mono transition-all hover:border-[#FF5500]/40"
              >
                Request Custom Dedicated Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
