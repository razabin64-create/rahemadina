import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryImage } from '../types';

interface LightboxModalProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  if (currentIndex === null || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];
  const total = images.length;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % total);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + total) % total);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [currentIndex, total, onClose, onNavigate]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + total) % total);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % total);
  };

  return (
    <div
      id="lightbox-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300 animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="ফটো লাইটবক্স"
    >
      {/* Close Button */}
      <button
        id="lightbox-close-btn"
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400"
        aria-label="বন্ধ করুন"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation - Prev */}
      {total > 1 && (
        <button
          id="lightbox-prev-btn"
          onClick={handlePrev}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="পূর্ববর্তী ছবি"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
      )}

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-xl border border-white/20 shadow-2xl bg-black/40">
          <img
            src={currentImage.url}
            alt={currentImage.alt || currentImage.title}
            className="max-h-[75vh] w-auto max-w-full object-contain mx-auto transition-transform duration-300"
          />
        </div>

        {/* Caption and Info */}
        <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-white px-2">
          <div className="text-center sm:text-left">
            <span className="inline-block text-xs font-semibold px-2.5 py-1 bg-amber-500/20 text-amber-300 rounded border border-amber-500/30 mb-1">
              {currentImage.categoryLabel}
            </span>
            <h3 className="text-base sm:text-lg font-medium text-emerald-100">
              {currentImage.title}
            </h3>
            {currentImage.description && (
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mt-0.5">
                {currentImage.description}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-sm font-medium text-gray-300 bg-white/10 px-3 py-1 rounded-full">
              {currentIndex + 1} / {total}
            </span>
            <a
              href={currentImage.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              title="মূল রেজ্যুলেশনে দেখুন"
            >
              <Maximize2 className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation - Next */}
      {total > 1 && (
        <button
          id="lightbox-next-btn"
          onClick={handleNext}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="পরবর্তী ছবি"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      )}
    </div>
  );
};
