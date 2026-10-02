import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { BlogPost } from '../types';
import { BookOpen, ArrowLeft, ArrowRight, Clock, User, Calendar } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const { blogs } = useSite();
  const [activeBlogPost, setActiveBlogPost] = useState<BlogPost | null>(null);

  if (activeBlogPost) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <button
          onClick={() => setActiveBlogPost(null)}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#888888] hover:text-[#FF5500] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all guides & articles</span>
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono text-[#888888]">
            <span className="px-2.5 py-0.5 rounded bg-[#FF5500]/15 text-[#FF5500] font-bold">
              {activeBlogPost.category}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {activeBlogPost.date}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {activeBlogPost.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            {activeBlogPost.title}
          </h1>

          <div className="flex items-center gap-2 text-xs text-[#888888] font-mono pt-2 border-b border-[#1F1F1F] pb-4">
            <User className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>Written by {activeBlogPost.author}</span>
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-[#D4D4D4] text-sm leading-relaxed space-y-4">
          <p className="text-base text-[#E5E5E5] font-medium leading-relaxed">
            {activeBlogPost.excerpt}
          </p>
          <div className="p-6 rounded-xl border border-[#262626] bg-[#111111] space-y-3 font-mono text-xs">
            <h4 className="font-bold text-[#FF5500] text-sm font-sans">Technical Overview</h4>
            <p className="text-[#A3A3A3]">
              Modern enterprise cloud applications demand deterministic I/O performance and minimal network jitter. When deploying latency-sensitive database engines, caching layers, or automated financial bots, hardware architecture makes the critical difference.
            </p>
            <p className="text-[#A3A3A3]">
              By provisioning nodes with direct PCI Express 4.0 storage lanes and dedicating uninterrupted CPU cores, workloads eliminate the unpredictable latency spikes common in shared, multi-tenant hyperscalers.
            </p>
          </div>
          <p>
            {activeBlogPost.content}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="relative pt-12 md:pt-16 pb-10 border-b border-[#1F1F1F] bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF5500]">
              <BookOpen className="w-4 h-4" />
              <span>TECHNICAL GUIDES & KNOWLEDGE BASE</span>
              <span aria-hidden="true" className="text-[#555555]">/</span>
              <span>ENGINEERING</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
              Knowledge Base & Engineering Insights
            </h1>
            <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
              In-depth tutorials, performance optimization benchmarks, and architecture guides written by our systems engineering team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((post) => (
            <article
              key={post.id}
              onClick={() => setActiveBlogPost(post)}
              className="group cursor-pointer rounded-xl border border-[#262626] bg-[#111111] p-6 flex flex-col justify-between space-y-4 hover:border-[#FF5500]/60 transition-all shadow-lg hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-[#FF5500]/15 text-[#FF5500] font-bold">
                    {post.category}
                  </span>
                  <span className="text-[#737373]">{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#FF5500] transition-colors leading-snug font-sans">
                  {post.title}
                </h3>

                <p className="text-xs text-[#888888] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1F1F1F] flex items-center justify-between text-xs font-mono text-[#737373]">
                <span>{post.date}</span>
                <span className="flex items-center gap-1 text-[#FF5500] font-bold group-hover:translate-x-1 transition-transform">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
