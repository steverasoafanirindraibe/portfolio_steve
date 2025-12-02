"use client"
import {useScroll } from '@/hooks/useScroll';
import { useTranslation } from '@/hooks/useTranslation';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import SideSocialLinks from '@/components/SideSocialLinks';
import { Phone, Download, Code, Server, User, Globe} from 'lucide-react'; 
import AnimatedSection from '@/components/AnimatedSection';
import AvailabilityIndicator from '@/components/AvailabilityIndicator';


// Composant principal de la section Hero
const HeroContent = ({ handleNavClick, currentLang, setCurrentLang, t, navItems, techStack, getTranslateY }) => {
    return (
        <div className="w-full h-full font-inter bg-gray-950 text-white">
            
            {/* --- Hero Content Block --- */}
            <div className="min-h-[500px] h-auto xl:min-h-[600px] w-full flex flex-col sm:flex-row items-center pt-6 sm:pt-6 relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-0">
                
                {/* ----------------- 1. Bloc de l'image de profil (5/12) ----------------- */}
                <div 
                    className="relative py-6 sm:py-0 overflow-visible z-10 w-full sm:w-5/12 h-full flex justify-center items-center duration-400 ease-out"
                >
                    <div className="relative p-2 bg-teal-500/10 rounded-tr-full rounded-tl-full rounded-bl-full hover:scale-105 transition-scale duration-500 ease-in">
                      <div className="rounded-full rounded-br-xl bg-teal-500/10 p-1 sm:p-2">
                        <AnimatedSection direction='scale' delay={0.2} duration={0.7} className="bg-teal-500/10 rounded-full rounded-br-xl p-1 sm:p-2 w-40 h-40 sm:w-80 sm:h-96 overflow-hidden">
                            <img 
                              className='w-full h-full object-cover rounded-br-xl rounded-full' 
                              src={"/images/steve_profil.jpg"} 
                              alt='steve_profil' 
                            />
                          </AnimatedSection>
                        </div>
                    </div>
                </div>

                {/* ----------------- 2. Bloc du titre et des boutons (7/12) ----------------- */}
                <div className="w-full sm:w-7/12 h-full flex justify-center sm:justify-start items-center px-0 sm:px-0 z-10 mt-6 sm:mt-0">
                  <div className="text-center sm:text-left">
                    <div>
                      {/* --- Ligne d'accroche et Nom (Style Terminal/Code) --- */}
                      <AnimatedSection direction='left' duration={0.5} className='text-xs sm:text-lg font-mono mb-3 sm:mb-4'>
                        <span className="text-gray-400">{t("hero.greeting")}</span>
                        
                        {/* Nom stylisé comme une balise ou un élément de code */}
                        <span className="text-lg sm:text-2xl font-bold ml-1 sm:ml-2">
                          &lt;<span className="text-teal-400">Steve Rasoafanirindrai</span><span className="text-orange-500">be</span>/&gt;
                        </span>
                      </AnimatedSection>
                      {/* --- Headline Principal (Proposition de Valeur) --- */}
                      <AnimatedSection direction='left' delay={0.2} duration={0.5} className="text-xl sm:text-5xl font-extrabold leading-tight mb-3 sm:mb-4">
                        <span className="text-white">{t("hero.headline")}</span>
                      </AnimatedSection>
                    </div>
                        {/* Titre & Slogan */}
                        <AnimatedSection direction='left' delay={0.3} duration={0.5} className="py-2 sm:py-3 text-base sm:text-3xl font-mono italic text-gray-300">
                            {t("hero.title")}
                            <span className="clignoter font-bold text-teal-400">_</span>
                        </AnimatedSection>
                        {/* Bloc "Tech Tag Cloud" */}
                        <AnimatedSection direction='left' delay={0.4} duration={0.5} className="my-4 sm:my-8 sm:mr-16 p-3 sm:p-4 bg-teal-500/10 rounded-xl shadow-inner shadow-teal-500/20 max-w-lg">
                            <h3 className='text-xs sm:text-sm font-semibold mb-2 text-teal-300 flex items-center justify-center sm:justify-start'>
                              <Code className='mr-2 h-3 w-3 sm:h-4 sm:w-4' />
                              {t('hero.expertise')}
                            </h3>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center sm:justify-start">
                                {techStack.map((tech, index) => (
                                    <span key={index} className="px-2 sm:px-3 py-1 text-xs font-medium text-teal-100 bg-teal-600/50 rounded-full border border-teal-500/50 hover:bg-teal-500 transition duration-300 cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </AnimatedSection>
                        {/* Bouton de contact */}
                        <AnimatedSection direction='left' delay={0.5} duration={0.5} className='mt-6 sm:mt-10'>
                          <button className='px-5 sm:px-6 py-2 bg-teal-500 text-black text-xs sm:text-sm font-bold rounded-lg transition-all duration-300 hover:bg-orange-500 hover:text-white transform hover:scale-105 shadow-lg'
                              onClick={() => handleNavClick('contacts')} >
                              {t("hero.contact")}
                          </button>
                      </AnimatedSection>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Home() {

  const { t, language, changeLanguage } = useTranslation();
  const scrollProgress = useScroll();

  // const [currentLang, setCurrentLang] = useState('FR'); 
  

    // Placeholder pour les fonctions de défilement (gardé pour la signature)
    const getTranslateY = (offset) => 0; 
    
    const techStack = [
        "Next.js (App Router)", "React/Hooks", "TypeScript", "Node.js/Express",
        "PostgreSQL/MySQL", "SpringBoot", "REST API", "Tailwind CSS"
    ];

    const navItems = [
        { id: 'about', label: t('nav.about'), icon: <User className="sm:h-4 sm:w-4 h-6 w-6" /> },
        { id: 'projects', label: t('nav.projects'), icon: <Code className="sm:h-4 sm:w-4 h-6 w-6" /> },
        { id: 'skills', label: t('nav.skills'), icon: <Server className="sm:h-4 sm:w-4 h-6 w-6" /> },
        { id: 'contacts', label: t('nav.contacts'), icon: <Phone className="sm:h-4 sm:w-4 h-6 w-6" /> },
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
    <div key={language}  className="bg-gray-950 min-h-screen w-full sm:border-t-2 border-teal-500">

      <SideSocialLinks></SideSocialLinks>
      
        <HeroContent 
          handleNavClick={handleNavClick}
          t={t}
          navItems={navItems}
          techStack={techStack}
          getTranslateY={getTranslateY}
      />


        {/* 2. Navbar sticky qui apparaît dès qu'on descend */}
        <AnimatedSection direction='scale' delay={0.5} duration={0.5} className="sticky top-0 z-40 w-full bg-gray-950/50 backdrop-blur-md shadow-xl border- border-teal-500/30">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 flex flex-wrap justify-center sm:justify-between items-center gap-2 sm:gap-4">
            <button onClick={() => handleNavClick('contacts')} className='absolute left-12 w-12 sm:w-14 hidden sm:block' >
              <AvailabilityIndicator></AvailabilityIndicator>
            </button>

            <div className="hidden sm:block"></div>
            
            <nav className="flex items-center flex-wrap justify-center gap-1 sm:gap-4 w-full sm:w-auto order-2 sm:order-1 mt-2 sm:mt-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center text-xs py-1.5 sm:py-2 px-2 sm:px-3 rounded-full text-gray-300 hover:bg-teal-500 hover:text-gray-900 transition-colors duration-300 font-medium group"
                >
                  <span className="mr-0 sm:mr-2 group-hover:text-gray-900 text-teal-400 text-xs">{item.icon}</span>
                  <span className="hidden sm:block uppercase tracking-wider text-xs sm:text-xs">{item.label}</span>
                </button>
              ))}
              <a 
                href='/documents/cv_steve_non_confidentiel.pdf' 
                download="Steve_Rasoafanirindraibe_CV.pdf" 
                className="flex items-center py-1 sm:py-1.5 px-2 sm:px-3 bg-teal-500/20 text-teal-300 rounded-full text-xs font-semibold border border-teal-500/50 hover:bg-teal-500/40 transition duration-300"
              > 
                <Download className='mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4' /> 
                <span className="text-xs sm:text-xs">{t("hero.download")}</span>
              </a>
            </nav>

            <div className="hidden sm:flex items-center justify-center p-1 bg-gray-900 rounded-full shadow-inner border border-orange-500/50 w-24 sm:w-32 order-1 sm:order-2">
              <Globe className="text-orange-400 mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              <button onClick={() => changeLanguage('en')} className={`text-xs font-bold py-1 px-2 sm:px-3 rounded-full transition-all duration-700 ${
                      language === 'en'  
                          ? 'bg-orange-500 text-white shadow-md transform scale-105' 
                          : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
              >
                  EN
              </button>
              <button onClick={() => changeLanguage('fr')} className={`text-xs font-bold py-1 px-2 sm:px-3 rounded-full transition-all duration-700 ${
                      language === 'fr'
                          ? 'bg-orange-500 text-white shadow-md transform scale-105' 
                          : 'text-gray-400 hover:text-white hover:bg-gray-600'
                  }`}
              >
                  FR
              </button>
            </div>
          </div>
        </AnimatedSection>

        <div className='fixed bottom-5 right-4 z-50' >            
          <div className="sm:hidden flex items-center justify-center p-1 bg-gray-900 rounded-full shadow-inner border border-orange-500/50 order-1 sm:order-2">
            <button onClick={() => changeLanguage('en')} className={`text-xs font-bold py-1 px-2 sm:px-3 rounded-full transition-all duration-700 ${
                    language === 'en'  
                        ? 'bg-orange-500 text-white shadow-md transform scale-105' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
            >
                EN
            </button>
            <button onClick={() => changeLanguage('fr')} className={`text-xs font-bold py-1 px-2 sm:px-3 rounded-full transition-all duration-700 ${
                    language === 'fr'
                        ? 'bg-orange-500 text-white shadow-md transform scale-105' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-600'
                }`}
            >
                FR
            </button>
          </div>
        </div>



      <main className="relative w-full max-w-full min-h-screen overflow-x-hidden">
        {/* Second block ----------------------------------------------------------------------------------------*/}
        <div 
          className="bg-black mt-6 sm:mt-10 w-full rounded-t-[50px_15px] sm:rounded-t-[100px_30px] lg:rounded-t-[280px_80px] shadow-glow-teal transition-all duration-400 ease-out"          
        >
          <section id="about"></section>
          <About></About>

          <section id="projects"></section>
          <Projects/> 
        </div>

        {/* Third block -----------------------------------------------------------------------------------------*/}
        <section id="skills"></section>
        <Skills></Skills>

        <section id="contacts"></section>
        <Contact></Contact>
      </main>
    </div>
  );
}