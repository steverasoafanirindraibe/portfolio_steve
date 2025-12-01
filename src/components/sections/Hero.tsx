import React, { useState } from 'react';
// Remplacement des imports externes non résolus (Image de next/image, Fa icons)

// --- Remplacement des icônes Fa par des icônes lucide-react ou SVG simples ---
// Puisque lucide-react est disponible, utilisons-le pour les icônes.
import { Phone, Code, Server, User } from 'lucide-react'; 



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

// // --- NOUVEAU COMPOSANT : Barre de Navigation Sticky ---
// const StickyNavBar = ({ currentLang, setCurrentLang, handleNavClick, t, navItems }) => {
//     return (
//         // La barre de navigation est positionnée sticky et prend la largeur complète
//         <div 
//             className="sticky top-0 z-50 w-full bg-gray-900/90 backdrop-blur-md shadow-xl transition-all duration-300 border-b border-teal-500/30"
//             style={{ 
//                 // Assure que la barre est en haut de la page quand on scroll
//                 // Pour que la barre apparaisse seulement APRES la section Hero
//                 // nous ajoutons une petite marge négative si nécessaire, mais Tailwind 
//                 // gère bien le "sticky top-0" pour le reste de la page.
//             }}
//         >
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap justify-center sm:justify-between items-center gap-4">
                
//                 {/* Liens de Navigation */}
//                 <nav className="flex items-center flex-wrap justify-center gap-2 sm:gap-4">
//                     {navItems.map((item) => (
//                         <button
//                             key={item.id}
//                             onClick={() => handleNavClick(item.id)}
//                             className="flex items-center text-sm py-2 px-3 rounded-full text-gray-300 hover:bg-teal-500 hover:text-gray-900 transition-colors duration-300 font-medium group"
//                         >
//                             <span className="mr-2 group-hover:text-gray-900 text-teal-400">{item.icon}</span>
//                             <span className="uppercase tracking-wider">{item.label}</span>
//                         </button>
//                     ))}
                    
//                     {/* Bouton Télécharger CV intégré à la barre de navigation */}
//                     <a 
//                         href='/documents/cv_steve_non_confidentiel.pdf' 
//                         download="Steve_Rasoafanirindraibe_CV.pdf" 
//                         className="flex items-center py-2 px-3 bg-teal-500/20 text-teal-300 rounded-full text-sm font-semibold border border-teal-500/50 hover:bg-teal-500/40 transition duration-300"
//                     > 
//                         <Download className='mr-2 h-4 w-4' /> {t("hero.download")}
//                     </a>
//                 </nav>

//                 {/* Sélecteur de langue */}
//                 <LanguageSwitcher currentLang={currentLang} setLang={setCurrentLang} />
//             </div>
//         </div>
//     );
// }

// Composant principal de la section Hero (renommé pour l'export)
const HeroSection = ({ handleNavClick }) => {
    // État local pour la langue (simulé)
    const [currentLang, setCurrentLang] = useState('FR'); 
    
    // Fonction utilitaire pour la traduction
    const t = (key) => getTranslation(key, currentLang);

    // Placeholder pour les fonctions de défilement si elles sont dans un hook externe
    // Remplacer par un hook réel si vous les utilisez dans votre application Next.js
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


    return (
        <div className="w-full font-inter bg-gray-900 text-white">
            
            {/* --- Hero Content Block --- */}
            <div className="min-h-[600px] h-auto xl:min-h-[700px] w-full flex flex-col sm:flex-row items-center pt-10 sm:pt-0 relative overflow-hidden max-w-7xl mx-auto">
                
                {/* 💡 Effet de fond subtil (Lueur/Gradient en arrière-plan) */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-br from-teal-500/5 to-black -z-0"></div>
                
                {/* ----------------- 1. Bloc de l'image de profil (5/12) ----------------- */}
                <div 
                    className="relative py-10 sm:py-0 overflow-visible z-10 sm:w-5/12 w-full h-full flex justify-center items-center duration-400 ease-out"
                    style={{ transform: `translateY(${-getTranslateY(100)}px)` }} 
                >
                    <div className="relative p-2 bg-gray-800 rounded-full shadow-2xl shadow-teal-500/50 hover:shadow-teal-400/70 transition-shadow duration-500 ease-in-out">
                        <div className="bg-black/80 rounded-full border-4 border-teal-500 p-1 md:w-80 md:h-80 w-52 h-52 overflow-hidden">
                            <img 
                                className='w-full h-full object-cover rounded-full' 
                                // Remplacer l'URL locale par le placeholder pour la compatibilité
                                src={"https://placehold.co/1000x1000/000000/ffffff?text=SR"} 
                                alt='steve_profil' 
                            />
                        </div>
                    </div>
                </div>

                {/* ----------------- 2. Bloc du titre et des boutons (7/12) ----------------- */}
                <div className="sm:w-7/12 w-full h-full flex justify-center sm:justify-start items-center px-4 sm:px-0 z-10">
                    <div className="text-center sm:text-left">
                        {/* Nom & Prénom */}
                        <div className="sm:text-5xl text-3xl font-extrabold mb-4">
                            <span className="text-teal-400">S</span>teve
                            <div className="text-3xl sm:text-7xl font-light tracking-wide mt-1">
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
                            <h3 className='text-sm font-semibold mb-2 text-teal-300 flex items-center'><Code className='mr-2 h-4 w-4' /> Expertise FullStack</h3>
                            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                                {techStack.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 text-xs font-medium text-teal-100 bg-teal-600/50 rounded-full border border-teal-500/50 hover:bg-teal-500 transition duration-300 cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Bouton d'action "Contacter-moi" (Le CV et la langue sont déplacés vers la Sticky Nav) */}
                        <div className="w-full flex my-6 flex-col sm:flex-row justify-center sm:justify-start gap-4 py-4">
                            <button 
                                onClick={() => handleNavClick('contacts')} 
                                className="flex justify-center items-center py-3 px-6 rounded-full bg-teal-500 text-gray-900 font-extrabold text-base uppercase tracking-wider shadow-lg shadow-teal-500/30 hover:bg-teal-400 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                <Phone className='mr-2 text-lg' /> {t('contact.btn')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Sticky Navigation Bar (Remplaçant la nav latérale) --- */}
            {/* <StickyNavBar 
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                handleNavClick={handleNavClick}
                t={t}
                navItems={navItems}
            />

            <div>Steve nkjnkl</div> */}

        </div>
    );
};

export default HeroSection;