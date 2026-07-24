import CardsBar from "./CardsBar";
import SidBar from "./SidBar";

const ContentSection = () => {
    return (
        <div className="px-10 py-10 min-h-screen rounded-t-xl border-t-2 border-[#0c0a0d]">
                {/* Badge */}
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400 backdrop-blur-xl">
  <div className="relative flex h-3 w-3 items-center justify-center">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500/30"></span>
    <span className="relative h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]"></span>
  </div>

  <span>MOTIONS DROPS EVERYDAY</span>
</div>
       <div className="flex justify-between">

            <h2 className="text-4xl my-3 leading-16 font-bold">Every prompt, in one place</h2>
                  {/* sort */}
                    <div className="flex items-center gap-4">
                        <span className="text-zinc-400">Sort by:</span>
                              <select className="bg-[#0d0d0d] w-[150px] text-white border border-zinc-800 focus:outline-none focus:border-[#8966E0] px-5 py-2 rounded-full">
          <option>Popular</option>
          <option>Latest</option>
          <option>Free</option>
          <option>Premium</option>
          <option>Mixed</option>
        </select>
                    </div>
       </div>
            {/* sidebar and cards */}
            <div className="grid grid-cols-8 gap-6">
            <div className="col-span-1">

            <SidBar/>
            </div>
            <div className="col-span-7">

             <CardsBar/>
            </div>
            </div>
        </div>
    );
};

export default ContentSection;