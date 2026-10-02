import React from 'react';
import { useSite } from '../context/SiteContext';
import { legalDocuments } from '../data/initialData';
import { Shield, FileText, Lock, AlertTriangle, Award } from 'lucide-react';

export const LegalPage: React.FC = () => {
  const { activeLegalTab, navigateTo } = useSite();

  const tabs: { id: 'terms' | 'privacy' | 'aup' | 'sla'; label: string; icon: any }[] = [
    { id: 'terms', label: 'Terms of Service', icon: FileText },
    { id: 'privacy', label: 'Privacy & GDPR', icon: Lock },
    { id: 'aup', label: 'Acceptable Use Policy (AUP)', icon: AlertTriangle },
    { id: 'sla', label: 'SLA & 30-Day Refund Policy', icon: Award }
  ];

  const currentDoc = legalDocuments[activeLegalTab] || legalDocuments.terms;

  return (
    <div className="space-y-12 pb-20">
      {/* Header */}
      <section className="relative pt-12 md:pt-16 pb-10 border-b border-[#1F1F1F] bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF5500]">
              <Shield className="w-4 h-4" />
              <span>LEGAL COMPLIANCE & GOVERNANCE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
              Legal, Privacy & Service Guarantees
            </h1>
            <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
              Transparent terms, European GDPR privacy protections, fair use policies, and our 99.99% uptime credit schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Main Tabbed Legal Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-[#1F1F1F] font-mono text-xs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeLegalTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => navigateTo(tab.id)}
                className={`px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-all ${
                  isActive
                    ? 'bg-[#FF5500] text-black shadow-lg shadow-[#FF5500]/25'
                    : 'bg-[#141414] border border-[#262626] text-[#888888] hover:text-white hover:border-[#383838]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Document Body */}
        <div className="mt-8 rounded-2xl border border-[#262626] bg-[#111111] p-6 sm:p-10 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-[#1F1F1F]">
            <h2 className="text-2xl font-extrabold text-white tracking-tight font-sans">{currentDoc.title}</h2>
            <span className="text-xs font-mono text-[#FF5500] font-semibold">Effective: {currentDoc.effectiveDate}</span>
          </div>

          <div className="prose prose-invert max-w-none text-[#D4D4D4] text-xs sm:text-sm leading-relaxed space-y-4 whitespace-pre-line font-sans">
            {currentDoc.content}
          </div>
        </div>
      </section>
    </div>
  );
};
