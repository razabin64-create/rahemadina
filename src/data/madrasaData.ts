import { GalleryImage, AchievementItem, CurriculumItem } from '../types';

export const MADRASA_ASSETS = {
  logo: 'https://i.ibb.co/yByCGRPx/77df3415ad.jpg',
  principal: 'https://i.ibb.co/Q38F9Y0Z/eccf74e99b.jpg',
  prizeGiving: [
    'https://i.ibb.co/TqNTzn8n/e21233251c.jpg',
    'https://i.ibb.co/sJRDxLph/35517a7786.jpg',
    'https://i.ibb.co/WW5VWMRg/93808eb216.jpg',
    'https://i.ibb.co/4kR01yz/fdc21f1e35.jpg',
    'https://i.ibb.co/zVN4Ddm6/b05f04855f.jpg',
    'https://i.ibb.co/PzM8h4rm/688621a620.jpg',
  ],
  achievements: [
    'https://i.ibb.co/Kjs0vYNz/ad1cd585eb.jpg',
    'https://i.ibb.co/1t0p3fcH/6c02900856.jpg',
    'https://i.ibb.co/6cpyh2BB/f2542df472.jpg',
  ],
  viva: [
    'https://i.ibb.co/20DdjCQ5/39b78871c1.jpg',
    'https://i.ibb.co/Q3Wq7x21/7cf25b5753.jpg',
    'https://i.ibb.co/xtqdpr16/bb9fedd37f.jpg',
  ],
  coCurricular: [
    'https://i.ibb.co/QjPcM6NL/344c72614b.jpg',
    'https://i.ibb.co/7xzXxDGj/fa4b966a1b.jpg',
  ],
};

export const CONTACT_INFO = {
  email: 'razabin64@gmail.com',
  formAction: 'https://formsubmit.co/razabin64@gmail.com',
  subject: 'Madrasa Website Contact Message',
};

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'achieve-1',
    title: 'হিফজুল কুরআনে বিশেষ সাফল্য',
    subtitle: 'বিশুদ্ধ তেলাওয়াত ও হিফজ সমাপন',
    description:
      'শিক্ষার্থীদের তাজবিদসহ শুদ্ধ উচ্চারণ ও সুললিত কণ্ঠে পবিত্র কুরআন হিফজ সমাপনে অনন্য ধারাবাহিক সাফল্য ও সনদ প্রদান।',
    imageUrl: MADRASA_ASSETS.achievements[0],
    badge: 'হিফজ সম্মাননা',
  },
  {
    id: 'achieve-2',
    title: 'বার্ষিক মেধা মূল্যায়ন ও গৌরব',
    subtitle: 'ধারাবাহিক শ্রেষ্ঠত্ব ও সম্মাননা',
    description:
      'উচ্চতর মূল্যায়নে অনন্য ফলাফল প্রদর্শন এবং বোর্ড ও আঞ্চলিক সমন্বিত পরীক্ষার ক্ষেত্রে শিক্ষার্থীদের কৃতিত্বপূর্ণ অবস্থান।',
    imageUrl: MADRASA_ASSETS.achievements[1],
    badge: 'মেধাবৃত্তি',
  },
  {
    id: 'achieve-3',
    title: 'জাতীয় ও আঞ্চলিক প্রতিযোগিতা',
    subtitle: 'ক্বিরাত ও হামদ-নাত সম্মাননা',
    description:
      'বিভিন্ন দ্বীনি ক্বিরাত, আযান ও ইসলামী সংগীত প্রতিযোগিতায় অত্র মাদরাসার শিক্ষার্থীদের গৌরবময় সাফল্য অর্জন।',
    imageUrl: MADRASA_ASSETS.achievements[2],
    badge: 'পুরস্কার ও সনদ',
  },
];

