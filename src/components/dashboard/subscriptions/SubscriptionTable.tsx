"use client";

import Image from "next/image";
import {
  Search,
  Filter,
  Download,
  Eye,
  Pencil,
  MoreVertical,
} from "lucide-react";

type User = {
  id: number;
  avatar: string;
  name: string;
  username: string;
  email: string;
  plan: "Premium" | "Free";
  joined: string;
  lastActive: string;
  activity: "green" | "yellow" | "red";
  status: "Active" | "Inactive" | "Banned";
};

const users: User[] = [
  {
    id: 1,
    avatar: "/avatars/user-1.jpg",
    name: "Ahmed Antor",
    username: "@ahmedantor",
    email: "ahmedantor@gmail.com",
    plan: "Premium",
    joined: "Jul 20, 2025",
    lastActive: "2 minutes ago",
    activity: "green",
    status: "Active",
  },
  {
    id: 2,
    avatar: "/avatars/user-2.jpg",
    name: "Sarah Jahan",
    username: "@sarahjahan",
    email: "sarah.jahan@gmail.com",
    plan: "Premium",
    joined: "Jul 18, 2025",
    lastActive: "1 hour ago",
    activity: "green",
    status: "Active",
  },
  {
    id: 3,
    avatar: "/avatars/user-3.jpg",
    name: "Rifat Hasan",
    username: "@rifathasan",
    email: "rifat.hasan@gmail.com",
    plan: "Free",
    joined: "Jul 17, 2025",
    lastActive: "3 hours ago",
    activity: "green",
    status: "Active",
  },
  {
    id: 4,
    avatar: "/avatars/user-4.jpg",
    name: "Jannatul Islam",
    username: "@jannat_ui",
    email: "jannat.islam@gmail.com",
    plan: "Premium",
    joined: "Jul 15, 2025",
    lastActive: "1 day ago",
    activity: "green",
    status: "Active",
  },
];

const SubscriptionTable = () => {
    return (
         <div className="overflow-hidden rounded-2xl border border-[#1A2232] bg-[#0B1018]">
      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between border-b border-[#171E2B] p-5">
        <div className="flex items-center gap-8">
          <button className="border-b-2 border-[#8B5CF6] pb-3 text-sm font-medium text-[#8B5CF6]">
            All Users
          </button>

          <button className="pb-3 text-sm text-[#9AA4B2] hover:text-white">
            Active
          </button>

          <button className="pb-3 text-sm text-[#9AA4B2] hover:text-white">
            Premium
          </button>

          <button className="pb-3 text-sm text-[#9AA4B2] hover:text-white">
            Inactive
          </button>

          <button className="pb-3 text-sm text-[#9AA4B2] hover:text-white">
            Banned
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex h-11 items-center gap-2 rounded-xl border border-[#202838] bg-[#121826] px-4 text-sm text-white">
            <Filter size={16} />
            Filters
          </button>

          <button className="flex h-11 items-center gap-2 rounded-xl border border-[#202838] bg-[#121826] px-4 text-sm text-white">
            <Download size={16} />
            Export
          </button>

          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A94A6]"
            />

            <input
              placeholder="Search by name or email..."
              className="h-11 w-[260px] rounded-xl border border-[#202838] bg-[#121826] pl-11 pr-4 text-sm text-white outline-none placeholder:text-[#6F7788]"
            />
          </div>
        </div>
      </div>

      {/* ================= TABLE ================= */}

      <table className="w-full">
        <thead className="border-b border-[#171E2B]">
          <tr className="text-left text-[13px] text-[#8A94A6]">
            <th className="px-5 py-4">
              <input type="checkbox" />
            </th>

            <th>User</th>

            <th>Email</th>

            <th>Plan</th>

            <th>Joined Date</th>

            <th>Last Active</th>

            <th>Status</th>

            <th className="text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b border-[#171E2B] last:border-none"
            >
              <td className="px-5 py-5">
                <input type="checkbox" />
              </td>

              {/* USER */}

              <td className="py-5">
                <div className="flex items-center gap-3">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={42}
                    height={42}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-medium text-white">
                      {user.name}
                    </h4>

                    <p className="text-xs text-[#8A94A6]">
                      {user.username}
                    </p>
                  </div>
                </div>
              </td>

              {/* EMAIL */}

              <td className="text-sm text-[#C4CBD7]">
                {user.email}
              </td>

              {/* PLAN */}

              <td>
                <div className="flex">
  {user.plan === "Premium" ? (
    <span className="inline-flex items-center gap-2 rounded-lg border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-sm font-medium text-violet-300">
      <span className="text-xs">👑</span>
      Premium
    </span>
  ) : (
    <span className="inline-flex items-center gap-2 rounded-lg border border-[#232B3B] bg-[#151B26] px-3 py-1.5 text-sm text-[#B8C0CC]">
      <span>○</span>
      Free
    </span>
  )}
</div>
              </td>

              {/* JOINED */}

              <td className="text-sm text-[#C4CBD7]">
                {user.joined}
              </td>

              {/* LAST ACTIVE */}

              <td>
                <div className="flex items-center gap-2 text-sm text-[#C4CBD7]">
  <span
    className={`h-2 w-2 rounded-full ${
      user.activity === "green"
        ? "bg-emerald-400"
        : user.activity === "yellow"
        ? "bg-yellow-400"
        : "bg-red-500"
    }`}
  />

  {user.lastActive}
</div>
              </td>

              {/* STATUS */}

              <td>
                <span
  className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
    user.status === "Active"
      ? "bg-emerald-500/15 text-emerald-400"
      : user.status === "Inactive"
      ? "bg-yellow-500/15 text-yellow-400"
      : "bg-red-500/15 text-red-400"
  }`}
>
  {user.status}
</span>
              </td>

              {/* ACTIONS */}

              <td>
                <div className="flex items-center justify-center gap-2">
  <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#232B3B] bg-[#121826] transition hover:border-violet-500">
    <Eye size={15} className="text-[#CBD3DF]" />
  </button>

  <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#232B3B] bg-[#121826] transition hover:border-violet-500">
    <Pencil size={15} className="text-[#CBD3DF]" />
  </button>

  <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#232B3B] bg-[#121826] transition hover:border-violet-500">
    <MoreVertical size={15} className="text-[#CBD3DF]" />
  </button>
</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* FOOTER PART 2 */}
      <div className="flex items-center justify-between border-t border-[#171E2B] px-5 py-5">
  <p className="text-sm text-[#8A94A6]">
    Showing 1 to 8 of 2,568 users
  </p>

  <div className="flex items-center gap-2">
    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#232B3B] bg-[#121826] text-[#8A94A6]">
      ←
    </button>

    <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 px-4 text-sm font-semibold text-white">
      1
    </button>

    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#232B3B] bg-[#121826] px-4 text-sm text-[#8A94A6]">
      2
    </button>

    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#232B3B] bg-[#121826] px-4 text-sm text-[#8A94A6]">
      3
    </button>

    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#232B3B] bg-[#121826] px-4 text-sm text-[#8A94A6]">
      ...
    </button>

    <button className="flex h-9 min-w-[54px] items-center justify-center rounded-lg border border-[#232B3B] bg-[#121826] px-4 text-sm text-[#8A94A6]">
      322
    </button>

    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#232B3B] bg-[#121826] text-[#8A94A6]">
      →
    </button>
  </div>
</div>
    </div>
    );
};

export default SubscriptionTable;