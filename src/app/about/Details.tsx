import { AuroraText } from '@/src/components/shared/aurora';
import Image from 'next/image';

import flow from "../../../public/flow.png"

const Details = () => {
    return (
         <div className="grid grid-cols-2 my-14 justify-between  group
                    p-10
                                  ">
                    {/* left content */}
                    <div className="">
                        <div className="px-4 py-2 inline-block rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-zinc-400 text-sm mb-4">
                       WHY US
                     </div>
                      <h2 className="text-5xl leading-16 font-bold">
                            AI builds generic We make <br/>it 
               
                             <AuroraText className="ml-2" speed={1} colors={["#d0c3fe","#C0AFFE","#8762F5","#A77DF3"]}>
                               CINEMATIC
                             </AuroraText>{" "}
                            
                           </h2>
                           {/* Description */}
      <p className="max-w-2xl mt-4  text-zinc-400 text-lg leading-relaxed px-2">
      AI tools can ship a website in an afternoon. The problem isn`t speed — it`s that the result looks like every other website shipped that afternoon. Generic sections, default motion,
      </p>
      <p className="max-w-2xl mt-4  text-zinc-400 text-lg leading-relaxed px-2">
       AI tools can ship a website in an afternoon. The problem isn`t speed — it`s that the result looks like every other website shipped that afternoon. Generic sections, default motion, the same five 3D shaders.
      </p>
      <p className="max-w-2xl mt-4  text-zinc-400 text-lg leading-relaxed px-2">
      getlayers is the other half of the equation: production-grade templates, prompts that have been tuned on real work, and 3D scenes you actually want to use. Designed to be grabbed, customised, and shipped — without the AI-starter-pack feel.
      </p>
      {/* <FeatureList/> */}


                    </div>
                  {/* right content */}
                    <div>
                        <Image className="rounded-2xl w-full" src={flow} alt="flow" width={600} height={700} />
                    </div>
                </div>
    );
};

export default Details;