import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { HelpCircle, Search, ChevronDown, MessageSquare } from 'lucide-react';

export const FaqPage: React.FC = () => {
  const { faqs, navigateTo } = useSite();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const categories = ['All', 'General', 'VPS', 'Windows', 'Dedicated', 'Billing & Network'];

  const filteredFaqs = faqs.filter((f) => {
    const matchesCategory = selectedCategory === 'All' || f.category === selectedCategory;
    const matchesQuery =
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="relative pt-12 md:pt-16 pb-10 border-b border-[#1F1F1F] bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF5500]">
              <HelpCircle className="w-4 h-4" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
              <span aria-hidden="true" className="text-[#555555]">/</span>
              <span>KNOWLEDGE BASE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
              Frequently Asked Questions
            </h1>
            <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
              Find fast answers regarding instance provisioning times, operating system support, billing terms, and network peering.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Search and Category Filters */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across questions, hardware specifications, and policies..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#141414] border border-[#262626] text-sm text-white placeholder-[#666666] focus:outline-none focus:border-[#FF5500]"
            />
          </div>

          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg border transition-all ${
                  selectedCategory === cat
                    ? 'border-[#FF5500] bg-[#FF5500]/15 text-[#FF5500] font-bold shadow-sm'
                    : 'border-[#262626] bg-[#121212] text-[#888888] hover:border-[#333333] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 rounded-xl border border-[#262626] bg-[#111111] text-center text-xs text-[#888888] font-mono">
              No matching answers found for &ldquo;{searchQuery}&rdquo;. Try another search term or contact our 24/7 team.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-[#262626] bg-[#111111] transition-all hover:border-[#FF5500]/50"
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-[#FF5500] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <div className={`p-1 rounded-lg bg-[#1C1C1C] text-[#FF5500] shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180 bg-[#FF5500]/20' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 text-xs text-[#A3A3A3] leading-relaxed border-t border-[#1F1F1F] font-sans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Need Help Box */}
        <div className="p-6 rounded-xl border border-[#262626] bg-[#141414] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-bold text-white text-sm font-sans">Still have unanswered questions?</h4>
            <p className="text-xs text-[#888888]">Our technical engineers are available 24/7/365 to assist with plan sizing and migration.</p>
          </div>
          <button
            onClick={() => navigateTo('contact')}
            className="py-2.5 px-4 rounded-lg bg-[#FF5500] hover:bg-[#FF6600] text-black font-extrabold text-xs tracking-wide shrink-0 transition-all font-mono"
          >
            Contact Support & Sales →
          </button>
        </div>
      </section>
    </div>
  );
};
