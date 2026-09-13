import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { MADRASA_ASSETS, CONTACT_INFO } from '../data/madrasaData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Bar with Islamic Calligraphy Accent & Official Email */}
      <div id="top-announcement-bar" className="bg-[#044431] text-emerald-100 text-xs sm:text-sm py-2 px-4 border-b border-amber-600/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="font-arabic text-amber-300 text-base sm:text-lg tracking-wide font-normal">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>
            <span className="hidden md:inline text-emerald-300">|</span>
            <span className="hidden md:inline text-emerald-200">
              ইসলামী ও আধুনিক শিক্ষার আদর্শ সমন্বয়
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center gap-1.5 text-amber-200 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <span className="text-emerald-500">|</span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-emerald-200 hover:text-white transition-colors"
            >
              <span>সহায়তা ডেস্ক</span>
              <ArrowUpRight className="w-3 h-3 text-amber-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-amber-500/20 py-2.5'
            : 'bg-white border-b border-gray-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Institution Title */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-3.5 group"
              id="navbar-brand-link"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-emerald-600 shadow-sm shrink-0 p-0.5 bg-emerald-50 transition-transform group-hover:scale-105">
                <img
                  src={MADRASA_ASSETS.logo}
                  alt="মাদরাসা লোগো"
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold font-serif-bn text-[#064e3b] tracking-tight leading-tight group-hover:text-emerald-700 transition-colors">
                  মাদরাসা ওয়েব পোর্টাল
                </span>
                <span className="text-xs text-amber-700 font-medium tracking-wide">
                  জ্ঞান • আমল • আদর্শ
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 lg:gap-2" id="desktop-nav">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-[#064e3b] bg-emerald-50 font-semibold border-b-2 border-[#064e3b]'
                        : 'text-gray-700 hover:text-[#064e3b] hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Header Right Action & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="hidden sm:inline-flex items-center gap-1.5 bg-[#064e3b] hover:bg-[#043c2d] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow transition-all border border-amber-500/40"
              >
                <span>যোগাযোগ করুন</span>
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                id="mobile-menu-btn"
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden p-2 rounded-lg text-gray-700 hover:text-emerald-800 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                aria-label={isOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div
            id="mobile-nav-drawer"
            className="xl:hidden fixed inset-x-0 top-[105px] sm:top-[115px] bg-white border-b border-gray-200 shadow-xl max-h-[calc(100vh-120px)] overflow-y-auto px-4 py-6 transition-all duration-300 animate-in slide-in-from-top"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors text-left cursor-pointer ${
                      isActive
                        ? 'bg-emerald-50 text-[#064e3b] font-bold border-l-4 border-[#064e3b]'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#064e3b]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    )}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-gray-600 bg-gray-50 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  <Mail className="w-4 h-4 text-amber-600" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full mt-1 bg-[#064e3b] text-white py-3 rounded-xl font-semibold text-center hover:bg-[#043c2d] shadow cursor-pointer"
                >
                  যোগাযোগ ফরম পূরণ করুন
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
