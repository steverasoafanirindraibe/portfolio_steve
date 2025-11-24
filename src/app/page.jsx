
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
} from 'react-icons/si';
import { FaAppStore, FaBookDead, FaBookOpen, FaBoxOpen, FaCertificate, FaCheck, FaClock, FaCode, FaEnvelope, FaExclamation, FaEye, FaFolder, FaGithub, FaGlobe, FaGraduationCap, FaHome, FaIdBadge, FaInternetExplorer, FaLaptop, FaLaptopCode, FaLinkedin, FaListOl, FaLocationArrow, FaMap, FaNetworkWired, FaProjectDiagram, FaRobot, FaRProject, FaStar, FaStarAndCrescent, FaStarHalf, FaStarHalfAlt, FaStarOfDavid, FaTimes, FaUikit, FaUniversity, FaUser, FaUserAlt, FaUserCheck, FaUserGraduate, FaWallet, FaWarehouse } from 'react-icons/fa';
import Image from 'next/image';
import { FaBagShopping, FaBook, FaBookAtlas, FaBookQuran, FaLocationDot, FaMapLocation, FaStarHalfStroke, FaTimeline, FaUpwork, FaVault, FaWebAwesome, FaWebflow } from 'react-icons/fa6';
import { useState,useEffect } from 'react';
import { useModernAlert } from '@/components/ModernAlert';
import AnimatedSection from '@/components/AnimatedSection';


