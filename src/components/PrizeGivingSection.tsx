import React from 'react';
import { Trophy, ZoomIn, Sparkles } from 'lucide-react';
import { PRIZE_GIVING_DATA } from '../data/madrasaData';

interface PrizeGivingSectionProps {
  onOpenLightbox: (imageUrl: string) => void;
}

export const PrizeGivingSection: React.FC<PrizeGivingSectionProps> = ({ onOpenLightbox }) => {
  return (
    <section id="prize-giving" className="py-20 bg-[#f9fbf9] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>কৃতী শিক্ষার্থীদের স্বীকৃতি</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-bn text-[#064e3b] mb-4">
            পুরস্কার বিতরণী অনুষ্ঠান
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-base sm:text-lg">
            কুরআনুল কারীম হিফজ সমাপ্তকারী ও বিভিন্ন পরীক্ষায় কৃতিত্ব প্রদর্শনকারী শিক্ষার্থীদের মাঝে অনুপ্রেরণামূলক পুরস্কার ও সম্মাননা বিতরণ।
          </p>
        </div>

        {/* 6 Responsive Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRIZE_GIVING_DATA.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
            >
              {/* Image Container with Zoom hover effect */}
              <div
                className="relative h-64 overflow-hidden bg-emerald-950 cursor-pointer"
                onClick={() => onOpenLightbox(item.url)}
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-black/20 to-transparent opacity-40 group-hover:opacity-75 transition-opacity" />

                {/* Event Tag */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-amber-300 text-xs font-semibold border border-amber-400/40">
                  <Sparkles className="w-3 h-3" />
                  <span>স্মৃতিচিত্র ০{index + 1}</span>
                </div>

                {/* Lightbox Quick Action Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-3 rounded-full bg-amber-500 text-gray-950 shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6" />
                  </span>
                </div>
              </div>

              {/* Card Bottom Meta */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-serif-bn text-[#064e3b] mb-1.5 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-emerald-700 font-medium">
                    পুরস্কার ও সনদ বিতরণ
                  </span>
                  <button
                    onClick={() => onOpenLightbox(item.url)}
                    className="text-xs font-semibold text-amber-800 hover:text-amber-900 cursor-pointer flex items-center gap-1"
                  >
                    বড় করে দেখুন
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
