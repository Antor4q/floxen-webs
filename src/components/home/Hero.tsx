"use client";


import { AuroraText } from "../shared/aurora";
import GlassButton from "./GlassButton";



const Hero = () => {
    return (
        <section className="relative w-full flex flex-col items-center text-center px-4 sm:px-6 pt-10 sm:pt-24 lg:pt-40">
           {/* <div className="absolute w-[300px] h-[300px] mx-auto rounded-full bg-gradient-to-r from-[#ff3c00] via-[#ff7800] to-[#ffb450] opacity-20 blur-[150px]"></div> */}
     {/* Badge */}
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400 backdrop-blur-xl">
  <div className="relative flex h-3 w-3 items-center justify-center">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500/30"></span>
    <span className="relative h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]"></span>
  </div>

  <span>MOTIONS DROPS EVERYDAY</span>
</div>

      {/* Heading */}
    <h1 className="text-6xl leading-16 font-bold">
             AI builds generic{" "}<br/>We make it 

              <AuroraText className="ml-2" speed={1} colors={["#d0c3fe","#C0AFFE","#8762F5","#A77DF3"]}>
                CINEMATIC
              </AuroraText>{" "}
             
            </h1>
  


   
      {/* Description */}
      <p className="max-w-2xl mt-4  text-zinc-400 text-sm sm:text-base lg:text-xl leading-relaxed px-2">
       Copy a prompt, paste it into your AI, and launch a site<br/> that doesn`t look AI-made.
      </p>
     

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-5 w-full sm:w-auto">
        <GlassButton />

      </div>
    </section>
    );
};

export default Hero;