import React from 'react';
import { BookOpen, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { MADRASA_ASSETS } from '../data/madrasaData';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#044431] text-white overflow-hidden py-16 sm:py-24 lg:py-28"
    >
      {/* Decorative Background Patterns */}
      <div className="absolute inset-0 bg-islamic-pattern-dark opacity-35 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Arabic Dua Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-amber-400/40 text-amber-300 text-sm mb-6 backdrop-blur-sm">
              <span className="font-arabic text-lg leading-none">رَبِّ زِدْنِي عِلْمًا</span>
              <span className="text-xs text-white/90">| “হে আমার প্রতিপালক! আমার জ্ঞান বৃদ্ধি করে দিন”</span>
            </div>

            {/* Exact Required Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold font-serif-bn text-white tracking-tight leading-[1.25] mb-6 drop-shadow-sm">
              জ্ঞান, আমল ও আদর্শের সমন্বয়ে একটি সুন্দর ভবিষ্যৎ
            </h1>

            {/* Exact Required Subheading */}
            <p className="text-base sm:text-xl text-emerald-100/95 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              ইসলামী ও আধুনিক শিক্ষার সমন্বয়ে শিক্ষার্থীদের নৈতিক, জ্ঞানভিত্তিক ও মানবিক গুণাবলিতে গড়ে তোলাই আমাদের লক্ষ্য।
            </p>

            {/* Exact Required Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-950 font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer text-base"
                id="hero-about-btn"
              >
                <span>আমাদের সম্পর্কে</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('gallery')}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/30 backdrop-blur-sm transition-all transform hover:-translate-y-0.5 cursor-pointer text-base"
                id="hero-gallery-btn"
              >
                <span>গ্যালারি দেখুন</span>
                <BookOpen className="w-4 h-4 text-amber-300" />
              </button>
            </div>

            {/* Value Pillars List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-emerald-500/30 text-xs sm:text-sm text-emerald-100">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>কুরআন ও সুন্নাহভিত্তিক শিক্ষা</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>উন্নত নৈতিক চরিত্র গঠন</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>আধুনিক শিক্ষার সুষম পাঠ</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card with Arch and Logo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Islamic Arch Styled Frame */}
              <div className="relative rounded-t-[140px] rounded-b-2xl border-4 border-amber-400/70 p-3 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-md shadow-2xl">
                <div className="overflow-hidden rounded-t-[130px] rounded-b-xl relative aspect-[4/5] bg-emerald-950 flex flex-col items-center justify-center p-6 text-center">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-amber-400 via-emerald-500 to-amber-300 shadow-xl mb-6">
                    <img
                      src={MADRASA_ASSETS.logo}
                      alt="মাদরাসা মনোগ্রাম"
                      className="w-full h-full object-cover rounded-full bg-white"
                      loading="lazy"
                    />
                  </div>
                  <span className="font-arabic text-xl sm:text-2xl text-amber-300 mb-1">
                    طَلَبُ الْعِلْمِ فَرِيضَةٌ
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-200">
                    “জ্ঞান অর্জন করা প্রত্যেক মুসলমানের জন্য ফরজ”
                  </p>
                  <div className="mt-4 pt-4 border-t border-emerald-700/50 w-full flex items-center justify-around text-xs text-amber-200">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" /> হিফজুল কুরআন
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" /> মেধা বিকাশ
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Accent Badge */}
              <div className="absolute -bottom-5 -right-4 bg-white text-gray-900 rounded-xl p-3.5 shadow-xl border-l-4 border-amber-500 flex items-center gap-3 animate-in fade-in">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-700 font-bold uppercase">আদর্শিক পরিবেশ</div>
                  <div className="text-sm font-bold text-[#064e3b]">জ্ঞান ও আমলের অপূর্ব মেলবন্ধন</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