export const PRIZE_GIVING_DATA: GalleryImage[] = [
  {
    id: 'prize-1',
    url: MADRASA_ASSETS.prizeGiving[0],
    title: 'কৃতী শিক্ষার্থীদের মাঝে পুরস্কার বিতরণ',
    category: 'prize',
    categoryLabel: 'পুরস্কার বিতরণী',
    description: 'বার্ষিক মেধা ও শৃঙ্খলা মূল্যায়নে শ্রেষ্ঠ শিক্ষার্থীদের বিশেষ সম্মাননা প্রদান।',
    alt: 'পুরস্কার বিতরণী অনুষ্ঠান - শিক্ষার্থীদের ক্রেস্ট ও পুরস্কার বিতরণ দৃশ্য',
  },
  {
    id: 'prize-2',
    url: MADRASA_ASSETS.prizeGiving[1],
    title: 'বার্ষিক সম্মেলন ও পুরস্কার প্রদান পর্ব',
    category: 'prize',
    categoryLabel: 'পুরস্কার বিতরণী',
    description: 'অভিভাবক ও শিক্ষকদের উপস্থিতিতে সফল শিক্ষার্থীদের হাতে পুরস্কার তুলে দেওয়ার মুহূর্ত।',
    alt: 'পুরস্কার বিতরণী মঞ্চ - অতিথি ও শিক্ষার্থীদের সম্মিলন',
  },
  {
    id: 'prize-3',
    url: MADRASA_ASSETS.prizeGiving[2],
    title: 'কুরআন হিফজ সমাপনী সংবর্ধনা',
    category: 'prize',
    categoryLabel: 'পুরস্কার বিতরণী',
    description: 'হিফজুল কুরআন সফলভাবে সমাপ্তকারী শিক্ষার্থীদের পাগড়ী ও সম্মাননা প্রদান।',
    alt: 'হিফজ সমাপনী অনুষ্ঠানে কৃতী শিক্ষার্থীদের সংবর্ধনা ও সনদপত্র প্রদান',
  },
  {
    id: 'prize-4',
    url: MADRASA_ASSETS.prizeGiving[3],
    title: 'শ্রেষ্ঠ শিক্ষার্থী মেধা স্মারক প্রদান',
    category: 'prize',
    categoryLabel: 'পুরস্কার বিতরণী',
    description: 'ইসলামী সাধারণ জ্ঞান ও চারিত্রিক উৎকর্ষে প্রথম স্থান অধিকারীদের সম্মাননা।',
    alt: 'মঞ্চে অতিথিবৃন্দের হাত থেকে শিক্ষার্থীদের পুরস্কার গ্রহণের দৃশ্য',
  },
  {
    id: 'prize-5',
    url: MADRASA_ASSETS.prizeGiving[4],
    title: 'সম্মানিত অতিথি ও অভিভাবক সমাবেশ',
    category: 'prize',
    categoryLabel: 'পুরস্কার বিতরণী',
    description: 'উদ্বোধনী বক্তব্য ও পুরস্কার বিতরণী সভায় আগত সুধীজন ও অভিভাবকদের অংশগ্রহণ।',
    alt: 'পুরস্কার বিতরণী অনুষ্ঠানে উপস্থিত সুধীবৃন্দ ও অভিভাবক মণ্ডলী',
  },
  {
    id: 'prize-6',
    url: MADRASA_ASSETS.prizeGiving[5],
    title: 'পুরস্কারপ্রাপ্ত শিক্ষার্থীদের সম্মিলিত উচ্ছ্বাস',
    category: 'prize',
    categoryLabel: 'পুরস্কার বিতরণী',
    description: 'পুরস্কার বিজয়ের পর কৃতী শিক্ষার্থীদের হাসিমুখ ও অনুপ্রেরণামূলক পরিবেশ।',
    alt: 'পুরস্কারপ্রাপ্ত শিক্ষার্থীদের আনন্দের মুহূর্ত ও স্মৃতিচিত্র',
  },
];

