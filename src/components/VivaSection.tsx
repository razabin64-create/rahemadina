import React from 'react';
import { Mic, CheckCircle2, Eye, HelpCircle, Sparkles } from 'lucide-react';
import { VIVA_DATA } from '../data/madrasaData';

interface VivaSectionProps {
  onOpenLightbox: (imageUrl: string) => void;
}

export const VivaSection: React.FC<VivaSectionProps> = ({ onOpenLightbox }) => {
  return (
    <section id="viva" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mic className="w-3.5 h-3.5 text-emerald-700" />
            <span>মৌখিক মূল্যায়ন পদ্ধতি</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-bn text-[#064e3b] mb-4">
            ভাইভা পরীক্ষা
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-base sm:text-lg">
            শিক্ষার্থীদের তাৎক্ষণিক মেধা, তিলাওয়াতের নির্ভুলতা, আত্মবিশ্বাস ও সঠিক দ্বীনি জ্ঞান যাচাইয়ে নিয়মিত মৌখিক পরীক্ষা গ্রহণ।
          </p>
        </div>

        {/* Educational Narrative on Viva Examination */}
        <div className="bg-gradient-to-r from-emerald-50/70 via-white to-amber-50/50 rounded-2xl border border-emerald-100 p-8 sm:p-10 mb-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl font-bold font-serif-bn text-[#064e3b]">
                মৌখিক (ভাইভা) পরীক্ষার তাৎপর্য ও লক্ষ্য
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                হিফজুল কুরআন ও দ্বীনি শিক্ষার অন্যতম গুরুত্বপূর্ণ অংশ হলো মৌখিক পরীক্ষা বা ভাইভা। কেবল লিখিত বা নীরবে পাঠ মুখস্থ করাই যথেষ্ট নয়; অভিজ্ঞ উস্তাদগণের উপস্থিতিতে কুরআনুল কারীমের যে কোনো স্থান থেকে তিলাওয়াত উপস্থাপন, মাখরাজ ও তাজবিদ ঠিক রেখে পড়া এবং বিভিন্ন মাসআলা ও দোয়ার মৌখিক উত্তর প্রদানের মাধ্যমে শিক্ষার্থীর সার্বিক দক্ষতা উন্মোচিত হয়।
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>তাত্ক্ষণিক স্মৃতিশক্তি ও হিফজের গভীরতা যাচাই</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ভয় ও জড়তা কাটিয়ে আত্মবিশ্বাস সৃষ্টি</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>তাজবিদ ও লাহানের সূক্ষ্ম ভুল সংশোধন</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>আদব ও মার্জিত বাচনভঙ্গির বাস্তব মহড়া</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-emerald-200/80 shadow-md">
              <div className="flex items-center gap-3 text-[#064e3b] font-bold mb-3">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>মৌখিক পরীক্ষা প্যানেল</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                উচ্চতর যোগ্যতা সম্পন্ন উস্তাদগণের সমন্বয়ে গঠিত নিরপেক্ষ প্যানেল প্রতিটি শিক্ষার্থীর গভীর একাগ্রতা, উচ্চারণ এবং চারিত্রিক আচরণ অত্যন্ত স্নেহের সাথে মূল্যায়ন করেন।
              </p>
              <div className="text-xs text-emerald-800 bg-emerald-50 p-2.5 rounded-lg font-medium text-center">
                “স্বচ্ছ ও নিরপেক্ষ মূল্যায়নই মেধার সঠিক বিকাশ নিশ্চিত করে”
              </div>
            </div>
          </div>
        </div>

        {/* 3 Viva Images Grid with exact URLs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIVA_DATA.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  className="relative h-64 overflow-hidden bg-gray-100 cursor-pointer"
                  onClick={() => onOpenLightbox(item.url)}
                >
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  <span className="absolute top-4 left-4 bg-emerald-800 text-white text-xs font-bold px-3 py-1 rounded-full border border-emerald-600 shadow">
                    পর্ব {index + 1}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenLightbox(item.url);
                    }}
                    className="absolute bottom-4 right-4 p-2 rounded-full bg-white/90 text-emerald-950 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow"
                    title="বড় করে দেখুন"
                    aria-label="ছবি বড় করে দেখুন"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-bold font-serif-bn text-[#064e3b] mb-2 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between text-xs text-amber-800 font-semibold">
                <span>মৌখিক সাক্ষাৎকার ও সবক যাচাই</span>
                <button
                  onClick={() => onOpenLightbox(item.url)}
                  className="hover:underline cursor-pointer"
                >
                  বিস্তারিত দেখুন →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
