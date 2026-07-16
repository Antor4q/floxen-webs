"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

import { useState } from "react";
import { IHowIt } from "./HowIt";

interface HowItProps {
    data: IHowIt
}

const HowItCard = ({data}:HowItProps) => {
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
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/[0.08]
        bg-white/[0.03]
        backdrop-blur-xl
        p-7
       
        transition-all
        duration-500
        hover:border-[#8762F5]/40
        hover:bg-white/[0.05]
  
       
      "
    >
      {/* ---------------- Background Glow ---------------- */}
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
          className="absolute h-[240px] w-[240px] rounded-full blur-[75px]"
        >
          <div
            className="h-full w-full rounded-full"
            style={{
              background: `
                radial-gradient(
                  circle,
                  rgba(255,255,255,.9) 0%,
                  rgba(167,125,243,.95) 18%,
                  rgba(135,98,245,.75) 45%,
                  rgba(135,98,245,.30) 70%,
                  transparent 100%
                )
              `,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Glass Layer */}
      <div className="pointer-events-none absolute inset-[1px] rounded-[22px] border border-white/[0.05]" />

      {/* Top Gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#8762F5]/15 to-transparent" />

      {/* Decorative Blur */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#8762F5]/20 blur-3xl" />

      {/* Noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* ---------------- Content ---------------- */}
      <div className="relative z-10 flex h-full flex-col">

        {/* Number */}
        <div className="mb-8 flex items-center justify-between">
          <span className="text-xs font-semibold tracking-[0.35em] uppercase text-[#B78CFF]">
           {data?.id}
          </span>

          <div className="h-px w-16 bg-gradient-to-r from-[#8762F5] to-transparent" />
        </div>

        {/* Title */}
        <h3 className="text-[22px] font-semibold leading-8 text-white">
          {data?.title}
        </h3>

        {/* Description */}
        <p className="mt-5 text-[15px] leading-7 text-zinc-400">
         {data?.description}
        </p>

       
      </div>
    </div>
  );
};

export default HowItCard;