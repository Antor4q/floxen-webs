"use client";

import { AuroraText } from "../shared/aurora";



const Banner = () => {
    return (
        <section className="relative w-full flex flex-col items-center text-center px-4 sm:px-6 pt-20 sm:pt-24 lg:pt-28">
           <div className="absolute w-[300px] h-[300px] mx-auto rounded-full bg-gradient-to-r from-[#ff3c00] via-[#ff7800] to-[#ffb450] opacity-20 blur-[150px]"></div>
      {/* Badge */}
      <div className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-zinc-400 text-xs sm:text-sm mb-7">
        Discover modern landing pages
      </div>

      {/* Heading */}
    <h1 className="text-6xl font-bold">
             UNLOCK YOUR AI{" "}<br/>DESIGN

              <AuroraText className="ml-2" speed={1} colors={["#ff8a00", "#ff3c00", "#7a0000"]}>
                SUPERPOWERS
              </AuroraText>{" "}
             
            </h1>


   
      {/* Description */}
      <p className="max-w-2xl mt-6 sm:mt-8 text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed px-2">
        Floxen Web helps you discover modern landing pages, copy AI-ready
        prompts, and build beautiful websites instantly using React, Next.js
        and Tailwind CSS.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto">
        <button className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 transition font-semibold px-8 py-4 rounded-full">
          Browse Templates →
        </button>

        
      </div>
    </section>
    );
};

export default Banner;