export default function Home() {

  const scrollProgress = useScroll();
  const { showAlert } = useModernAlert();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, language, changeLanguage } = useTranslation();


  const images = [
    '/projects/ebh-1.png',
    '/projects/ebh-2.png',
  ];


  const getOffset = (baseOffset) => {
    console.log(scrollProgress)
    return baseOffset * (1 - scrollProgress);
  };

  const getTranslateY = (baseOffset) => {
   if (scrollProgress > 0.5) {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        navbar.classList.add('backdrop-blur-[2px]');
      }
    } else {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        navbar.classList.remove('backdrop-blur-[2px]');
      }
    }

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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className=" bg-teal-950/25 min-h-screen w-full border-t-2 border-teal-500 overflow-x-hidden">

      <div className="fixed top-1/2 right-4 z-50">
        <button
          onClick={() => changeLanguage(language === 'fr' ? 'en' : 'fr')}
          className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all backdrop-blur-sm"
        >
          {language === 'fr' ? 'FR' : 'EN'}
        </button>
      </div>

      <main className="w-full max-w-full h-full">
        {/* First block ----------------------------------------------------------------------------------*/}
        <div className="sm:h-[500px] sm:w-full sm:flex sm:items-center " >
          <div 
            className="relative sm:py-0 py-10 overflow-hidden z-10 sm:w-5/12 sm:h-full w-full flex justify-center items-center duration-400 ease-out"
            style={{ transform: `translateY(${-getTranslateY(150)}px)` }} 
          >
            <div className="bg-teal-950/25 profil border-2 border-teal-500 md:w-72 md:h-72 w-40 h-40 rounded-full rotate-x-90 p-2">
              <div className="w-full h-full rounded-full border-4 border-teal-500 bg-black" >
                <Image className='w-full rounded-t-full rounded-br-full border-l-2 border-b-2' src={"/images/steve_profil.jpg"} width={1000} height={1000} alt='steve_profil' ></Image>

              </div>
            </div>
            <div className="absolute rotate-[48deg] top-[210px] -z-10 " >
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
            <div className="sm:w-full w-5/6 h-full flex justify-start items-center" >
              <div>
                <div className="sm:text-5xl text-2xl sm:font-semibold " >
                  <div className="text-8xl" >
                    <span className="text-teal-500" >S</span>teve 
                  </div>
                  <div>
                    Rasoafanirindrai<span className="text-orange-500" >be</span>;
                  </div>
                </div>
                <div className=" py-3 sm:text-3xl italic text-xl ">
                  {t("hero.title")}<span className="clignoter" >_</span>
                </div>
                <div className="w-full flex justify-evenly py-4" >
                  <div className="py-2 px-3 rounded-xl bg-teal-500 italic text-black font-bold" >@Contact</div>
                  <div className="py-2 px-3 bg-teal-500/10 rounded-xl" >{t("hero.download")}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative sm:w-3/12 overflow-hidden w-full h-full">
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
          className="bg-black w-full sm:min:h-96 rounded-t-[250_80] shadow-glow-teal transition-all duration-400 ease-out"
          style={{ transform: `translateY(${-getTranslateY(150)}px)` }}
        >
          <div className='h-full w-full flex px-24 py-20' >
            <AnimatedSection  className='w-1/2' direction='scale' threshold={0.4} duration={1}>
            <div>
              <div className='py-10' >
                <div className='text-4xl pb-6 indent-16 underline-rounded' >
                  <span className="text-orange-500">&lt;</span>
                  <span>{t("about.title")}</span>
                  <span className="text-orange-500">/&gt;</span>
                </div>
                <p className='text-sm leading-6 indent-8 text-justify ' >{t("about.description")}</p>
              </div>
              <div className='flex justify-evenly py-10 border-t-2 ' >
                <div className="flex flex-col items-center">
                  <SiHtml5 className="text-4xl" />
                </div>
                <div className="flex flex-col items-center">
                  <SiCss3 className="text-4xl" />
                </div>
                <div className="flex flex-col items-center">
                  <SiTailwindcss className="text-4xl" />
                </div>
                <div className="flex flex-col items-center">
                  <SiBootstrap className="text-4xl" />
                </div>
                <div className="flex flex-col items-center">
                  <SiNextdotjs className="text-4xl " />
                </div>
                <div className="flex flex-col items-center">
                  <SiReact className="text-4xl " />
                </div>
                <div className="flex flex-col items-center">
                  <SiSpringboot className="text-4xl" />
                </div>
                <div className="flex flex-col items-center">
                  <SiPostgresql className="text-4xl " />
                </div>
              </div>
            </div>
            </AnimatedSection>

            <AnimatedSection direction='left' threshold={0.4} duration={1}>

              <div className='pl-16 py-10' >
                <Image src={"/images/image-2.png"} alt='image-ordinateur' width={450} height={400} className='rounded-3xl'/>
              </div>
          </AnimatedSection>
          </div>


          {/* SB - first block ----------------------------------------------------------------------------------*/}
          <div className='w-full h-full py-10 px-24' >
            <div className='w-full h-96 flex justify-evenly' >

              <AnimatedSection direction='right' threshold={0.4} duration={0.8} className="w-1/4 h-full pr-4">
                <div className='h-full px-4 py-6 group border-4 border-dotted rounded-[40px] border-teal-500 hover:border-solid text-center transition-all duration-700' >
                  <div className='w-full relative flex justify-center py-4 group-hover:scale-105 transition-all duration-700'>
                    <FaLaptopCode size={140} ></FaLaptopCode>
                    <FaUserAlt size={80} className='text-teal-500' ></FaUserAlt>
                  </div>
                  <div className='py-2' >
                    <div className='pb-2 text-white' >UI/U<span className='text-orange-500' >X</span></div>
                    <p className='text-sm text-justify indent-6' >{t("descriptions.uiux")}</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction='scale' duration={0.8} className='w-1/2 h-full pr-4' >
                <div className='h-full px-4 py-6 group border-4 border-dotted rounded-[40px] border-teal-500> text-center transition-all duration-700' >
                  <div className='w-full relative flex justify-evenly py-4 group-hover:scale-110 transition-all duration-700'>
                    <FaUniversity size={100} ></FaUniversity>
                    <FaUserGraduate size={90} className='text-teal-500' ></FaUserGraduate>
                    <FaBookOpen size={100} className='' ></FaBookOpen>
                  </div>
                  <div className='py-2' >
                    <div className='pb-2 text-white' >Academic<span className='text-orange-500' > Training </span></div>
                    <p className='text-sm text-justify indent-6' >{t("descriptions.academic")}</p>
                  </div>
                </div>
              </AnimatedSection>

              <div className='w-1/4 h-full' >
                <AnimatedSection direction='down' threshold={0.7} duration={0.8} className='h-1/2 pb-4' >
                  <div className='h-full px-4 py-6 flex items-center group border-4 border-dotted border-teal-500 rounded-[40px] border-teal-500> text-center transition-all duration-700' >
                    <div>
                      <FaNetworkWired size={60} className='mx-2' ></FaNetworkWired>
                    </div>
                    <div className='' >
                      <div className='pb-2 text-white text-left indent-6 group-hover:scale-105 transition-all duration-700' ><span className='text-orange-500' >N</span>etworks </div>
                      <div className='text-sm indent-6 text-justify' >{t("descriptions.networks")}</div>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection direction='up' threshold={0.1} duration={0.8}  className='h-1/2' >
                  <div className='h-full px-4 py-6 flex items-center group border-4 border-dotted rounded-[40px] border-teal-500> text-center transition-all duration-700' >
                    <div>
                      <FaRobot size={60} className='mx-2' ></FaRobot>
                    </div>
                    <div className='' >
                      <div className='pb-2 text-white group-hover:scale-105 transition-all duration-700' >Artificial Inteligence<span className='text-orange-500' > IA</span> </div>
                      <div className='text-sm indent-6 text-justify' >{t("descriptions.ai")}</div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>


          {/* SB - second block ---------------------------------------------------------------------------------*/}
          <section id="projects"></section>

          <AnimatedSection threshold={0.1} duration={0.8} className='w-full h-full py-20' >
            <div className='h-full w-full text-4xl text-center underline-rounded' >
              <span className="text-orange-500">&lt;</span>
              <span>Portfolio</span>
              <span className="text-orange-500">/&gt;</span>
              <div className="text-sm text-gray-700 py-3">{t("projects.subtitle")}</div>
            </div>
            <div className="bg-gradient-to-b from-black to-teal-900/50 px-24">
              <div className='w-full pt-20' >
                <div className='w-full flex justify-center '>
                  {/* Image make a move */}
                  <AnimatedSection direction='left' threshold={0.5} delay={0.5} duration={1.5} className="relative w-[520] h-[292] bg-teal-500 overflow-hidden rounded-l-xl shadow-2xl mx-16">
                    <div className="relative w-full h-full">  
                      {images.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                            index === currentIndex
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
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                          }`}
                          onClick={() => setCurrentIndex(index)}
                        />
                      ))}
                    </div>
                  </AnimatedSection>
                  <div className='h-96 w-3 bg-white border-r-4 border-teal-500 rounded-tr-[50px] rounded-bl-[50px]' ></div>
                  <div className=" w-[400] pt-8 ">
                    <div className='border-l-[30px] border-teal-500 px-3 ' >
                      <div className="text-xl uppercase ">{t("projects.project")}</div>
                      <div className='w-full flex items-center text-sm ' >
                        <FaClock size={14} ></FaClock>
                        <div className='px-2' >{t("projects.date")}</div>
                      </div>
                    </div>

                    <AnimatedSection direction='left' threshold={0.7} delay={0.5} duration={1.5}>
                      <div className='py-8 px-4' >
                        {/* <div className='flex px-5 pb-3 text-lg ' ><FaLaptop size={24} className='mx-2 mt-[2px] ' /> Description</div> */}
                        <p className='text-sm leading-6 text-justify indent-6' >Une application web pour la gestion des formations et ressource humaine de l'EMIT Business Hub. Elle a pour but de ... Lorem ipsum dolor sit amet consectetur adipisiciisicing elit. Tempora, officiis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At earum harum facere aperiam sint non.</p>
                      </div>

                      <div className=' px-4'>
                        
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >NextJs</span>
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >PostgreSQL</span>
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >Tailwind</span>
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >Drizzle_ORM</span>
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >+2</span>

                      </div>
                      <div className="w-full flex justify-evenly mt-8 px-4">
                        <button
                          onClick={() => showAlert("Le code est securisé", "error")}
                          className='flex justify-center group py-2 px-3 bg-black/30  border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer' 
                        >
                          <FaGithub className='mt-1 group-hover:w-0 transition-all duration-700 ease-out' ></FaGithub> 
                          <div className='text-sm pl-2 group-hover:pl-0 transition-all duration-700 ease-out' >{t('projects.viewCode')} </div>
                        </button>
                        <button
                          className='flex justify-center group py-2 px-3 bg-black/30  border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer' 
                        >
                          <FaEye className='mt-1 group-hover:w-0 transition-all duration-700 ease-out' ></FaEye> 
                          <div className='text-sm pl-2 group-hover:pl-0 transition-all duration-700 ease-out' >{t('projects.viewProject')}</div>
                        </button>           
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </div>

              <div className='w-full h-full ' >
                <div className='w-full h-full flex justify-center'>

                  <div className=" w-[400]">
                    <div  className='w-full flex justify-end' >
                      <div className='border-r-[30px] border-white px-3 ' >
                        <div className="text-xl uppercase ">Project de stage</div>
                        <div className='w-full flex items-center justify-end text-sm  ' >
                          <FaClock size={14} ></FaClock>
                          <div className='px-2' >16 Jui. - 12 Jul. 2025</div>
                        </div>
                      </div>
                    </div>

                    <AnimatedSection direction='right' threshold={0.7} delay={0.5} duration={1.5}>
                      <div className='w-full py-8 px-4' >
                        <p className='text-sm leading-6 text-justify indent-6' >Une application web pour la gestion des formations et ressource humaine de l'EMIT Business Hub. Elle a pour but de ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, amet? Lorem ipsum Tempora, officiis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At earum harum facere aperiam sint non.</p>
                      </div>
                      <div className=' px-4'>
                        
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >NextJs</span>
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >PostgreSQL</span>
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >Tailwind</span>
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >Drizzle_ORM</span>
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >+2</span>

                      </div>
                      <div className="w-full flex justify-evenly mt-8 px-4">
                        <button
                          className='flex justify-center group py-2 px-3 bg-black/30  border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer' 
                        >
                          <FaGithub className='mt-1 group-hover:w-0 transition-all duration-700 ease-out' ></FaGithub> 
                          <div className='text-sm pl-2 group-hover:pl-0 transition-all duration-700 ease-out' >{t('projects.viewCode')} </div>
                        </button>
                        <button
                          className='flex justify-center group py-2 px-3 bg-black/30  border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer' 
                        >
                          <FaEye className='mt-1 group-hover:w-0 transition-all duration-700 ease-out' ></FaEye> 
                          <div className='text-sm pl-2 group-hover:pl-0 transition-all duration-700 ease-out' >{t('projects.viewProject')}</div>
                        </button>           
                      </div>
                    </AnimatedSection>

                      
                  </div>

                  <div className='h-96 w-3 bg-white border-r-4 border-teal-500 rounded-tr-[50px] rounded-bl-[50px]' ></div>

                  {/* Image make a move */}
                  <AnimatedSection direction='right' threshold={0.7} delay={0.5} duration={1.5} className='h-[384px] flex items-end px-16 ' >
                    <div className="relative w-[520] h-[292] bg-teal-500 overflow-hidden rounded-r-xl shadow-2xl">
                      <div className="relative w-full h-full">
                        {images.map((image, index) => (
                          <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                              index === currentIndex
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
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                            }`}
                            onClick={() => setCurrentIndex(index)}
                          />
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>

                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-teal-900/50 to-black px-24">
              <div className='w-full pt-20' >
                <div className='w-full flex justify-center '>
                  {/* Image make a move */}
                  <AnimatedSection direction='left' threshold={0.7} delay={0.5} duration={2} className="relative w-[520] h-[292] bg-teal-500 overflow-hidden rounded-l-xl shadow-2xl mx-16">
                    <div className="relative w-full h-full">  
                      {images.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                            index === currentIndex
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
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                          }`}
                          onClick={() => setCurrentIndex(index)}
                        />
                      ))}
                    </div>
                  </AnimatedSection>
                  <div className='h-96 w-3 bg-white border-r-4 border-teal-500 rounded-tr-[50px] rounded-bl-[50px]' ></div>
                  <div className=" w-[400] pt-8 ">
                    <div className='border-l-[30px] border-teal-500 px-3 ' >
                      <div className="text-xl uppercase ">Project de stage</div>
                      <div className='w-full flex items-center text-sm ' >
                        <FaClock size={14} ></FaClock>
                        <div className='px-2' >16 Jui. - 12 Jul. 2025</div>
                      </div>
                    </div>

                    <AnimatedSection direction='left' threshold={0.7} delay={0.5} duration={2}>
                      <div className='py-8 px-4' >
                        {/* <div className='flex px-5 pb-3 text-lg ' ><FaLaptop size={24} className='mx-2 mt-[2px] ' /> Description</div> */}
                        <p className='text-sm leading-6 text-justify indent-6' >Une application web pour la gestion des formations et ressource humaine de l'EMIT Business Hub. Elle a pour but de ... Lorem ipsum dolor sit amet consectetur adipisiciisicing elit. Tempora, officiis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At earum harum facere aperiam sint non.</p>
                      </div>

                      <div className=' px-4'>
                        
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >NextJs</span>
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >PostgreSQL</span>
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >Tailwind</span>
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >Drizzle_ORM</span>
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >+2</span>

                      </div>
                      <div className="w-full flex justify-evenly mt-8 px-4">
                        <button
                          onClick={() => showAlert("Le code est securisé", "error")}
                          className='flex justify-center group py-2 px-3 bg-black/30  border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer' 
                        >
                          <FaGithub className='mt-1 group-hover:w-0 transition-all duration-700 ease-out' ></FaGithub> 
                          <div className='text-sm pl-2 group-hover:pl-0 transition-all duration-700 ease-out' >{t('projects.viewCode')} </div>
                        </button>
                        <button
                          className='flex justify-center group py-2 px-3 bg-black/30  border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer' 
                        >
                          <FaEye className='mt-1 group-hover:w-0 transition-all duration-700 ease-out' ></FaEye> 
                          <div className='text-sm pl-2 group-hover:pl-0 transition-all duration-700 ease-out' >{t('projects.viewProject')}</div>
                        </button>           
                      </div>
                    </AnimatedSection>




                  </div>

                </div>
              </div>

              <div className='w-full h-full ' >
                <div className='w-full h-full flex justify-center'>

                  <div className=" w-[400]">
                    <div  className='w-full flex justify-end' >
                      <div className='border-r-[30px] border-white px-3 ' >
                        <div className="text-xl uppercase ">Project de stage</div>
                        <div className='w-full flex items-center justify-end text-sm  ' >
                          <FaClock size={14} ></FaClock>
                          <div className='px-2' >16 Jui. - 12 Jul. 2025</div>
                        </div>
                      </div>
                    </div>

                    <AnimatedSection direction='right' threshold={0.7} delay={0.5} duration={2}>
                      <div className='w-full py-8 px-4' >
                        <p className='text-sm leading-6 text-justify indent-6' >Une application web pour la gestion des formations et ressource humaine de l'EMIT Business Hub. Elle a pour but de ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, amet? Lorem ipsum Tempora, officiis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At earum harum facere aperiam sint non.</p>
                      </div>
                      <div className=' px-4'>
                        
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >NextJs</span>
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >PostgreSQL</span>
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >Tailwind</span>
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >Drizzle_ORM</span>
                        <span className='w-full px-2 py-1 bg-teal-500/15 rounded-full text-[13px] mr-2' >+2</span>

                      </div>
                      <div className="w-full flex justify-evenly mt-8 px-4">
                        <button
                          className='flex justify-center group py-2 px-3 bg-black/30  border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer' 
                        >
                          <FaGithub className='mt-1 group-hover:w-0 transition-all duration-700 ease-out' ></FaGithub> 
                          <div className='text-sm pl-2 group-hover:pl-0 transition-all duration-700 ease-out' >{t('projects.viewCode')} </div>
                        </button>
                        <button
                          className='flex justify-center group py-2 px-3 bg-black/30  border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer' 
                        >
                          <FaEye className='mt-1 group-hover:w-0 transition-all duration-700 ease-out' ></FaEye> 
                          <div className='text-sm pl-2 group-hover:pl-0 transition-all duration-700 ease-out' >{t('projects.viewProject')} </div>
                        </button>           
                      </div>
                    </AnimatedSection>

                      
                  </div>

                  <div className='h-96 w-3 bg-white border-r-4 border-teal-500 rounded-tr-[50px] rounded-bl-[50px]' ></div>

                  {/* Image make a move */}
                  <AnimatedSection direction='right' threshold={0.7} delay={0.5} duration={2} className='h-[384px] flex items-end px-16 ' >
                    <div className="relative w-[520] h-[292] bg-teal-500 overflow-hidden rounded-r-xl shadow-2xl">
                      <div className="relative w-full h-full">
                        {images.map((image, index) => (
                          <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                              index === currentIndex
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
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                            }`}
                            onClick={() => setCurrentIndex(index)}
                          />
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>

                </div>
              </div>
            </div>

          </AnimatedSection>
        </div>

        {/* Third block -----------------------------------------------------------------------------------------*/}
        <div className='relative h-[80%] w-full px-20 ' >
          <section id='skills' className='absolute -top-36' ></section>
          <AnimatedSection direction='scale' threshold={0.3} delay={0.1} duration={1} >
            <div className='h-full w-full transform -translate-y-16 text-4xl text-center underline-rounded' >
              <span className="text-orange-500">&lt;</span>
              <span>Skills</span> 
              <span className="text-orange-500">/&gt;</span>
              <div className="text-sm text-gray-700 py-3">Présentation de mes compétences.</div>
            </div>
          </AnimatedSection>

          <div className='w-full sm:h-96 h-full transform -translate-y-10' >
              <div className="w-full h-full sm:flex sm:justify-evenly">
                <AnimatedSection  direction='left' threshold={0.3} delay={0.1} duration={1} className="w-[360px] p-2 bg-black rounded-xl">
                  <div className='w-full flex justify-between px-3' >
                    <div className='' >Explorer</div>
                    <div className='flex ' >
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-1 mt-1"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1 mt-1"></div>
                      <div className="w-3 h-3 rounded-full bg-indigo-500 mr-1 mt-1"></div>
                    </div>
                  </div>
                  <div className='h-[90%] w-full ' >
                    <div className='p-6 grid grid-cols-4 gap-4' >
                      <div className='relative flex flex-col justify-center items-center' >
                        <FaFolder className='text-5xl text-teal-500' ></FaFolder>
                        <SiNextdotjs className='text-xl absolute top-4 left-4 text-black' ></SiNextdotjs>
                        <span>Next</span>
                      </div>
                      <div className='relative flex flex-col justify-center items-center' >
                        <FaFolder className='text-5xl text-teal-500' ></FaFolder>
                        <SiReact className='text-xl absolute top-4 left-4 text-black' ></SiReact>
                        <span>React</span>
                      </div>
                      <div className='relative flex flex-col justify-center items-center' >
                        <FaFolder className='text-5xl text-teal-500' ></FaFolder>
                        <SiTailwindcss className='text-xl absolute top-4 left-4 text-black' ></SiTailwindcss>
                        <span>Tailwind</span>
                      </div>
                      <div className='relative flex flex-col justify-center items-center' >
                        <FaFolder className='text-5xl text-teal-500' ></FaFolder>
                        <SiJavascript className='text-xl absolute top-4 left-4 text-black' ></SiJavascript>
                        <span>Javascript</span>
                      </div>
                      <div className='relative flex flex-col justify-center items-center' >
                        <FaFolder className='text-5xl text-teal-500' ></FaFolder>
                        <SiTypescript className='text-xl absolute top-4 left-4 text-black' ></SiTypescript>
                        <span>Typescript</span>
                      </div>
                      <div className='relative flex flex-col justify-center items-center' >
                        <FaFolder className='text-5xl text-teal-500' ></FaFolder>
                        <SiAngular className='text-xl absolute top-4 left-4 text-black' ></SiAngular>
                        <span>Angular</span>
                      </div>
                      <div className='relative flex flex-col justify-center items-center' >
                        <FaFolder className='text-5xl text-teal-500' ></FaFolder>
                        <SiHtml5 className='text-xl absolute top-4 left-4 text-black' ></SiHtml5>
                        <span>Html5</span>
                      </div>
                      <div className='relative flex flex-col justify-center items-center' >
                        <FaFolder className='text-5xl text-teal-500' ></FaFolder>
                        <SiCss3 className='text-xl absolute top-4 left-4 text-black' ></SiCss3>
                        <span>Css3</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection direction='left' threshold={0.3} delay={0.4} duration={1} className="w-[360px] p-2 bg-black rounded-xl">
                  <div className='w-full flex justify-between px-3' >
                    <div className='' >Terminal</div>
                    <div className='flex ' >
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-1 mt-1"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1 mt-1"></div>
                      <div className="w-3 h-3 rounded-full bg-indigo-500 mr-1 mt-1"></div>
                    </div>
                  </div>
                  <div className='h-[90%] bg-gray-950 pt-4' >
                    <code className='' >
                      <div className='pb-2' >
                        <span className='text-orange-500 font-bold text-[18px]' >/hardskills</span><span className='text-teal-500 font-bold text-[18px]' >/backend&gt;</span>  show --all
                      </div>
                      <div>├── Frameworks&Runtime</div>
                      <div className='' >│    ├── Next.js <span className='text-gray-500' >@20.0.0</span> </div>
                      <div className='' >│    ├── SpringBoot.java <span className='text-gray-500' >@4.06.0</span></div>
                      <div className='' >│    ├── Laravel.php <span className='text-gray-500' >@8.11.0</span></div>
                      <div className='' >│    ├── Express.js <span className='text-gray-500' >@4.18.0</span></div>
                      <div className='' >│    └── Python.py <span className='text-gray-500' >@3.11.0</span></div>
                      <div>├── Databases</div>
                      <div className='' >│    ├── PostgreSQL.sql <span className='text-gray-500' >@15.3</span></div>
                      <div className='' >│    └── MySQL.sql <span className='text-gray-500' >@8.0.32</span></div>


                    </code>

                  </div>
                </AnimatedSection> 
                <AnimatedSection direction='left' threshold={0.3} delay={0.7  } duration={1} className="w-[360px] p-2 bg-teal-950 rounded-xl">
                  <div className='w-full flex justify-between px-3' >
                    <div className='' >VS Code</div>
                    <div className='flex ' >
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-1 mt-1"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1 mt-1"></div>
                      <div className="w-3 h-3 rounded-full bg-indigo-500 mr-1 mt-1"></div>
                    </div>
                  </div>
                  <div className='h-[90%] bg-black pt-4 p-2' >
                    <code className='text-sm'>
                      <div className=''>&lt;html&gt;</div>
                      <div className='pl-4'>&lt;body&gt;</div>
                      
                      <div className='pl-8'>&lt;Title&gt; <span className='text-[18px] font-bold'>SoftSkills</span> &lt;/Title&gt;</div>
                      <div className='pl-8'>&lt;li&gt;</div>
                      <div className='pl-12'> &lt;ul&gt; <span className='font-bold'>Travail en equipe </span>&lt;/ul&gt;</div>
                      <div className='pl-12'> &lt;ul&gt; <span className='font-bold'>Communication </span>&lt;/ul&gt;</div>
                      <div className='pl-12'> &lt;ul&gt; <span className='font-bold'>Conception de S.I </span>&lt;/ul&gt;</div>
                      <div className='pl-12'> &lt;ul&gt; <span className='font-bold'>Algorithme </span>&lt;/ul&gt;</div>
                      <div className='pl-12'> &lt;ul&gt; <span className='font-bold'>Adaptabilite </span>&lt;/ul&gt;</div>
                      <div className='pl-12'> &lt;ul&gt; <span className='font-bold'>Resolution des problemes </span>&lt;/ul&gt;</div>

                      <div className='pl-8'>&lt;/li&gt;</div>

                      <div className='pl-4'>&lt;/body&gt;</div>
                      <div className=''>&lt;/html&gt;</div>
                    </code>
                  </div>
                </AnimatedSection>        
              </div>
          </div>
        </div>
        
        <footer id='contacts' className='footer h-screen ' >
          <div className='footer-section w-full h-[90%] flex justify-center items-center rounded-b-[50%]' >
            <div>
              <AnimatedSection direction='scale' threshold={0.3} delay={0.1} duration={0.8}>
                <div className='text-4xl text-center pb-3' >
                  <span className="text-orange-500">&lt;</span>
                  <span>Contact</span> 
                  <span className="text-orange-500">/&gt;</span>
                </div>
                <div className='text-center pb-14 text-sm text-gray-300' >N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.</div>
              </AnimatedSection>

              <AnimatedSection direction='up' threshold={0.1} delay={0.3} duration={0.3} className='flex justify-center py-2'> 
                <button 
                  className='flex justify-center group py-2 px-3 bg-black/30 border-2 border-white rounded-full hover:bg-teal-500 hover:text-black hover:border-teal-500 transition-all duration-700 ease-out cursor-copy'
                  onClick={handleCopy()}
                >
                  <FaEnvelope className='mt-1 group-hover:w-0 transition-all duration-700 ease-out' ></FaEnvelope>
                  <div className='text-sm pl-2 group-hover:pl-0 transition-all duration-700 ease-out' >steveshannyrasoafanirindraibe@gmail.com </div>
                  <FaStar className='w-0 h-2 group-hover:w-2 transition-all duration-700 ease-out' ></FaStar>

                </button>
              </AnimatedSection>
              <AnimatedSection direction='up' threshold={0.1} delay={0.6} duration={0.3} className=' flex justify-center py-2' > 
                <a 
                  href='https://fr.linkedin.com/'
                  className='flex justify-center group py-2 px-3 bg-black/30  border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer' 
                >
                  <FaLinkedin className='mt-1 group-hover:w-0 transition-all duration-700 ease-out' ></FaLinkedin> 
                  <div className='text-sm pl-2 group-hover:pl-0 transition-all duration-700 ease-out' >Steve Shanny Rasoafanirindraibe </div>
                </a>
              </AnimatedSection>
              <AnimatedSection direction='up' threshold={0.1} delay={0.8} duration={0.2} className=' flex justify-center py-2' > 
                <a 
                  href='https://github.com/steverasoafanirindraibe' 
                  className='flex justify-center group py-2 px-3 bg-black/30 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer' 
                >
                  <FaGithub className='mt-1 group-hover:w-0 transition-all duration-700 ease-out' ></FaGithub> 
                  <div className='text-sm pl-2 group-hover:pl-0 transition-all duration-700 ease-out' >steve_rasoafanirindraibe </div>
                </a>
              </AnimatedSection>
              <AnimatedSection direction='scale' threshold={0.1} delay={1} duration={0.1}>
                <div className='w-full flex justify-center py-2' > 
                  <FaGlobe className='mt-1 mx-2' ></FaGlobe> 
                  <div className='text-sm' >Remote Worldwide</div>
                </div>
                <div className='w-full flex justify-center pb-3' >- <FaStarHalfAlt className='text-xl mx-2' ></FaStarHalfAlt> -</div>
              </AnimatedSection>

            </div>
          </div>
          <div className='w-full h-[10%] flex justify-center items-center' >
            <div className="text-black text-sm">
              <p>&copy; 2024 <strong>Steve Rasoafanirindraibe</strong>. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
