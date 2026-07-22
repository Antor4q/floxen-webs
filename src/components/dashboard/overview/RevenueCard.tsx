/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";


import {
  AreaChart,
  Area,
  XAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  DollarSign,
  
  ArrowUpRight,
  ArrowDownRight,
  ShoppingBag,
  Wallet,
  BadgePercent,
  Gem,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const revenueOverTime = [
  { month: "Jan", value: 8400 },
  { month: "Feb", value: 12700 },
  { month: "Mar", value: 16300 },
  { month: "Apr", value: 20100 },
  { month: "May", value: 28700 },
  { month: "Jun", value: 24800 },
];

const stats = [
  {
    label: "MRR",
    value: "$24,860",
    change: "16.8%",
    up: true,
    icon: Wallet,
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
  },
  {
    label: "ARR",
    value: "$298,320",
    change: "20.3%",
    up: true,
    icon: Gem,
    iconBg: "bg-indigo-500/15",
    iconColor: "text-indigo-400",
  },
  {
    label: "Avg. Revenue / User",
    value: "$17.43",
    change: "12.6%",
    up: false,
    icon: BadgePercent,
    iconBg: "bg-pink-500/15",
    iconColor: "text-pink-400",
  },
  {
    label: "LTV",
    value: "$209.16",
    change: "15.7%",
    up: true,
    icon: Gem,
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
  },
];

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------

function formatK(n: number) {
  return `$${(n / 1000).toFixed(1)}K`;
}

/** Custom dot with a floating value label above the point */
function LabeledDot(props: any) {
  const { cx, cy, payload } = props;

  if (cx == null || cy == null) return null;

  const value = payload?.value ?? 0;

  return (
    <g>
      <text
        x={cx}
        y={cy - 14}
        textAnchor="middle"
        className="fill-white text-[11px] font-medium"
      >
        {formatK(value)}
      </text>

      <circle
        cx={cx}
        cy={cy}
        r={4}
        fill="#22c55e"
        stroke="#0b0f1a"
        strokeWidth={2}
      />
    </g>
  );
}

/** Mini sparkline bars used in the hero panel */
function MiniBars() {
  const heights = [18, 26, 34, 44, 54];
  return (
    <div className="relative flex h-24 w-32 items-end gap-2">
      <svg
        className="pointer-events-none absolute -top-3 right-0 h-10 w-32"
        viewBox="0 0 130 40"
        fill="none"
      >
        <path
          d="M2 34 L28 24 L54 28 L80 12 L104 16 L126 4"
          stroke="url(#sparkline-stroke)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="126" cy="4" r="3.5" fill="#c4b5fd" />
        <defs>
          <linearGradient id="sparkline-stroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>
      </svg>
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-4 rounded-full bg-gradient-to-t from-indigo-500/80 to-emerald-400/80"
          style={{ height: `${h}px` }}
        />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function RevenueCard() {
  return (
    <div className="flex items-center justify-center pt-5">
      <div className="w-full rounded-3xl border border-white/5 bg-[#0b0f1a] p-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/20">
              <DollarSign className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-[15px] font-semibold text-white">Revenues</h2>
              <p className="text-xs text-white/40">
                Track your subscription revenue performance
              </p>
            </div>
          </div>
          {/* <button className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition hover:bg-white/10">
            This Month
            <ChevronDown className="h-3.5 w-3.5" />
          </button> */}
        </div>

        {/* Hero panel */}
        {/* <div className="relative mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-[#241a4e] via-[#1b1640] to-[#141233] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white/50">Total Revenue</p>
              <p className="mt-1 text-[32px] font-bold leading-none text-white">
                $24,860
              </p>
              <p className="mt-2 flex items-center gap-1 text-xs font-medium text-emerald-400">
                <ArrowUpRight className="h-3.5 w-3.5" />
                24.6% vs last month
              </p>
            </div>
            <MiniBars />
          </div>
        </div> */}

        {/* Stat grid */}
        <div className="my-6 grid grid-cols-4 gap-3">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="rounded-2xl border border-white/5 bg-white/3 p-3.5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[11px] text-white/40">{s.label}</p>
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-lg ${s.iconBg}`}
                  >
                    <Icon className={`h-3.5 w-3.5 ${s.iconColor}`} />
                  </div>
                </div>
                <p className="mt-1.5 text-lg font-semibold text-white">
                  {s.value}
                </p>
                <p
                  className={`mt-1 flex items-center gap-0.5 text-[11px] font-medium ${
                    s.up ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {s.up ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}
                  {s.change}
                </p>
              </div>
            );
          })}
        </div>

        {/* Revenue over time */}
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-white/80">
              Revenue Over Time
            </h3>
            {/* <button className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/60 transition hover:bg-white/10">
              This Month
              <ChevronDown className="h-3 w-3" />
            </button> */}
          </div>

          <div className="mt-3 h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueOverTime}
                margin={{ top: 28, right: 8, left: 8, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 11 }}
                  dy={8}
                />
                <Tooltip
                  cursor={false}
                  contentStyle={{
                    background: "#141a26",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 10,
                    fontSize: 12,
                  }}
                  labelStyle={{ color: "rgba(255,255,255,0.6)" }}
                  itemStyle={{ color: "#22c55e" }}
                   formatter={(value) => {
    const num =
      typeof value === "number" ? value : parseFloat(String(value));

    return [isNaN(num) ? "$0" : `$${num.toLocaleString()}`, "Revenue"];
  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#22c55e"
                  strokeWidth={2.5}
                  fill="url(#revenueFill)"
                  dot={<LabeledDot />}
                  activeDot={{ r: 5, fill: "#22c55e" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Footer callout */}
        <div className="mt-8 flex items-center justify-between rounded-2xl bg-emerald-500/10 p-3.5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15">
              <ShoppingBag className="h-4 w-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-medium text-white">
                Revenue is up{" "}
                <span className="text-emerald-400">24.6%</span> this month
              </p>
              <p className="text-[11px] text-white/40">
                Great job! You&apos;re performing better than last month
              </p>
            </div>
          </div>
          <button className="flex shrink-0 items-center gap-1 rounded-full bg-emerald-500 px-3.5 py-2 text-[11px] font-semibold text-black transition hover:bg-emerald-400">
            View Report
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}