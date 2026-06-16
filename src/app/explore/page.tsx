"use client"


import Cta from "@/src/components/shared/Cta";
import { CopyIcon, SearchIcon, X } from "lucide-react";
import { useState } from "react";


type Project = {
    id: number;
    title: string;
    category: string;
    image: string;
    premium: boolean;
    likes: number;
    prompt: string;
}

const ExplorePage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
const [copied, setCopied] = useState<number | null>(null);


    const categories = [
        {"id": 1,
         "name": "All"
        },
        {"id": 2,
         "name": "Saas"
        },
        {"id": 3,
         "name": "Ai"
        },
        {"id": 4,
         "name": "Agency"
        },
        {"id": 5,
         "name": "Portfolio"
        },
        {"id": 6,
         "name": "Hero"
        },
        {"id": 7,
         "name": "Ecommerce"
        },
        {"id": 8,
         "name": "Blog"
        },
        {"id": 9,
         "name": "Mobile"
        },
        {"id": 10,
         "name": "Dashboard"
        },
    ]


    const projects: Project[] = [
  {
    id: 1,
    title: "Pulse 3D",
    category: "3D Website",
    image: "/port2.mp4",
    premium: false,
    likes: 6,
    prompt:
      "Create a premium 3D landing page with cinematic visuals, modern typography, glassmorphism cards and smooth animations.",
    
  },
  {
    id: 2,
    title: "Nova Studio",
    category: "Agency Website",
    image: "/auroraST.mp4",
    premium: false,
    likes: 12,
    prompt:
      "Create a creative agency website with bold typography, portfolio showcase and modern dark aesthetic.",
    
  },
  {
    id: 3,
    title: "Aurora",
    category: "Landing Page",
    image: "/port3.mp4",
    premium: false,
    likes: 20,
    prompt:
      "Design a futuristic AI startup landing page with gradients and premium interactions.",
    
  },
  {
    id: 4,
    title: "Motion Lab",
    category: "Portfolio",
    image: "/lumenTRa.mp4",
    premium: false,
    likes: 15,
    prompt:
      "Create a motion designer portfolio website with immersive transitions.",
    
  },
  {
    id: 5,
    title: "Lazzat Choco",
    category: "Luxury Brand",
    image: "/aether2.mp4",
    premium: false,
    likes: 28,
    prompt:
      "Create a luxury chocolate brand website inspired by premium perfume and fashion brands.",
    
  },
  {
    id: 6,
    title: "Flow AI",
    category: "SaaS",
    image: "/food.mp4",
    premium: false,
    likes: 8,
    prompt:
      "Build a modern AI SaaS landing page with dashboard previews and trust sections.",
    
  },
  {
    id: 7,
    title: "Zen Commerce",
    category: "Ecommerce",
    image: "/vertext.mp4",
    premium: false,
    likes: 14,
    prompt:
      "Create a premium ecommerce website with luxury product presentation.",
    
  },
  {
    id: 8,
    title: "Orbit Finance",
    category: "Fintech",
    image: "/car.mp4",
    premium: false,
    likes: 9,
    prompt:
      "Build a clean fintech dashboard with banking and analytics features.",
    
  },
  {
    id: 9,
    title: "Neura AI",
    category: "AI Product",
    image: "/tra.mp4",
    premium: false,
    likes: 31,
    prompt:
      "Design a next generation AI platform with futuristic visual language.",
    
  },
  
  {
    id: 10,
    title: "Neura AI",
    category: "AI Product",
    image: "/tra.mp4",
    premium: false,
    likes: 31,
    prompt:
      "Design a next generation AI platform with futuristic visual language.",
    
  },
  {
    id: 11,
    title: "Neura AI",
    category: "AI Product",
    image: "/tra.mp4",
    premium: false,
    likes: 31,
    prompt:
      "Design a next generation AI platform with futuristic visual language.",
    
  },
  {
    id: 12,
    title: "Neura AI",
    category: "AI Product",
    image: "/tra.mp4",
    premium: false,
    likes: 31,
    prompt:
      "Design a next generation AI platform with futuristic visual language.",
    
  },
  {
    id: 13,
    title: "Motion Lab",
    category: "Portfolio",
    image: "/lumenTRa.mp4",
    premium: false,
    likes: 15,
    prompt:
      "Create a motion designer portfolio website with immersive transitions.",
    
  },
  {
    id: 14,
    title: "Motion Lab",
    category: "Portfolio",
    image: "/lumenTRa.mp4",
    premium: false,
    likes: 15,
    prompt:
      "Create a motion designer portfolio website with immersive transitions.",
    
  },
  {
    id: 15,
    title: "Motion Lab",
    category: "Portfolio",
    image: "/lumenTRa.mp4",
    premium: false,
    likes: 15,
    prompt:
      "Create a motion designer portfolio website with immersive transitions.",
    
  },
  {
    id: 16,
    title: "Motion Lab",
    category: "Portfolio",
    image: "/lumenTRa.mp4",
    premium: false,
    likes: 15,
    prompt:
      "Create a motion designer portfolio website with immersive transitions.",
    
  },
  {
    id: 17,
    title: "Lazzat Choco",
    category: "Luxury Brand",
    image: "/aether2.mp4",
    premium: false,
    likes: 28,
    prompt:
      "Create a luxury chocolate brand website inspired by premium perfume and fashion brands.",
    
  },
  {
    id: 18,
    title: "Lazzat Choco",
    category: "Luxury Brand",
    image: "/aether2.mp4",
    premium: false,
    likes: 28,
    prompt:
      "Create a luxury chocolate brand website inspired by premium perfume and fashion brands.",
    
  },
  {
    id: 19,
    title: "Lazzat Choco",
    category: "Luxury Brand",
    image: "/aether2.mp4",
    premium: false,
    likes: 28,
    prompt:
      "Create a luxury chocolate brand website inspired by premium perfume and fashion brands.",
    
  },
  {
    id: 20,
    title: "Lazzat Choco",
    category: "Luxury Brand",
    image: "/aether2.mp4",
    premium: false,
    likes: 28,
    prompt:
      "Create a luxury chocolate brand website inspired by premium perfume and fashion brands.",
    
  }
];


