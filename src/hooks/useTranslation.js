'use client';
import { useState, useEffect } from 'react';

// Import des traductions
import frTranslations from '@/locales/fr.json';
import enTranslations from '@/locales/en.json';

const translations = {
  fr: frTranslations,
  en: enTranslations
};

export const useTranslation = () => {
  const [language, setLanguage] = useState('fr');

  // Charger la langue sauvegardée
  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key; // Retourne la clé si non trouvée
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return { t, language, changeLanguage };
};