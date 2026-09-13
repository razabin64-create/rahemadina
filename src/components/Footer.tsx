import React from 'react';
import { Mail, ChevronRight, Heart, ArrowUp } from 'lucide-react';
import { MADRASA_ASSETS, CONTACT_INFO } from '../data/madrasaData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'হোম', href: '#home' },
    { name: 'আমাদের সম্পর্কে', href: '#about' },
    { name: 'অধ্যক্ষের বাণী', href: '#principal' },
    { name: 'মাদরাসার অর্জন', href: '#achievements' },
    { name: 'শিক্ষা কার্যক্রম', href: '#academic' },
    { name: 'ভাইভা পরীক্ষা', href: '#viva' },
    { name: 'পুরস্কার বিতরণী', href: '#prize-giving' },
    { name: 'গ্যালারি', href: '#gallery' },
    { name: 'যোগাযোগ', href: '#contact' },
  ];

  return (
    <footer className="bg-[#032a20] text-gray-300 relative border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Logo & Short Islamic Educational Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400 p-0.5 bg-emerald-950 shrink-0">
                <img
                  src={MADRASA_ASSETS.logo}
                  alt="মাদরাসা লোগো"
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif-bn text-white leading-snug">
                  মাদরাসা ওয়েব পোর্টাল
                </h3>
                <span className="text-xs text-amber-300 font-medium tracking-wide">
                  জ্ঞান, আমল ও আদর্শের সমন্বয়
                </span>
              </div>
            </div>

            <p className="text-sm text-emerald-100/80 leading-relaxed max-w-md">
              পবিত্র কুরআন ও সুন্নাহর আলোয় আলোকিত একটি আদর্শ ভবিষ্যৎ প্রজন্ম গড়ে তোলার লক্ষ্যে আমরা অঙ্গীকারবদ্ধ। শিক্ষার্থীদের নৈতিক চরিত্র গঠন, কুরআনুল কারীম হিফজ ও যুগোপযোগী শিক্ষার আদর্শ মিলনমেলা।
            </p>

            <div className="pt-2">
              <span className="font-arabic text-lg text-amber-300 block">
                وَقُل رَّبِّ زِدْنِي عِلْمًا
              </span>
              <span className="text-xs text-emerald-300">
                “বলুন, হে আমার পালনকর্তা! আমার জ্ঞান বৃদ্ধি করুন।”
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-4">
            <h4 className="text-base font-bold text-white font-serif-bn border-b border-emerald-700/50 pb-2 mb-4 flex items-center justify-between">
              <span>প্রয়োজনীয় লিংক</span>
              <span className="w-8 h-0.5 bg-amber-400"></span>
            </h4>

            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-gray-300 hover:text-amber-300 transition-colors py-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details & Email */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-white font-serif-bn border-b border-emerald-700/50 pb-2 mb-4 flex items-center justify-between">
              <span>যোগাযোগ</span>
              <span className="w-8 h-0.5 bg-amber-400"></span>
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 block text-[11px]">অফিসিয়াল ইমেইল:</span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-amber-200 hover:underline break-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-xs text-emerald-200 leading-relaxed">
                ভর্তি ও যেকোনো তথ্যের জন্য ওয়েবসাইটের যোগাযোগ ফরম ব্যবহার করতে পারেন।
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with exact required copyright */}
        <div className="mt-12 pt-6 border-t border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 Madrasa. সর্বস্বত্ব সংরক্ষিত।
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors cursor-pointer bg-emerald-900/60 px-3 py-1.5 rounded-full border border-emerald-700/50"
            >
              <span>উপরে যান</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
