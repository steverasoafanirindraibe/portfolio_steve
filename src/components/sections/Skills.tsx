import { useTranslation } from '@/hooks/useTranslation';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiJavascript,
  SiTypescript, 
  SiAngular,
  SiHtml5,
  SiCss3,
  SiSpringboot, 
  SiLaravel, 
  SiExpress, 
  SiPython, 
  SiPostgresql, 
  SiMysql, 
  SiSqlite, 
  SiGit,
  SiHuawei,
  SiFlutter,
  // SiNodeDotJs,
} from 'react-icons/si';
import { 
  FaCode, 
  FaServer, 
  FaDatabase,
  FaTools,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaBrain,
} from 'react-icons/fa';
import { 
  TbBrandCpp,
  TbBrandKotlin,
} from 'react-icons/tb';
import AnimatedSection from '@/components/AnimatedSection';
import { useState } from 'react';

// Composant SkillTag amélioré
const SkillTag = ({ Icon, name }) => (
  <div className='group flex items-center px-3 py-1.5 rounded-full bg-gray-800/80 hover:bg-teal-900/30 transition-all duration-300 text-white border border-gray-700 hover:border-teal-600 cursor-default'>
    <Icon className='text-sm sm:text-3xl text-teal-400 mr-2 group-hover:scale-110 transition-transform' />
    <span className='text-xs font-medium whitespace-nowrap'>{name}</span>
  </div>
);

// Composant SoftSkillItem amélioré
const SoftSkillItem = ({ text }) => (
  <li className="flex items-start text-xs sm:text-sm mb-3 group">
    <div className="mt-0.5 mr-3 text-teal-500 flex-shrink-0 group-hover:scale-110 transition-transform">
      <FaBrain className="text-sm" />
    </div>
    <span className='text-gray-300 group-hover:text-white transition-colors'>{text}</span>
  </li>
);

