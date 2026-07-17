import FeatureList from "../home/FeatureList";

const WhyWe = () => {
    return (
        <div className="grid grid-cols-3 gap-10 py-20">
             {/* left content */}
                    <div className="col-span-2">
                        <div className="px-4 py-2 inline-block rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-zinc-400 text-sm mb-4">
                       WHY WE
                     </div>
                      <h2 className="text-5xl leading-16 font-bold">
                           The problem was never ideas.<br/> It was syntax.
                            
                           </h2>
                           {/* Description */}
      <p className=" mt-4  text-zinc-400 text-lg leading-relaxed px-2">
     Motion designers don`t struggle for inspiration — <span className="text-white">timelines, references, and shot lists were never the bottleneck. The bottleneck</span>  was translating a shot you can already see in your head into the exact phrasing a given model responds to.
      </p>
      <p className=" mt-4  text-zinc-400 text-lg leading-relaxed px-2">
     Flowmotion started as a private notes file of prompts that actually worked, shared between a small group of people making AI-generated motion work for real briefs. It became a library because <span className="text-white">the notes were more useful than anything we could write from scratch.</span>
      </p>
      <p className=" mt-4  text-zinc-400 text-lg leading-relaxed px-2">
     We still run it the same way: nothing gets added because it sounds clever. It gets added because someone tested it, it produced the shot, and it`ll produce it again for you.
      </p>
      
       
          
         


                    </div>
                    {/* right content */}
                    <FeatureList/>
        </div>
    );
};

export default WhyWe;