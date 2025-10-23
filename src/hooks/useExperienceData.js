import { useTranslation } from 'react-i18next';
import { experienceData } from '../data/experienceData';
import { experienceDataEn } from '../data/experienceDataEn';

/**
 * Hook para obtener datos de experiencia
 * @returns {Array} - Array de experiencias en el idioma actual
 */
export const useExperienceData = () => {
  const { i18n } = useTranslation();
  
  return i18n.language === 'en' ? experienceDataEn : experienceData;
};
