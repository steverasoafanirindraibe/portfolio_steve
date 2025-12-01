"use client"
import {useScroll } from '@/hooks/useScroll';
import { useTranslation } from '@/hooks/useTranslation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import SideSocialLinks from '@/components/SideSocialLinks';
import Image from 'next/image';
import { useState } from 'react';
import { Phone, Download, Code, Server, User, Globe } from 'lucide-react'; 


// Composant de switch de langue stylisé
const LanguageSwitcher = ({ currentLang, setLang }) => (
    <div className="flex items-center justify-center p-1 bg-gray-700 rounded-full shadow-inner border border-teal-500/50 w-32">
        <Globe className="text-teal-400 mr-2 h-4 w-4" />
        {['FR', 'EN'].map((lang) => (
            <button
                key={lang}
                onClick={() => setLang(lang)}
                className={`text-xs font-bold py-1 px-3 rounded-full transition-all duration-700 ${
                    currentLang === lang 
                        ? 'bg-teal-500 text-gray-900 shadow-md transform scale-105' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-600'
                }`}
            >
                {lang}
            </button>
        ))}
    </div>
);


// Définissez t pour la traduction ou utilisez directement le texte
const getTranslation = (key, lang) => {
    const translations = {
        'FR': {
            'hero.title': "Développeur Web FullStack | Freelance",
            'hero.download': "Télécharger CV",
            'nav.projects': "Projets",
            'nav.skills': "Compétences",
            'nav.contacts': "Contacts",
            'nav.about': "À Propos",
            'contact.btn': "Contacter-moi"
        },
        'EN': {
            'hero.title': "FullStack Web Developer | Freelance",
            'hero.download': "Download CV",
            'nav.projects': "Projects",
            'nav.skills': "Skills",
            'nav.contacts': "Contacts",
            'nav.about': "About",
            'contact.btn': "Contact Me"
        },
    };
    return translations[lang]?.[key] || key;
};


