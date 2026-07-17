"use client";

import { Bell, Plus, Search, Settings } from "lucide-react";

export default function NavbarDash() {
  return (
    <header
      className="
      sticky
      top-0
      z-50
      flex
      items-center
      justify-between
      border-b
      border-white/10
      bg-[#070707]/80
      backdrop-blur-2xl
      px-8
      py-5
    "
    >
      {/* ---------------- Left ---------------- */}
      <div className="flex items-center gap-6">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-semibold text-white">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-zinc-500">
            Welcome back 👋 Manage your Flowmotion platform.
          </p>
        </div>

        {/* Search */}
        <div className="relative hidden xl:block">
          <Search
            size={18}
            className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-zinc-500
          "
          />

          <input
            type="text"
            placeholder="Search inspiration, prompts..."
            className="
            h-12
            w-[360px]
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            pl-11
            pr-4
            text-sm
            text-white
            placeholder:text-zinc-500
            outline-none
            transition-all
            duration-300
            focus:border-[#8762F5]/50
            focus:ring-4
            focus:ring-[#8762F5]/10
          "
          />
        </div>
      </div>

      {/* ---------------- Right ---------------- */}
      <div className="flex items-center gap-4">
        {/* Create Button */}
        <button
          className="
          hidden
          md:flex
          items-center
          gap-2
          rounded-2xl
          bg-gradient-to-r
          from-[#8762F5]
          to-[#A77DF3]
          px-5
          py-3
          text-sm
          font-medium
          text-white
          shadow-[0_10px_35px_rgba(135,98,245,.25)]
          transition-all
          duration-300
          hover:scale-[1.03]
          hover:shadow-[0_15px_45px_rgba(135,98,245,.45)]
        "
        >
          <Plus size={18} />
          Create Prompt
        </button>

        {/* Notification */}
        <button
          className="
          relative
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          text-zinc-400
          transition-all
          duration-300
          hover:border-[#8762F5]/40
          hover:bg-white/[0.06]
          hover:text-white
        "
        >
          <Bell size={20} />

          <span
            className="
            absolute
            right-3
            top-3
            h-2.5
            w-2.5
            rounded-full
            bg-[#8762F5]
          "
          />
        </button>

        {/* Settings */}
        <button
          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          text-zinc-400
          transition-all
          duration-300
          hover:border-[#8762F5]/40
          hover:bg-white/[0.06]
          hover:text-white
        "
        >
          <Settings size={20} />
        </button>

        {/* Divider */}
        <div className="h-8 w-px bg-white/10" />

        {/* Profile */}
        <button
          className="
          group
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          p-2
          transition-all
          duration-300
          hover:border-[#8762F5]/40
          hover:bg-white/[0.06]
        "
        >
          <img
            src="https://i.pravatar.cc/150"
            alt="Profile"
            className="
            h-10
            w-10
            rounded-xl
            object-cover
          "
          />

          <div className="hidden text-left lg:block">
            <h3 className="text-sm font-semibold text-white">
              Ahmed Antor
            </h3>

            <p className="text-xs text-zinc-500">
              Administrator
            </p>
          </div>
        </button>
      </div>
    </header>
  );
}