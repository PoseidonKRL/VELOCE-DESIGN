
import { Project, Skill, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: { en: 'Our Menu', pt: 'Trabalhos' }, href: '#work' },
  { label: { en: 'The Chef', pt: 'O Especialista' }, href: '#about' },
  { label: { en: 'Order Now', pt: 'Falar com o Chef' }, href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: { en: "Double Smash Edition", pt: "Double Smash Edition" },
    category: { en: "Appetite Appeal", pt: "Appetite Appeal" },
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    size: "large",
    badge: { en: "Best Seller", pt: "Mais Vendido" },
    rating: "5.0",
    description: {
      en: "Visual manipulation to highlight texture and melt.",
      pt: "Manipulação visual para destacar textura e derretimento."
    }
  },
  {
    id: 2,
    title: { en: "Digital Menu 2.0", pt: "Cardápio Digital 2.0" },
    category: { en: "UX/UI", pt: "UX/UI" },
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    size: "tall",
    badge: { en: "Conversion", pt: "Conversão" },
    description: {
      en: "Strategic interface focused on upsell and average ticket.",
      pt: "Interface estratégica focada em upsell e ticket médio."
    }
  },
  {
    id: 3,
    title: { en: "Bacon Crave", pt: "Bacon Crave" },
    category: { en: "Social Media", pt: "Social Media" },
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1200&auto=format&fit=crop",
    size: "small",
  },
  {
    id: 4,
    title: { en: "Fries & Cheddar", pt: "Batatas & Cheddar" },
    category: { en: "Campaign", pt: "Campanha" },
    image: "https://images.unsplash.com/photo-1573019606806-9695d0a9739d?q=80&w=1200&auto=format&fit=crop",
    size: "small",
    badge: { en: "Crispy", pt: "Crocante" }
  },
  {
    id: 6,
    title: { en: "Dipping Sauce", pt: "Dipping Sauce" },
    category: { en: "Motion", pt: "Motion" },
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    size: "small",
  }
];

export const SKILLS: Skill[] = [
  { name: { en: "Appetite Appeal Manipulation", pt: "Manipulação Appetite Appeal" }, level: "Expert" },
  { name: { en: "Profitable Menu Design", pt: "Cardápios Lucrativos" }, level: "Expert" },
  { name: { en: "Gastronomic Copywriting", pt: "Copy Gastronômica" }, level: "Expert" },
  { name: { en: "Visual Psychology", pt: "Psicologia Visual" }, level: "Advanced" },
  { name: { en: "Motion Graphics", pt: "Motion Apetitoso" }, level: "Advanced" },
];

export const SOCIAL_LINKS = [
  { name: "Instagram", url: "https://www.instagram.com/velocedesign/" },
  { name: "WhatsApp", url: "https://wa.me/seunumerodetelefone" },
  { name: "Behance", url: "#" },
];
