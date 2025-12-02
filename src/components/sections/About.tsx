import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import {
  FaLaptopCode,
  FaUserAlt,
  FaUniversity,
  FaUserGraduate,
  FaBookOpen,
  FaNetworkWired,
  FaRobot,
  FaLightbulb,
  FaChartLine,
  FaCogs,
  FaShieldAlt,
  FaBrain,
  FaPalette,
  FaGlobeAmericas
} from 'react-icons/fa';
import { SiMaterialdesign } from 'react-icons/si';
import AnimatedSection from '@/components/AnimatedSection';

// Définition des domaines avec icônes améliorées
const educationDomains = [
  { 
    key: 'uiux', 
    icon: FaPalette, 
    color: 'from-orange-500 to-red-500',
    accentColor: 'purple'
  },
  { 
    key: 'academic', 
    icon: FaUniversity, 
    color: 'from-teal-500 to-cyan-500',
    accentColor: 'teal'
  },
  { 
    key: 'networks', 
    icon: FaGlobeAmericas, 
    color: 'from-blue-500 to-indigo-500',
    accentColor: 'blue'
  },
  { 
    key: 'ai', 
    icon: FaBrain, 
    color: 'from-purple-500 to-pink-500',
    accentColor: 'orange'
  },
];

// Composant pour les boutons de navigation (Onglets) amélioré
const TabButton = ({ isActive, icon: Icon, onClick, children, color, accentColor }: {
  isActive: boolean;
  icon: any;
  onClick: () => void;
  children: React.ReactNode;
  color: string;
  accentColor: string;
}) => (
  <button
    onClick={onClick}
    className={`
      group relative flex items-center p-1 rounded-xl transition-all duration-500
      overflow-hidden flex-1 min-w-0 sm:min-w-[80px] justify-center
      ${isActive 
        ? `bg-gradient-to-r ${color} text-white ${accentColor === 'purple' ? 'shadow-purple-500/30' : accentColor === 'teal' ? 'shadow-teal-500/30' : accentColor === 'blue' ? 'shadow-blue-500/30' : 'shadow-orange-500/30'}`
        : 'bg-gray-900/50 text-gray-400 hover:bg-gray-800/70 '
      }
    `}
  >
    
    
    <div className="relative flex flex-col sm:flex-row items-center gap-3 z-10">
      <div className={`sm:hidden block p-2 rounded-lg ${isActive ? 'bg-white/20' : 'bg-gray-800/50'}`}>
        <Icon 
          className={`transition-all duration-500 ${isActive ? 'text-white scale-110' : 'text-gray-400 group-hover:text-white'}`} 
          size={20} 
        />
      </div>
      <span className={`sm:block hidden text-xs p-2 sm:text-sm font-semibold truncate transition-all duration-500
        ${isActive ? 'text-white' : 'group-hover:text-gray-200'}`}>
        {children}
      </span>
    </div>
    
    {/* Indicateur actif */}
    {isActive && (
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-t-full 
        bg-gradient-to-r ${color} shadow-lg ${accentColor === 'purple' ? 'shadow-purple-400/50' : accentColor === 'teal' ? 'shadow-teal-400/50' : accentColor === 'blue' ? 'shadow-blue-400/50' : 'shadow-orange-400/50'}`} />
    )}
  </button>
);

// Composant Carte amélioré
const DomainCard = ({ title, description, icons, color, accentColor }: {
  title: string;
  description: string;
  icons: any[];
  color: string;
  accentColor: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="w-full h-full">
      <div 
        className="relative rounded-2xl overflow-hidden transition-all duration-700 h-full group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        
        <div className="relative z-10">
          {/* En-tête avec icône */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${color} shadow-lg`}>
              {icons[0] && icons[0]({ className: "text-white text-xl" })}
            </div>
            <div>
              <h3 className="sm:text-lg text-md font-bold text-white mb-1">{title}</h3>
              <div className="flex items-center gap-2">
                <div className={`w-8 h-0.5 bg-gradient-to-r ${color} rounded-full`} />
                <span className="text-xs text-gray-400 font-medium">SPECIALIZATION</span>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-xs sm:text-sm mb-6">
            {description}
          </p>
          
          {/* Icônes de la spécialité */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-800/50">
            <span className="text-xs text-gray-500 font-medium">Key</span>
            <div className="flex gap-2">
              {icons.map((Icon, index) => (
                <div 
                  key={index}
                  className={`p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 
                    transition-all duration-500 hover:scale-110 hover:border-${accentColor}-500/30
                    hover:bg-gray-800/80`}
                >
                  {Icon && <Icon className="text-gray-300 text-sm" />}
                </div>
              ))}
            </div>
          </div>
          
        </div>
        
        {/* Points décoratifs */}
        <div className="absolute top-4 right-4">
          <div className="flex gap-1">
            <div className={`w-1 h-1 rounded-full bg-${accentColor}-400 animate-pulse`} style={{ animationDelay: '0s' }} />
            <div className={`w-1 h-1 rounded-full bg-${accentColor}-400 animate-pulse`} style={{ animationDelay: '0.2s' }} />
            <div className={`w-1 h-1 rounded-full bg-${accentColor}-400 animate-pulse`} style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(educationDomains[0].key);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (key: string) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveTab(key);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const renderDescription = () => {
    const getDomainIcons = (key: string) => {
      switch (key) {
        case 'uiux': return [FaLaptopCode, FaUserAlt, FaPalette, SiMaterialdesign];
        case 'academic': return [FaUniversity, FaUserGraduate, FaBookOpen, FaChartLine];
        case 'networks': return [FaNetworkWired, FaGlobeAmericas, FaCogs, FaShieldAlt];
        case 'ai': return [FaRobot, FaBrain, FaLightbulb, FaChartLine];
        default: return [];
      }
    };

    const currentDomain = educationDomains.find(d => d.key === activeTab);
    if (!currentDomain) return null;

    return (
      <DomainCard
        title={t(`descriptions.${activeTab}Title`)}
        description={t(`descriptions.${activeTab}`)}
        icons={getDomainIcons(activeTab)}
        color={currentDomain.color}
        accentColor={currentDomain.accentColor}
      />
    );
  };

  return (
    <div className="flex w-full justify-center text-white pt-10 sm:pt-20 md:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      
      <div className=" sm:w-[85%] max-w-6xl mx-auto">
        {/* En-tête amélioré */}
         <AnimatedSection direction='scale' duration={0.4} threshold={0.1}>
            <div className='mb-6 sm:mb-14'>
             <h2 className='text-2xl sm:text-4xl font-extrabold text-center'>
               <span className="text-orange-500">&lt;</span>
               <span>{t("about.title")}</span>
              <span className="text-orange-500">/&gt;</span>
             </h2>
             <div className="w-12 h-1 bg-teal-500 rounded mx-auto mt-2"></div>
            <p className="text-xs text-gray-500 mt-3 text-center">{t("about.subtitle")}</p>

           </div>
         </AnimatedSection>
        
        {/* Grille principale */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Colonne Gauche - Introduction */}
          <AnimatedSection 
            className="h-full"
            direction='scale'
            threshold={0.2}
            duration={0.4}
          >
            <div className="relative p-4 sm:p-6 rounded-2xl h-full">
              {/* Carte avec effet verre */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-gray-950 
                backdrop-blur-xl rounded-l-2xl shadow-2xl" />
              
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                  bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 
                  backdrop-blur-sm mb-6">
                  <FaUserAlt className="text-teal-400 text-sm" />
                  <span className="text-xs font-medium text-teal-300">{t("about.badge")}</span>
                </div>
                
                {/* Titre */}
                <h3 className="sm:text-xl text-md font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r 
                    from-teal-300 to-cyan-300">
                    {t("about.role")}
                  </span>
                  {" "} & {t("about.solver")}
                </h3>
                
                {/* Description */}
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed text-justify text-xs sm:text-sm">
                    {t("about.description")}
                  </p>

                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Colonne Droite - Spécialisations */}
          <div className="space-y-6">
            {/* Navigation par onglets améliorée */}
            <AnimatedSection 
              direction='right'
              threshold={0.2}
              duration={0.4}
              className="relative"
            >
              <div className="">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 rounded-full bg-gradient-to-b from-teal-400 to-cyan-400" />
                  <h3 className="sm:text-2xl text-xl font-bold text-white">{t("about.training")}</h3>
                </div>
                
                <div className="grid grid-cols-4 sm:grid-cols-4 gap-3">
                  {educationDomains.map((domain) => (
                    <TabButton
                      key={domain.key}
                      isActive={activeTab === domain.key}
                      icon={domain.icon}
                      onClick={() => handleTabChange(domain.key)}
                      color={domain.color}
                      accentColor={domain.accentColor}
                    >
                      {t(`sections.${domain.key}`)}
                    </TabButton>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            {/* Carte de spécialisation active */}
            <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
              <AnimatedSection 
                direction='right'
                threshold={0.1}
                duration={0.4}
              >
                {renderDescription()}
              </AnimatedSection>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}