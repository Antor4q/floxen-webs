import Image from "next/image";
import bg from "../../../public/aboutCt.png"
import { AuroraText } from "../shared/aurora";
import GlassButton from "../home/GlassButton";


const AboutCta = () => {
    return (
       <section className="py-20">
      <div className="">
        <div className="relative border border-white/5 overflow-hidden rounded-3xl bg-[#040006]">
          {/* Background */}
          <Image
            src={bg}
            alt="background"
            fill
            priority
            className="object-cover object-right"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040006] via-[#040006b4] to-transparent" />

          {/* Noise */}
          <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')]" />

          {/* Content */}
          <div className="relative z-10 flex min-h-[420px] items-center">
            <div className="max-w-2xl px-12">
              {/* Badge */}
               <div className="px-4 py-2 inline-block rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-zinc-400 text-sm mb-4">
                       WHY US
                     </div>

              <h2 className="text-4xl leading-16 font-bold">
                                   AI builds make it 
                      
                                  <AuroraText className="ml-2" speed={1} colors={["#d0c3fe","#C0AFFE","#8762F5","#A77DF3"]}>
                                      CINEMATIC
                                    </AuroraText>{" "}
                                   
                                  </h2>
                                  {/* Description */}
             <p className="max-w-2xl my-4  text-zinc-400 text-sm sm:text-base lg:text-xl leading-relaxed px-2">
              Copy a prompt, paste it into your AI, and launch that doesn`t look AI-made.
             </p>
              {/* Button */}
             <GlassButton/>
            </div>
          </div>

          {/* Border Glow */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-violet-500/20" />
        </div>
      </div>
    </section>
    );
};

export default AboutCta;