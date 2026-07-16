import HowItCard from "./HowItCard";

export interface IHowIt {
    id:string,
    title: string,
    description: string
}

const HowIt = () => {
    const data:IHowIt[] = [
        {
            id: "01",
            title:"Find Inspiration",
            description: "Scroll the inspiration wall and find a design that matches what you're picturing."
        },
        {
            id: "02",
            title:"Copy Prompt",
            description: "Every design comes with the full prompt that produced it — one click to copy."
        },
        {
            id: "03",
            title:"Paste into your AI tool and ship",
            description: "Drop it into Claude, v0, or whatever you build with, and tune it from a working starting point instead of a blank one."
        }
    ]
    return (
       <div className="mt-28">
                         <div className="px-4 py-2 inline-block rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-zinc-400 text-sm mb-4">
                       How it flows
                     </div>
                      <h2 className="text-5xl leading-16 font-bold">
                          Three steps, no detours.
                            
                           </h2>
                           {/* Description */}
    
                <div className="grid grid-cols-3 gap-10 mt-7">
                    {/* card1 */}
                   {
                    data.map((singleData) => <HowItCard key={singleData.id} data={singleData}/>)
                   }                  
                </div>
                       </div>
    );
};

export default HowIt;