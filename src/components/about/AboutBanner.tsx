import { AuroraText } from "../shared/aurora";

const AboutBanner = () => {
    return (
        <div className="flex flex-col items-center text-center gap-3">
                                           {/* Badge */}
                            <div className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-zinc-400 text-sm mb-4">
                              MOTIONS DROPS EVERYDAY
                            </div>
                      
                            {/* Heading */}
                          <h2 className="text-5xl leading-16 font-bold">
                                  AI builds websites. We make sure<br/> they don`t all look the same
                      
                                    {/* <AuroraText className="ml-2" speed={1} colors={["#d0c3fe","#C0AFFE","#8762F5","#A77DF3"]}>
                                      CINEMATIC
                                    </AuroraText>{" "} */}
                                   
                                  </h2>
                                  {/* Description */}
             <p className="max-w-2xl mt-4  text-zinc-400 text-sm sm:text-base lg:text-xl leading-relaxed px-2">
              getlayers is a library of templates, ready-to-use prompts, and 3D scenes — built for the way people design now, with AI in the loop.
             </p>
             {/* <GlassButton/> */}
                       </div>
    );
};

export default AboutBanner;