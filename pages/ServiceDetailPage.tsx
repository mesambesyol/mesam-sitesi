import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import { SERVICES_DATA } from '../data/services';
import { useLanguage } from '../contexts/LanguageContext';
import MetaTags from '../components/MetaTags';

const ServiceDetailPage: React.FC = () => {
  const { slug } = ReactRouterDom.useParams<{ slug: string }>();
  const { t, getLocalized } = useLanguage();
  
  const service = SERVICES_DATA.find(s => s.id === slug);

  if (!service) {
    return (
      <PageContainer className="py-16 text-center">
        <h1 className="text-3xl font-bold text-brand-blue mb-4">{t('serviceDetailPage.notFoundTitle')}</h1>
        <p className="text-gray-600 mb-6">{t('serviceDetailPage.notFoundText')}</p>
        <ReactRouterDom.Link 
          to="/hizmetlerimiz"
          className="inline-block bg-brand-teal text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-medium"
        >
          {t('serviceDetailPage.backToServices')}
        </ReactRouterDom.Link>
      </PageContainer>
    );
  }

  const name = getLocalized(service.name);
  const longDescription = getLocalized(service.longDescription);

  return (
    <>
      <MetaTags page="serviceDetail" data={service} />
      <div className="bg-white py-12 sm:py-16">
        <PageContainer>
          <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                  <ReactRouterDom.Link to="/hizmetlerimiz" className="text-sm text-brand-teal hover:text-brand-blue transition-colors">
                  &larr; {t('serviceDetailPage.backToServices')}
                  </ReactRouterDom.Link>
              </div>

              <article>
                  <header className="mb-8">
                      <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">{name}</h1>
                  </header>

                  <img 
                      src={service.imageUrl} 
                      alt={name} 
                      className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md mb-8" 
                  />

                  <div 
                      className="prose prose-lg max-w-none text-gray-700"
                      dangerouslySetInnerHTML={{ __html: longDescription }}
                  />

                  <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                      <h2 className="text-2xl font-bold text-brand-blue mb-4">{t('serviceDetailPage.ctaTitle')}</h2>
                      <p className="text-gray-600 mb-6 max-w-xl mx-auto">{t('serviceDetailPage.ctaSubtitle')}</p>
                      <ReactRouterDom.Link
                          to="/randevu"
                          className="inline-block bg-brand-teal text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors font-medium text-lg"
                      >
                          {t('buttons.appointment')}
                      </ReactRouterDom.Link>
                  </div>
              </article>
          </div>
        </PageContainer>
      </div>
    </>
  );
};

export default ServiceDetailPage;