const handleCopy = async (id: number, prompt: string) => {
  await navigator.clipboard.writeText(prompt);

  setCopied(id);

  setTimeout(() => {
    setCopied(null);
  }, 2000);
};




    return (
        <div className="bg-[#050505] relative ">
            
          
            <div className="container mx-auto px-4 py-10 relative">
                      <div className="absolute w-[250px] h-[250px] -top-[150px] left-1/2 rounded-full bg-gradient-to-r from-[#f7e1da] via-[#ff7800] to-[#ffb450] opacity-50 blur-[150px]"></div>
  
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white">
                        Explore
                        </h1>

                        <p className="max-w-md mt-5 text-zinc-400 text-lg leading-relaxed">
                        Discover the best website inspirations and copy the perfect prompts to build faster.
                        </p>
                    </div>

                    {/* Search */}
                    <div className="relative w-full lg:w-[650px]">
                        <SearchIcon
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                        size={20}
                        />

                        <input
                        type="text"
                        placeholder="Search designs, categories, keywords..."
                        className="w-full h-16 pl-14 pr-20 rounded-2xl
                        bg-[#0d0d0d]
                        border border-zinc-800
                        text-white
                        placeholder:text-zinc-500
                        focus:outline-none
                        focus:border-orange-500
                        transition-all"
                        />

                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <span className="px-3 py-1 rounded-md bg-zinc-800 text-xs text-zinc-400">
                            ⌘ K
                        </span>
                        </div>
                    </div>

                    </div>
                    {/* categories and sort */}
                    <div className="flex items-center justify-between">

                    <div className="py-8 flex items-center gap-4">
                       {
                        categories.map((category) => <>
                         <button 
                            id={`${category.id}`}
                            className={`px-5 py-2 rounded-xl transition-all ${
                                selectedCategory === category.name
                                    ? "bg-[#ff6f001c] text-white border border-[#ff6f0034]"
                                    : "bg-[#0d0d0d] text-white border border-zinc-800 hover:border-[#ff6f0034] hover:bg-[#ff6f001c]"
                            }`}
                            onClick={() => setSelectedCategory(category.name)}
                        >
                            {category.name}
                        </button>
                        </>)
                       }
                    </div>
                    {/* sort */}
                    <div className="flex items-center gap-4">
                        <span className="text-zinc-400">Sort by:</span>
                        <select className="bg-[#0d0d0d] w-[200px] text-white border border-zinc-800 focus:outline-none focus:border-orange-500 px-5 py-2 rounded-xl">
                            <option>Popular</option>
                            <option>Latest</option>
                            <option>Free</option>
                            <option>Premium</option>
                            <option selected>Mixed</option>
                        </select>
                    </div>
                    </div>
                    {/* cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-5">
                        {
                            projects.map((project) => <>
                                <div
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className="
                                    group
                                    cursor-pointer
                                    rounded-3xl
                                    overflow-hidden
                                    border border-zinc-800
                                    bg-[#0a0a0a]
                                    hover:border-[#ff6f0030]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                "
                                >
                                {/* Video */}
                                <div className="relative h-[220px] overflow-hidden">
                                    <video
                                    src={project.image}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        object-top
                                        transition-transform
                                        duration-500
                                        group-hover:scale-105
                                    "
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <h3 className="text-lg mb-3 font-semibold text-white">
                                        {project.title}
                                    </h3>

                                    <span className="text-xs px-3 py-1 rounded-full bg-[#ff6f0015] border border-[#ff6f0030] text-orange-400">
                                        {project.category}
                                    </span>
                                    </div>
                                   <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleCopy(project.id, project.prompt);
                                    }}
                                    className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-md"
                                    >
                                    <CopyIcon
                                        size={16}
                                        className={copied === project.id ? "text-green-400" : "text-white"}
                                    />
                                    </button>
                                    </div>

                                   

                                </div>
                                </div>
                            </>)
                        }

                    </div>
                       <div className="flex justify-center w-full">
                         <button 
                          
                            className={`px-3 w-[150px] py-2 my-5 rounded-xl transition-all bg-[#0d0d0d] text-white border border-zinc-800 hover:bg-[#ff6f001c] hover:border-[#ff6f0034]`}
                          
                        >
                            Load More
                        </button>

                        {/* modal start */}
                       {selectedProject && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                    <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">

                        <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2"
                        >
                        <X size={18} />
                        </button>

                        <div className="grid lg:grid-cols-[1fr_360px]">

                        {/* Preview */}
                        <div className="relative h-[500px] bg-black">

                            <video
                            className="h-full w-full object-contain"
                            autoPlay
                            muted
                            loop
                            playsInline
                            >
                            <source src={selectedProject.image} type="video/mp4" />
                            </video>

                        </div>

                        {/* Sidebar */}
                        <div className="border-l border-white/10 p-6">

                            {/* Content */}

                        </div>

                        </div>

                    </div>
                            </div>
                        )}
                        {/* modal end */}
                       </div>
           
            <Cta/>
            </div>
        </div>
    );
};

export default ExplorePage;