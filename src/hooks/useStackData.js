import { useTranslation } from 'react-i18next';
import { stackData } from '../data/stackData';
import { stackDataEn } from '../data/stackDataEn';

/**
 * Hook para obtener datos del stack tecnológico
 * @returns {Object} - Datos del stack en el idioma actual
 */
export const useStackData = () => {
  const { i18n } = useTranslation();
  
  return i18n.language === 'en' ? stackDataEn : stackData;
};
