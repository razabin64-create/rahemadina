import React from 'react';
import { BookOpen, Award, GraduationCap, HeartHandshake, Check } from 'lucide-react';
import { CURRICULUM_DATA } from '../data/madrasaData';

export const CurriculumSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    BookOpen,
    Award,
    GraduationCap,
    HeartHandshake,
  };

  return (
    <section id="academic" className="py-20 bg-[#f9fbf9] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/60 border border-emerald-300 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
            <span>পাঠক্রম ও পাঠদান পদ্ধতি</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-bn text-[#064e3b] mb-4">
            শিক্ষা কার্যক্রম
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-base sm:text-lg">
            পবিত্র কুরআনের বিশুদ্ধ তাজবিদ, হিফজ এবং যুগোপযোগী সাধারণ শিক্ষার সমন্বয়ে প্রণীত পাঠ্যসূচি।
          </p>
        </div>

        {/* Curriculum Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CURRICULUM_DATA.map((dept) => {
            const IconComponent = iconMap[dept.icon] || BookOpen;

            return (
              <div
                key={dept.id}
                className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Icon & Arabic Department Name */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#064e3b] text-amber-300 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-arabic text-sm text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 text-right">
                      {dept.arabicName}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-serif-bn text-[#064e3b] mb-2.5">
                    {dept.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {dept.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      মূল বৈশিষ্ট্যসমূহ:
                    </div>
                    {dept.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Base Tag */}
                <div className="mt-6 pt-4 border-t border-gray-50 text-center">
                  <span className="inline-block text-xs font-semibold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    নিবিড় তত্ত্বাবধান
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Pedagogical Note */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-emerald-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-serif-bn text-[#064e3b]">
                অনুকূল ও আন্তরিক পাঠদান পরিবেশ
              </h4>
              <p className="text-sm text-gray-600">
                প্রতিটি শিক্ষার্থীর স্বতন্ত্র মানসিক অবস্থা ও মেধার প্রতি লক্ষ্য রেখে পাঠদান পরিচালনা করা হয়।
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-[#064e3b] hover:bg-[#043c2d] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow transition-colors cursor-pointer"
          >
            ভর্তি সংক্রান্ত তথ্য
          </a>
        </div>
      </div>
    </section>
  );
};
