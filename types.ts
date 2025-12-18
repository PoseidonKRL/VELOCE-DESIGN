export type Language = 'en' | 'pt';

export type LocalizedString = {
  en: string;
  pt: string;
};

export interface Project {
  id: number;
  title: LocalizedString;
  category: LocalizedString;
  image: string;
  size: 'small' | 'medium' | 'large' | 'tall';
  description?: LocalizedString;
  badge?: LocalizedString; // e.g., "Best Seller", "Hot"
  rating?: string;
}

export interface Skill {
  name: LocalizedString;
  level: string;
}

export interface NavItem {
  label: LocalizedString;
  href: string;
}