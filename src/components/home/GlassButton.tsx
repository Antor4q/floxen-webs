// import { Sparkles } from "lucide-react";

// const GlassButton = () => {
//     return (
//        <>
//       <button className="group relative h-14 overflow-hidden rounded-full border border-white/20 bg-white/[0.04] px-2 pl-8 backdrop-blur-xl transition-all duration-500 hover:border-white/30 hover:bg-white/[0.07]">
      
//       {/* Glass highlight */}
//       <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent" />

//       {/* Liquid reflection */}
//       <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
//         <div className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/20 blur-2xl transition-all duration-1000 group-hover:left-[120%]" />
//       </div>

//       <div className="relative flex items-center gap-6">
//         <span className="text-lg font-medium tracking-tight text-white">
//           Get unlimited access
//         </span>

//         <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-110">
//           <Sparkles
//             size={18}
//             className="text-black transition-transform duration-300 group-hover:rotate-180"
//           />
//         </div>
//       </div>

//       {/* subtle glow */}
//       <div className="absolute inset-0 -z-10 rounded-full bg-white/5 blur-xl" />
//     </button>
//        </>
//     );
// };

// export default GlassButton;


"use client";
import { motion } from "framer-motion";

import { Sparkles } from "lucide-react";
import { useState } from "react";

const GlassButton = () => {
  const DEFAULT_X = 260;
  const DEFAULT_Y = 28;

  const [position, setPosition] = useState({
    x: DEFAULT_X,
    y: DEFAULT_Y,
  });

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Keep glow inside button area
    const limitedX = Math.max(40, Math.min(rect.width - 20, x));

    setPosition({
      x: limitedX,
      y,
    });
  };

  const handleLeave = () => {
    setPosition({
      x: DEFAULT_X,
      y: DEFAULT_Y,
    });
  };

  return (
    <button
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="
        group
        relative
        flex
        h-12
        items-center
        gap-4
        overflow-hidden
        rounded-full
        border
        border-white/20
        bg-white/[0.06]
        px-3
        pl-7
        pr-3
        backdrop-blur-xl
        shadow-[0_8px_32px_rgba(0,0,0,0.25)]
      "
    >
      {/* Base Glass */}
      <div className="absolute inset-0 bg-white/[0.04]" />

      {/* Top Reflection */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

      {/* Main Glow */}
      <div
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{
          width: "140px",
          height: "140px",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          borderRadius: "9999px",
          background: `
            radial-gradient(
              circle,
              rgba(255,255,255,0.95) 0%,
              rgba(167,125,243,0.95) 18%,
              rgba(135,98,245,0.9) 40%,
              rgba(135,98,245,0.55) 65%,
              transparent 100%
            )
          `,
          filter: "blur(28px)",
        }}
      />

      {/* Border Highlight */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: `
            radial-gradient(
              120px circle at ${position.x}px ${position.y}px,
              rgba(255,255,255,0.9) 0%,
              rgba(167,125,243,0.9) 25%,
              rgba(135,98,245,0.8) 45%,
              transparent 80%
            )
          `,
          opacity: 0.9,
        }}
      />

      {/* Content */}
      <span className="relative z-20 text-sm font-medium text-white">
        Get unlimited access
      </span>

      <div
        className="
          relative
          z-20
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-white/40
          text-white
          
          shadow-lg
        "
      >
        <Sparkles size={16} />
      </div>
    </button>
  );
};

export default GlassButton;