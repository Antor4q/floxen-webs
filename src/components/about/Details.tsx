import { AuroraText } from '@/src/components/shared/aurora';

import FeatureList from '../home/FeatureList';
import { CopyIcon } from 'lucide-react';

const Details = () => {
    return (
      <div>

         <div className="grid grid-cols-3 mt-14 gap-20  group
                    pt-10
                                  ">
                    {/* left content */}
                    <div className="col-span-2">
                        <div className="px-4 py-2 inline-block rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-zinc-400 text-sm mb-4">
                       WHY US
                     </div>
                      <h2 className="text-5xl leading-16 font-bold">
                            Great taste doesn`t always translate<br/> into a great prompt.
                            
                           </h2>
                           {/* Description */}
      <p className=" mt-4  text-zinc-400 text-lg leading-relaxed px-2">
      You know the hero section you want. You can see the motion, the type, the spacing. But describing it to an AI tool in a way that actually gets you there — that`s a different skill, and most of us are still figuring it out one vague, half-working prompt at a time.
      </p>
      
          <div className='w-[600px] my-7 p-8 rounded-xl bg-[#10141C]'>
      <p className="  text-zinc-400 leading-relaxed px-2">
      Before <span className='line-through decoration-purple-500'>make it modern and clean with some</span>  animation, maybe gradient, idk something that pops, hero section for a saas
      </p>
     

          </div>
          
         


                    </div>
                  {/* right content */}
                    
                </div>
                 {/*  */}
          <div className='flex gap-14'>

         <div
           
              className="group flex items-start gap-5"
            >
              {/* Icon */}
              <div className="relative w-[600px] p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

   
<div
  className="absolute inset-0 rounded-2xl pointer-events-none"
  style={{
    background: `
      linear-gradient(
        315deg,
        rgba(168,85,247,.9) 0%,
        rgba(168,85,247,.45) 18%,
        transparent 45%
      )
    `,
    padding: "1px",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  }}
/>

                {/* Glass Reflection */}
                <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-white/8 via-transparent to-transparent" />

                <p className=" text-white  leading-relaxed px-2">
                  <span className='text-zinc-400'>From the library</span> Full-bleed hero, dark ink background (#0B0E14), single-stop radial glow following the cursor at 12% opacity, headline in a serif display face set at 4.5rem with -2% tracking, CTA button with a 200ms ease-out scale on hover...
      </p>
       <p className='text-[14px] mt-3 flex items-center gap-2'>
        <CopyIcon className='text-[14px] '/> Copy Prompt
       </p>
              </div>

              
            </div>
     <p className="max-w-[600px]  text-zinc-400 leading-relaxed px-2">
     Every prompt in FlowMotion has already been run, tested, and refined against a real design. No guessing at wording — you`re copying something that`s already proven to produce the result you`re looking at.
      </p>
          </div>
     
     
   
          {/*  */}
      </div>
    );
};

export default Details;