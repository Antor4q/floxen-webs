"use client";

import { useState } from "react";

interface IButtons {
  id: number;
  name: string;
  data: number;
}

const bars: IButtons[] = [
  {
    id: 1,
    name: "All",
    data: 140,
  },
  {
    id: 2,
    name: "3D Scenes",
    data: 40,
  },
  {
    id: 3,
    name: "Components",
    data: 30,
  },
  {
    id: 4,
    name: "Backgrounds",
    data: 36,
  },
  {
    id: 5,
    name: "Templates",
    data: 34,
  },
];

const SideBar = () => {
  const [active, setActive] = useState(1);

  const [positions, setPositions] = useState<
    Record<number, { x: number; y: number }>
  >(
    bars.reduce(
      (acc, item) => ({
        ...acc,
        [item.id]: {
          x: 85,
          y: 22,
        },
      }),
      {} as Record<number, { x: number; y: number }>
    )
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPositions((prev) => ({
      ...prev,
      [id]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  return (
    <div className="w-full h-full">
      <h4 className="mb-4 text-sm text-zinc-400">CATEGORIES</h4>

      <div className="flex flex-col gap-3">
        {bars.map((bar) => {
          const isActive = active === bar.id;
          const position = positions[bar.id];

          return (
            <button
              key={bar.id}
              onClick={() => setActive(bar.id)}
              onMouseMove={(e) => handleMouseMove(e, bar.id)}
              className={`
                group
                relative
                isolate
                overflow-hidden

                flex
                items-center
                justify-between

                min-w-[170px]
                rounded-full

                border
                border-white/10
               

                px-4
                py-2.5

                transition-all
                duration-300

                ${
                  isActive
                    ? "text-white"
                    : "border-l-transparent text-zinc-400 hover:text-white"
                }
              `}
            >
              {/* Base Glass */}
              <div className="absolute inset-0 bg-white/[0.04]" />

              {/* Top Reflection */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

              {/* Glow */}
              <div
                className={`
                  absolute
                  pointer-events-none
                  transition-opacity
                  duration-300

                  ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }
                `}
                style={{
                  width: 130,
                  height: 130,
                  left: position.x,
                  top: position.y,
                  transform: "translate(-50%, -50%)",
                  borderRadius: "9999px",
                 background: `
  radial-gradient(
    120px circle at ${position.x}px ${position.y}px,
    rgba(180,150,255,.45) 0%,
    rgba(150,120,245,.35) 30%,
    rgba(135,98,245,.25) 50%,
    transparent 80%
  )
`,
filter: "blur(28px)",
                }}
              />

              {/* Border Highlight */}
              <div
                className={`
                  absolute
                  inset-0
                  rounded-full
                  pointer-events-none
                  transition-opacity
                  duration-300

                  ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }
                `}
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
                }}
              />

              {/* Content */}
              <span className="relative z-20 flex w-full items-center justify-between">
                <span className="font-medium">{bar.name}</span>

                <span className="text-xs opacity-80">
                  {bar.data}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;