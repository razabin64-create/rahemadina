import React from 'react';
import { BookOpen, ShieldCheck, Heart, Sparkles, Compass, UserCheck } from 'lucide-react';
import { MADRASA_ASSETS } from '../data/madrasaData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'ইসলামী শিক্ষা',
      description: 'কুরআনুল কারীম ও হাদীস শরীফের আলোকবর্তিকা ধারণ করে বিশুদ্ধ ইসলামী ভাবধারায় জীবন গড়ার সার্বিক পাঠদান।',
      icon: BookOpen,
    },
    {
      title: 'নৈতিক শিক্ষা',
      description: 'সততা, ধৈর্য, সদাচার ও উন্নত শিষ্টাচারের মাধ্যমে অন্তরে খোদাভীতি ও নৈতিক মূল্যবোধ জাগ্রতকরণ।',
      icon: ShieldCheck,
    },
    {
      title: 'কুরআন ও সুন্নাহভিত্তিক জ্ঞান',
      description: 'দৈনন্দিন জীবন ও কর্মে রাসূলুল্লাহ (সা.)-এর সুন্নাহ ও প্রিয় সাহাবায়ে কিরামের পথ অনুসরণের বাস্তব দীক্ষা।',
      icon: Compass,
    },
    {
      title: 'চরিত্র গঠন',
      description: 'অহংকারমুক্ত, বিনয়ী ও সত্যনিষ্ঠ মানসিকতা গড়ে তুলে সমাজ ও পরিবারের জন্য অনুকরণীয় চরিত্র সৃষ্টি।',
      icon: Heart,
    },
    {
      title: 'আধুনিক শিক্ষার সমন্বয়',
      description: 'দ্বীনি শিক্ষার সুদৃঢ় ভিত্তির পাশাপাশি সমকালীন উপযোগী সাধারণ শিক্ষা, ভাষা ও তথ্যপ্রযুক্তির সুষম সমন্বয়।',
      icon: Sparkles,
    },
    {
      title: 'আদর্শ মানুষ হিসেবে গড়ে তোলা',
      description: 'দেশ, জাতি ও মানবতার সেবায় নিবেদিতপ্রাণ, কর্তব্যপরায়ণ ও খাঁটি দেশপ্রেমিক আলোকিত মানুষ তৈরি করা।',
      icon: UserCheck,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>পরিচিতি ও লক্ষ্য</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-bn text-[#064e3b] mb-4">
            আমাদের সম্পর্কে
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            আমরা শিক্ষার্থীদের কেবলমাত্র পার্থিব জ্ঞান নয়, বরং পরকালীন মুক্তির পাথেয় ও ইহকালীন কল্যাণের সুষম শিক্ষায় গড়ে তুলতে প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>

        {/* Narrative & Institutional Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed">
            <h3 className="text-2xl font-bold font-serif-bn text-[#064e3b]">
              দ্বীনি ঐতিহ্য ও সমকালীন চেতনার মেলবন্ধন
            </h3>
            <p>
              একটি শিশুর প্রকৃত বিকাশ ঘটে যখন তার অন্তরে আল্লাহর পরিচয় ও কুরআনী আদর্শ প্রোথিত হয়। অত্র মাদরাসায় আমরা শিক্ষার্থীদের কুরআনুল কারীমের সহীহ হিফজ ও দ্বীনি শিক্ষার পাশাপাশি আধুনিক শিক্ষার প্রয়োজনীয় দিকগুলোর সমন্বয় ঘটিয়েছি।
            </p>
            <p>
              আমাদের শিক্ষকবৃন্দ গভীর স্নেহ, আন্তরিক যত্ন ও নিবিড় পরিচর্যার মাধ্যমে প্রতিটি শিক্ষার্থীর মেধার মূল্যায়ন করেন। শৃঙ্খলা, সময়ানুবর্তিতা এবং দ্বীনি তাহযীব ও তামাদ্দুন শিক্ষাদানের মাধ্যমে আমরা একটি আদর্শ প্রজন্ম বিনির্মাণে নিরলস কাজ করে যাচ্ছি।
            </p>
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-sm">
              <span className="font-semibold block mb-1">আমাদের মূল মন্ত্র:</span>
              “জ্ঞানকে অন্তরে ধারণ করা, আমলে রূপান্তরিত করা এবং চরিত্র মাধুর্যে সমাজকে আলোকিত করা।”
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-xl border-2 border-emerald-100 bg-emerald-900 p-2">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={MADRASA_ASSETS.achievements[0]}
                  alt="মাদরাসার শিক্ষার্থীবৃন্দ ও দ্বীনি পরিবেশ"
                  className="w-full h-80 sm:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-semibold tracking-wider text-amber-300 uppercase block mb-1">
                      পবিত্র কুরআনের আলো
                    </span>
                    <h4 className="text-lg font-bold font-serif-bn">
                      হৃদয়ে পবিত্র কালামুল্লাহ ও উত্তম আদর্শের বিকাশ
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Required Focal Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-b from-white to-emerald-50/30 border border-gray-200/80 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#064e3b] text-amber-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-serif-bn text-[#064e3b] mb-2.5">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
