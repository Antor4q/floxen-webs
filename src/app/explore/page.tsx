"use client"


import ExpBanner from "@/src/components/explore/ExpBanner";
import ExpCard from "@/src/components/explore/ExpCard";
import ExpModal from "@/src/components/explore/ExpModal";
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

type Category = {
    id: number;
    name: string;
}

const ExplorePage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [copied, setCopied] = useState<number | null>(null);


    const categories: Category[] = [
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
        
        {"id": 11,
         "name": "Dashboard"
        },
        {"id": 12,
         "name": "Dashboard"
        },
        {"id": 13,
         "name": "Dashboard"
        }
       
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
                    

                      <ExpBanner/>
                     

                      <div className="flex items-center justify-center gap-5">

                    {/* Search */}
                    <div className="relative w-full lg:w-162.5">
                        <SearchIcon
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                        size={20}
                        />

                        <input
                        type="text"
                        placeholder="Search designs, categories, keywords..."
                        className="w-full h-16 pl-14 pr-20 rounded-full
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
                     {/* sort */}
                    <div className="flex items-center gap-4">
                        <span className="text-zinc-400">Sort by:</span>
                              <select className="bg-[#0d0d0d] w-[150px] text-white border border-zinc-800 focus:outline-none focus:border-orange-500 px-5 py-2 rounded-full">
          <option>Popular</option>
          <option>Latest</option>
          <option>Free</option>
          <option>Premium</option>
          <option>Mixed</option>
        </select>
                    </div>
                      </div>

  
                 
                    {/* categories */}
                    <div>

                    <div className="py-8 flex flex-wrap justify-center gap-4">
                       {
                        categories.map((category) => <>
                         <button 
                            id={`${category.id}`}
                            className={`px-5 py-2 rounded-full transition-all ${
                                selectedCategory === category.name
                                    ? "bg-[#ff6f001c] text-white border border-[#ff6f0034]"
                                    : "bg-[#0d0d0d] text-white border border-zinc-800 hover:border-                                     [#ff6f0034] hover:bg-[#ff6f001c]"
                            }`}
                            onClick={() => setSelectedCategory(category.name)}
                        >
                            {category.name}
                        </button>
                        </>)
                       }
                    </div>
                   
                    </div>
                    {/* cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-5">
                       {/*  */}

                    </div>
                       <div className="flex justify-center w-full">
                        <button className={`px-3 w-[150px] py-2 my-5 rounded-xl transition-all bg-           [#0d0d0d] text-white border border-zinc-800 hover:bg-[#ff6f001c] hover:border-[#ff6f0034]`}
                          
                        >
                            Load More
                        </button>

                        {/* modal start */}
                       {selectedProject && (
                        <ExpModal
                        selectedProject={selectedProject}
                        setSelectedProject={setSelectedProject}
                        />
                        )}
                        {/* modal end */}
                       </div>
           
            <Cta/>
            </div>
        </div>
    );
};

export default ExplorePage;