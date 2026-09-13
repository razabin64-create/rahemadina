import React from 'react';
import { Palette, CheckCircle, ZoomIn, Music, Mic, Award } from 'lucide-react';
import { CO_CURRICULAR_DATA } from '../data/madrasaData';

interface CoCurricularSectionProps {
  onOpenLightbox: (imageUrl: string) => void;
}

export const CoCurricularSection: React.FC<CoCurricularSectionProps> = ({ onOpenLightbox }) => {
  return (
    <section id="cocurricular" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Palette className="w-3.5 h-3.5 text-emerald-700" />
            <span>শারীরিক ও মানসিক বিকাশ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-bn text-[#064e3b] mb-4">
            সহশিক্ষা কার্যক্রম
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-base sm:text-lg">
            পড়াশোনার পাশাপাশি শিক্ষার্থীদের সুপ্ত মেধা, সৃজনশীলতা ও নেতৃত্বের গুণাবলী বিকাশে নিয়মিত সহশিক্ষা কার্যক্রম।
          </p>
        </div>

        {/* 2-Column Showcase Grid for the 2 provided images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {CO_CURRICULAR_DATA.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Image with zoom and hover effect */}
              <div
                className="relative h-72 sm:h-80 overflow-hidden bg-gray-900 cursor-pointer"
                onClick={() => onOpenLightbox(item.url)}
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-black/20 to-transparent opacity-50 group-hover:opacity-75 transition-opacity" />

                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#064e3b] text-amber-300 text-xs font-bold border border-amber-400/40">
                    সহশিক্ষা পর্ব ০{index + 1}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenLightbox(item.url);
                    }}
                    className="p-2.5 rounded-full bg-white text-[#064e3b] shadow-lg hover:bg-amber-400 transition-colors"
                    title="বড় করে দেখুন"
                    aria-label="ছবি বড় করে দেখুন"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Information */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold font-serif-bn text-[#064e3b] mb-2.5 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-emerald-800">
                  <span className="font-semibold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    সাপ্তাহিক অনুশীলন ও প্রতিযোগিতা
                  </span>
                  <button
                    onClick={() => onOpenLightbox(item.url)}
                    className="text-amber-700 font-bold hover:underline cursor-pointer"
                  >
                    ছবি প্রদর্শন →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Pill Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#f9fbf9] border border-emerald-100 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-[#064e3b] text-sm">বক্তৃতা ও বাচনভঙ্গি প্রশিক্ষণ</div>
              <div className="text-xs text-gray-500">পরিশীলিত ও স্পষ্ট উপস্থাপনা চর্চা</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#f9fbf9] border border-emerald-100 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Music className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-[#064e3b] text-sm">হামদ-নাত ও ইসলামী সংগীত</div>
              <div className="text-xs text-gray-500">মার্জিত সুরে আত্মশুদ্ধির অনুশীলন</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#f9fbf9] border border-emerald-100 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-[#064e3b] text-sm">শৃঙ্খলা ও নৈতিক নেতৃত্ব</div>
              <div className="text-xs text-gray-500">দলগত দায়িত্বশীলতা ও সহমর্মিতা</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
