"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useState } from "react";
import { CopyIcon } from "lucide-react";
import { ProjectM } from "./ExpModal";
import GlassBadge from "../home/allData/GlassBadge";
import LikeBadge from "../home/allData/LikeBadge";

interface ExpCardProps {
    project: ProjectM;
   
}

const ExpCard = ({ project}: ExpCardProps) => {

 const mouseX = useMotionValue(-300);
const mouseY = useMotionValue(-300);

const x = useSpring(mouseX, {
  stiffness: 550,
  damping: 35,
  mass: 0.2,
});

const y = useSpring(mouseY, {
  stiffness: 550,
  damping: 35,
  mass: 0.2,
});

const [hovered, setHovered] = useState(false);
const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();

  mouseX.set(e.clientX - rect.left);
  mouseY.set(e.clientY - rect.top);
};

const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
  setHovered(true);
  handleMove(e);
};

const handleLeave = () => {
  setHovered(false);

  mouseX.set(-300);
  mouseY.set(-300);
};



    return (
        <div
                                key={project.id}
   onMouseEnter={handleEnter}
  onMouseMove={handleMove}
  onMouseLeave={handleLeave}
  className="
    relative
    p-2
    group
    overflow-hidden
    cursor-pointer
    rounded-3xl
    border border-zinc-800
    bg-[#0a0a0a]
    transition-all
    duration-300
    hover:-translate-y-1
  
    hover:shadow-2xl
    hover:backdrop-blur-2xl
  "
                                >

                                {/* moving glow */}
                                {/* Moving Glow */}
<motion.div
  className="pointer-events-none absolute inset-0 z-0"
  animate={{
    opacity: hovered ? 1 : 0,
  }}
  transition={{
    duration: 0.18,
  }}
>
  <motion.div
    style={{
      x,
      y,
      translateX: "-50%",
      translateY: "-50%",
    }}
    className="
      absolute
      h-[240px]
      w-[240px]
      rounded-full
      blur-[70px]
    "
  >
    <div
      className="h-full w-full rounded-full"
      style={{
        background: `
          radial-gradient(
            circle,
            rgba(255,255,255,.95) 0%,
            rgba(167,125,243,.95) 18%,
            rgba(135,98,245,.75) 45%,
            rgba(135,98,245,.35) 70%,
            transparent 100%
          )
        `,
      }}
    />
  </motion.div>
</motion.div>
                                {/* -----------------------------moving glow---------------------- */}
                               
                                {/* Video */}
                                <div className="relative h-[280px] z-40 rounded-2xl overflow-hidden">
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
                                <div className="relative z-40 p-5">
                                  
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