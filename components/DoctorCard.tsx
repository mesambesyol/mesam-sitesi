
import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { Doctor } from '../types';
import { AcademicCapIcon, UserCircleIcon } from '../constants/icons';
import { useLanguage } from '../contexts/LanguageContext';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const { getLocalized, t } = useLanguage();
  const hasRealImage = doctor.imageUrl;
  
  const title = getLocalized(doctor.title);
  const bio = getLocalized(doctor.bio);

  return (
    <ReactRouterDom.Link 
      to={`/hekimlerimiz/${doctor.id}`} 
      className="block group h-full"
      aria-label={`${t('buttons.viewProfile')} ${doctor.name}`}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col text-center p-6 transition-all duration-300 h-full group-hover:shadow-xl group-hover:-translate-y-1.5">
        <div className="mb-4 w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto overflow-hidden shadow-md">
          {hasRealImage ? (
            <img
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              src={doctor.imageUrl}
              alt={doctor.name}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <UserCircleIcon className="w-24 h-24 text-gray-400" /> 
            </div>
          )}
        </div>
        <h3 className="text-xl font-semibold text-brand-blue mb-1 group-hover:text-brand-teal transition-colors">{doctor.name}</h3>
        <div className="flex items-center justify-center text-sm text-brand-teal mb-3">
          <AcademicCapIcon className="w-5 h-5 mr-1.5" />
          <span>{title}</span>
        </div>
        <p className="text-gray-600 text-sm flex-grow mb-4">{bio}</p>
        <div className="mt-auto pt-4">
          <span className="inline-block bg-brand-blue-light text-brand-blue px-4 py-2 rounded-md group-hover:bg-brand-teal group-hover:text-white transition-colors text-sm font-medium w-full">
            {t('buttons.viewProfile')}
          </span>
        </div>
      </div>
    </ReactRouterDom.Link>
  );
};

export default DoctorCard;