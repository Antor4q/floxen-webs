"use client";

import React from "react";
import {
  Users,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  Search,
  Share2,
  Link2,
  Mail,
  Compass,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const sources = [
  {
    label: "Organic Search",
    visits: 18420,
    pct: 42,
    change: "12.4%",
    up: true,
    icon: Search,
    color: "#34d399", // emerald
    softBg: "bg-emerald-500/15",
    text: "text-emerald-400",
  },
  {
    label: "Direct",
    visits: 11230,
    pct: 26,
    change: "4.1%",
    up: true,
    icon: Compass,
    color: "#818cf8", // indigo
    softBg: "bg-indigo-500/15",
    text: "text-indigo-400",
  },
  {
    label: "Social Media",
    visits: 7360,
    pct: 17,
    change: "8.9%",
    up: false,
    icon: Share2,
    color: "#f472b6", // pink
    softBg: "bg-pink-500/15",
    text: "text-pink-400",
  },
  {
    label: "Referral",
    visits: 4180,
    pct: 10,
    change: "3.2%",
    up: true,
    icon: Link2,
    color: "#fbbf24", // amber
    softBg: "bg-amber-500/15",
    text: "text-amber-400",
  },
  {
    label: "Email Campaign",
    visits: 2210,
    pct: 5,
    change: "1.6%",
    up: false,
    icon: Mail,
    color: "#38bdf8", // sky
    softBg: "bg-sky-500/15",
    text: "text-sky-400",
  },
];

const totalVisits = sources.reduce((sum, s) => sum + s.visits, 0);

function formatCount(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}K` : `${n}`;
}

// ---------------------------------------------------------------------------
// Signature element: single segmented bar showing traffic composition
// ---------------------------------------------------------------------------

function CompositionBar() {
  return (
    <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-white/5">
      {sources.map((s, i) => (
        <div
          key={s.label}
          className="h-full transition-all"
          style={{
            width: `${s.pct}%`,
            backgroundColor: s.color,
            marginLeft: i === 0 ? 0 : 2,
          }}
        />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function VisitorSources() {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="w-full rounded-3xl border border-white/5 bg-[#0b0f1a] p-5 pt-0">
        {/* Header */}
        {/* <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/20">
              <Users className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-[15px] font-semibold text-white">
                Visitor Sources
              </h2>
              <p className="text-xs text-white/40">
                Where your traffic is coming from
              </p>
            </div>
          </div>
          <button className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition hover:bg-white/10">
            This Month
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div> */}

        {/* Total + composition bar */}
        <div className="mt-4 rounded-2xl bg-gradient-to-br from-[#1c1638] via-[#171334] to-[#12112b] p-5">
          <p className="text-xs text-white/50">Total Visitors</p>
          <p className="mt-1 text-[32px] font-bold leading-none text-white">
            {formatCount(totalVisits)}
          </p>
          <p className="mt-2 flex items-center gap-1 text-xs font-medium text-emerald-400">
            <ArrowUpRight className="h-3.5 w-3.5" />
            9.2% vs last month
          </p>

          <div className="mt-5">
            <CompositionBar />
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
              {sources.map((s) => (
                <div key={s.label} className="flex items-center gap-1.5">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: s.color }}
                  />
                  <span className="text-[10px] text-white/40">
                    {s.label} · {s.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Source list */}
        <div className="mt-4 space-y-2">
          {sources.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-3.5"
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${s.softBg}`}
                >
                  <Icon className={`h-4 w-4 ${s.text}`} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-medium text-white">
                      {s.label}
                    </p>
                    <p className="text-[13px] font-semibold text-white">
                      {formatCount(s.visits)}
                    </p>
                  </div>
                  <div className="mt-1.5 flex items-center gap-2">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${s.pct}%`,
                          backgroundColor: s.color,
                        }}
                      />
                    </div>
                    <span
                      className={`flex shrink-0 items-center gap-0.5 text-[11px] font-medium ${
                        s.up ? "text-emerald-400" : "text-rose-400"
                      }`}
                    >
                      {s.up ? (
                        <ArrowUpRight className="h-3 w-3" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3" />
                      )}
                      {s.change}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}