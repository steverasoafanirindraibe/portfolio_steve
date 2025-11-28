"use client"
import {useScroll } from '@/hooks/useScroll';
import { useTranslation } from '@/hooks/useTranslation';

import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
  SiReact,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiAngular,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiPython,
} from 'react-icons/si';
import { FaAppStore, FaBookDead, FaBookOpen, FaBoxOpen, FaCertificate, FaCheck, FaClock, FaCode, FaDownload, FaDragon, FaEnvelope, FaExclamation, FaEye, FaFolder, FaGithub, FaGlobe, FaGraduationCap, FaHome, FaIdBadge, FaInternetExplorer, FaLaptop, FaLaptopCode, FaLinkedin, FaListOl, FaLocationArrow, FaMap, FaNetworkWired, FaPhone, FaPhoneAlt, FaProjectDiagram, FaRobot, FaRProject, FaStar, FaStarAndCrescent, FaStarHalf, FaStarHalfAlt, FaStarOfDavid, FaTimes, FaUikit, FaUniversity, FaUser, FaUserAlt, FaUserCheck, FaUserGraduate, FaWallet, FaWarehouse } from 'react-icons/fa';
import Image from 'next/image';
import { FaBagShopping, FaBook,FaComment,FaPaperPlane , FaBookAtlas, FaBookQuran, FaLocationDot, FaMapLocation, FaStarHalfStroke, FaTimeline, FaUpwork, FaVault, FaWebAwesome, FaWebflow } from 'react-icons/fa6';
import { useState,useEffect, useRef } from 'react';
import { useModernAlert } from '@/components/ModernAlert';
import AnimatedSection from '@/components/AnimatedSection';


