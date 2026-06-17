import { AudioWaveformIcon } from "lucide-react";
import Image from "next/image";
import ca from "../../../public/dsafsdafsdfasdf.jpeg"


const ExpBanner = () => {
    return (
        <div className="container mx-auto px-4 py-10 relative">
              <div className="absolute w-[250px] h-[250px] -top-[150px] left-1/2 rounded-full bg-gradient-to-r from-[#f7e1da] via-[#ff7800] to-[#ffb450] opacity-50 blur-[150px]"></div>
            <div className="flex flex-col items-center">
                    {/* Left Content */}
                     <div className="flex flex-col items-center">
                        {/* Badge */}
                    <div className="px-4 w-60 py-2 rounded-full border border-white/10 bg-white/3 backdrop-blur-xl text-zinc-400 text-xs sm:text-sm mb-7">
                                    Discover modern landing pages
                                </div>
                        <h2 className="text-5xl text-center lg:text-6xl font-bold tracking-tight text-white">
                        UNLOCK YOUR AI

                        </h2>

                        <p className="max-w-md text-center mt-5 text-zinc-400 text-lg leading-relaxed">
                        Discover the best website inspirations and copy the perfect prompts to build faster.
                        </p>
                       
                    </div>
                       
                    </div>
        </div>
    );
};

export default ExpBanner;