export const VIVA_DATA: GalleryImage[] = [
  {
    id: 'viva-1',
    url: MADRASA_ASSETS.viva[0],
    title: 'তাজবিদ ও বিশুদ্ধ ক্বিরাত মৌখিক পরীক্ষা',
    category: 'viva',
    categoryLabel: 'ভাইভা পরীক্ষা',
    description: 'অভিজ্ঞ উস্তাদগণের উপস্থিতিতে কুরআনের বিশুদ্ধ মাখরাজ ও সিফাত যাচাই।',
    alt: 'ভাইভা পরীক্ষা - শিক্ষকমণ্ডলীর সামনে শিক্ষার্থীর মৌখিক পরীক্ষা প্রদর্শন',
  },
  {
    id: 'viva-2',
    url: MADRASA_ASSETS.viva[1],
    title: 'মাসআলা-মাসায়েল ও ব্যবহারিক দ্বীনিয়াত ভাইভা',
    category: 'viva',
    categoryLabel: 'ভাইভা পরীক্ষা',
    description: 'দৈনন্দিন দোয়া, নামাযের নিয়ম ও আবশ্যকীয় ফিকহী বিষয়ে মৌখিক সাক্ষাৎকার।',
    alt: 'শিক্ষক প্যানেলের তত্ত্বাবধানে শিক্ষার্থীদের ভাইভা পরীক্ষা গ্রহণ',
  },
  {
    id: 'viva-3',
    url: MADRASA_ASSETS.viva[2],
    title: 'আত্মবিশ্বাস ও উপস্থিত বুদ্ধি মূল্যায়ন',
    category: 'viva',
    categoryLabel: 'ভাইভা পরীক্ষা',
    description: 'মৌখিক অভিব্যক্তির স্বচ্ছতা ও ইসলামী শিষ্টাচার প্রদর্শনের মাধ্যমে মূল্যায়ন।',
    alt: 'মৌখিক পরীক্ষার মাধ্যমে শিক্ষার্থীর জ্ঞান ও চারিত্রিক গুণাবলী যাচাই',
  },
];

export const CO_CURRICULAR_DATA: GalleryImage[] = [
  {
    id: 'cocurricular-1',
    url: MADRASA_ASSETS.coCurricular[0],
    title: 'ক্বিরাত ও হামদ-নাত প্রশিক্ষণ ও প্রতিযোগিতা',
    category: 'cocurricular',
    categoryLabel: 'সহশিক্ষা কার্যক্রম',
    description: 'শিক্ষার্থীদের সুপ্ত প্রতিভার বিকাশ ও নির্ভীক উপস্থাপনা নিশ্চিত করতে বিশেষ আয়োজন।',
    alt: 'সহশিক্ষা কার্যক্রম - ইসলামী সাংস্কৃতিক উপস্থাপনা ও প্রতিযোগিতা',
  },
  {
    id: 'cocurricular-2',
    url: MADRASA_ASSETS.coCurricular[1],
    title: 'বক্তৃতা চর্চা ও সৃজনশীল মেধা বিকাশ',
    category: 'cocurricular',
    categoryLabel: 'সহশিক্ষা কার্যক্রম',
    description: 'সাপ্তাহিক বক্তৃতা অধিবেশন এবং আদর্শ চরিত্র ও নেতৃত্বের গুণাবলী গঠনের প্রশিক্ষণ।',
    alt: 'সহশিক্ষা কার্যক্রম - বক্তৃতা অনুশীলন ও দলগত শিষ্টাচার চর্চা',
  },
];

// All images unified for Master Gallery
export const ALL_GALLERY_IMAGES: GalleryImage[] = [
  ...PRIZE_GIVING_DATA,
  {
    id: 'ach-img-1',
    url: MADRASA_ASSETS.achievements[0],
    title: 'হিফজুল কুরআনে অনন্য সাফল্য',
    category: 'achievement',
    categoryLabel: 'মাদরাসার অর্জন',
    description: 'কুরআন হিফজের ক্ষেত্রে শিক্ষার্থীদের মেধা ও নিয়মিত অধ্যবসায়ের গৌরব।',
    alt: 'মাদরাসার অর্জন - হিফজুল কুরআন বিভাগীয় সফলতা',
  },
  {
    id: 'ach-img-2',
    url: MADRASA_ASSETS.achievements[1],
    title: 'বার্ষিক মেধা তালিকা ও সংবর্ধনা',
    category: 'achievement',
    categoryLabel: 'মাদরাসার অর্জন',
    description: 'শিক্ষার্থীদের অসাধারণ ফলাফলের স্বীকৃতি ও মেধা সনদ।',
    alt: 'মাদরাসার অর্জন - কৃতী শিক্ষার্থীদের সংবর্ধনা',
  },
  {
    id: 'ach-img-3',
    url: MADRASA_ASSETS.achievements[2],
    title: 'ইসলামী ক্বিরাত ও জ্ঞান প্রতিযোগিতা',
    category: 'achievement',
    categoryLabel: 'মাদরাসার অর্জন',
    description: 'বিভিন্ন পর্যায়ের প্রতিযোগিতায় শিক্ষার্থীদের শীর্ষ অবস্থান।',
    alt: 'মাদরাসার অর্জন - পুরস্কার ও স্মারক অর্জন',
  },
  ...VIVA_DATA,
  ...CO_CURRICULAR_DATA,
];

