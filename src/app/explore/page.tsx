"use client"

import { SearchIcon } from "lucide-react";
import { useState } from "react";

const ExplorePage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

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
    return (
        <div className="bg-[#050505] relative ">
            
          
            <div className="container mx-auto px-4 py-10">
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
                        <select className="bg-[#0d0d0d] text-white border border-zinc-800 focus:outline-none focus:border-orange-500 px-5 py-2 rounded-xl">
                            <option selected>Popular</option>
                            <option>Latest</option>
                            <option>Free</option>
                            <option>Premium</option>
                        </select>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default ExplorePage;