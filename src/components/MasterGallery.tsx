import React, { useState } from 'react';
import { Images, ZoomIn, Filter } from 'lucide-react';
import { ALL_GALLERY_IMAGES } from '../data/madrasaData';
import { GalleryImage } from '../types';

interface MasterGalleryProps {
  onOpenLightbox: (imageUrl: string) => void;
}

export const MasterGallery: React.FC<MasterGalleryProps> = ({ onOpenLightbox }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'সকল ছবি' },
    { id: 'prize', label: 'পুরস্কার বিতরণী' },
    { id: 'achievement', label: 'মাদরাসার অর্জন' },
    { id: 'viva', label: 'ভাইভা পরীক্ষা' },
    { id: 'cocurricular', label: 'সহশিক্ষা' },
  ];

  const filteredImages =
    selectedFilter === 'all'
      ? ALL_GALLERY_IMAGES
      : ALL_GALLERY_IMAGES.filter((img) => img.category === selectedFilter);

  return (
    <section id="gallery" className="py-20 bg-[#f9fbf9] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/60 border border-emerald-300 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Images className="w-3.5 h-3.5 text-emerald-700" />
            <span>স্মৃতি ও কার্যক্রমের স্থিরচিত্র</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-bn text-[#064e3b] mb-4">
            ফটো গ্যালারি
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-base sm:text-lg">
            মাদরাসার পরীক্ষা, অর্জন, পুরস্কার বিতরণী ও সহশিক্ষা কার্যক্রমের নির্বাচিত ছবির অ্যালবাম।
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#064e3b] text-white shadow-md transform -translate-y-0.5 border border-amber-500/40'
                    : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-[#064e3b] border border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredImages.map((img: GalleryImage) => (
            <div
              key={img.id}
              className="group relative h-64 rounded-2xl overflow-hidden bg-emerald-950 border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => onOpenLightbox(img.url)}
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-50 group-hover:opacity-85 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-3 left-3">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#064e3b]/90 text-amber-300 backdrop-blur-sm border border-amber-400/40">
                  {img.categoryLabel}
                </span>
              </div>

              {/* Title & Zoom Button on Hover */}
              <div className="absolute inset-x-0 bottom-0 p-4 text-white flex flex-col justify-end">
                <h4 className="text-sm font-bold font-serif-bn line-clamp-2 text-white group-hover:text-amber-200 transition-colors">
                  {img.title}
                </h4>
                {img.description && (
                  <p className="text-[11px] text-gray-300 line-clamp-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.description}
                  </p>
                )}
              </div>

              {/* Center Magnify Trigger */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="p-2.5 rounded-full bg-amber-500 text-gray-950 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-5 h-5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
