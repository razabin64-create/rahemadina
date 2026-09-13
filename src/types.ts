export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'prize' | 'achievement' | 'viva' | 'cocurricular';
  categoryLabel: string;
  description?: string;
  alt: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  badge: string;
}

export interface CurriculumItem {
  id: string;
  title: string;
  arabicName: string;
  description: string;
  features: string[];
  icon: string;
}
