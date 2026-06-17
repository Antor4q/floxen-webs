import { X } from "lucide-react";


export interface ProjectM {
      id: number;
    title: string;
    prompt: string;
    image: string;
    category: string;
    premium: boolean;
    likes: number;

}

interface ExpModalProps {
    selectedProject: ProjectM;
    setSelectedProject: (project: ProjectM | null) => void;
}

const ExpModal = ({ selectedProject, setSelectedProject }: ExpModalProps) => {
    return (
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
                        <div className="relative h-125 bg-black">

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
    );
};

export default ExpModal;