// Composant principal de la section Hero
const HeroContent = ({ handleNavClick, currentLang, setCurrentLang, t, navItems, techStack, getTranslateY }) => {
    return (
        <div className="w-full h-full font-inter bg-gray-950 text-white">
            
            {/* --- Hero Content Block --- */}
            <div className="min-h-[600px] h-auto xl:min-h-[600px] w-full flex flex-col sm:flex-row items-center pt-10 sm:pt-16 relative overflow-hidden max-w-7xl mx-auto  ">
                
                
                {/* ----------------- 1. Bloc de l'image de profil (5/12) ----------------- */}
                <div 
                    className="relative py-10 sm:py-0 overflow-visible z-10 sm:w-5/12 w-full h-full flex justify-center items-center duration-400 ease-out"
                >
                    <div className="relative p-2 bg-teal-500/10 rounded-tr-full rounded-tl-full rounded-bl-full hover:scale-105 transition-scale duration-500 ease-in">
                      <div className="rounded-full rounded-br-xl bg-teal-500/10 p-2">
                        <div className="bg-teal-500/10 rounded-full rounded-br-xl p-2 md:w-80 md:h-96 w-52 h-52 overflow-hidden">
                            <img 
                              className='w-full h-full object-cover rounded-br-xl rounded-full ' 
                              // Placeholder pour la compatibilité
                              src={"/images/steve_profil.jpg"} 
                              alt='steve_profil' 
                            />
                          </div>

                        </div>
                    </div>
                </div>

                {/* ----------------- 2. Bloc du titre et des boutons (7/12) ----------------- */}
                <div className="sm:w-7/12 w-full h-full flex justify-center sm:justify-start items-center px-4 sm:px-0 z-10">
                    <div className="text-center sm:text-left">
                        {/* Nom & Prénom */}
                        <div className="sm:text-7xl text-3xl font-extrabold mb-4">
                            <span className="text-teal-400">S</span>teve
                            <div className="text-3xl sm:text-6xl font-light tracking-wide mt-1">
                                Rasoafanirindrai<span className="text-orange-500 font-bold">be</span>
                            </div>
                        </div>
                        
                        {/* Titre & Slogan */}
                        <p className="py-3 sm:text-3xl text-xl font-mono italic text-gray-300">
                            {t("hero.title")}
                            <span className="clignoter font-bold text-teal-400">_</span>
                        </p>

                        {/* Bloc "Tech Tag Cloud" */}
                        <div className="my-8 p-4 bg-teal-500/10 rounded-xl shadow-inner shadow-teal-500/20 max-w-lg">
                            <h3 className='text-sm font-semibold mb-2 text-teal-300 flex items-center'><Code className='mr-2 h-4 w-4' />{t('hero.expertise')}</h3>
                            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                                {techStack.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 text-xs font-medium text-teal-100 bg-teal-600/50 rounded-full border border-teal-500/50 hover:bg-teal-500 transition duration-300 cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Bouton d'action "Contacter-moi" */}
                        <div className="w-full flex my-6 flex-col sm:flex-row justify-center sm:justify-start gap-4 py-4">
                            <button 
                                onClick={() => handleNavClick('contacts')} 
                                className="flex justify-center items-center py-2 px-6 rounded-full bg-teal-500 text-gray-900 font-extrabold text-base uppercase tracking-wider shadow-lg shadow-teal-500/30 hover:bg-white transition duration-300 ease-in-out"
                            >
                                <Phone className='mr-2 text-lg' /> {t("hero.contact")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
      
        </div>
    );
};

export default function Home() {

  const { t, language, changeLanguage } = useTranslation();
  const scrollProgress = useScroll();

  const [currentLang, setCurrentLang] = useState('FR'); 
  

    // Placeholder pour les fonctions de défilement (gardé pour la signature)
    const getTranslateY = (offset) => 0; 
    
    const techStack = [
        "Next.js (App Router)", "React/Redux", "TypeScript", "Node.js/Express",
        "PostgreSQL/MongoDB", "REST API", "Tailwind CSS", "Docker", "CI/CD"
    ];

    const navItems = [
        { id: 'about', label: t('nav.about'), icon: <User className="h-4 w-4" /> },
        { id: 'projects', label: t('nav.projects'), icon: <Code className="h-4 w-4" /> },
        { id: 'skills', label: t('nav.skills'), icon: <Server className="h-4 w-4" /> },
        { id: 'contacts', label: t('nav.contacts'), icon: <Phone className="h-4 w-4" /> },
    ];

  const handleNavClick = (sectionId) => {
    if (typeof document !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };


  return (
    <div className="bg-gray-950 min-h-screen w-full sm:border-t-2 border-teal-500">

      <div className='fixed z-30' >
        <div className='flex sm:hidden backdrop-blur-sm h-12 bg-black/30 rounded-br-xl' >
          <div className='h-full mx-3 flex justify-center items-center' >
            <div className='w-7 h-7 flex justify-center border-2 border-teal-500 rounded-full' >S</div>
          </div>
          <button 
            onClick={() => handleNavClick('projects')}
            className="w-20 flex justify-center sm:text-sm text-[13px] pt-4 pb-1 rounded-b-sm border-b-2 border-b-teal-500 relative overflow-hidden group transition-all duration-300 ease-in-out">
            <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out"></div>  
            <span className="relative uppercase">Projects</span>
          </button> 
          <button
            onClick={() => handleNavClick('skills')} 
            className="w-20 flex justify-center sm:text-sm text-[13px] pt-4 pb-1  rounded-b-sm border-b-2 border-b-teal-500 relative overflow-hidden group transition-all duration-300 ease-in-out"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out"></div>
            <span className="relative uppercase">Skills</span>
          </button>
          <button 
            onClick={() => handleNavClick('contacts')} 
            className="w-20 flex justify-center sm:text-sm text-[13px] pt-4 pb-1 rounded-b-sm border-b-2 border-b-teal-500 relative overflow-hidden group transition-all duration-300 ease-in-out"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out"></div>
            <span className="relative uppercase">Contacts</span>
          </button>
          <div className="relative overflow-hidden w-4"></div>
        </div>
      </div>

      <SideSocialLinks></SideSocialLinks>

        {/* 1. Ton Hero (plein écran au départ) */}
        <HeroContent 
          handleNavClick={handleNavClick}
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
          t={t}
          navItems={navItems}
          techStack={techStack}
          getTranslateY={getTranslateY}
        />


        {/* 2. Navbar sticky qui apparaît dès qu’on descend */}
        <div className="sticky top-0 z-50 w-full bg-gray-950/50 backdrop-blur-md shadow-xl border- border-teal-500/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap justify-center sm:justify-between items-center gap-4">
            <nav className="flex items-center flex-wrap justify-center gap-2 sm:gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center text-sm py-2 px-3 rounded-full text-gray-300 hover:bg-teal-500 hover:text-gray-900 transition-colors duration-300 font-medium group"
                >
                  <span className="mr-2 group-hover:text-gray-900 text-teal-400">{item.icon}</span>
                  <span className="uppercase tracking-wider">{item.label}</span>
                </button>
              ))}
              <a 
                href='/documents/cv_steve_non_confidentiel.pdf' 
                download="Steve_Rasoafanirindraibe_CV.pdf" 
                className="flex items-center py-2 px-3 bg-teal-500/20 text-teal-300 rounded-full text-sm font-semibold border border-teal-500/50 hover:bg-teal-500/40 transition duration-300"
              > 
                <Download className='mr-2 h-4 w-4' /> {t("hero.download")}
              </a>
            </nav>

            <div className="flex items-center justify-center p-1 bg-gray-700 rounded-full shadow-inner border border-teal-500/50 w-32">
              <Globe className="text-teal-400 mr-2 h-4 w-4" />
              <button
                  onClick={() => changeLanguage('en')}
                  className={`text-xs font-bold py-1 px-3 rounded-full transition-all duration-700 ${
                      language === 'en'  
                          ? 'bg-teal-500 text-gray-900 shadow-md transform scale-105' 
                          : 'text-gray-400 hover:text-white hover:bg-gray-600'
                  }`}
              >
                  EN
              </button>
              <button
                  onClick={() => changeLanguage('fr')}
                  className={`text-xs font-bold py-1 px-3 rounded-full transition-all duration-700 ${
                      language === 'fr'
                          ? 'bg-teal-500 text-gray-900 shadow-md transform scale-105' 
                          : 'text-gray-400 hover:text-white hover:bg-gray-600'
                  }`}
              >
                  FR
              </button>
            
            </div>
          </div>
        </div>
      <main className="relative w-full max-w-full min-h-screen overflow-x-hidden">
        {/* Second block ---------------------------------------------------------------------------------*/}
        <div 
          className="bg-black mt-10 w-full sm:min:h-96 rounded-t-[100px_30px] sm:rounded-t-[280px_80px] shadow-glow-teal transition-all duration-400 ease-out"          
          // style={{ transform: `translateY(${-getTranslateY(150)}px)` }}
        >
          <About></About>

          <section id="projects"></section>
          <Projects/> 
        </div>

        {/* Third block -----------------------------------------------------------------------------------------*/}
        <Skills></Skills>
        
        <Contact></Contact>
      </main>
    </div>
  );
}