export default function Home() {

  const scrollProgress = useScroll();
  const { showAlert } = useModernAlert();

  const [currentIndexProjet0, setCurrentIndexProjet0] = useState(0);
  const [currentIndexProjet1, setCurrentIndexProjet1] = useState(0);
  const [currentIndexProjet2, setCurrentIndexProjet2] = useState(0);
  const [currentIndexProjet3, setCurrentIndexProjet3] = useState(0);
  const [currentIndexProjet4, setCurrentIndexProjet4] = useState(0);
  const [currentIndexProjet5, setCurrentIndexProjet5] = useState(0);

  const { t, language, changeLanguage } = useTranslation();

  const images = [
    [
      '/projects/ebh/EBH-8.png',
      '/projects/ebh/EBH-7.png',
      '/projects/ebh/EBH-1.png',
      '/projects/ebh/EBH-2.png',
      '/projects/ebh/EBH-3.png',
      '/projects/ebh/EBH-4.png',
      '/projects/ebh/EBH-5.png',
      '/projects/ebh/EBH-6.png',
    ],[
      '/projects/openService/cyber-1.png',
      '/projects/openService/cyber-2.png',
      '/projects/openService/cyber-3.png',
      '/projects/openService/cyber-4.png',
      '/projects/openService/cyber-5.png',
    ],[
      '/projects/autoEcole/autoecole-1.png',
      '/projects/autoEcole/autoecole-2.png',
      '/projects/autoEcole/autoecole-3.png',
      '/projects/autoEcole/autoecole-4.png',
      '/projects/autoEcole/autoecole-5.png',
    ],[
      '/projects/impots/impots-1.png',
      '/projects/impots/impots-2.png',
      '/projects/impots/impots-3.png',
      '/projects/impots/impots-4.png',
      '/projects/impots/impots-5.png',
      '/projects/impots/impots-6.png',
      '/projects/impots/impots-7.png',
    ],[
      '/projects/radioTsiry/radio-1.png',
      '/projects/radioTsiry/radio-2.png',
      '/projects/radioTsiry/radio-3.png',
      '/projects/radioTsiry/radio-4.png',
      '/projects/radioTsiry/radio-5.png',
    ],[
      '/projects/homevers/homevers-1.png',
      '/projects/homevers/homevers-2.png',
      '/projects/homevers/homevers-3.png',
      '/projects/homevers/homevers-4.png',
    ]
  ];

  const getOffset = (baseOffset) => {
    console.log(scrollProgress)
    return baseOffset * (1 - scrollProgress);
  };

  const getTranslateY = (baseOffset) => {
  //  if (scrollProgress > 0.5) {
  //     const navbar = document.getElementById('navbar');
  //     if (navbar) {
  //       navbar.classList.add('backdrop-blur-[2px]');
  //     }
  //   } else {
  //     const navbar = document.getElementById('navbar');
  //     if (navbar) {
  //       navbar.classList.remove('backdrop-blur-[2px]');
  //     }
  //   }
    return baseOffset * scrollProgress;
  }

  const handleCopy = () => async () => {    
    try {
      await navigator.clipboard.writeText("steveshannyrasoafanirindraibe@gmail.com");
      showAlert("Copié avec succes", "success ")
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = "steveshannyrasoafanirindraibe@gmail.com";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

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


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexProjet0((prevIndex) => 
        prevIndex === images[0].length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [images[0].length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexProjet1((prevIndex) => 
        prevIndex === images[1].length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [images[1].length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexProjet2((prevIndex) => 
        prevIndex === images[2].length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [images[2].length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexProjet3((prevIndex) => 
        prevIndex === images[3].length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [images[3].length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexProjet4((prevIndex) => 
        prevIndex === images[4].length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);

  }, [images[4].length]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexProjet5((prevIndex) => 
        prevIndex === images[5].length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [images[5].length]);

  return (
    <div className=" bg-teal-950/25 min-h-screen w-full sm:border-t-2 border-teal-500 overflow-x-hidden">
      <div className='fixed z-5' >
        <div className='flex sm:hidden backdrop-blur-sm bg-black/30 rounded-br-xl' >
          <div className=' w-6 h-6 m-2 flex justify-center items-center border-2 border-teal-500 rounded-full rounded-' >S</div>
          <button 
            onClick={() => handleNavClick('projects')}
            className="w-20 flex justify-center sm:text-sm text-[13px] pt-3 pb-1 rounded-b-sm border-b-2 border-b-teal-500 relative overflow-hidden group transition-all duration-300 ease-in-out">
            <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out"></div>  
            <span className="relative">Projects</span>
          </button> 
          <button
            onClick={() => handleNavClick('skills')} 
            className="w-20 flex justify-center sm:text-sm text-[13px] pt-3 pb-1  rounded-b-sm border-b-2 border-b-teal-500 relative overflow-hidden group transition-all duration-300 ease-in-out"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out"></div>
            <span className="relative">Skills</span>
          </button>
          <button 
            onClick={() => handleNavClick('contacts')} 
            className="w-20 flex justify-center sm:text-sm text-[13px] pt-3 pb-1 rounded-b-sm border-b-2 border-b-teal-500 relative overflow-hidden group transition-all duration-300 ease-in-out"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out"></div>
            <span className="relative">Contacts</span>
          </button>
          <div className="relative overflow-hidden w-4"></div>
        </div>
      </div>
      <div className="fixed sm:w-10 z-50 md:top-1/3 md:right-4 top-4 right-4">
        <button
          onClick={() => changeLanguage(language === 'fr' ? 'en' : 'fr')}
          className="sm:w-8 w-6 bg-black/50 border-2 border-teal text-white rounded-lg transition-all backdrop-blur-sm text-[12px] sm:text-base"
        >
          {language === 'fr' ?  <Image src={'/images/flag_fr.png'} width={80} height={60} alt='flag-fr' ></Image> : <Image src={'/images/flag_en.png'} width={80} height={60} alt='flag-en' ></Image>}
        </button>
      </div>

      <main className="w-full max-w-full h-full">
        {/* First block ----------------------------------------------------------------------------------*/}
        <div className="sm:h-[500px] h-auto sm:w-full w-full sm:flex flex-col sm:flex-row sm:items-center pt-10 sm:pt-0" >
          <div 
            className="relative sm:py-0 py-10 overflow-hidden z-10 sm:w-5/12 w-full sm:h-full flex justify-center items-center duration-400 ease-out"
            style={{ transform: `translateY(${-getTranslateY(150)}px)` }} 
          >
            <div className="bg-teal-950/25 profil border-2 border-teal-500 md:w-72 md:h-72 w-40 h-40 rounded-full rotate-x-90 p-2">
              <div className="w-full h-full rounded-full border-4 border-teal-500 bg-black" >
                <Image className='w-full rounded-t-full rounded-br-xl rounded-bl-full border-r-4 border-b-4 border-teal-500' src={"/images/steve_profil.jpg"} width={1000} height={1000} alt='steve_profil' ></Image>
              </div>
            </div>
            <div className="absolute rotate-[48deg] top-[210px] -z-10 hidden sm:block" >
              <div className="animate-moveHorizontalFast text-md whitespace-nowrap uppercase" >
                abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
              </div>
              <div className="animate-moveHorizontalMedium text-xl top-[320px]" >
                110010001110100011010101000101101100011010010111101000101001110010101001110101010000111101010010110101101010000110101010000111010101000110101101            
              </div>
              <div className="animate-moveHorizontalSlow text-2xl top-[280px] uppercase" >
                abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
              </div>
            </div>
          </div>
          <div className="sm:w-4/12 w-full h-full" >
            <div className="sm:w-full w-full h-full flex justify-center sm:justify-start items-center px-4 sm:px-0" >
              <div className="text-center sm:text-left">
                <div className="sm:text-5xl text-3xl sm:font-semibold" >
                  <AnimatedSection direction='left' duration={1.3} className="sm:text-8xl text-5xl" >
                    <span className="text-teal-500" >S</span>teve 
                  </AnimatedSection>
                  <AnimatedSection direction='left' delay={0.8} duration={1.3} className="text-3xl sm:text-7xl">
                    Rasoafanirindrai<span className="text-orange-500" >be</span>;
                  </AnimatedSection>
                </div>
                <AnimatedSection direction='left' delay={1.4} duration={1.3} className="sm:py-3 sm:text-3xl text-lg italic">
                  {t("hero.title")}<span className="clignoter" >_</span>
                </AnimatedSection>
                <div className="w-full flex my-6 flex-col sm:flex-row justify-center sm:justify-evenly gap-2 py-4" >
                  <button onClick={() => handleNavClick('contacts')} className="flex justify-center items-center py-2 px-3 rounded-xl bg-teal-500 italic text-black font-bold text-[14px] sm:text-base">@Contact <FaPhone className='mx-2' ></FaPhone> </button>
                  <a href='/documents/cv_steve_non_confidentiel.pdf' download="Steve_Rasoafanirindraibe_CV.pdf" className="flex py-2 px-3 bg-teal-500/10 rounded-xl text-[14px] sm:text-base items-center justify-center"> <FaDownload className='mx-2' ></FaDownload> {t("hero.download")}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden sm:block sm:w-3/12 overflow-hidden w-full h-full">
            <div className="absolute -z-10 bg-teal-500 h-16 w-[500px] rotate-[48deg]"></div>
            <div className="absolute -z-10 top-24 bg-teal-500 h-1 w-[500px] rotate-[48deg]"></div>
            <div 
              className="fixed ml-52 transition-all duration-300 ease-out z-50" 
              style={{ transform: `translateX(${-getOffset(160)}px)` }}
              id='navbar'
            >
              <button 
                onClick={() => handleNavClick('projects')}
                className="w-20 flex justify-center text-sm py-2 pt-4 rounded-b-2xl border-b-4  border-b-teal-500 relative overflow-hidden group hover:scale-125 transition-all duration-300 ease-in-out"
                style={{ marginLeft: `${getOffset(0)}px` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out"></div>  
                <span className="relative z-10">Projects</span>
              </button>          
              <button
                onClick={() => handleNavClick('skills')} 
                className="w-20 flex justify-center mt-1 text-sm py-2 pt-3 rounded-b-2xl border-b-4 border-b-teal-500 relative overflow-hidden group hover:scale-125 transition-all duration-200 ease-in-out"
                style={{ marginLeft: `${getOffset(40)}px` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out"></div>
                <span className="relative z-10">Skills</span>
              </button>
              <button 
                onClick={() => handleNavClick('contacts')} 
                className="w-20 flex justify-center mt-1 text-sm py-2 pt-3 rounded-b-2xl border-b-4 border-b-teal-500 relative overflow-hidden group hover:scale-125 transition-all duration-100 ease-in-out"
                style={{ marginLeft: `${getOffset(80)}px` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out"></div>
                <span className="relative z-10">Contacts</span>
              </button>
            </div>
          </div> 
        </div>

        {/* Second block ---------------------------------------------------------------------------------*/}
        <div 
          className="bg-black w-full sm:min:h-96 rounded-t-[100px_30px] sm:rounded-t-[250px_80px] shadow-glow-teal transition-all duration-400 ease-out"          style={{ transform: `translateY(${-getTranslateY(150)}px)` }}
        >
          <div className='h-full w-full flex flex-col sm:flex-row px-6 sm:px-24 py-10 sm:py-20' >
            <AnimatedSection  className='w-full sm:w-1/2 mb-8 sm:mb-0' direction='scale' threshold={0.4} duration={1}>
            <div>
              <div className='py-6 sm:py-10' >
                <div className='text-xl sm:text-4xl pb-4 sm:pb-6 text-center sm:text-left sm:indent-16 underline-rounded' >
                  <span className="text-orange-500">&lt;</span>
                  <span>{t("about.title")}</span>
                  <span className="text-orange-500">/&gt;</span>
                </div>
                <p className=' text-xs sm:text-sm leading-4 sm:leading-6 text-justify px-2 sm:px-4 sm:px-0 indent-4 sm:indent-8' >{t("about.description")}</p>
              </div>
              <div className='flex flex-wrap justify-center gap-4 sm:gap-0 sm:justify-evenly py-6 sm:py-10 border-t-2' >
                <div className="flex flex-col items-center">
                  <SiHtml5 className="text-2xl sm:text-4xl" />
                </div>
                <div className="flex flex-col items-center">
                  <SiCss3 className="text-2xl sm:text-4xl" />
                </div>
                <div className="flex flex-col items-center">
                  <SiPython className="text-2xl sm:text-4xl" />
                </div>
                <div className="flex flex-col items-center">
                  <SiPhp className="text-2xl sm:text-5xl" />
                </div>
                <div className="flex flex-col items-center">
                  <SiNextdotjs className="text-2xl sm:text-4xl " />
                </div>
                <div className="flex flex-col items-center">
                  <SiReact className="text-2xl sm:text-4xl" />
                </div>
                <div className="flex flex-col items-center">
                  <SiSpringboot className="text-2xl sm:text-4xl" />
                </div>
                <div className="flex flex-col items-center">
                  <SiPostgresql className="text-2xl sm:text-4xl" />
                </div>
              </div>
            </div>
            </AnimatedSection>

            <AnimatedSection className='w-full sm:w-1/2' direction='left' threshold={0.4} duration={1}>

              <div className='sm:pl-16 py-3 sm:py-10 flex justify-center' >
                <Image src={"/images/image-2.png"} alt='image-ordinateur' width={450} height={400} className='rounded-3xl max-w-full h-auto'/>
              </div>
          </AnimatedSection>
          </div>


          {/* SB - first block ----------------------------------------------------------------------------------*/}
          <div className='w-full h-full py-4 sm:py-10 px-4 sm:px-24'>
            <div className='w-full h-auto sm:h-[430px] flex flex-col sm:flex-row justify-evenly gap-4 sm:gap-0'>

              {/* Première carte - UI/UX */}
              <AnimatedSection direction='scale' threshold={0.4} duration={0.8} className="w-full sm:w-1/4 sm:h-full sm:pr-4">
                <div className='h-full px-4 sm:px-4 py-2 sm:py-6 group border-4 border-dotted rounded-[30px] sm:rounded-[40px] border-teal-500 hover:border-solid text-center transition-all duration-700'>
                  <div className='w-full relative flex justify-center py-2 sm:py-4 group-hover:scale-105 transition-all duration-700'>
                    <FaLaptopCode size={70} className='sm:size-[140px]'></FaLaptopCode>
                    <FaUserAlt size={40} className='text-teal-500 sm:size-[80px]'></FaUserAlt>
                  </div>
                  <div className='py-1 sm:py-2'>
                    <div className='pb-1 sm:pb-2 text-white text-sm sm:text-base'>UI/U<span className='text-orange-500'>X</span></div>
                    <p className='text-xs text-justify leading-4 sm:leading-6 sm:text-sm'>{t("descriptions.uiux")}</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Deuxième carte - Academic Training */}
              <AnimatedSection direction='scale' duration={0.8} className='w-full sm:w-1/2 sm:h-full sm:pr-4'>
                <div className='h-full px-4 sm:px-4 py-2 sm:py-6 group border-4 border-dotted rounded-[30px] sm:rounded-[40px] border-teal-500 text-center transition-all duration-700'>
                  <div className='w-full relative flex justify-evenly py-2 sm:py-4 group-hover:scale-110 transition-all duration-700'>
                    <FaUniversity size={50} className='sm:size-[100px]'></FaUniversity>
                    <FaUserGraduate size={45} className='text-teal-500 sm:size-[90px]'></FaUserGraduate>
                    <FaBookOpen size={50} className='sm:size-[100px]'></FaBookOpen>
                  </div>
                  <div className='py-1 sm:py-2'>
                    <div className='pb-1 sm:pb-2 text-white text-sm sm:text-base'>Academic<span className='text-orange-500'> Training </span></div>
                    <p className='text-xs text-justify leading-4 sm:leading-6 sm:text-sm indent-0 sm:indent-6'>{t("descriptions.academic")}</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Troisième colonne - Networks et AI */}
              <div className='w-full sm:w-1/4 h-auto sm:h-full flex flex-col gap-4 sm:gap-0'>
                <AnimatedSection direction='scale' threshold={0.7} duration={0.8} className=' sm:h-1/2 sm:pb-4'>
                  <div className='h-full px-4 sm:px-4 py-2 sm:py-6 flex items-center group border-4 border-dotted border-teal-500 rounded-[30px] sm:rounded-[40px] text-center transition-all duration-700'>
                    <div>
                      <FaNetworkWired size={25} className='mr-2 sm:mr-4 sm:size-[45px]'></FaNetworkWired>
                    </div>
                    <div className='flex-1'>
                      <div className='pb-1 sm:pb-2 text-white text-xs sm:text-base text-left indent-0 sm:indent-6 group-hover:scale-105 transition-all duration-700'><span className='text-orange-500'>N</span>etworks</div>
                      <div className='text-xs text-left leading-4 sm:leading-6 sm:text-sm'>{t("descriptions.networks")}</div>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection direction='scale' threshold={0.1} duration={0.8} className='h-24 sm:h-1/2'>
                  <div className='h-full px-4 sm:px-4 py-2 sm:py-6 flex items-center group border-4 border-dotted rounded-[30px] sm:rounded-[40px] border-teal-500 text-center transition-all duration-700'>
                    <div>
                      <FaRobot size={25} className='mr-2 sm:mr-4 sm:size-[45px]'></FaRobot>
                    </div>
                    <div className='flex-1'>
                      <div className='pb-1 sm:pb-2 text-white text-xs sm:text-base group-hover:scale-105 transition-all duration-700'>Artificial Inteligence<span className='text-orange-500'> IA</span></div>
                      <div className='text-xs text-left leading-4 sm:leading-6 sm:text-sm'>{t("descriptions.ai")}</div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>

          {/* SB - second block ---------------------------------------------------------------------------------*/}
          <section id="projects"></section>
          <div className='w-full h-full pt-10 sm:pt-20' >
            <div className='text-xl sm:text-4xl pb-4 sm:pb-6 text-center sm:indent-16 underline-rounded' >
              <span className="text-orange-500">&lt;</span>
              <span>Portfolio</span>
              <span className="text-orange-500">/&gt;</span>
              <div className="text-xs sm:text-sm text-gray-700 py-3">{t("projects.subtitle")}</div>
            </div>

            <div className="bg-gradient-to-b from-black to-teal-900/50 px-4 sm:px-24">

              {/* Premier projet */}
              <div className='w-full pt-10 sm:pt-0' >
                <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-0' >
                  {/* Image make a move */}
                  <AnimatedSection direction='left' threshold={0.5} delay={0.5} duration={1.5} className="relative w-[300px] sm:w-[520px] h-[168px] sm:h-[292px] bg-gray-900 overflow-hidden rounded-xl sm:rounded-l-xl shadow-2xl mx-0 sm:mx-16">
                    <div className="relative w-full h-full">  
                      {images[0].map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                            index === currentIndexProjet0
                              ? 'opacity-100 scale-100'
                              : 'opacity-0 scale-105'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                      ))}
                    </div>
                    {/* Indicateurs */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/60 px-2 py-1 rounded-xl">
                      {images[0].map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                            index === currentIndexProjet0 ? 'bg-white scale-125' : 'bg-white/50'
                          }`}
                          onClick={() => setCurrentIndexProjet0(index)}
                        />
                      ))}
                    </div>
                  </AnimatedSection>
                  
                  <div className='hidden sm:block h-96 w-3 bg-white border-r-4 border-teal-500 rounded-tr-[50px] rounded-bl-[50px]' ></div>
                  
                  <div className="w-full sm:w-[400px] sm:pt-8 px-3 sm:px-0">
                    <div className='border-l-[20px] sm:border-l-[30px] border-teal-500 px-3' >
                      <div className="text-md sm:text-xl uppercase">{t("projects.list.0.type")}</div>
                      <div className='w-full flex items-center text-xs sm:text-sm' >
                        <FaClock size={12} className='sm:size-[14px]' />
                        <div className='px-2'>{t("projects.list.0.date")}</div>
                      </div>
                    </div>

                    <AnimatedSection direction='left' threshold={0.7} delay={0.5} duration={1.5}>
                      <div className='py-3 sm:py-8 sm:px-4' >
                        <p className='text-xs sm:text-sm leading-5 sm:leading-6 text-justify'>{t("projects.list.0.description")}</p>
                      </div>
                      <div className='px-2 sm:px-4 flex flex-wrap gap-1 sm:gap-0'>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1'>NextJs</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1'>PostgreSQL</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1'>Tailwind</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1'>Drizzle_ORM</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1'>+2</span>
                      </div>
                      <div className="w-full flex sm:flex-row justify-evenly gap-2 mt-4 sm:mt-8 px-2 sm:px-4  mb-8 sm:mb-0">
                        <button
                          onClick={() => showAlert(t('alerts.codeSecured'), "error")}
                          className='flex justify-center items-center group py-2 px-3 bg-black/30 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer text-xs sm:text-sm'
                        >
                          <FaGithub className='group-hover:w-0 transition-all duration-700 ease-out size-3 sm:size-4' />
                          <div className='sm:pl-2 pl-1 group-hover:pl-0 transition-all duration-700 ease-out'>{t('projects.viewCode')}</div>
                        </button>
                        <button
                          onClick={() => showAlert(t('alerts.underDevelopment'), "info")}
                          className='flex justify-center items-center group py-2 px-3 bg-black/30 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer text-xs sm:text-sm'
                        >
                          <FaEye className='group-hover:w-0 transition-all duration-700 ease-out size-3 sm:size-4' />
                          <div className='sm:pl-2 pl-1 group-hover:pl-0 transition-all duration-700 ease-out'>{t('projects.viewProject')}</div>
                        </button>           
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
              {/* Deuxieme Projet */}
              <div className='w-full pt-10 sm:pt-0' >
                <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-0'>
                  <div className="w-full sm:w-[400px] sm:pt-8 px-4 sm:px-0">
                    <div  className='w-full flex justify-end' >
                      <div className='border-r-[20px] sm:border-r-[30px]  border-white px-3 ' >
                        <div className="text-md sm:text-xl uppercase">{t("projects.list.1.type")}</div>
                        <div className='w-full flex items-center justify-end text-xs sm:text-sm  ' >
                          <FaClock size={14} className='sm:size-[14px]'></FaClock>
                          <div className='px-2' >{t("projects.list.1.date")}</div>
                        </div>
                      </div>
                    </div>

                    <AnimatedSection direction='right' threshold={0.7} delay={0.5} duration={1.5}>
                      <div className='py-3 sm:py-8 sm:px-4' >
                        <p className='text-xs sm:text-sm leading-5 sm:leading-6 text-justify' >{t("projects.list.1.description")}</p>
                      </div>
                      <div className='px-2 sm:px-4 flex flex-wrap gap-1 sm:gap-0'>
                        
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >SpringBoot</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >Next</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >PostgreSQL</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >RestAPI</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >+2</span>
                      </div>
                      <div className="w-full flex sm:flex-row justify-evenly gap-2 mt-4 sm:mt-8 px-2 sm:px-4">
                        <a
                          href='https://github.com/steverasoafanirindraibe/CyberCafe_application_web'
                          className='flex justify-center items-center group py-2 px-3 bg-black/30 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer text-xs sm:text-sm'
                        >
                          <FaGithub className='group-hover:w-0 transition-all duration-700 ease-out size-3 sm:size-4' />
                          <div className='sm:pl-2 pl-1 group-hover:pl-0 transition-all duration-700 ease-out'>{t('projects.viewCode')}</div>
                        </a>
                        <button
                          onClick={() => showAlert(t('alerts.projectNotAvailable'), "info")}
                          className='flex justify-center items-center group py-2 px-3 bg-black/30 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer text-xs sm:text-sm'
                        >
                          <FaEye className='group-hover:w-0 transition-all duration-700 ease-out size-3 sm:size-4' />
                          <div className='sm:pl-2 pl-1 group-hover:pl-0 transition-all duration-700 ease-out'>{t('projects.viewProject')}</div>
                        </button>           
                      </div>
                    </AnimatedSection>
                  </div>
                  <div className='hidden sm:block h-96 w-3 bg-white border-r-4 border-teal-500 rounded-tr-[50px] rounded-bl-[50px]' ></div>
                  {/* Image make a move */}
                  <AnimatedSection direction='right' threshold={0.5} delay={0.5} duration={1.5} className="relative w-[300px] sm:w-[520px] h-[168px] sm:h-[292px] bg-gray-900 overflow-hidden rounded-xl sm:rounded-l-xl shadow-2xl mx-0 sm:mx-16 mb-8 sm:mb-0">
                    <div className="relative w-full h-full">  
                      {images[1].map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                            index === currentIndexProjet1
                              ? 'opacity-100 scale-100'
                              : 'opacity-0 scale-105'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                      ))}
                    </div>
                    {/* Indicateurs */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/60 px-2 py-1 rounded-xl">
                      {images[1].map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                            index === currentIndexProjet1 ? 'bg-white scale-125' : 'bg-white/50'
                          }`}
                          onClick={() => setCurrentIndexProjet1(index)}
                        />
                      ))}
                    </div>
                  </AnimatedSection>

                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-teal-900/50 to-black px-4 sm:px-24">
              {/* Troisieme Projet */}
              <div className='w-full pt-10 sm:pt-0' >
                <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-0'>
                  {/* Image make a move */}
                  <AnimatedSection direction='left' threshold={0.5} delay={0.5} duration={1.5} className="relative w-[300px] sm:w-[520px] h-[168px] sm:h-[292px] bg-gray-900 overflow-hidden rounded-xl sm:rounded-l-xl shadow-2xl mx-0 sm:mx-16">
                    <div className="relative w-full h-full">  
                      {images[2].map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                            index === currentIndexProjet2
                              ? 'opacity-100 scale-100'
                              : 'opacity-0 scale-105'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                      ))}
                    </div>
                    {/* Indicateurs */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/60 px-2 py-1 rounded-xl">
                      {images[2].map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                            index === currentIndexProjet2 ? 'bg-white scale-125' : 'bg-white/50'
                          }`}
                          onClick={() => setCurrentIndexProjet2(index)}
                        />
                      ))}
                    </div>
                  </AnimatedSection>
                  <div className='hidden sm:block h-96 w-3 bg-white border-r-4 border-teal-500 rounded-tr-[50px] rounded-bl-[50px]' ></div>
                  <div className="w-full sm:w-[400px] sm:pt-8 px-3 sm:px-0">
                    <div className='border-l-[20px] sm:border-l-[30px] border-teal-500 px-3' >
                      <div className="text-md sm:text-xl uppercase">{t("projects.list.2.type")}</div>
                      <div className='w-full flex items-center text-xs sm:text-sm' >
                        <FaClock size={12} className='sm:size-[14px]' />
                        <div className='px-2'>{t("projects.list.2.date")}</div>
                      </div>
                    </div>

                    <AnimatedSection direction='left' threshold={0.7} delay={0.5} duration={1.5}>
                      <div className='py-3 sm:py-8 sm:px-4' >
                        <p className='text-xs sm:text-sm leading-5 sm:leading-6 text-justify'>{t("projects.list.2.description")}</p>
                      </div>
                      <div className='px-2 sm:px-4 flex flex-wrap gap-1 sm:gap-0'>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >Laravel</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >NextJS</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >PostgresSQL</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >Tailwind</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >+2</span>
                      </div>
                      <div className="w-full flex sm:flex-row justify-evenly gap-2 mt-4 sm:mt-8 px-2 sm:px-4">
                        <a
                          href='https://github.com/neon-rah/application-web-auto-ecole-projet'
                          className='flex justify-center items-center group py-2 px-3 bg-black/30 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer text-xs sm:text-sm'
                        >
                          <FaGithub className='group-hover:w-0 transition-all duration-700 ease-out size-3 sm:size-4' />
                          <div className='sm:pl-2 pl-1 group-hover:pl-0 transition-all duration-700 ease-out'>{t('projects.viewCode')}</div>
                        </a>
                        <button
                          onClick={() => showAlert(t('alerts.projectNotAvailable'), "info")}
                          className='flex justify-center items-center group py-2 px-3 bg-black/30 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer text-xs sm:text-sm'
                        >
                          <FaEye className='group-hover:w-0 transition-all duration-700 ease-out size-3 sm:size-4' />
                          <div className='sm:pl-2 pl-1 group-hover:pl-0 transition-all duration-700 ease-out'>{t('projects.viewProject')}</div>
                        </button>           
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
              {/* Quatrieme Projet */}
              <div className='w-full pt-24 sm:pt-0' >
                <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-0'>
                  <div className="w-full sm:w-[400px] sm:pt-8 px-4 sm:px-0">
                    <div  className='w-full flex justify-end' >
                      <div className='border-r-[20px] sm:border-r-[30px]  border-white px-3 ' >
                        <div className="text-md sm:text-xl uppercase">{t("projects.list.3.type")}</div>
                        <div className='w-full flex items-center justify-end text-xs sm:text-sm  ' >
                          <FaClock size={14} className='sm:size-[14px]'></FaClock>
                          <div className='px-2' >{t("projects.list.3.date")}</div>
                        </div>
                      </div>
                    </div>
                    <AnimatedSection direction='right' threshold={0.7} delay={0.5} duration={1.5}>
                      <div className='pt-3 sm:pt-8 sm:px-4' >
                        <p className='text-xs sm:text-sm leading-5 sm:leading-6 text-justify' >{t("projects.list.3.description")}</p>
                      </div>
                      <div className='text-blue-700 text-xs sm:text-sm underline sm:pt-2 pt-0 sm:pb-6 pb-4 text-right sm:px-4'>
                        <a href="/documents/rapportStage.pdf" target="_blank" rel="noopener noreferrer" >{t("projects.list.3.report")}</a>
                      </div>
                      <div className='px-2 sm:px-4 flex flex-wrap gap-1 sm:gap-0'>
                       
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >ReactJs</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >ExpressJs</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >MySQL</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >Tailwind</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >CSS</span>
                      </div>
                      <div className="w-full flex sm:flex-row justify-evenly gap-2 mt-4 sm:mt-8 px-2 sm:px-4">
                        <button
                          onClick={() => showAlert(t('alerts.codeSecured'), "error")}
                          className='flex justify-center items-center group py-2 px-3 bg-black/30 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer text-xs sm:text-sm'
                        >
                          <FaGithub className='group-hover:w-0 transition-all duration-700 ease-out size-3 sm:size-4' />
                          <div className='sm:pl-2 pl-1 group-hover:pl-0 transition-all duration-700 ease-out'>{t('projects.viewCode')}</div>
                        </button>
                        <button
                          onClick={() => showAlert(t('alerts.projectNotAvailable'), "info")}
                          className='flex justify-center items-center group py-2 px-3 bg-black/30 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer text-xs sm:text-sm'
                        >
                          <FaEye className='group-hover:w-0 transition-all duration-700 ease-out size-3 sm:size-4' />
                          <div className='sm:pl-2 pl-1 group-hover:pl-0 transition-all duration-700 ease-out'>{t('projects.viewProject')}</div>
                        </button>           
                      </div>
                    </AnimatedSection>
                  </div>
                  <div className='hidden sm:block h-96 w-3 bg-white border-r-4 border-teal-500 rounded-tr-[50px] rounded-bl-[50px]' ></div>
                  {/* Image make a move */}
                  <AnimatedSection direction='right' threshold={0.5} delay={0.5} duration={1.5} className="relative w-[300px] sm:w-[520px] h-[168px] sm:h-[292px] bg-gray-900 overflow-hidden rounded-xl sm:rounded-l-xl shadow-2xl mx-0 sm:mx-16">
                    <div className="relative w-full h-full">  
                      {images[3].map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                            index === currentIndexProjet3
                              ? 'opacity-100 scale-100'
                              : 'opacity-0 scale-105'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                      ))}
                    </div>
                    {/* Indicateurs */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/60 px-2 py-1 rounded-xl">
                      {images[3].map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                            index === currentIndexProjet3 ? 'bg-white scale-125' : 'bg-white/50'
                          }`}
                          onClick={() => setCurrentIndexProjet3(index)}
                        />
                      ))}
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-black to-teal-900/50 px-4 sm:px-24 pb-20">
              {/* Cinquieme projet */}
              <div className='w-full pt-24 sm:pt-0' >
                <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-0'>
                   {/* Image make a move */}
                  <AnimatedSection direction='left' threshold={0.5} delay={0.5} duration={1.5} className="relative w-[300px] sm:w-[520px] h-[168px] sm:h-[292px] bg-gray-900 overflow-hidden rounded-xl sm:rounded-l-xl shadow-2xl mx-0 sm:mx-16">
                    <div className="relative w-full h-full">  
                      {images[4].map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                            index === currentIndexProjet4
                              ? 'opacity-100 scale-100'
                              : 'opacity-0 scale-105'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                      ))}
                    </div>
                    {/* Indicateurs */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/60 px-2 py-1 rounded-xl">
                      {images[4].map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                            index === currentIndexProjet4 ? 'bg-white scale-125' : 'bg-white/50'
                          }`}
                          onClick={() => setCurrentIndexProjet4(index)}
                        />
                      ))}
                    </div>
                  </AnimatedSection>
                  <div className='hidden sm:block h-96 w-3 bg-white border-r-4 border-teal-500 rounded-tr-[50px] rounded-bl-[50px]' ></div>
                  <div className="w-full sm:w-[400px] sm:pt-8 px-3 sm:px-0">
                    <div className='border-l-[20px] sm:border-l-[30px] border-teal-500 px-3' >
                      <div className="text-md sm:text-xl uppercase">{t("projects.list.4.type")}</div>
                      <div className='w-full flex items-center text-xs sm:text-sm' >
                        <FaClock size={12} className='sm:size-[14px]' />
                        <div className='px-2'>{t("projects.list.4.date")}</div>
                      </div>
                    </div>

                    <AnimatedSection direction='left' threshold={0.7} delay={0.5} duration={1.5}>
                      <div className='py-3 sm:py-8 sm:px-4' >
                        <p className='text-xs sm:text-sm leading-5 sm:leading-6 text-justify'>{t("projects.list.4.description")}</p>
                      </div>
                      <div className='px-2 sm:px-4 flex flex-wrap gap-1 sm:gap-0'>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >PHP</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >JavaScript</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >MySQL</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >Bootstrap</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >CSS</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >Jquery</span>
                      </div>
                      <div className="w-full flex sm:flex-row justify-evenly gap-2 mt-4 sm:mt-8 px-2 sm:px-4 mb-8 sm:mb-0">
                        <button
                          onClick={() => showAlert(t('alerts.codeSecured'), "error")}
                          className='flex justify-center items-center group py-2 px-3 bg-black/30 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer text-xs sm:text-sm'
                        >
                          <FaGithub className='group-hover:w-0 transition-all duration-700 ease-out size-3 sm:size-4' />
                          <div className='sm:pl-2 pl-1 group-hover:pl-0 transition-all duration-700 ease-out'>{t('projects.viewCode')}</div>
                        </button>
                        <button
                          onClick={() => showAlert(t('alerts.projectNotAvailable'), "info")}
                          className='flex justify-center items-center group py-2 px-3 bg-black/30 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer text-xs sm:text-sm'
                        >
                          <FaEye className='group-hover:w-0 transition-all duration-700 ease-out size-3 sm:size-4' />
                          <div className='sm:pl-2 pl-1 group-hover:pl-0 transition-all duration-700 ease-out'>{t('projects.viewProject')}</div>
                        </button>           
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
              {/* Sixieme projet */}
              <div className='w-full pt-10 sm:pt-0' >
                <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-0'>
                  <div className="w-full sm:w-[400px] sm:pt-8 px-4 sm:px-0">
                    <div  className='w-full flex justify-end' >
                      <div className='border-r-[20px] sm:border-r-[30px]  border-white px-3 ' >
                        <div className="text-md sm:text-xl uppercase">{t("projects.list.5.type")}</div>
                        <div className='w-full flex items-center justify-end text-xs sm:text-sm  ' >
                          <FaClock size={14} className='sm:size-[14px]'></FaClock>
                          <div className='px-2' >{t("projects.list.5.date")}</div>
                        </div>
                      </div>
                    </div>
                    <AnimatedSection direction='right' threshold={0.7} delay={0.5} duration={1.5}>
                      <div className='pt-3 sm:pt-8 sm:px-4' >
                        <p className='text-xs sm:text-sm leading-5 sm:leading-6 text-justify' >{t("projects.list.5.description")}</p>
                      </div>

                      <div className='px-2 sm:px-4 flex flex-wrap gap-1 sm:gap-0'>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >ReactJs</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >PHP</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >MySQL</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >CSS</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >Bootstrap</span>
                        <span className='px-2 py-1 bg-teal-500/15 rounded-full text-[11px] sm:text-[13px] mr-1 sm:mr-2 mb-1' >+2</span>

                      </div>
                      <div className="w-full flex sm:flex-row justify-evenly gap-2 mt-4 sm:mt-8 px-2 sm:px-4">
                        <a
                          href='https://github.com/steverasoafanirindraibe/Homeveres-appli'
                          className='flex justify-center items-center group py-2 px-3 bg-black/30 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer text-xs sm:text-sm'
                        >
                          <FaGithub className='group-hover:w-0 transition-all duration-700 ease-out size-3 sm:size-4' />
                          <div className='sm:pl-2 pl-1 group-hover:pl-0 transition-all duration-700 ease-out'>{t('projects.viewCode')}</div>
                        </a>
                        <button
                          onClick={() => showAlert(t('alerts.projectNotAvailable'), "info")}
                          className='flex justify-center items-center group py-2 px-3 bg-black/30 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer text-xs sm:text-sm'
                        >
                          <FaEye className='group-hover:w-0 transition-all duration-700 ease-out size-3 sm:size-4' />
                          <div className='sm:pl-2 pl-1 group-hover:pl-0 transition-all duration-700 ease-out'>{t('projects.viewProject')}</div>
                        </button>      
                      </div>
                    </AnimatedSection>
                  </div>
                  <div className='hidden sm:block h-96 w-3 bg-white border-r-4 border-teal-500 rounded-tr-[50px] rounded-bl-[50px]' ></div>
                  {/* Image make a move */}
                  <AnimatedSection direction='right' threshold={0.5} delay={0.5} duration={1.5} className="relative w-[300px] sm:w-[520px] h-[168px] sm:h-[292px] bg-gray-900 overflow-hidden rounded-xl sm:rounded-l-xl shadow-2xl mx-0 sm:mx-16">
                    <div className="relative w-full h-full">  
                      {images[5].map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                            index === currentIndexProjet5
                              ? 'opacity-100 scale-100'
                              : 'opacity-0 scale-105'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                      ))}
                    </div>
                    {/* Indicateurs */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/60 px-2 py-1 rounded-xl">
                      {images[5].map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                            index === currentIndexProjet5 ? 'bg-white scale-125' : 'bg-white/50'
                          }`}
                          onClick={() => setCurrentIndexProjet5(index)}
                        />
                      ))}
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Third block -----------------------------------------------------------------------------------------*/}
        <div className='relative h-auto sm:h-[80%] w-full px-4 sm:px-20'>
          <section id='skills' className='absolute -top-20 sm:-top-36'></section>
          <AnimatedSection direction='scale' threshold={0.3} delay={0.1} duration={1}>
            <div className='h-full w-full transform -translate-y-8 sm:-translate-y-16 text-xl sm:text-4xl text-center underline-rounded'>
              <span className="text-orange-500">&lt;</span>
              <span>{t("skills.title")}</span> 
              <span className="text-orange-500">/&gt;</span>
              <div className="text-xs sm:text-sm text-gray-700 py-2 sm:py-3">{t("skills.subtitle")}</div>
            </div>
          </AnimatedSection>

          <div className='w-full h-auto sm:h-96 transform -translate-y-6 sm:-translate-y-10'>
            <div className="w-full h-full sm:h-[350px] flex flex-col sm:flex-row items-center sm:justify-evenly gap-4 sm:gap-0">
              {/* Première carte - Explorer */}
              <AnimatedSection direction='left' threshold={0.3} delay={0.1} duration={1} className="w-full sm:w-[360px] h-full p-2 bg-black rounded-xl">
                <div className='w-full flex justify-between px-3'>
                  <div className='text-sm sm:text-base'>Explorer</div>
                  <div className='flex'>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 mr-1 mt-1"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 mr-1 mt-1"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-indigo-500 mr-1 mt-1"></div>
                  </div>
                </div>
                <div className='flex items-center text-xs sm:text-sm mt-2 px-3 py-2 rounded-xl bg-gray-300/20 mx-2' >
                  <FaHome className='mr-3' ></FaHome>
                  FRONTEND
                </div>
                <div className='h-auto sm:h-[90%] w-full'>
                  <div className='p-3 sm:p-6 grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4'>
                    <div className='relative flex flex-col justify-center items-center'>
                      <FaFolder className='text-3xl sm:text-5xl text-teal-500'></FaFolder>
                      <SiNextdotjs className='text-sm sm:text-xl absolute top-2 sm:top-4 left-2 sm:left-4 text-black'></SiNextdotjs>
                      <span className='text-xs sm:text-sm'>Next</span>
                    </div>
                    <div className='relative flex flex-col justify-center items-center'>
                      <FaFolder className='text-3xl sm:text-5xl text-teal-500'></FaFolder>
                      <SiReact className='text-sm sm:text-xl absolute top-2 sm:top-4 left-2 sm:left-4 text-black'></SiReact>
                      <span className='text-xs sm:text-sm'>React</span>
                    </div>
                    <div className='relative flex flex-col justify-center items-center'>
                      <FaFolder className='text-3xl sm:text-5xl text-teal-500'></FaFolder>
                      <SiTailwindcss className='text-sm sm:text-xl absolute top-2 sm:top-4 left-2 sm:left-4 text-black'></SiTailwindcss>
                      <span className='text-xs sm:text-sm'>Tailwind</span>
                    </div>
                    <div className='relative flex flex-col justify-center items-center'>
                      <FaFolder className='text-3xl sm:text-5xl text-teal-500'></FaFolder>
                      <SiJavascript className='text-sm sm:text-xl absolute top-2 sm:top-4 left-2 sm:left-4 text-black'></SiJavascript>
                      <span className='text-xs sm:text-sm'>Javascript</span>
                    </div>
                    <div className='relative flex flex-col justify-center items-center'>
                      <FaFolder className='text-3xl sm:text-5xl text-teal-500'></FaFolder>
                      <SiTypescript className='text-sm sm:text-xl absolute top-2 sm:top-4 left-2 sm:left-4 text-black'></SiTypescript>
                      <span className='text-xs sm:text-sm'>Typescript</span>
                    </div>
                    <div className='relative flex flex-col justify-center items-center'>
                      <FaFolder className='text-3xl sm:text-5xl text-teal-500'></FaFolder>
                      <SiAngular className='text-sm sm:text-xl absolute top-2 sm:top-4 left-2 sm:left-4 text-black'></SiAngular>
                      <span className='text-xs sm:text-sm'>Angular</span>
                    </div>
                    <div className='relative flex flex-col justify-center items-center'>
                      <FaFolder className='text-3xl sm:text-5xl text-teal-500'></FaFolder>
                      <SiHtml5 className='text-sm sm:text-xl absolute top-2 sm:top-4 left-2 sm:left-4 text-black'></SiHtml5>
                      <span className='text-xs sm:text-sm'>Html5</span>
                    </div>
                    <div className='relative flex flex-col justify-center items-center'>
                      <FaFolder className='text-3xl sm:text-5xl text-teal-500'></FaFolder>
                      <SiCss3 className='text-sm sm:text-xl absolute top-2 sm:top-4 left-2 sm:left-4 text-black'></SiCss3>
                      <span className='text-xs sm:text-sm'>Css3</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Deuxième carte - Terminal */}
              <AnimatedSection direction='left' threshold={0.3} delay={0.4} duration={1} className="w-full h-full sm:w-[360px] p-2 bg-black rounded-xl">
                <div className='w-full flex justify-between px-3'>
                  <div className='text-sm sm:text-base'>Terminal</div>
                  <div className='flex'>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 mr-1 mt-1"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 mr-1 mt-1"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-indigo-500 mr-1 mt-1"></div>
                  </div>
                </div>
                <div className='h-auto sm:h-[90%] bg-gray-950 pt-3 sm:pt-4 p-2'>
                  <code className='h-full text-xs sm:text-sm'>
                    <div className='pb-1 sm:pb-2'>
                      <span className='text-orange-500 font-bold text-[14px] sm:text-[18px]'>/hardskills</span><span className='text-teal-500 font-bold text-[14px] sm:text-[18px]'>/backend&gt;</span> show --all
                    </div>
                    <div>├── Frameworks&Runtime</div>
                    <div className=''>│    ├── Next.js <span className='text-gray-500'>@20.0.0</span></div>
                    <div className=''>│    ├── SpringBoot.java <span className='text-gray-500'>@4.06.0</span></div>
                    <div className=''>│    ├── Laravel.php <span className='text-gray-500'>@8.11.0</span></div>
                    <div className=''>│    ├── Express.js <span className='text-gray-500'>@4.18.0</span></div>
                    <div className=''>│    └── Python.py <span className='text-gray-500'>@3.11.0</span></div>
                    <div>├── Databases</div>
                    <div className=''>│    ├── PostgreSQL.sql <span className='text-gray-500'>@15.3</span></div>
                    <div className=''>│    └── MySQL.sql <span className='text-gray-500'>@8.0.32</span></div>
                  </code>
                </div>
              </AnimatedSection>

              {/* Troisième carte - VS Code */}
              <AnimatedSection direction='left' threshold={0.3} delay={0.7} duration={1} className="w-full h-full sm:w-[360px] p-2 bg-teal-950 rounded-xl">
                <div className='w-full flex justify-between px-3'>
                  <div className='text-sm sm:text-base'>VS Code</div>
                  <div className='flex'>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 mr-1 mt-1"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 mr-1 mt-1"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-indigo-500 mr-1 mt-1"></div>
                  </div>
                </div>
                <div className='h-auto sm:h-[90%] bg-black pt-3 sm:pt-4 p-2'>
                  <code className='text-xs sm:text-sm'>
                    <div className=''>&lt;<span className='text-orange-500'>html</span>&gt;</div>
                    <div className='pl-2 sm:pl-4'>&lt;<span className='text-blue-500'>body</span>&gt;</div>
                    
                    <div className='pl-4 sm:pl-8'>&lt;<span className='text-blue-500'>title</span>&gt; <span className='text-[14px] sm:text-[18px] font-bold'>SoftSkills</span> &lt;<span className='text-blue-500'>/title</span>&gt;</div>
                    <div className='pl-4 sm:pl-8'>&lt;<span className='text-blue-500'>li</span>&gt;</div>
                    <div className='pl-6 sm:pl-12'> &lt;<span className='text-blue-500'>ul</span>&gt; <span className='font-bold'>{t("skills.softSkills.teamwork")}</span> &lt;<span className='text-blue-500'>/ul</span>&gt;</div>
                    <div className='pl-6 sm:pl-12'> &lt;<span className='text-blue-500'>ul</span>&gt; <span className='font-bold'>{t("skills.softSkills.communication")}</span> &lt;<span className='text-blue-500'>/ul</span>&gt;</div>
                    <div className='pl-6 sm:pl-12'> &lt;<span className='text-blue-500'>ul</span>&gt; <span className='font-bold'>{t("skills.softSkills.systemDesign")}</span> &lt;<span className='text-blue-500'>/ul</span>&gt;</div>
                    <div className='pl-6 sm:pl-12'> &lt;<span className='text-blue-500'>ul</span>&gt; <span className='font-bold'>{t("skills.softSkills.algorithms")}</span> &lt;<span className='text-blue-500'>/ul</span>&gt;</div>
                    <div className='pl-6 sm:pl-12'> &lt;<span className='text-blue-500'>ul</span>&gt; <span className='font-bold'>{t("skills.softSkills.adaptability")}</span> &lt;<span className='text-blue-500'>/ul</span>&gt;</div>
                    <div className='pl-6 sm:pl-12'> &lt;<span className='text-blue-500'>ul</span>&gt; <span className='font-bold'>{t("skills.softSkills.problemSolving")}</span> &lt;<span className='text-blue-500'>/ul</span>&gt;</div>

                    <div className='pl-4 sm:pl-8'>&lt;<span className='text-blue-500'>/li</span>&gt;</div>

                    <div className='pl-2 sm:pl-4'>&lt;<span className='text-blue-500'>/body</span>&gt;</div>
                    <div className=''>&lt;<span className='text-orange-500'>/html</span>&gt;</div>
                  </code>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
        
        <footer id='contacts' className='footer h-auto sm:h-screen w-full' >
          <div className='footer-section w-full h-auto sm:h-[90%] items-center rounded-b-[30px] sm:rounded-b-[50%] py-8 sm:py-0' >
            <AnimatedSection direction='scale' threshold={0.3} delay={0.1} duration={0.8}>
              <div className='text-2xl sm:text-4xl text-center pt-4 sm:pt-8 pb-3' >
                <span className="text-orange-500">&lt;</span>
                <span>Contact</span>
                <span className="text-orange-500">/&gt;</span>
              </div>
              <div className='text-center pb-6 sm:pb-8 text-xs sm:text-sm text-gray-300 px-4'>{t("contact.subtitle")}</div>
            </AnimatedSection>
            <div className='flex flex-col sm:flex-row px-4 sm:px-0' >
              <div className='w-full sm:w-1/3 mb-8 sm:mb-0 sm:pr-16' >
                <AnimatedSection direction='up' threshold={0.1} delay={0.3} duration={0.3} className='flex justify-center sm:justify-end py-2'> 
                  <button 
                    className='flex justify-center items-center group py-2 px-3 bg-black/30 border-2 border-white rounded-full hover:bg-teal-500 hover:text-black hover:border-teal-500 transition-all duration-700 ease-out cursor-copy text-xs sm:text-sm'
                    onClick={handleCopy()}
                  >
                    <FaEnvelope className='group-hover:w-0 transition-all duration-700 ease-out size-3 sm:size-4' />
                    <div className='pl-2 group-hover:pl-0 transition-all duration-700 ease-out truncate max-w-[250px] sm:max-w-none'>steveshannyrasoafanirindraibe@gmail.com</div>
                    <FaStar className='w-0 h-2 group-hover:w-2 transition-all duration-700 ease-out' />
                  </button>
                </AnimatedSection>
                <AnimatedSection direction='up' threshold={0.1} delay={0.6} duration={0.3} className=' flex justify-center sm:justify-end py-2' > 
                  <a 
                    href='https://fr.linkedin.com/'
                    className='flex justify-center items-center group py-2 px-3 text-xs sm:text-sm bg-black/30  border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer' 
                  >
                    <FaLinkedin className='group-hover:w-0 transition-all duration-700 ease-out size-3 sm:size-4' ></FaLinkedin> 
                    <div className='pl-2 group-hover:pl-0 transition-all duration-700 ease-out truncate max-w-[250px] sm:max-w-none'>Steve Shanny Rasoafanirindraibe </div>
                  </a>
                </AnimatedSection>
                <AnimatedSection direction='up' threshold={0.1} delay={0.8} duration={0.2} className=' flex justify-center sm:justify-end py-2' > 
                  <a 
                    href='https://github.com/steverasoafanirindraibe' 
                    className='flex justify-center items-center group py-2 px-3 text-xs sm:text-sm bg-black/30 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer' 
                  >
                    <FaGithub className='group-hover:w-0 transition-all duration-700 ease-out size-3 sm:size-4' ></FaGithub> 
                    <div className='pl-2 group-hover:pl-0 transition-all duration-700 ease-out' >steve_rasoafanirindraibe </div>
                  </a>
                </AnimatedSection>
                <AnimatedSection direction='scale' threshold={0.1} delay={1} duration={0.1}>
                  <div className='w-full flex justify-center sm:justify-end items-center py-2' > 
                    <FaGlobe className='mx-2  text-xs sm:text-sm' ></FaGlobe> 
                    <div className=' text-xs sm:text-sm' >Remote Worldwide</div>
                  </div>
                  <div className='w-full flex justify-center  sm:justify-end' >- <FaStarHalfAlt className=' text-sm sm:text-xl mx-2' ></FaStarHalfAlt> -</div>
                </AnimatedSection>
              </div>
              
              <div className='w-full sm:w-2/3' >
                <AnimatedSection direction='left' threshold={0.1} delay={0.4} duration={0.8} className='w-full flex sm:justify-left'>
                  <form className='w-full sm:w-4/5 max-w-md bg-black/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl'>
                    <div className='mb-4 group'>
                      <div className='flex items-center mb-2'>
                        <FaUser className='text-teal-400 mr-2 text-sm' />
                        <label className='text-white text-xs sm:text-sm font-medium'>{t("contact.name")}</label>
                      </div>
                      <input 
                        type="text" 
                        className='w-full text-xs sm:text-sm bg-black/40 border border-white/30 rounded-xl py-2 px-4 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-500 outline-none'
                        placeholder='Martin Dupont'
                      />
                    </div>

                    <div className='mb-4 group'>
                      <div className='flex items-center mb-2'>
                        <FaEnvelope className='text-teal-400 mr-2 text-sm' />
                        <label className='text-white text-xs sm:text-sm font-medium'>{t("contact.email")}</label>
                      </div>
                      <input 
                        type="email" 
                        className='w-full bg-black/40 text-xs sm:text-sm border border-white/30 rounded-xl py-2 px-4 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-500 outline-none'
                        placeholder='john@example.com'
                      />
                    </div>

                    {/* Message */}
                    <div className='mb-6 group'>
                      <div className='flex items-center mb-2'>
                        <FaComment className='text-teal-400 mr-2 text-sm' />
                        <label className='text-white text-xs sm:text-sm font-medium'>{t("contact.message")}</label>
                      </div>
                      <textarea 
                        rows="4"
                        className='w-full bg-black/40 text-xs sm:text-sm border border-white/30 rounded-xl py-2 px-4 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-500 outline-none resize-none'
                        placeholder={t('contact.placeholder')}
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className='w-full group flex justify-center items-center py-2 px-6 bg-gradient-to-r from-teal-600 to-teal-600 rounded-xl text-white font-semibold hover:from-teal-700 hover:to-teal-500 hover:border-teal-300 transition-all duration-500 ease-out shadow-lg'
                    >
                      <FaPaperPlane className='mr-2 text-xs sm:text-sm group-hover:rotate-45 transition-transform duration-500' />
                      <span>{t("contact.send")}</span>
                      <FaStar className='ml-2 w-0 group-hover:w-4 transition-all duration-700 ease-out' />
                    </button>
                  </form>
                </AnimatedSection>
              </div>
            </div>
          </div>
          <div className='w-full h-auto sm:h-[10%] flex justify-center items-center py-4 sm:py-0' >
            <div className="text-black text-[10px] sm:text-sm text-center px-4">
              <p>&copy; 2024 <strong>Steve Rasoafanirindraibe</strong>. {t("copyright.text")}</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
