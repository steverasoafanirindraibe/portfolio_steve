
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
  SiMysql
} from 'react-icons/si';
import Image from 'next/image';

export default function Home() {

  const scrollProgress = useScroll();

  // Calcul des décalages basés sur le scroll
  const getOffset = (baseOffset) => {
    console.log(scrollProgress)
    // Réduit progressivement le décalage (0% à 100% de réduction)
    return baseOffset * (1 - scrollProgress);
  };

  const getTranslateY = (baseOffset) => {
    return baseOffset * scrollProgress;
  }


  return (
    <div className=" bg-teal-950/25 min-h-screen w-full border-t-2 border-teal-500 overflow-x-hidden">
      <main className="w-full max-w-full">
        <div className="sm:h-[500px] sm:w-full sm:flex sm:items-center " >
          <div 
            className="relative sm:py-0 py-10 overflow-hidden z-10 sm:w-5/12 sm:h-full w-full flex justify-center items-center duration-400 ease-out"
            style={{ transform: `translateY(${-getTranslateY(150)}px)` }} >

            <div className="g-teal-950/25 profil border-2 border-teal-500 md:w-72 md:h-72 w-40 h-40 rounded-full rotate-x-90 p-2">
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
                    Rasoafanirindrai<span className="text-teal-500" >be</span>;
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

        <div 
          className="bg-black w-full sm:min:h-96 rounded-t-[250_80] rounded-b-[250_80] shadow-glow-teal transition-all duration-400 ease-out"
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

                {/* CSS */}
                <div className="flex flex-col items-center">
                  <SiCss3 className="text-4xl" />
    
                </div>

                {/* Tailwind */}
                <div className="flex flex-col items-center">
                  <SiTailwindcss className="text-4xl" />
            
                </div>

                {/* Bootstrap */}
                <div className="flex flex-col items-center">
                  <SiBootstrap className="text-4xl" />
              
                </div>

                {/* Next.js */}
                <div className="flex flex-col items-center">
                  <SiNextdotjs className="text-4xl " />
          
                </div>

                {/* React */}
                <div className="flex flex-col items-center">
                  <SiReact className="text-4xl " />
      
                </div>

                {/* Spring Boot */}
                <div className="flex flex-col items-center">
                  <SiSpringboot className="text-4xl" />
                  
                </div>

                {/* PostgreSQL */}
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

          {/* Deuxieme block */}
          <div className='w-full h-full  py-10 px-24' >
            <div className='w-full h-full p' >
              <div className='w-full text-4xl text-center pb-6 indent-16 underline-rounded' >
                <span className="text-orange-500">&lt;</span>
                <span>Projects</span> 
                <span className="text-orange-500">/&gt;</span>
              </div>
              <p className='text-sm' ></p>
            </div>

          </div>
          
        </div>

      </main>


    </div>
  );
}
