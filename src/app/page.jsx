
"use client"
import {useScroll } from './hooks/useScroll';
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
} from 'react-icons/si';
import { FaAppStore, FaBookDead, FaBookOpen, FaCertificate, FaCheck, FaClock, FaCode, FaFolder, FaGraduationCap, FaHome, FaIdBadge, FaLaptop, FaLaptopCode, FaNetworkWired, FaProjectDiagram, FaRobot, FaRProject, FaStar, FaStarOfDavid, FaTimes, FaUikit, FaUniversity, FaUser, FaUserAlt, FaUserCheck, FaUserGraduate, FaWallet, FaWarehouse } from 'react-icons/fa';
import Image from 'next/image';
import { FaBagShopping, FaBook, FaBookAtlas, FaBookQuran, FaTimeline, FaUpwork, FaVault, FaWebAwesome, FaWebflow } from 'react-icons/fa6';
import { useState,useEffect } from 'react';

export default function Home() {

  const scrollProgress = useScroll();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/projects/ebh-1.png',
    '/projects/ebh-2.png',
  ];


  const getOffset = (baseOffset) => {
    console.log(scrollProgress)
    return baseOffset * (1 - scrollProgress);
  };

  const getTranslateY = (baseOffset) => {
    return baseOffset * scrollProgress;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className=" bg-teal-950/25 min-h-screen w-full border-t-2 border-teal-500 overflow-x-hidden">
      <main className="w-full max-w-full">

        {/* First block ----------------------------------------------------------------------------------*/}
        <div className="sm:h-[500px] sm:w-full sm:flex sm:items-center " >
          <div 
            className="relative sm:py-0 py-10 overflow-hidden z-10 sm:w-5/12 sm:h-full w-full flex justify-center items-center duration-400 ease-out"
            style={{ transform: `translateY(${-getTranslateY(150)}px)` }} 
          >
            <div className="bg-teal-950/25 profil border-2 border-teal-500 md:w-72 md:h-72 w-40 h-40 rounded-full rotate-x-90 p-2">
              <div className="w-full h-full rounded-full border-4 border-teal-500 bg-black" ></div>
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
                  FullStack_Developper<span className="clignoter" >_</span>
                </div>
                <div className="w-full flex justify-evenly py-4" >
                  <div className="py-2 px-3 rounded-xl bg-teal-500 italic text-black font-bold" >@Contact</div>
                  <div className="py-2 px-3 bg-teal-500/10 rounded-xl" >Download resume</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative sm:w-3/12 overflow-hidden w-full h-full">
            <div className="absolute -z-10 bg-teal-500 h-16 w-[500px] rotate-[48deg]"></div>
            <div className="absolute -z-10 top-24 bg-teal-500 h-1 w-[500px] rotate-[48deg]"></div>
            <div className="fixed ml-52 transition-all duration-300 ease-out z-50" 
                style={{ transform: `translateX(${-getOffset(160)}px)` }}>
              <a href="#" 
                className="w-20 flex justify-center text-sm py-2 pt-4 rounded-b-2xl border-b-4  border-b-teal-500 relative overflow-hidden group hover:scale-125 transition-all duration-300 ease-in-out"
                style={{ marginLeft: `${getOffset(0)}px` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out"></div>  
                <span className="relative z-10">Projects</span>
              </a>          
              <a href="#" 
                className="w-20 flex justify-center mt-1 text-sm py-2 pt-3 rounded-b-2xl border-b-4 border-b-teal-500 relative overflow-hidden group hover:scale-125 transition-all duration-200 ease-in-out"
                style={{ marginLeft: `${getOffset(40)}px` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out"></div>
                <span className="relative z-10">Skills</span>
              </a>
              <a href="#" 
                className="w-20 flex justify-center mt-1 text-sm py-2 pt-3 rounded-b-2xl border-b-4 border-b-teal-500 relative overflow-hidden group hover:scale-125 transition-all duration-100 ease-in-out"
                style={{ marginLeft: `${getOffset(80)}px` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out"></div>
                <span className="relative z-10">Project</span>
              </a>
            </div>
          </div>  
        </div>

        {/* Second block ---------------------------------------------------------------------------------*/}
        <div 
          className="bg-black w-full sm:min:h-96 rounded-t-[250_80] shadow-glow-teal transition-all duration-400 ease-out"
          style={{ transform: `translateY(${-getTranslateY(150)}px)` }}
        >
          <div className='h-full w-full flex px-24 py-20' >
            <div className='w-1/2'>
              <div className='py-10' >
                <div className='text-4xl pb-6 indent-16 underline-rounded' >
                  <span className="text-orange-500">&lt;</span>
                  <span>About_me</span> 
                  <span className="text-orange-500">/&gt;</span>
                </div>
                <p className='text-sm leading-6 indent-8 text-justify ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, assumenda quam nam sint ipsum aperiam delectus debitis commodi nulla rem fugiat consequatur, mollitia molestias! Eaque excepturi fugit animi numquam temporibus ab rerum expedita id aliquam quibusdam optio nemo exercitationem delectus odit, cupiditate aperiam, quo ducimus? Repellat, hic vel? Odit, esse?</p>
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
            <div className=''>
              <div className='pl-16 py-10' >
                <Image src={"/images/image-2.png"} alt='image-ordinateur' width={450} height={400} className='rounded-3xl'/>
              </div>
            </div>  
          </div>
        </div>
        {/* third block ----------------------------------------------------------------------------------*/}
        <div className='w-full h-full  py-10 px-24' >
          <div className='w-full h-96 flex justify-evenly' >

            <div className="w-1/4 h-full pr-4">
              <div className='h-full px-4 py-6 group border-4 border-dotted rounded-[40px] border-teal-500 hover:border-solid text-center transition-all duration-700' >
                <div className='w-full relative flex justify-center py-4 group-hover:scale-105 transition-all duration-700'>
                  <FaLaptopCode size={140} ></FaLaptopCode>
                  <FaUserAlt size={80} className='text-teal-500' ></FaUserAlt>
                </div>
                <div className='py-2' >
                  <div className='pb-2 text-white' >UI/U<span className='text-orange-500' >X</span></div>
                  <p className='text-sm text-justify indent-6' >Loremstrum Lorem ipsum dolor sit amet consectetur. quam quod ducimus molestiae, earum libero aliquam voluptate ea culpa!</p>
                </div>
              </div>
            </div>

            <div className='w-1/2 h-full pr-4' >
              <div className='h-full px-4 py-6 group border-4 border-dotted rounded-[40px] border-teal-500> text-center transition-all duration-700' >
                <div className='w-full relative flex justify-evenly py-4 group-hover:scale-110 transition-all duration-700'>
                  <FaUniversity size={100} ></FaUniversity>
                  <FaUserGraduate size={90} className='text-teal-500' ></FaUserGraduate>
                  <FaBookOpen size={100} className='' ></FaBookOpen>
                </div>
                <div className='py-2' >
                  <div className='pb-2 text-white' >Formation <span className='text-orange-500' >Academique</span></div>
                  <p className='text-sm text-justify indent-6' >Loremstrum Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, dicta. Lorem, ipsum Lorem ipsum dolor sit amet consectetu maiores quantium nostrum? dolor sit amet consectetur adipisicing elit. Autem, praesentium? Lorem ipsum dolor sit amet consectetur. quam quod ducimus molestiae, earum libero aliquam voluptate ea culpa!</p>
                </div>
              </div>
            </div>

            <div className='w-1/4 h-full' >
              <div className='h-1/2 pb-4' >
                <div className='h-full px-4 py-6 flex items-center group border-4 border-dotted border-teal-500 rounded-[40px] border-teal-500> text-center transition-all duration-700' >
                  <div>
                    <FaNetworkWired size={60} className='mx-2' ></FaNetworkWired>
                  </div>
                  <div className='' >
                    <div className='pb-2 text-white text-left indent-6 group-hover:scale-105 transition-all duration-700' ><span className='text-orange-500' >R</span>eseaux </div>
                    <div className='text-sm indent-6 text-justify' >Lorem ipsum dolor sit adffd</div>
                  </div>
                </div>
              </div>
              <div className='h-1/2' >
                <div className='h-full px-4 py-6 flex items-center group border-4 border-dotted rounded-[40px] border-teal-500> text-center transition-all duration-700' >
                  <div>
                    <FaRobot size={60} className='mx-2' ></FaRobot>
                  </div>
                  <div className='' >
                    <div className='pb-2 text-white group-hover:scale-105 transition-all duration-700' >Artificial Inteligence<span className='text-orange-500' > IA</span> </div>
                    <div className='text-sm indent-6 text-justify' >Lorem, ipsum dolor sit amet consectetur adipisicing el ut, tempore suscipit ex!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* fourth block ---------------------------------------------------------------------------------*/}
        <div className='w-full h-full bg-gradient-to-b from-black to-teal-950/50 py-20 px-24' >
          <div className='h-full w-full text-4xl text-center underline-rounded' >
            <span className="text-orange-500">&lt;</span>
            <span>Projects</span> 
            <span className="text-orange-500">/&gt;</span>
          </div>
          <div className='w-full pt-20' >
            <div className='w-full flex justify-center '>
              {/* Image make a move */}
              <div className="relative w-[520] h-[292] bg-teal-500 overflow-hidden rounded-l-xl shadow-2xl mx-16">
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
              <div className='h-96 w-3 bg-white border-r-4 border-teal-500 rounded-tr-[50px] rounded-bl-[50px]' ></div>
              <div className=" w-[400] pt-8 ">
                <div className='border-l-[30px] border-teal-500 px-3 ' >
                  <div className="text-xl uppercase ">Project de stage</div>
                  <div className='w-full flex items-center text-sm ' >
                    <FaClock size={14} ></FaClock>
                    <div className='px-2' >16 Jui. - 12 Jul. 2025</div>
                  </div>
                </div>

                <div className='py-8 px-4' >
                  <div className='flex px-5 pb-3 text-lg ' ><FaLaptop size={24} className='mx-2 mt-[2px] ' /> Description</div>
                  <p className='text-sm leading-6 text-justify indent-6' >Une application web pour la gestion des formations et ressource humaine de l'EMIT Business Hub. Elle a pour but de ... Lorem ipsum dolor sit amet consectetur adipisiciisicing elit. Tempora, officiis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At earum harum facere aperiam sint non.</p>
                </div>

                <div className=' px-4'>
                  <div className='flex px-5 pb-3 text-lg ' ><FaCode size={28} className='mx-1 mt-[1px] ' />Technology</div>
                  <div className="text-sm leading-6 indent-6">NextJs, TypeScript, PostegreSQL, Tailwind, React, CSS</div>
                </div>

              </div>
            </div>
          </div>
          <div className='w-full h-full pb-20 ' >
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


                <div className='w-full py-8 px-4' >
                  <div className='w-full flex justify-end px-7 pb-3 text-lg' ><FaLaptop size={24} className='mx-2 mt-[2px] ' /> Description</div>
                  <p className='text-sm leading-6 text-justify indent-6' >Une application web pour la gestion des formations et ressource humaine de l'EMIT Business Hub. Elle a pour but de ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, amet? Lorem ipsum Tempora, officiis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At earum harum facere aperiam sint non.</p>
                </div>

                <div className=' px-4'>
                  <div className='w-full flex justify-end px-7 pb-3 text-lg ' ><FaCode size={28} className='mx-1 mt-[1px] ' />Technology</div>
                  <div className="text-sm leading-6 indent-6 text-right">NextJs, TypeScript, PostegreSQL</div>
                </div>
                  
              </div>

              <div className='h-96 w-3 bg-white border-r-4 border-teal-500 rounded-tr-[50px] rounded-bl-[50px]' ></div>

              {/* Image make a move */}
              <div className='h-[384px] flex items-end px-16 ' >
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
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
