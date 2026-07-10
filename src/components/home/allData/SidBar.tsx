
interface IButtons {
    id:number;
    name: string;
    data:number
}

const SidBar = () => {

 const bars:IButtons[] = [
    {
        id:1,
        name: "All",
        data:140
    },
    {
        id:2,
        name: "3d Scenes",
        data:40
    },
    {
        id:3,
        name: "Components",
        data:30
    },
    {
        id:4,
        name: "Backgrounds",
        data:36
    },
    {
        id:5,
        name: "Templates",
        data:34
    },
 ]

    return (
        <div className="w-full h-full">
            <h4 className=" text-zinc-400 text-sm mb-4">
            CATEGORIES
      </h4>
      {/* CARDS */}
      <div className="flex flex-col items-start gap-3">
       {bars.map((bar) => (
  <button
    key={bar.id}
    className="
      px-4 py-2
      text-left
      min-w-[160px]
      rounded-full
      border border-white/10
      border-l-4 border-l-transparent
      bg-white/[0.03]
      text-zinc-400
      transition-all duration-300
      hover:border-l-[#8966E0]
      hover:bg-white/[0.05]
      hover:text-white
      cursor-pointer
    "
  >
    {bar.name} ({bar.data})
  </button>
))}
  

  
</div>
        </div>
    );
};

export default SidBar;