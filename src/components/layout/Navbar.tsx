import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { PageId } from '../../types';
import { Server, ChevronDown, Menu, X, Sliders, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currentPage,
    navigateTo,
    currency,
    setCurrency,
    setIsAdminOpen,
    settings
  } = useSite();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  const navItems: { label: string; page: PageId }[] = [
    { label: 'VPS', page: 'vps' },
    { label: 'Windows VPS', page: 'windows-vps' },
    { label: 'Dedicated', page: 'dedicated' },
    { label: 'Data Centres', page: 'datacentres' },
    { label: 'Support', page: 'support' }
  ];

  const handleNav = (p: PageId) => {
    navigateTo(p);
    setMobileMenuOpen(false);
    setMoreMenuOpen(false);
  };

  return (
    <>
      {/* Top Notification Strip */}
      {settings.bannerEnabled && (
        <div className="w-full bg-[#121212] border-b border-[#262626] py-1.5 px-4 text-center text-xs font-mono text-[#FF5500] flex items-center justify-center gap-2">
          <span>{settings.bannerText}</span>
          <button
            onClick={() => handleNav('vps')}
            className="text-white underline hover:text-[#FF8800] transition-colors font-sans text-xs ml-1 font-semibold"
          >
            {settings.bannerCtaText} →
          </button>
        </div>
      )}

      {/* Main Latitude.sh-style Top Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-[#1F1F1F] bg-[#0A0A0A]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* ZONE 1: Brand Zone */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500] group-hover:border-[#FF5500] group-hover:bg-[#FF5500]/20 transition-all">
                <Server className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                RMD<span className="text-[#FF5500]">Host</span>
              </span>
            </button>
          </div>

          {/* ZONE 2: Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#A3A3A3]">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`relative py-1 transition-colors whitespace-nowrap ${
                  currentPage === item.page
                    ? 'text-white font-bold'
                    : 'text-[#A3A3A3] hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {currentPage === item.page && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF5500] rounded-full shadow-sm shadow-[#FF5500]" />
                )}
              </button>
            ))}

            {/* More dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                className="flex items-center gap-1 py-1 text-[#A3A3A3] hover:text-white transition-colors whitespace-nowrap"
              >
                <span>Company</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-xl border border-[#262626] bg-[#141414] shadow-2xl p-2 z-50 text-xs space-y-1">
                  <button
                    onClick={() => handleNav('about')}
                    className="w-full text-left px-3 py-2 rounded-lg text-[#D4D4D4] hover:bg-[#222222] hover:text-white transition-colors"
                  >
                    About RMDHost
                  </button>
                  <button
                    onClick={() => handleNav('faq')}
                    className="w-full text-left px-3 py-2 rounded-lg text-[#D4D4D4] hover:bg-[#222222] hover:text-white transition-colors"
                  >
                    Frequently Asked Questions
                  </button>
                  <button
                    onClick={() => handleNav('blog')}
                    className="w-full text-left px-3 py-2 rounded-lg text-[#D4D4D4] hover:bg-[#222222] hover:text-white transition-colors"
                  >
                    Knowledge Base & Guides
                  </button>
                  <button
                    onClick={() => handleNav('contact')}
                    className="w-full text-left px-3 py-2 rounded-lg text-[#D4D4D4] hover:bg-[#222222] hover:text-white transition-colors"
                  >
                    Contact & Enterprise Sales
                  </button>
                  <div className="pt-1 border-t border-[#262626]">
                    <button
                      onClick={() => handleNav('sla')}
                      className="w-full text-left px-3 py-2 rounded-lg text-[#D4D4D4] hover:bg-[#222222] hover:text-white transition-colors"
                    >
                      SLA & 99.99% Guarantee
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* ZONE 3: Latitude.sh Orange CTA & Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Currency Selector */}
            <div className="flex items-center rounded-lg border border-[#262626] bg-[#141414] p-0.5 text-xs font-mono">
              {(['USD', 'EUR', 'GBP'] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-2 py-1 rounded transition-colors ${
                    currency === c ? 'bg-[#FF5500] text-black font-extrabold' : 'text-[#A3A3A3] hover:text-white'
                  }`}
                >
                  {c === 'USD' ? '$ USD' : c === 'EUR' ? '€ EUR' : '£ GBP'}
                </button>
              ))}
            </div>

            {/* CMS / Admin Button */}
            <button
              onClick={() => setIsAdminOpen(true)}
              className="px-2.5 py-1.5 rounded-lg border border-[#262626] hover:border-[#383838] bg-[#141414] text-[#A3A3A3] hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
              title="Open CMS / Admin Mode"
            >
              <Sliders className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Admin / CMS</span>
            </button>

            {/* Latitude.sh Signature Orange Action Button */}
            <a
              href="https://my.digitalberg.com/clientarea.php"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-[#FF5500] hover:bg-[#FF6600] text-black font-extrabold text-xs tracking-wide transition-all shadow-md shadow-[#FF5500]/20 flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Client Portal</span>
              <ExternalLink className="w-3 h-3 text-black stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="p-2 rounded-lg text-[#A3A3A3] hover:text-white"
              title="Admin"
            >
              <Sliders className="w-4 h-4 text-[#FF5500]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#A3A3A3] hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[#262626] bg-[#121212] px-4 pt-3 pb-6 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className={`text-left p-2.5 rounded-lg ${
                    currentPage === item.page
                      ? 'bg-[#FF5500]/15 text-[#FF5500] font-bold'
                      : 'text-[#D4D4D4] hover:bg-[#1E1E1E]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('about')}
                className="text-left p-2.5 rounded-lg text-[#D4D4D4] hover:bg-[#1E1E1E]"
              >
                About
              </button>
              <button
                onClick={() => handleNav('faq')}
                className="text-left p-2.5 rounded-lg text-[#D4D4D4] hover:bg-[#1E1E1E]"
              >
                FAQ
              </button>
              <button
                onClick={() => handleNav('blog')}
                className="text-left p-2.5 rounded-lg text-[#D4D4D4] hover:bg-[#1E1E1E]"
              >
                Knowledge Base
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="text-left p-2.5 rounded-lg text-[#D4D4D4] hover:bg-[#1E1E1E]"
              >
                Contact
              </button>
            </div>

            <div className="pt-3 border-t border-[#262626] flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs">
                {(['USD', 'EUR', 'GBP'] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-2 py-1 rounded text-xs ${
                      currency === c ? 'bg-[#FF5500] text-black font-extrabold' : 'text-[#A3A3A3]'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <a
                href="https://my.digitalberg.com/clientarea.php"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-[#FF5500] text-black font-extrabold text-xs"
              >
                Client Portal →
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
