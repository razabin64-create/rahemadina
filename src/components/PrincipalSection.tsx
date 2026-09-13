import React from 'react';
import { Quote, BookOpen, HeartHandshake } from 'lucide-react';
import { MADRASA_ASSETS } from '../data/madrasaData';

export const PrincipalSection: React.FC = () => {
  return (
    <section id="principal" className="py-20 bg-[#f9fbf9] border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/70 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>দিকনির্দেশনা ও শুভেচ্ছা</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-bn text-[#064e3b] mb-4">
            অধ্যক্ষের বাণী
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-base sm:text-lg">
            কুরআন ও সুন্নাহর আলোকে আলোকিত ভবিষ্যৎ প্রজন্ম গঠনের লক্ষ্যে আমাদের নিরন্তর প্রচেষ্টা।
          </p>
        </div>

        {/* Message Container */}
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Principal Photo Column */}
            <div className="lg:col-span-5 bg-gradient-to-b from-emerald-900 to-[#064e3b] p-8 sm:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-islamic-pattern-dark opacity-20 pointer-events-none" />
              
              {/* Photo Frame with subtle gold borders */}
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden border-4 border-amber-400/80 shadow-2xl mb-6 bg-emerald-950">
                <img
                  src={MADRASA_ASSETS.principal}
                  alt="অধ্যক্ষ, অত্র মাদরাসা"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Designation Area (No personal name invented, as instructed) */}
              <div className="relative z-10 text-white">
                <h3 className="text-xl sm:text-2xl font-bold font-serif-bn text-amber-300 mb-1">
                  অধ্যক্ষ
                </h3>
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-emerald-100 text-xs font-medium border border-white/20">
                  অত্র মাদরাসা
                </div>
                <p className="text-xs text-emerald-200/90 mt-2">
                  ইসলামী শিক্ষা ও চরিত্র গঠন বিভাগ
                </p>
              </div>
            </div>

            {/* Principal Message Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div className="space-y-5">
                {/* Decorative Quote Icon & Arabic Intro */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2 text-[#064e3b]">
                    <Quote className="w-8 h-8 text-amber-500 shrink-0" />
                    <span className="font-serif-bn font-bold text-lg">সম্মানিত অভিভাবক ও সুধীবৃন্দ</span>
                  </div>
                  <span className="font-arabic text-lg text-amber-600 hidden sm:inline">
                    السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
                  </span>
                </div>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  সমস্ত প্রশংসা মহান রাব্বুল আলামীনের, যিনি মানবজাতিকে হিদায়াতের আলোকবর্তিকা দান করেছেন। আমাদের পরম সৌভাগ্য যে আমরা শিক্ষার্থীদের হৃদয়ে মহাগ্রন্থ আল-কুরআনের নূর ছড়িয়ে দেওয়ার মতো মহান দায়িত্বে নিয়োজিত রয়েছি।
                </p>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  বর্তমান তথ্যপ্রযুক্তির যুগে আমাদের সন্তানদের দ্বীন ও নৈতিক মূল্যবোধের ভিত্তির ওপর দৃঢ় রাখা অন্যতম বড় চ্যালেঞ্জ। আমাদের লক্ষ্য কেবল শিক্ষার্থীদের কুরআনের হাফেজ বা আলেম হিসেবে গড়ে তোলা নয়, বরং প্রতিটি শিক্ষার্থীকে এমন এক আদর্শ নাগরিকে রূপান্তরিত করা—যার কথা, কাজ ও আচরণে ফুটে উঠবে প্রিয় নবীজী (সা.)-এর পবিত্র সুন্নাহর বাস্তব প্রতিফলন।
                </p>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  আমরা শিক্ষার্থীদের স্নেহ, অনুশাসন এবং আন্তরিকতার মধ্য দিয়ে গড়ে তুলি। সুশৃঙ্খল পাঠদান, নিয়মিত হিফজ পুনরাবৃত্তি ও আধুনিক শিক্ষার সমন্বয়ের মাধ্যমে তাদের একটি সুন্দর, সফল ও কল্যাণময় ভবিষ্যৎ বিনির্মাণে আমরা সদা সচেষ্ট।
                </p>

                {/* Key Guidance Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  <div className="flex items-center gap-2 text-sm text-gray-800 bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100">
                    <BookOpen className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>বিশুদ্ধ কুরআন তিলাওয়াত ও আমল</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-800 bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100">
                    <HeartHandshake className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>উচ্চ নৈতিক মূল্যবোধ ও নম্র স্বভাব</span>
                  </div>
                </div>
              </div>

              {/* Signature/Blessing Footer */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-[#064e3b]">দুআ ও শুভকামনান্তে,</div>
                  <div className="text-xs text-gray-500">অধ্যক্ষ, অত্র মাদরাসা</div>
                </div>
                <div className="text-xs text-amber-700 font-semibold bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
                  “আল্লাহ আমাদের সকলকে কবুল করুন—আমিন”
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