export const CURRICULUM_DATA: CurriculumItem[] = [
  {
    id: 'curric-1',
    title: 'নূরানী ও নাজেরা বিভাগ',
    arabicName: 'قسم النورانية والناظرة',
    description:
      'বিশুদ্ধ মাখরাজ ও তাজবিদ সহকারে কুরআন তিলাওয়াত শিক্ষার বুনিয়াদী স্তর। স্বল্প সময়ে সহীহ-শুদ্ধভাবে কুরআন পড়ার নিশ্চয়তা।',
    features: [
      'বিশুদ্ধ মাখরাজ ও সিফাত সহ তাজবিদ শিক্ষা',
      'দৈনন্দিন মাসনূন দুআ ও কালেমা মুখস্থকরণ',
      'নামাযের ব্যবহারিক প্রশিক্ষণ ও শিষ্টাচার',
      'বাংলা ও ইংরেজি বর্ণমালার মৌলিক পাঠ',
    ],
    icon: 'BookOpen',
  },
  {
    id: 'curric-2',
    title: 'হিফজুল কুরআন বিভাগ',
    arabicName: 'قسم تحفيظ القرآن الكريم',
    description:
      'আন্তর্জাতিক মানদণ্ডে সম্পূর্ণ কুরআনুল কারীম হিফজ সম্পন্ন করার বিশেষায়িত বিভাগ। নিয়মিত পুনরাবৃত্তি ও দৃঢ় হিফজের সুব্যবস্থা।',
    features: [
      'হুফ্ফাজে কিরামের বিশেষ নিবিড় তত্ত্বাবধান',
      'দৈনিক সবক, সবকী ও আমোখতা নিয়মিত মনিটরিং',
      'সুললিত কণ্ঠ ও ক্বিরাতের বিশেষ মহড়া',
      'মানসিক চাপমুক্ত ও আনন্দঘন পরিবেশ',
    ],
    icon: 'Award',
  },
  {
    id: 'curric-3',
    title: 'কিতাব ও আধুনিক সাধারণ শিক্ষা',
    arabicName: 'العلوم الشرعية والعصرية',
    description:
      'দ্বীনি শিক্ষার গভীরতার সাথে সাথে বাংলা, ইংরেজি, গণিত, বিজ্ঞান ও কম্পিউটার শিক্ষার সুষম সমন্বয়।',
    features: [
      'আরবি ও উর্দু ভাষার প্রারম্ভিক জ্ঞান',
      'মৌলিক ফিকহ, সীরাতুন্নবী ও ইসলামী ইতিহাস',
      'জাতীয় শিক্ষাক্রমের বাংলা, ইংরেজি ও গণিত',
      'মৌলিক কম্পিউটার সচেতনতা ও নৈতিক বিজ্ঞান',
    ],
    icon: 'GraduationCap',
  },
  {
    id: 'curric-4',
    title: 'তারবিয়াত ও চারিত্রিক উৎকর্ষ',
    arabicName: 'التربية والتزكية الأخلاقية',
    description:
      'সুন্নাত অনুযায়ী জীবনযাপন, আদব-কায়দা, মাতা-পিতা ও উস্তাদের প্রতি শ্রদ্ধা এবং আদর্শ চরিত্র গঠনের বিশেষ কার্যক্রম।',
    features: [
      'দৈনিক সুন্নতী আমলের সক্রিয় অনুশীলন',
      'আমলনামা সংরক্ষণ ও আত্মশুদ্ধি প্রশিক্ষণ',
      'সততা, পরিচ্ছন্নতা ও পরোপকারের শিক্ষা',
      'সমাজসচেতন ও দেশপ্রেমিক মানুষ গড়ার দীক্ষা',
    ],
    icon: 'HeartHandshake',
  },
];
