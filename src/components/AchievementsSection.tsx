import React from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/madrasaData';

interface AchievementsSectionProps {
  onOpenLightbox: (imageUrl: string) => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ onOpenLightbox }) => {
  return (
    <section id="achievements" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>সফলতা ও অনুপ্রেরণা</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-bn text-[#064e3b] mb-4">
            মাদরাসার অর্জন
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-base sm:text-lg">
            কুরআন হিফজ, মেধা মূল্যায়ন ও ইসলামী সাংস্কৃতিক প্রতিযোগিতায় আমাদের শিক্ষার্থীদের প্রশংসনীয় কৃতিত্ব ও অর্জিত সম্মাননা।
          </p>
        </div>

        {/* 3 Achievement Cards Grid using the 3 exact URLs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS_DATA.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div>
                {/* Card Image Container with Hover Lightbox trigger */}
                <div
                  className="relative h-64 overflow-hidden bg-gray-100 cursor-pointer"
                  onClick={() => onOpenLightbox(item.imageUrl)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-[#064e3b] text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/40 shadow-sm">
                    {item.badge}
                  </span>

                  {/* Quick Expand Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenLightbox(item.imageUrl);
                    }}
                    className="absolute bottom-4 right-4 p-2 rounded-full bg-white/90 text-emerald-950 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow"
                    title="বড় করে দেখুন"
                    aria-label="ছবি বড় করে দেখুন"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-semibold text-amber-700 mb-1">
                    {item.subtitle}
                  </div>
                  <h3 className="text-xl font-bold font-serif-bn text-[#064e3b] mb-3 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Features */}
              <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between text-xs text-emerald-800">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  সার্বিক মেধা মূল্যায়ন
                </span>
                <button
                  onClick={() => onOpenLightbox(item.imageUrl)}
                  className="text-amber-700 hover:text-amber-800 font-semibold cursor-pointer"
                >
                  ছবি দেখুন →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
