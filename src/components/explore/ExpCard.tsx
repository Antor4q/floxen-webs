import { CopyIcon } from "lucide-react";
import { ProjectM } from "./ExpModal";
import GlassBadge from "../home/allData/GlassBadge";
import LikeBadge from "../home/allData/LikeBadge";

interface ExpCardProps {
    project: ProjectM;
   
}

const ExpCard = ({ project}: ExpCardProps) => {
    return (
        <div
                                key={project.id}
                             
                                className="
                                relative
                                    group
                                    cursor-pointer
                                    rounded-3xl
                                    overflow-hidden
                                    border border-zinc-800
                                    bg-[#0a0a0a]
                                    hover:border-b-[#9a77f3]
                                    hover:shadow-2xl
                                    hover:backdrop-blur-2xl
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                "
                                >
                               
                                {/* Video */}
                                <div className="relative h-[280px] rounded-b-2xl overflow-hidden">
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
                                       
                                    "
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                  
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg mb-3 font-semibold text-white">
                                        {project.title}
                                    </h3>

                                  
                                    <GlassBadge text="Hero"/>
                                  
                                    </div>
                                  
                                   

                                   

                                </div>
                                </div>
    );
};

export default ExpCard;