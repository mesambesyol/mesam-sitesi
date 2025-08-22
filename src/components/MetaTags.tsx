import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Service, Doctor, BlogPost } from '../types';

type PageKey = 'home' | 'about' | 'services' | 'doctors' | 'blog' | 'quiz' | 'contact' | 'appointment' | 'kvkk' | 'formSuccess';
type DynamicData = Service | Doctor | BlogPost;

interface MetaTagsProps {
  page: PageKey | 'serviceDetail' | 'doctorDetail' | 'blogPost';
  data?: DynamicData;
}

const monthTrToEn: { [key: string]: string } = {
    'Ocak': 'January', 'Şubat': 'February', 'Mart': 'March', 'Nisan': 'April',
    'Mayıs': 'May', 'Haziran': 'June', 'Temmuz': 'July', 'Ağustos': 'August',
    'Eylül': 'September', 'Ekim': 'October', 'Kasım': 'November', 'Aralık': 'December'
};

const MetaTags: React.FC<MetaTagsProps> = ({ page, data }) => {
  const { t, getLocalized, language } = useLanguage();

  useEffect(() => {
    let title = t('appName');
    let description = t('meta.home.description'); // default
    let schema: object | null = null;

    if (page === 'serviceDetail' && data) {
      const service = data as Service;
      const serviceName = getLocalized(service.name);
      title = `${serviceName} | ${t('appName')}`;
      description = getLocalized(service.description);
    } else if (page === 'doctorDetail' && data) {
      const doctor = data as Doctor;
      const doctorName = doctor.name;
      const doctorTitle = getLocalized(doctor.title);
      title = `${doctorName} - ${doctorTitle} | ${t('appName')}`;
      description = getLocalized(doctor.bio);
    } else if (page === 'blogPost' && data) {
      const post = data as BlogPost;
      const postTitle = getLocalized(post.title);
      title = `${postTitle} | ${t('appName')}`;
      description = getLocalized(post.summary);

      let authorName = '';
      if (typeof post.author === 'string') {
        authorName = post.author;
      } else if (post.author) {
        authorName = getLocalized(post.author);
      }
      
      const dateParts = post.date.split(' ');
      let isoDate = new Date().toISOString();
      if (dateParts.length === 3 && monthTrToEn[dateParts[1]]) {
        const enMonth = monthTrToEn[dateParts[1]];
        isoDate = new Date(`${enMonth} ${dateParts[0]}, ${dateParts[2]}`).toISOString();
      }

      schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": postTitle,
        "image": post.imageUrl,
        "author": {
          "@type": "Person",
          "name": authorName
        },
        "publisher": {
          "@type": "Organization",
          "name": t('appName'),
          "logo": {
            "@type": "ImageObject",
            "url": "https://i.hizliresim.com/kw923ek.png"
          }
        },
        "datePublished": isoDate
      };

    } else if (['home', 'about', 'services', 'doctors', 'blog', 'quiz', 'contact', 'appointment', 'kvkk', 'formSuccess'].includes(page)) {
      title = t(`meta.${page}.title` as any);
      description = t(`meta.${page}.description` as any);
    }

    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    const existingScriptTag = document.getElementById('json-ld-schema');
    if (existingScriptTag) {
      existingScriptTag.remove();
    }
    
    if (schema) {
      const newScriptTag = document.createElement('script');
      newScriptTag.id = 'json-ld-schema';
      newScriptTag.type = 'application/ld+json';
      newScriptTag.innerHTML = JSON.stringify(schema);
      document.head.appendChild(newScriptTag);
    }

  }, [page, data, t, getLocalized, language]);

  return null;
};

export default MetaTags;