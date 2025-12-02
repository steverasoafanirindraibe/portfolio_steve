"use client"
import { useContext, createContext, useState, useEffect } from 'react';

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState('fr');

  // Charger la langue sauvegardée
  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  // Sauvegarder la langue
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const value = {
    language,
    changeLanguage,
    t: (key) => {
      // Charger les traductions selon la langue
      const translations = require(`@/locales/${language}.json`);
      return key.split('.').reduce((obj, k) => obj && obj[k], translations) || key;
    }
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
}