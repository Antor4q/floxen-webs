"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import user from "../../../../public/flow.png"
import {
  LayoutDashboard,
  Sparkles,
 
  FolderOpen,
  Users,
  CreditCard,
  BarChart3,
  Settings,
  LogOut,
 
} from "lucide-react";
import logo from "../../../../public/logo.png"
import Image from "next/image";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Inspirations",
    href: "/dashboard/inspirations",
    icon: Sparkles,
  },
  // {
  //   title: "Prompts",
  //   href: "/dashboard/prompts",
  //   icon: FileText,
  // },
  {
    title: "Categories",
    href: "/dashboard/categories",
    icon: FolderOpen,
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    title: "Subscriptions",
    href: "/dashboard/subscriptions",
    icon: CreditCard,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
      w-72.5
      h-screen
      sticky
      top-0
      border-r
      border-white/10
      bg-[#070707]/90
      backdrop-blur-2xl
      flex
      flex-col
      justify-between
      px-5
      py-6
    "
    >
      {/* Top */}
      <div>
        {/* Logo */}
      {/* Logo */}
          <Link href="/" className="flex items-center gap-3 mb-10">
            <Image alt="logo" src={logo} width={200} height={100}/>
          </Link>

        {/* Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

           const active =
  item.href === "/dashboard"
    ? pathname === item.href
    : pathname === item.href ||
      pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`
                group
                relative
                flex
                items-center
                gap-4
                rounded-2xl
                px-4
                py-3
                transition-all
                duration-300

                ${
                  active
                    ? "bg-[#8762F5]/15 border border-[#8762F5]/30 text-white shadow-[0_0_35px_rgba(135,98,245,.18)]"
                    : "border border-transparent text-zinc-400 hover:bg-white/5 hover:text-white"
                }
              `}
              >
                {/* Active Glow */}
                {active && (
                  <div
                    className="
                    absolute
                    left-0
                    top-2
                    bottom-2
                    w-1
                    rounded-full
                    bg-[#8762F5]
                  "
                  />
                )}

                <Icon
                  size={20}
                  className={`transition ${
                    active
                      ? "text-[#B78CFF]"
                      : "group-hover:text-white"
                  }`}
                />

                <span className="text-[15px] font-medium">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom */}
      <div className="space-y-5">
        {/* Upgrade Card */}
        {/* <div
          className="
          rounded-3xl
          border
          border-[#8762F5]/20
          bg-gradient-to-br
          from-[#8762F5]/15
          to-transparent
          p-5
        "
        >
          <div
            className="
            mb-4
            h-11
            w-11
            rounded-xl
            bg-[#8762F5]/20
            flex
            items-center
            justify-center
          "
          >
            <Crown
              size={22}
              className="text-[#C4A8FF]"
            />
          </div>

          <h3 className="text-white font-semibold">
            Upgrade Plan
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Unlock unlimited prompts and premium inspiration.
          </p>

          <button
            className="
            mt-5
            w-full
            rounded-xl
            bg-[#8762F5]
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-[#9D78FF]
          "
          >
            Upgrade Now
          </button>
        </div> */}

        {/* User */}
        <div
          className="
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-white/10
          bg-white/3
          p-3
        "
        >
          <div className="flex items-center gap-3">
            <Image
             height={44}
             width={44}
              src={user}
              alt="avatar"
              className="h-11 w-11 rounded-full object-cover"
            />

            <div>
              <h4 className="text-sm font-semibold text-white">
                Ahmed Antor
              </h4>

              <p className="text-xs text-zinc-500">
                Administrator
              </p>
            </div>
          </div>

          <button
            className="
            rounded-xl
            p-2
            text-zinc-500
            transition
            hover:bg-white/5
            hover:text-white
          "
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}