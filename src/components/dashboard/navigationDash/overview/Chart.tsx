/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { ChevronDown } from "lucide-react";

// ==========================================
// এখানে তোমার data থাকবে
// API থেকে data আনলে এই array replace করলেই হবে
// ==========================================

const chartData = [
  { date: "May 12", users: 4200, inspirations: 2200, prompts: 800 },
  { date: "May 19", users: 4700, inspirations: 2800, prompts: 1200 },
  { date: "May 26", users: 6100, inspirations: 3600, prompts: 1700 },
  { date: "Jun 02", users: 5500, inspirations: 4000, prompts: 1900 },
  { date: "Jun 05", users: 6124, inspirations: 4231, prompts: 2125 },
  { date: "Jun 09", users: 6300, inspirations: 4500, prompts: 2500 },
  { date: "Jun 12", users: 6900, inspirations: 4900, prompts: 2200 },
];

// ==========================================
// Custom Tooltip
// Hover করলে এটা দেখাবে
// ==========================================

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;

  return (
    <div className="rounded-xl border border-white/10 bg-[#0d1020] p-4 shadow-2xl">
      <p className="mb-3 text-sm text-zinc-400">{label}</p>

      {payload.map((item: any) => (
        <div
          key={item.dataKey}
          className="mb-2 flex items-center justify-between gap-8"
        >
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ background: item.color }}
            />
            <span className="text-sm text-zinc-300 capitalize">
              {item.dataKey}
            </span>
          </div>

          <span className="font-semibold text-white">
            {item.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function Chart() {
  return (
    <div className="rounded-2xl border  h-[450px] border-white/10 bg-[#090b16] p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Overview</h2>

          {/* Legend */}
          <div className="mt-4 flex gap-6">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded bg-violet-500"></span>
              <span className="text-sm text-zinc-400">Users</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded bg-blue-500"></span>
              <span className="text-sm text-zinc-400">Inspirations</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded bg-pink-500"></span>
              <span className="text-sm text-zinc-400">Prompts</span>
            </div>
          </div>
        </div>

        {/* Dropdown */}
        <button className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-300">
          This Month
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Chart */}
      <div className="h-[380px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 0,
            }}
          >
            {/* Background Grid */}
            <CartesianGrid
              stroke="#23253a"
              vertical={false}
              strokeDasharray="3 3"
            />

            {/* X Axis */}
            <XAxis
              dataKey="date"
              tick={{ fill: "#8b8fa3", fontSize: 13 }}
              tickLine={false}
              axisLine={false}
            />

            {/* Y Axis */}
            <YAxis
              tick={{ fill: "#8b8fa3", fontSize: 13 }}
              tickLine={false}
              axisLine={false}
            />

            {/* Hover Tooltip */}
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#7c3aed",
                strokeDasharray: "5 5",
              }}
            />

            {/* Users */}
            <Line
              type="monotone"
              dataKey="users" // <-- API field change করলে এটা change করবে
              stroke="#7c3aed"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 7,
                fill: "#7c3aed",
                stroke: "#ffffff",
                strokeWidth: 3,
              }}
            />

            {/* Inspirations */}
            <Line
              type="monotone"
              dataKey="inspirations"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 7,
                fill: "#3b82f6",
                stroke: "#fff",
                strokeWidth: 3,
              }}
            />

            {/* Prompts */}
            <Line
              type="monotone"
              dataKey="prompts"
              stroke="#ec4899"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 7,
                fill: "#ec4899",
                stroke: "#fff",
                strokeWidth: 3,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}