import React from 'react';
import { useSite } from '../../context/SiteContext';
import { PageId } from '../../types';
import { Server, Globe, Shield, CheckCircle, Mail, MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo, settings } = useSite();

  return (
    <footer className="border-t border-[#1F1F1F] bg-[#0A0A0A] text-[#A3A3A3] text-xs">
      {/* Top Value Strip */}
      <div className="border-b border-[#1F1F1F] py-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500] shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-extrabold text-white text-sm">99.99% Network SLA</h5>
              <p className="text-[#737373] text-xs">Financially backed uptime guarantee</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500] shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-extrabold text-white text-sm">Enterprise NVMe Gen4</h5>
              <p className="text-[#737373] text-xs">Over 5,000 MB/s pure disk throughput</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500] shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-extrabold text-white text-sm">9 Global Datacenters</h5>
              <p className="text-[#737373] text-xs">Low-latency presence across 3 continents</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-extrabold text-white text-sm">3.2 Tbps DDoS Defense</h5>
              <p className="text-[#737373] text-xs">Always-on inline scrubbing technology</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500]">
                <Server className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                RMD<span className="text-[#FF5500]">Host</span>
              </span>
            </div>
            <p className="text-[#888888] text-xs leading-relaxed max-w-sm">
              International enterprise hosting infrastructure. Providing next-generation Linux Cloud VPS, licensed Windows Server VPS, and Bare Metal Dedicated compute across Tier-3 and Tier-4 partner facilities.
            </p>
            <div className="space-y-1.5 font-mono text-xs text-[#888888]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF5500]" />
                <span className="text-[#D4D4D4]">{settings.supportEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>Global Nodes: Frankfurt · Amsterdam · London · NYC · Singapore</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5500] shadow-sm shadow-[#FF5500]" />
              <span className="text-xs text-[#D4D4D4] font-mono">All Infrastructure Systems Operational</span>
            </div>
          </div>

          {/* Column 1: Compute & Hosting */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider font-mono">Infrastructure</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navigateTo('vps')} className="hover:text-white transition-colors">
                  Linux Cloud VPS
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('windows-vps')} className="hover:text-white transition-colors">
                  Windows Remote Desktop VPS
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('dedicated')} className="hover:text-white transition-colors">
                  Bare Metal Dedicated Servers
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('datacentres')} className="hover:text-white transition-colors">
                  Datacenters & Looking Glass
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('vps')} className="hover:text-white transition-colors">
                  NVMe Gen4 Block Storage
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Company & Support */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider font-mono">Company</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-white transition-colors">
                  About RMDHost
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('support')} className="hover:text-white transition-colors">
                  Support Center & Status
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('faq')} className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('blog')} className="hover:text-white transition-colors">
                  Knowledge Base & Docs
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">
                  Contact Sales & Custom Build
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Trust */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider font-mono">Trust & Policies</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navigateTo('terms')} className="hover:text-white transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('privacy')} className="hover:text-white transition-colors">
                  Privacy Policy & GDPR
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('aup')} className="hover:text-white transition-colors">
                  Acceptable Use Policy (AUP)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('sla')} className="hover:text-white transition-colors">
                  SLA & 30-Day Money-Back
                </button>
              </li>
              <li>
                <a
                  href="https://my.digitalberg.com/submitticket.php"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Submit Ticket</span>
                  <ExternalLink className="w-3 h-3 text-[#737373]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and disclosures */}
        <div className="mt-12 pt-8 border-t border-[#1F1F1F] flex flex-col md:flex-row items-center justify-between gap-4 text-[#737373] text-xs">
          <div>
            © {new Date().getFullYear()} RMDHost.com. All rights reserved. Bare metal cloud infrastructure.
          </div>
          <div className="flex items-center gap-6">
            <span>Powered by DigitalBerg Transit Core</span>
            <span aria-hidden="true">·</span>
            <span>ISO 27001 & SOC 2 Certified Facilities</span>
            <span aria-hidden="true">·</span>
            <button onClick={() => navigateTo('sla')} className="hover:text-[#D4D4D4]">
              99.99% Uptime Guarantee
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
