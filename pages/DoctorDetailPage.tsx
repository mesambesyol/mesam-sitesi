import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import { DOCTORS_DATA } from '../data/doctors';
import { UserCircleIcon, AcademicCapIcon, ClipboardDocumentListIcon, BriefcaseIcon, SparklesIcon } from '../constants/icons';
import { useLanguage } from '../contexts/LanguageContext';
import { DoctorDetailSection } from '../types';
import MetaTags from '../components/MetaTags';

const getSectionIcon = (iconKey?: DoctorDetailSection['icon']) => {
  const iconProps = { className: "w-7 h-7 text-brand-teal mr-4 flex-shrink-0" };
  switch (iconKey) {
    case 'academic': return <AcademicCapIcon {...iconProps} />;
    case 'clipboard': return <ClipboardDocumentListIcon {...iconProps} />;
    case 'briefcase': return <BriefcaseIcon {...iconProps} />;
    case 'sparkles': return <SparklesIcon {...iconProps} />;
    default: return null;
  }
};

const DoctorDetailPage: React.FC = () => {
  const { slug } = ReactRouterDom.useParams<{ slug: string }>();
  const { t, getLocalized } = useLanguage();
  
  const doctor = DOCTORS_DATA.find(d => d.id === slug);

  if (!doctor) {
    return (
      <PageContainer className="py-16 text-center">
        <h1 className="text-3xl font-bold text-brand-blue mb-4">{t('doctorDetailPage.notFoundTitle')}</h1>
        <p className="text-gray-600 mb-6">{t('doctorDetailPage.notFoundText')}</p>
        <ReactRouterDom.Link 
          to="/hekimlerimiz"
          className="inline-block bg-brand-teal text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-medium"
        >
          {t('doctorDetailPage.backToDoctors')}
        </ReactRouterDom.Link>
      </PageContainer>
    );
  }

  const title = getLocalized(doctor.title);
  const hasRealImage = doctor.imageUrl;

  return (
    <>
      <MetaTags page="doctorDetail" data={doctor} />
      <div className="bg-stone-100 py-12 sm:py-16">
        <PageContainer>
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <ReactRouterDom.Link to="/hekimlerimiz" className="text-sm text-brand-teal hover:text-brand-blue transition-colors">
                &larr; {t('doctorDetailPage.backToDoctors')}
              </ReactRouterDom.Link>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-x-12 gap-y-8">
              <aside className="lg:col-span-1 lg:sticky lg:top-32 self-start">
                <div className="bg-white rounded-lg shadow-xl p-6 text-center">
                  <div className="mb-4">
                    {hasRealImage ? (
                      <img
                        className="w-40 h-40 rounded-full mx-auto object-cover shadow-lg ring-4 ring-brand-blue-light"
                        src={doctor.imageUrl}
                        alt={doctor.name}
                      />
                    ) : (
                      <div className="w-40 h-40 rounded-full mx-auto bg-gray-200 flex items-center justify-center shadow-lg ring-4 ring-brand-blue-light">
                        <UserCircleIcon className="w-32 h-32 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <h1 className="text-2xl font-bold text-brand-blue mb-1">{doctor.name}</h1>
                  <p className="text-brand-teal mb-6">{title}</p>
                  <ReactRouterDom.Link 
                    to="/randevu"
                    className="w-full inline-block bg-brand-teal text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-medium"
                  >
                    {t('buttons.appointment')}
                  </ReactRouterDom.Link>
                </div>
              </aside>

              <main className="lg:col-span-2">
                {doctor.details ? (
                  <>
                    <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
                      <p className="text-lg text-gray-700 leading-relaxed">{getLocalized(doctor.details.introduction)}</p>
                    </div>
                    <div className="space-y-8">
                      {doctor.details.sections.map((section, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                          <div className="p-6 sm:p-8">
                            <div className="flex items-center mb-4">
                              {getSectionIcon(section.icon)}
                              <h2 className="text-2xl font-bold text-brand-blue">{getLocalized(section.title)}</h2>
                            </div>
                            <div
                              className="prose max-w-none text-gray-600 [&_ul]:pl-2 [&_li]:mb-1"
                              dangerouslySetInnerHTML={{ __html: getLocalized(section.content) }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="bg-white rounded-lg shadow-xl p-8">
                    <p className="text-gray-700">{getLocalized(doctor.bio)}</p>
                  </div>
                )}
              </main>
            </div>
          </div>
        </PageContainer>
      </div>
    </>
  );
};

export default DoctorDetailPage;
