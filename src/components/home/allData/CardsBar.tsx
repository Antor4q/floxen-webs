import ExpCard from "../../explore/ExpCard";

type Project = {
    id: number;
    title: string;
    category: string;
    image: string;
    premium: boolean;
    likes: number;
    prompt: string;
}


const CardsBar = () => {
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
    return (
        <div className="w-full h-full">
            <div className="grid grid-cols-4 gap-4">
                {
                            projects.map((project) => 
                              <ExpCard key={project.id} project={project}/>
                            )
                        }
            </div>
        </div>
    );
};

export default CardsBar;