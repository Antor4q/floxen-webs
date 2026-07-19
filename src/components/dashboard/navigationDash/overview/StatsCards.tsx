"use client";

import {
  Users,
  FolderOpen,
  Sparkles,
  Crown,
  DollarSign,
} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "12,846",
    growth: "18.2%",
    icon: Users,
    color: "from-violet-500/20 to-violet-600/10",
    iconColor: "text-violet-400",
    border: "border-violet-500/20",
  },
  {
    title: "Total Inspirations",
    value: "8,642",
    growth: "14.7%",
    icon: FolderOpen,
    color: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-400",
    border: "border-blue-500/20",
  },
  {
    title: "Total Prompts",
    value: "6,128",
    growth: "21.4%",
    icon: Sparkles,
    color: "from-pink-500/20 to-pink-600/10",
    iconColor: "text-pink-400",
    border: "border-pink-500/20",
  },
  {
    title: "Premium Users",
    value: "2,543",
    growth: "16.8%",
    icon: Crown,
    color: "from-amber-500/20 to-orange-600/10",
    iconColor: "text-amber-400",
    border: "border-amber-500/20",
  },
  {
    title: "Total Revenue",
    value: "$24,860",
    growth: "24.6%",
    icon: DollarSign,
    color: "from-green-500/20 to-green-600/10",
    iconColor: "text-green-400",
    border: "border-green-500/20",
  },
];

export default function StatsCards() {
  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={`group relative overflow-hidden rounded-2xl border ${item.border}
            bg-[#0b0f1d]/90 p-5 `}
          >
            {/* Glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-60 blur-3xl`}
            />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl
                  bg-gradient-to-br ${item.color} border border-white/10`}
                >
                  <Icon className={`h-5 w-5 ${item.iconColor}`} />
                </div>

                <div>
                  <p className="text-xs text-zinc-500">{item.title}</p>

                  <h3 className="mt-1 text-3xl font-bold tracking-tight text-white">
                    {item.value}
                  </h3>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm">
                <span className="text-green-400">↑ {item.growth}</span>

                <span className="text-zinc-500">
                  vs last 30 days
                </span>
              </div>
            </div>

            {/* Border Glow */}
            <div
              className="absolute inset-0 rounded-2xl border border-white/5"
            />
          </div>
        );
      })}
    </section>
  );
}