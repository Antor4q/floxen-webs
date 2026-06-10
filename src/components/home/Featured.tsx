"use client";

import { useState } from "react";
import {
  Lock,
  Heart,
  X,
  Copy,
  CopyIcon,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Pulse 3D",
    category: "3D Website",
    image: "/port2.mp4",
    premium: false,
    likes: 6,
    prompt:
      "Create a premium 3D landing page with cinematic visuals, modern typography, glassmorphism cards and smooth animations.",
    height: "h-[260px]",
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
    height: "h-[420px]",
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
    height: "h-[300px]",
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
    height: "h-[500px]",
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
    height: "h-[280px]",
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
    height: "h-[300px]",
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
    height: "h-[450px]",
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
    height: "h-[320px]",
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
    height: "h-[300px]",
  },
];

const Featured = () => {
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[0] | null>(
      null
    );

  const copyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
  };

  return (
    <section className="bg-[#050505] py-20">
      <div className="max-w-[1380px] mx-auto px-4">
        {/* Header */}
        {/* <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Inspiration Library
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white">
            Popular Designs
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
            Explore premium website inspirations and
            ready-to-use prompts.
          </p>
        </div> */}

        {/* Masonry */}
        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="break-inside-avoid cursor-pointer"
              onClick={() =>
                setSelectedProject(project)
              }
            >
              <div
                className={`
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-zinc-900
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/20
                hover:shadow-[0_20px_80px_rgba(255,255,255,0.06)]
                ${project.height}
              `}
              >
              <video
  className="absolute inset-0 h-full w-full object-cover object-top"
  autoPlay
  muted
  loop
  playsInline
>
  <source src={project.image} type="video/mp4" />
</video>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>

                      <p className="text-sm text-zinc-400">
                        {project.category}
                      </p>

                      <div className="mt-3 flex items-center gap-2 text-sm text-zinc-400">
                        <Heart size={14} />
                        {project.likes} likes
                      </div>
                    </div>

                    {project.premium ?  (
                      <div className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
                        <Lock
                          size={16}
                          className="text-white"
                        />
                      </div>
                    ) : <div className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
                        <CopyIcon
                          size={16}
                          className="text-white"
                        />
                      </div>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
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
      <div className="relative h-[500px] bg-black">

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
      )}
    </section>
  );
};

export default Featured;