// Composant CertificationCard avec hover amélioré
const CertificationCard = ({ title, institution, description, icon: Icon, imageUrl, certUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative p-5 bg-gray-900/80 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-orange-500/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Effet de fond au hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      
      <div className="relative z-10">
        <div className="flex items-start mb-4">
          <div className="p-2.5 bg-gray-800 rounded-lg mr-4 group-hover:bg-orange-500/20 transition-colors">
            <Icon className='text-xl sm:text-2xl text-orange-500' />
          </div>
          <div className="flex-1">
            <h4 className="text-sm sm:text-lg font-semibold text-white leading-tight group-hover:text-teal-300 transition-colors">
              {title}
            </h4>
            <p className="text-xs text-gray-400 mt-1">{institution}</p>
          </div>
        </div>
        
        <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-800">
          {/* Placeholder pour l'image du certificat */}
          <div className="relative">
            <div className="w-24 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded border border-gray-700 overflow-hidden">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <FaGraduationCap className="text-gray-600 text-2xl" />
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          {/* Bouton Voir le certificat */}
          {certUrl && (
            <a 
              href={certUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-medium rounded-lg transition-all duration-300 hover:gap-3 group/btn"
            >
              Voir le certificat
              <FaExternalLinkAlt className="text-xs group-hover/btn:translate-x-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Composant SkillGroup amélioré avec catégorie
const SkillGroup = ({ title, icon: Icon, skills, category }) => (
  <div className='p-5 rounded-xl border-l- border-gray-700/50 hover:border-gray-600 transition-colors duration-300'>
    <div className='flex items-center justify-between mb-4 pb-3 border-b border-gray-700/50'>
      <div className='flex items-center border-l-8 border-teal-500 pl-3'>
        <div>
          <h3 className='text-sm sm:text-base font-semibold text-white'>{title}</h3>
          {category && (
            <span className='text-xs text-gray-400 font-medium'>{category}</span>
          )}
        </div>
      </div>
    </div>
    <div className='flex flex-wrap gap-2'>
      {skills.map((skill, index) => (
        <SkillTag 
          key={index} 
          Icon={skill.Icon} 
          name={skill.name} 
        />
      ))}
    </div>
  </div>
);

export default function Skills() {
  const { t } = useTranslation();

  // Réorganisation des compétences par catégories
  const skillCategories = {
    // Langages de programmation
    languages: [
      { Icon: SiTypescript, name: 'TypeScript' },
      { Icon: SiJavascript, name: 'JavaScript' },
      { Icon: TbBrandKotlin, name: 'Kotlin' },
      { Icon: TbBrandCpp, name: 'C++' },
      { Icon: SiPython, name: 'Python' },
    ],
    
    // Frontend / Mobile
    frontend: [
      { Icon: SiNextdotjs, name: 'Next.js' },
      { Icon: SiReact, name: 'React' },
      { Icon: SiFlutter, name: 'Flutter' },
      { Icon: SiTailwindcss, name: 'Tailwind CSS' },
      // { Icon: SiHtml5, name: 'HTML5' },
      // { Icon: SiCss3, name: 'CSS3' },
    ],
    
    // Backend / Runtimes
    backend: [
      // { Icon: SiNodeDotJs, name: 'Node.js' },
      { Icon: SiExpress, name: 'Express.js' },
      { Icon: SiSpringboot, name: 'Spring Boot' },
      { Icon: SiLaravel, name: 'Laravel' },
    ],
    
    // Bases de données
    databases: [
      { Icon: SiPostgresql, name: 'PostgreSQL' },
      { Icon: SiMysql, name: 'MySQL' },
      { Icon: SiSqlite, name: 'SQLite' },
    ],
    
    // Outils de développement
    tools: [
      { Icon: SiGit, name: 'Git' },
      { Icon: FaTools, name: 'GitHub' },
      { Icon: FaCode, name: 'VS Code' },
      { Icon: FaServer, name: 'Docker' },
    ],
  };

  const softSkills = [
    t("skills.softSkills.teamwork"),
    t("skills.softSkills.communication"),
    t("skills.softSkills.systemDesign"),
    t("skills.softSkills.algorithms"),
    t("skills.softSkills.adaptability"),
    t("skills.softSkills.problemSolving"),
  ];

  const certifications = [
    {
      title: 'Maitrise des Compétences Numériques (PIX)',
      institution: 'PIX - Certification Officielle',
      description: "Certification mesurant la maîtrise du numérique (données, communication, création de contenu, sécurité). Atteste d'un niveau élevé en culture numérique et résolution de problèmes.",
      icon: FaGraduationCap,
      // imageUrl: '/certifications/pix.jpg', // À ajouter
      certUrl: 'https://pix.fr',
    },
    {
      title: 'Overview IA - Huawei Academy',
      institution: 'Huawei ICT Academy',
      description: "Fondamentaux de l'Intelligence Artificielle, apprentissage automatique, Deep Learning et applications IA. Compréhension des tendances technologiques futures.",
      icon: SiHuawei,
      // imageUrl: '/certifications/huawei.jpg', // À ajouter
      certUrl: 'https://e.huawei.com',
    },
  ];

  return (
    <div className='min-h-screen w-full px-4 sm:px-16 lg:px-48 py-16 sm:py-20 bg-gradient-to-b from-black via-gray-950 to-gray-950 text-white'>
      <section id='skills' className='absolute -top-20' />
      
        {/* Header Compact */}
        <AnimatedSection direction='scale' duration={0.3} threshold={0.1}>
          <div className='mb-8 sm:mb-10'>
            <h2 className='text-3xl sm:text-4xl font-extrabold text-center'>
              <span className="text-orange-500">&lt;</span>
              <span>{t("skills.title")}</span>
              <span className="text-orange-500">/&gt;</span>
            </h2>
            <div className="w-12 h-1 bg-teal-500 rounded mx-auto mt-2"></div>
            <p className="text-xs text-gray-500 mt-3 text-center">{t("skills.subtitle")}</p>

          </div>
        </AnimatedSection>

      {/* Grille principale des compétences */}
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12'>

                    {/* Soft Skills */}
          <AnimatedSection direction='up' threshold={0.2} delay={0.7}>
            <div className="p-6 rounded-xl border border-gray-700/50 h-full">
              <div className="flex items-center mb-6">
                <div className="p-2.5 bg-gray-800 rounded-lg mr-3">
                  <FaBrain className="text-lg text-teal-500" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Soft Skills</h3>
                  <p className="text-xs text-gray-400">Compétences transversales</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                {softSkills.map((skill, index) => (
                  <SoftSkillItem key={index} text={skill} />
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <p className="text-xs text-gray-400 italic">
                  "L'excellence technique couplée à une communication efficace"
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Compétences techniques */}
          <div className='lg:col-span-2'>
            {/* Frontend */}
            <AnimatedSection direction='up' duration={0.3}>
              <SkillGroup 
                title="Frontend" 
                icon={FaCode}
                category="Développement Web/Mobile"
                skills={skillCategories.frontend}
              />
            </AnimatedSection>
                        {/* Backend */}
            <AnimatedSection direction='up' duration={0.3}>
              <SkillGroup 
                title="Backend" 
                icon={FaServer}
                category="Serveurs & APIs"
                skills={skillCategories.backend}
              />
            </AnimatedSection>
            {/* Langages */}
            <AnimatedSection direction='up' duration={0.3}>
              <SkillGroup 
                title="Langages" 
                icon={FaCode}
                category="Programmation"
                skills={skillCategories.languages}
              />
            </AnimatedSection>
            <AnimatedSection direction='up'  duration={0.3}>
              <SkillGroup 
                title="Bases de données" 
                icon={FaDatabase}
                category="Stockage & Gestion"
                skills={skillCategories.databases}
              />
            </AnimatedSection>
            <AnimatedSection direction='up' duration={0.3}>
              <SkillGroup 
                title="Outils" 
                icon={FaTools}
                category="Développement"
                skills={skillCategories.tools}
              />
            </AnimatedSection>

          </div>


        </div>

        {/* Section Certifications */}
        <AnimatedSection direction='up' threshold={0.2} delay={0.8}>
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg">
                <FaGraduationCap className="text-xl text-orange-500" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Certifications</h2>
                <p className="text-xs text-gray-400">Accréditations et formations validées</p>
              </div>
            </div>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}