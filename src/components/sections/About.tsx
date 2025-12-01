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
    titleKey: 'UI/UX',
    color: 'from-purple-500 to-pink-500',
    accentColor: 'purple'
  },
  { 
    key: 'academic', 
    icon: FaUniversity, 
    titleKey: 'Academic',
    color: 'from-teal-500 to-cyan-500',
    accentColor: 'teal'
  },
  { 
    key: 'networks', 
    icon: FaGlobeAmericas, 
    titleKey: 'Network',
    color: 'from-blue-500 to-indigo-500',
    accentColor: 'blue'
  },
  { 
    key: 'ai', 
    icon: FaBrain, 
    titleKey: 'AI',
    color: 'from-orange-500 to-red-500',
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
      overflow-hidden flex-1 min-w-0 sm:min-w-[90px]
      ${isActive 
        ? `bg-gradient-to-r ${color} text-white shadow-lg ${accentColor === 'purple' ? 'shadow-purple-500/30' : accentColor === 'teal' ? 'shadow-teal-500/30' : accentColor === 'blue' ? 'shadow-blue-500/30' : 'shadow-orange-500/30'}`
        : 'bg-gray-900/50 text-gray-400 hover:bg-gray-800/70 border border-gray-800/50'
      }
    `}
  >
    
    
    <div className="relative flex flex-col sm:flex-row items-center gap-3 z-10">
      <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20' : 'bg-gray-800/50'}`}>
        <Icon 
          className={`transition-all duration-500 ${isActive ? 'text-white scale-110' : 'text-gray-400 group-hover:text-white'}`} 
          size={20} 
        />
      </div>
      <span className={`text-xs sm:text-sm font-semibold truncate transition-all duration-500
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
        className="relative p-6 sm:p-8 rounded-2xl overflow-hidden transition-all duration-700 h-full group"
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
              <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
              <div className="flex items-center gap-2">
                <div className={`w-8 h-0.5 bg-gradient-to-r ${color} rounded-full`} />
                <span className="text-xs text-gray-400 font-medium">SPECIALIZATION</span>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
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

    const translatedTitle = t(`descriptions.${activeTab}Title`);
    const title = translatedTitle && translatedTitle !== `descriptions.${activeTab}Title` 
      ? translatedTitle 
      : currentDomain.titleKey;

    return (
      <DomainCard
        title={title}
        description={t(`descriptions.${activeTab}`)}
        icons={getDomainIcons(activeTab)}
        color={currentDomain.color}
        accentColor={currentDomain.accentColor}
      />
    );
  };

  return (
    <div className="relative w-full text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      
      <div className="relative max-w-6xl mx-auto">
        {/* En-tête amélioré */}
         <AnimatedSection direction='down' duration={0.8} threshold={0.1}>
            <div className='mb-10 sm:mb-14'>
             <h2 className='text-3xl sm:text-4xl font-extrabold text-center'>
               <span className="text-orange-500">&lt;</span>
               <span>{t("about.title")}</span>
              <span className="text-orange-500">/&gt;</span>
             </h2>
             <div className="w-12 h-1 bg-teal-500 rounded mx-auto mt-2"></div>
            <p className="text-xs text-gray-500 mt-3 text-center">{t("about.subtitle")}</p>

           </div>
         </AnimatedSection>
        
        {/* Grille principale */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Colonne Gauche - Introduction */}
          <AnimatedSection 
            className="h-full"
            direction='left'
            threshold={0.2}
            duration={0.6}
          >
            <div className="relative p-6 sm:p-8 rounded-2xl h-full">
              {/* Carte avec effet verre */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/90 
                backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl" />
              
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                  bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 
                  backdrop-blur-sm mb-6">
                  <FaUserAlt className="text-teal-400 text-sm" />
                  <span className="text-sm font-medium text-teal-300">Who I Am</span>
                </div>
                
                {/* Titre */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r 
                    from-teal-300 to-cyan-300">
                    Web Developer
                  </span>
                  {" "} & Problem Solver
                </h3>
                
                {/* Description */}
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed text-justify text-sm sm:text-sm">
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
              duration={0.6}
              className="relative"
            >
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 rounded-full bg-gradient-to-b from-teal-400 to-cyan-400" />
                  <h3 className="text-xl font-bold text-white">Training</h3>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {educationDomains.map((domain) => (
                    <TabButton
                      key={domain.key}
                      isActive={activeTab === domain.key}
                      icon={domain.icon}
                      onClick={() => handleTabChange(domain.key)}
                      color={domain.color}
                      accentColor={domain.accentColor}
                    >
                      {domain.titleKey}
                    </TabButton>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            {/* Carte de spécialisation active */}
            <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
              <AnimatedSection 
                direction='scale'
                threshold={0.1}
                duration={0.8}
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

// import { useState } from 'react';
// import { useTranslation } from '@/hooks/useTranslation';
// import {
//   FaLaptopCode,
//   FaUserAlt,
//   FaUniversity,
//   FaUserGraduate,
//   FaBookOpen,
//   FaNetworkWired,
//   FaRobot,
// } from 'react-icons/fa';
// import AnimatedSection from '@/components/AnimatedSection';

// // Définition des domaines de formation/compétences
// const educationDomains = [
//   { key: 'uiux', icon: FaLaptopCode, titleKey: 'UI/UX' },
//   { key: 'academic', icon: FaUniversity, titleKey: 'Academic Training' },
//   { key: 'networks', icon: FaNetworkWired, titleKey: 'Networks' },
//   { key: 'ai', icon: FaRobot, titleKey: 'A.I.' }, // Raccourci pour l'onglet
// ];

// // Composant pour les boutons de navigation (Onglets)
// const TabButton = ({ isActive, icon: Icon, onClick, children }) => (
//   <button
//     onClick={onClick}
//     className={`
//       flex items-center justify-center p-3 sm:px-4 sm:py-2 font-semibold rounded-lg transition-all duration-300 ease-in-out flex-1
//       ${isActive
//         ? 'bg-teal-700 text-white shadow-md '
//         : 'bg-gray-900 text-gray-400 hover:bg-gray-700 hover:text-white'
//       }
      
//       sm:w-full sm:justify-start lg:w-auto lg:flex-none lg:justify-center
//     `}
//   >
//     <Icon 
//       className={`mr-0 sm:mr-3 ${isActive ? 'text-orange-400' : 'text-teal-400'}`} 
//       size={20} 
//     />
//     <span className='hidden sm:inline text-sm'>{children}</span>
//     {/* Afficher uniquement l'icône sur mobile, le texte réapparaît sur sm: */}
//   </button>
// );

// const DomainCard = ({ title, description, icons }) => (
//   <AnimatedSection direction='scale' threshold={0.1} duration={0.2} className="w-full h-full">
//     <div className='p-5 sm:py-4 bg-gray-900 rounded-xl transition-all duration-500 h-full'>
      
//       {/* Titre et Description */}
//       <h3 className='text-xl font-bold mb-3 text-white text-center border-b border-orange-500/50 pb-2'>
//         {title}
//       </h3>
//       <p className='text-sm text-gray-300 leading-relaxed text-justify'>
//         {description}
//       </p>
//     </div>
//   </AnimatedSection>
// );

// export default function About() {
//   const { t } = useTranslation();
//   const [activeTab, setActiveTab] = useState(educationDomains[0].key);

//   const renderDescription = () => {
//     // Récupération dynamique des icônes pour chaque domaine
//     const getDomainIcons = (key) => {
//       switch (key) {
//         case 'uiux': return [FaLaptopCode, FaUserAlt];
//         case 'academic': return [FaUniversity, FaUserGraduate, FaBookOpen];
//         case 'networks': return [FaNetworkWired];
//         case 'ai': return [FaRobot];
//         default: return [];
//       }
//     };

//     const currentDomain = educationDomains.find(d => d.key === activeTab);
//     if (!currentDomain) return null;

//     const translatedTitle = t(`descriptions.${activeTab}Title`);
//     const title = translatedTitle && translatedTitle !== `descriptions.${activeTab}Title` ? translatedTitle : currentDomain.titleKey;

//     return (
//         <DomainCard
//             title={title}
//             description={t(`descriptions.${activeTab}`)}
//             icons={getDomainIcons(activeTab)}
//         />
//     );
//   };

//   return (
//     // Fond noir principal avec un padding horizontal (px-4/px-10) et vertical (py-12/py-20)
//     <div className=' w-full text-white py-12 sm:py-16 md:py-20 px-4 sm:px-10 lg:px-20'>
      
//       {/* Conteneur principal centré et limité en largeur */}
//       <div className='max-w-6xl mx-auto'>
      
//         {/* Titre Principal (Centré) */}
//         <AnimatedSection direction='down' duration={0.8} threshold={0.1}>
//           <div className='mb-10 sm:mb-14'>
//             <h2 className='text-3xl sm:text-4xl font-extrabold text-center'>
//               <span className="text-orange-500">&lt;</span>
//               <span>{t("about.title")}</span>
//               <span className="text-orange-500">/&gt;</span>
//             </h2>
//             <div className="w-12 h-1 bg-teal-500 rounded mx-auto mt-2"></div>
//           </div>
//         </AnimatedSection>
        
//         {/* Structure à deux colonnes (ou une colonne sur mobile) */}
//         <div className='flex flex-col lg:flex-row gap-8 sm:gap-10'>
          
//           {/* Colonne Gauche - Description Générale */}
//           <AnimatedSection className='w-full lg:w-1/2 h-full sm:pl-8'  direction='scale' threshold={0.2}  duration={0.4} >
//             <div className='p-5 sm:p-8 sm:rounded-4xl rounded-xl h-full'>
//               <p className='text-sm sm:text-md leading-6 text-justify indent-6 text-gray-200'>
//                 {t("about.description")}
//               </p>
//             </div>
//           </AnimatedSection>
          
//           {/* Colonne Droite - Navigation et Détails de Formation */}
//           <div className='w-full lg:w-1/2 lg:min:h-64'>
//             <AnimatedSection direction='scale' threshold={0.2} duration={.4} className='h-full'>
              
//               {/* Navigation des Formations (Onglets) */}
//               <div className='flex justify-between space-x-2 mb-4'>
//                 {educationDomains.map((domain) => (
//                   <TabButton
//                     key={domain.key}
//                     isActive={activeTab === domain.key}
//                     icon={domain.icon}
//                     onClick={() => setActiveTab(domain.key)}
//                   >
//                     {domain.titleKey}
//                   </TabButton>
//                 ))}
//               </div>
              
//               {/* Carte de Détail de la Formation Active */}
//               <div className='h-full'>
//                 {renderDescription()}
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
