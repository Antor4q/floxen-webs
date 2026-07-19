"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";

// ==========================================
// এখানেই Data Change করবে
// API থেকে data এলে এই array replace করবে
// ==========================================

const data = [
  {
    name: "Free",
    value: 7205,
    color: "#7C3AED",
  },
  {
    name: "Pro",
    value: 3233,
    color: "#3B82F6",
  },
  {
    name: "Team",
    value: 1642,
    color: "#EC4899",
  },
  {
    name: "Enterprise",
    value: 766,
    color: "#F59E0B",
  },
];

// ==========================================
// Total Users
// ==========================================

const totalUsers = data.reduce((sum, item) => sum + item.value, 0);

export default function UserChart() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#090b16] p-6 h-[450px]">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          Users by Plan
        </h2>

        <button className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-300">
          This Month
          <ChevronDown size={16} />
        </button>
      </div>

      <div className="flex items-center justify-between gap-6">
        {/* Chart */}
        <div className="relative h-[260px] w-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value" // <-- API field change করলে এটা change করবে
                innerRadius={75}
                outerRadius={105}
                paddingAngle={2}
                stroke="none"
              >
                {data.map((item) => (
                  <Cell
                    key={item.name}
                    fill={item.color}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold text-white">
              {totalUsers.toLocaleString()}
            </h2>

            <p className="mt-1 text-zinc-400">
              Total Users
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-1 flex-col gap-5">
          {data.map((item) => {
            const percentage = (
              (item.value / totalUsers) *
              100
            ).toFixed(1);

            return (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{
                      background: item.color,
                    }}
                  />

                  <span className="text-zinc-300">
                    {item.name}
                  </span>
                </div>

                <span className="text-sm text-zinc-400">
                  {item.value.toLocaleString()} ({percentage}
                  %)
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}