import { CopyIcon } from "lucide-react";
import { ProjectM } from "./ExpModal";

interface ExpCardProps {
    project: ProjectM;
    copied: number | null;

    setSelectedProject: (
        project: ProjectM | null
    ) => void;

    handleCopy: (
        id: number,
        prompt: string
    ) => Promise<void>;
}

const ExpCard = ({ project, setSelectedProject, handleCopy, copied }: ExpCardProps) => {
    return (
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
    );
};

export default ExpCard;