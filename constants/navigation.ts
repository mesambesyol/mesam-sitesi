
import { NavLinkItem } from '../types';

export const NAV_LINKS: NavLinkItem[] = [
  { name: { tr: 'Anasayfa', en: 'Home', de: 'Startseite' }, path: '/' },
  { 
    name: { tr: 'Kurumsal', en: 'Corporate', de: 'Unternehmen' },
    children: [
      { name: { tr: 'Hakkımızda', en: 'About Us', de: 'Über uns' }, path: '/hakkimizda' },
      { name: { tr: 'KVKK Metni', en: 'Privacy Policy (KVKK)', de: 'Datenschutz (KVKK)' }, path: '/kurumsal/kvkk' }
    ]
  },
  { name: { tr: 'Hizmetlerimiz', en: 'Services', de: 'Leistungen' }, path: '/hizmetlerimiz' },
  { name: { tr: 'Hekimlerimiz', en: 'Our Doctors', de: 'Unsere Ärzte' }, path: '/hekimlerimiz' },
  { name: { tr: 'Blog', en: 'Blog', de: 'Blog' }, path: '/blog' },
  { name: { tr: 'Diş Sağlığı Testi', en: 'Dental Health Quiz', de: 'Zahngesundheits-Quiz' }, path: '/test' },
  { name: { tr: 'İletişim', en: 'Contact', de: 'Kontakt' }, path: '/iletisim' },
];