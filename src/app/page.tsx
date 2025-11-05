
export default function Home() {
  return (
    <div className=" bg-teal-950/25 h-full w-screen font-[family-name:var(--font-geist-sans)] border-t-2 border-teal-500">
      <main className="h-full w-full">
        <div className="sm:h-[500px] sm:w-full sm:flex sm:items-center " >
          <div className="relative sm:py-0 py-10 overflow-hidden z-10 sm:w-5/12 sm:h-full w-full   flex justify-center items-center" >
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
                <div className="sm:text-4xl text-2xl text-center sm:font-semibold " >
                  <span className="text-teal-500" >`S</span>teve <span className="text-teal-500" >R</span>asoafanirindraibe<span className="text-teal-500" >.</span>
                </div>
                <div className=" py-3 sm:text-3xl italic text-xl ">
                  FullStack_Developer<span className="clignoter" >_</span>
                </div>
                <div className="w-full flex justify-evenly py-4" >
                  <div className="py-2 px-3 rounded-xl bg-teal-500 italic text-black font-bold" >@Contact</div>
                  <div className="py-2 px-3 bg-teal-500/10 rounded-xl" >Download resume</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative sm:w-3/12 overflow-hidden w-full h-full" >
            <div className="absolute -z-10 bg-teal-500 h-16 w-[500px] rotate-[48deg]" ></div>
            <div className="absolute -z-10 top-24 bg-teal-500 h-1 w-[500px] rotate-[48deg]" ></div>
            <div className="ml-16" >
              <a href="#" className="w-20 flex justify-center  text-sm py-2 pt-4 rounded-b-2xl border-b-4 border-l-2 border-b-teal-500 hover:bg-gradient-to-t from-teal-500/30 to-black/0 hover:scale-125 transition-all duration-800 ease-in-out" >Projects</a>
              <a href="#" className="w-20 flex justify-center ml-10 mt-1 text-sm py-2 pt-3 rounded-b-2xl border-b-4 border-l-2 border-b-teal-500 hover:bg-gradient-to-t from-teal-500/30 to-black/0 hover:scale-125 transition-all duration-800 ease-in-out" >Skills</a>
              <a href="#" className="w-20 flex justify-center ml-20 mt-1 text-sm py-2 pt-3 rounded-b-2xl border-b-4 border-l-2 border-b-teal-500 hover:bg-gradient-to-t from-teal-500/30 to-black/0 hover:scale-125 transition-all duration-800 ease-in-out" >Project</a>

            </div>
          
            {/* <div className="w-52 h-64 ml-16 rounded-l-full bg-black mt-32 z-20" ></div> */}
          </div>

        </div>
      </main>

    </div>
  );
}
