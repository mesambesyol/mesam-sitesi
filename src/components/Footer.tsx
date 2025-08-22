import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants/navigation';
import { ClockIcon, InstagramIcon, YouTubeIcon, FacebookIcon, XIcon, LinkedInIcon } from '../constants/icons';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, getLocalized } = useLanguage();
  const flatNavLinks = NAV_LINKS.flatMap(link => link.children ? link.children : [link]);

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white">{t('appName')}</h3>
            <p className="mt-2 text-sm">
              {t('footer.tagline')}
            </p>
            <p className="mt-4 text-sm">
              {t('footer.addressLine1')}<br/>
              {t('footer.addressLine2')}
            </p>
            <div className="mt-4 flex items-center text-sm font-semibold text-sky-300">
                <ClockIcon className="w-5 h-5 mr-2" />
                <span>{t('footer.availability')}</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{t('footer.quickLinks')}</h3>
            <ul className="mt-2 space-y-2">
              {flatNavLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path!} className="text-sm hover:text-white transition-colors">
                    {getLocalized(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{t('footer.contact')}</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>{t('footer.phone')}: <a href="tel:+905366549868" className="hover:text-white transition-colors">0536 654 98 68</a></li>
              <li>{t('footer.email')}: <a href="mailto:mesambesyol@gmail.com" className="hover:text-white transition-colors">mesambesyol@gmail.com</a></li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white">{t('footer.socialMedia.title')}</h3>
              <div className="mt-4 flex space-x-5">
                <a href="https://www.instagram.com/besyolmesam/" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialMedia.instagram')} className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
                  <InstagramIcon className="h-6 w-6" />
                </a>
                <a href="https://www.youtube.com/besyolmesam/" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialMedia.youtube')} className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
                  <YouTubeIcon className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/besyolmesam" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialMedia.facebook')} className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
                  <FacebookIcon className="h-6 w-6" />
                </a>
                <a href="https://x.com/besyolmesam" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialMedia.x')} className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
                  <XIcon className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/company/besyolmesam" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialMedia.linkedin')} className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
                  <LinkedInIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;