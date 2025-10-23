import { useTranslation } from 'react-i18next';
import { skillsData } from '../data/skillsData';
import { skillsDataEn } from '../data/skillsDataEn';

/**
 * Hook para obtener datos de habilidades
 * @returns {Array} - Array de habilidades en el idioma actual
 */
export const useSkillsData = () => {
  const { i18n } = useTranslation();
  
  return i18n.language === 'en' ? skillsDataEn : skillsData;
};
