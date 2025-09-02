import { useTranslation } from 'react-i18next';
import { profileData } from '../data/profileData';
import { profileDataEn } from '../data/profileDataEn';

export const useProfileData = () => {
  const { i18n } = useTranslation();
  
  return i18n.language === 'en' ? profileDataEn : profileData;
};
