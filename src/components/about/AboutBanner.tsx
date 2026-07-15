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
                                   AI builds generic{" "}<br/>We make it 
                      
                                    <AuroraText className="ml-2" speed={1} colors={["#d0c3fe","#C0AFFE","#8762F5","#A77DF3"]}>
                                      CINEMATIC
                                    </AuroraText>{" "}
                                   
                                  </h2>
                                  {/* Description */}
             <p className="max-w-2xl mt-4  text-zinc-400 text-sm sm:text-base lg:text-xl leading-relaxed px-2">
              Copy a prompt, paste it into your AI, and launch a site<br/> that doesn`t look AI-made.
             </p>
             {/* <GlassButton/> */}
                       </div>
    );
};

export default AboutBanner;