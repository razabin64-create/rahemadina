import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PrincipalSection } from './components/PrincipalSection';
import { AchievementsSection } from './components/AchievementsSection';
import { CurriculumSection } from './components/CurriculumSection';
import { VivaSection } from './components/VivaSection';
import { PrizeGivingSection } from './components/PrizeGivingSection';
import { CoCurricularSection } from './components/CoCurricularSection';
import { MasterGallery } from './components/MasterGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { ALL_GALLERY_IMAGES } from './data/madrasaData';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Active section tracker on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = [
        'home',
        'about',
        'principal',
        'achievements',
        'academic',
        'viva',
        'prize-giving',
        'cocurricular',
        'gallery',
        'contact',
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenLightbox = (imageUrl: string) => {
    const foundIndex = ALL_GALLERY_IMAGES.findIndex((img) => img.url === imageUrl);
    if (foundIndex !== -1) {
      setLightboxIndex(foundIndex);
    } else {
      setLightboxIndex(0);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfc] text-[#1e293b]">
      {/* 1. Header / Navbar */}
      <Navbar activeSection={activeSection} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. আমাদের সম্পর্কে */}
        <AboutSection />

        {/* 4. অধ্যক্ষের বাণী */}
        <PrincipalSection />

        {/* 5. মাদরাসার অর্জন */}
        <AchievementsSection onOpenLightbox={handleOpenLightbox} />

        {/* 6. শিক্ষা কার্যক্রম */}
        <CurriculumSection />

        {/* 7. ভাইভা পরীক্ষা */}
        <VivaSection onOpenLightbox={handleOpenLightbox} />

        {/* 8. পুরস্কার বিতরণী অনুষ্ঠান */}
        <PrizeGivingSection onOpenLightbox={handleOpenLightbox} />

        {/* 9. সহশিক্ষা কার্যক্রম */}
        <CoCurricularSection onOpenLightbox={handleOpenLightbox} />

        {/* 10. Gallery */}
        <MasterGallery onOpenLightbox={handleOpenLightbox} />

        {/* 11. Contact + Contact Form */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Lightbox Modal */}
      <LightboxModal
        images={ALL_GALLERY_IMAGES}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(index) => setLightboxIndex(index)}
      />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-[#064e3b] text-amber-300 hover:bg-[#043c2d] hover:text-white shadow-xl transition-all duration-300 border border-amber-500/40 cursor-pointer transform hover:scale-110"
          aria-label="পৃষ্ঠার শীর্ষে যান"
          title="উপরে যান"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
