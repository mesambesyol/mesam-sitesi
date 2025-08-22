
import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { SERVICES_DATA } from '../data/services';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedItem from '../components/AnimatedItem';
import MetaTags from '../components/MetaTags';

const ServicesPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-brand-teal to-brand-blue py-12 sm:py-16 overflow-hidden">
      <MetaTags page="services" />
      <PageContainer>
        <AnimatedItem>
            <SectionTitle theme="dark" title={t('servicesPage.title')} subtitle={t('servicesPage.subtitle')} />
        </AnimatedItem>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <AnimatedItem key={service.id} className="h-full" staggerIndex={index}>
              <ServiceCard service={service} />
            </AnimatedItem>
          ))}
        </div>
        <AnimatedItem className="mt-12 bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-brand-blue mb-4">{t('servicesPage.howCanWeHelp')}</h3>
            <p className="text-gray-700 mb-6">
                {t('servicesPage.helpText')}
            </p>
            <ReactRouterDom.Link 
                to="/iletisim"
                state={{ scrollToId: 'randevu' }}
                className="inline-block bg-brand-teal text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg font-medium text-lg"
            >
                {t('servicesPage.getAppointmentInfo')}
            </ReactRouterDom.Link>
        </AnimatedItem>
      </PageContainer>
    </div>
  );
};

export default ServicesPage;