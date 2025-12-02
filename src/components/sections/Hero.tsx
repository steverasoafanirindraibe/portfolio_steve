// import React, { useState } from 'react';
// import { Phone, Code, Server, User } from 'lucide-react';
// import { useTranslation } from '@/hooks/useTranslation'; // IMPORT AJOUTÉ

// // Composant principal de la section Hero
// const HeroSection = ({ handleNavClick }) => {
//     // Utilisation du hook de traduction comme dans l'autre composant
//     const { t } = useTranslation();
    
//     // Placeholder pour les fonctions de défilement si elles sont dans un hook externe
//     const getTranslateY = (offset) => 0; 
    
//     const techStack = [
//         "Next.js (App Router)", "React/Redux", "TypeScript", "Node.js/Express",
//         "PostgreSQL/MongoDB", "REST API", "Tailwind CSS", "Docker", "CI/CD"
//     ];

//     const navItems = [
//         { id: 'about', label: t('nav.about'), icon: <User className="h-4 w-4" /> },
//         { id: 'projects', label: t('nav.projects'), icon: <Code className="h-4 w-4" /> },
//         { id: 'skills', label: t('nav.skills'), icon: <Server className="h-4 w-4" /> },
//         { id: 'contacts', label: t('nav.contacts'), icon: <Phone className="h-4 w-4" /> },
//     ];

//     return (
//         <div className="w-full font-inter bg-gray-900 text-white">
            
//             {/* --- Hero Content Block --- */}
//             <div className="min-h-[600px] h-auto xl:min-h-[700px] w-full flex flex-col sm:flex-row items-center pt-10 sm:pt-0 relative overflow-hidden max-w-7xl mx-auto">
                
//                 {/* 💡 Effet de fond subtil (Lueur/Gradient en arrière-plan) */}
//                 <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-br from-teal-500/5 to-black -z-0"></div>
                
//                 {/* ----------------- 1. Bloc de l'image de profil (5/12) ----------------- */}
//                 <div 
//                     className="relative py-10 sm:py-0 overflow-visible z-10 sm:w-5/12 w-full h-full flex justify-center items-center duration-400 ease-out"
//                     style={{ transform: `translateY(${-getTranslateY(100)}px)` }} 
//                 >
//                     <div className="relative p-2 bg-gray-800 rounded-full shadow-2xl shadow-teal-500/50 hover:shadow-teal-400/70 transition-shadow duration-500 ease-in-out">
//                         <div className="bg-black/80 rounded-full border-4 border-teal-500 p-1 md:w-80 md:h-80 w-52 h-52 overflow-hidden">
//                             <img 
//                                 className='w-full h-full object-cover rounded-full' 
//                                 src={"https://placehold.co/1000x1000/000000/ffffff?text=SR"} 
//                                 alt='steve_profil' 
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* ----------------- 2. Bloc du titre et des boutons (7/12) ----------------- */}
//                 <div className="sm:w-7/12 w-full h-full flex justify-center sm:justify-start items-center px-4 sm:px-0 z-10">
//                     <div className="text-center sm:text-left">
//                         {/* Nom & Prénom */}
//                         <div className="sm:text-5xl text-3xl font-extrabold mb-4">
//                             <span className="text-teal-400">S</span>teve
//                             <div className="text-3xl sm:text-7xl font-light tracking-wide mt-1">
//                                 Rasoafanirindrai<span className="text-orange-500 font-bold">be</span>
//                             </div>
//                         </div>
                        
//                         {/* Titre & Slogan */}
//                         <p className="py-3 sm:text-3xl text-xl font-mono italic text-gray-300">
//                             {t("hero.title")}
//                             <span className="clignoter font-bold text-teal-400">_</span>
//                         </p>

//                         {/* Bloc "Tech Tag Cloud" */}
//                         <div className="my-8 p-4 bg-teal-500/10 rounded-xl shadow-inner shadow-teal-500/20 max-w-lg">
//                             <h3 className='text-sm font-semibold mb-2 text-teal-300 flex items-center'><Code className='mr-2 h-4 w-4' /> {t('hero.expertise')}</h3>
//                             <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
//                                 {techStack.map((tech, index) => (
//                                     <span key={index} className="px-3 py-1 text-xs font-medium text-teal-100 bg-teal-600/50 rounded-full border border-teal-500/50 hover:bg-teal-500 transition duration-300 cursor-default">
//                                         {tech}
//                                     </span>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Bouton d'action "Contacter-moi" */}
//                         <div className="w-full flex my-6 flex-col sm:flex-row justify-center sm:justify-start gap-4 py-4">
//                             <button 
//                                 onClick={() => handleNavClick('contacts')} 
//                                 className="flex justify-center items-center py-3 px-6 rounded-full bg-teal-500 text-gray-900 font-extrabold text-base uppercase tracking-wider shadow-lg shadow-teal-500/30 hover:bg-teal-400 transition duration-300 ease-in-out transform hover:scale-105"
//                             >
//                                 <Phone className='mr-2 text-lg' /> {t('contact.btn')}
//                             </button>
//                             <button 
//                                 onClick={() => window.open('/cv.pdf', '_blank')} 
//                                 className="flex justify-center items-center py-3 px-6 rounded-full border-2 border-teal-500 text-teal-400 font-bold text-base uppercase tracking-wider hover:bg-teal-500/10 transition duration-300 ease-in-out"
//                             >
//                                 <User className='mr-2 text-lg' /> {t('hero.download')}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;