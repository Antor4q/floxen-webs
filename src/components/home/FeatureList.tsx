"use client";

import {
  Sparkles,
  Rocket,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Curated with care",
    description: "Every prompt is tested and handpicked.",
  },
  {
    icon: Rocket,
    title: "Built for speed",
    description: "Find, copy, and create—faster than ever.",
  },
  {
    icon: Users,
    title: "Made for everyone",
    description: "From beginners to pros, we've got you.",
  },
];

export default function FeatureList() {
  return (
    <section className="py-12">
      <div className="max-w-lg space-y-7">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="group flex items-start gap-5"
            >
              {/* Icon */}
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

   
<div
  className="absolute inset-0 rounded-2xl pointer-events-none"
  style={{
    background: `
      linear-gradient(
        315deg,
        rgba(168,85,247,.9) 0%,
        rgba(168,85,247,.45) 18%,
        transparent 45%
      )
    `,
    padding: "1px",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  }}
/>

                {/* Glass Reflection */}
                <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-white/8 via-transparent to-transparent" />

                <Icon
                  size={22}
                  strokeWidth={2}
                  className="relative z-10 text-[#B889FF]"
                />
              </div>

              {/* Content */}
              <div className="pt-1">
                <h3 className="text-[20px] font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-1 text-[15px] leading-7 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}