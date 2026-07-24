"use client";

import Image from "next/image";
import {
  Search,
  ChevronDown,
  Filter,
  Eye,
  Pencil,
  Copy,
  Trash2,
  MoreVertical,
} from "lucide-react";

type Inspiration = {
  id: number;
  thumbnail: string;
  title: string;
  author: string;
  category: string;
  categoryColor: string;
  status: "Published" | "Draft" | "Pending";
  views: string;
  createdAt: string;
};

const inspirations: Inspiration[] = [
  {
    id: 1,
    thumbnail: "/images/inspirations/saas.png",
    title: "AI SaaS Landing Page",
    author: "Ahmed Antor",
    category: "SaaS",
    categoryColor: "#8B5CF6",
    status: "Published",
    views: "12.5K",
    createdAt: "24 Jul 2024",
  },
   {
    id: 1,
    thumbnail: "/images/inspirations/saas.png",
    title: "AI SaaS Landing Page",
    author: "Ahmed Antor",
    category: "SaaS",
    categoryColor: "#8B5CF6",
    status: "Published",
    views: "12.5K",
    createdAt: "24 Jul 2024",
  }, {
    id: 1,
    thumbnail: "/images/inspirations/saas.png",
    title: "AI SaaS Landing Page",
    author: "Ahmed Antor",
    category: "SaaS",
    categoryColor: "#8B5CF6",
    status: "Published",
    views: "12.5K",
    createdAt: "24 Jul 2024",
  }, {
    id: 1,
    thumbnail: "/images/inspirations/saas.png",
    title: "AI SaaS Landing Page",
    author: "Ahmed Antor",
    category: "SaaS",
    categoryColor: "#8B5CF6",
    status: "Published",
    views: "12.5K",
    createdAt: "24 Jul 2024",
  }, {
    id: 1,
    thumbnail: "/images/inspirations/saas.png",
    title: "AI SaaS Landing Page",
    author: "Ahmed Antor",
    category: "SaaS",
    categoryColor: "#8B5CF6",
    status: "Published",
    views: "12.5K",
    createdAt: "24 Jul 2024",
  }, {
    id: 1,
    thumbnail: "/images/inspirations/saas.png",
    title: "AI SaaS Landing Page",
    author: "Ahmed Antor",
    category: "SaaS",
    categoryColor: "#8B5CF6",
    status: "Published",
    views: "12.5K",
    createdAt: "24 Jul 2024",
  }, {
    id: 1,
    thumbnail: "/images/inspirations/saas.png",
    title: "AI SaaS Landing Page",
    author: "Ahmed Antor",
    category: "SaaS",
    categoryColor: "#8B5CF6",
    status: "Published",
    views: "12.5K",
    createdAt: "24 Jul 2024",
  },
];

export default function InspirationsTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#1B2230] bg-[#0D1118]">
      {/* ================= Toolbar ================= */}

      <div className="flex items-center justify-between gap-4 border-b border-[#1B2230] p-5">
        <div className="flex flex-1 items-center gap-3">
          {/* Search */}

          <div className="relative w-[290px]">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6F7787]"
            />

            <input
              placeholder="Search inspirations..."
              className="h-10 w-full rounded-xl border border-[#202838] bg-[#10151D] pl-10 pr-4 text-sm text-white outline-none placeholder:text-[#6F7787]"
            />
          </div>

          {/* Select */}

          {[
            "All Categories",
            "All Status",
           
            "Newest First",
          ].map((item) => (
            <button
              key={item}
              className="flex h-10 items-center gap-3 rounded-xl border border-[#202838] bg-[#10151D] px-4 text-sm text-[#A7AFBC]"
            >
              {item}

              <ChevronDown size={16} />
            </button>
          ))}
        </div>

        <button className="flex h-10 items-center gap-2 rounded-xl border border-[#202838] bg-[#10151D] px-4 text-sm text-white">
          <Filter size={16} />

          Filters
        </button>
      </div>

      {/* ================= Table ================= */}

      <table className="w-full">
        <thead className="border-b border-[#1B2230]">
          <tr className="text-left text-[12px] uppercase tracking-wide text-[#727B8B]">
            <th className="w-12 px-5 py-4">
              <input type="checkbox" />
            </th>

            <th className="py-4">Thumbnail</th>

            <th>Title</th>

            <th>Category</th>

            <th>Status</th>

            <th>Views</th>

            <th>Created At</th>

            <th className="text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {inspirations.map((item) => (
            <tr
              key={item.id}
              className="border-b border-[#1B2230] last:border-none"
            >
              <td className="px-5 py-5">
                <input type="checkbox" />
              </td>

              {/* Thumbnail */}

              <td className="py-5">
                <div className="relative h-14 w-20 overflow-hidden rounded-lg border border-[#242C3B]">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </td>

              {/* Title */}

              <td>
                <div>
                  <h3 className="font-medium text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-[#80899B]">
                    by {item.author}
                  </p>
                </div>
              </td>

              {/* Category */}

              <td>
                <div className="flex items-center gap-2 text-sm text-white">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor: item.categoryColor,
                    }}
                  />

                  {item.category}
                </div>
              </td>

              {/* Status */}

              <td>
               <span
  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
    item.status === "Published"
      ? "bg-emerald-500/10 text-emerald-400"
      : item.status === "Draft"
      ? "bg-amber-500/10 text-amber-400"
      : "bg-blue-500/10 text-blue-400"
  }`}
>
  <span
    className={`h-2 w-2 rounded-full ${
      item.status === "Published"
        ? "bg-emerald-400"
        : item.status === "Draft"
        ? "bg-amber-400"
        : "bg-blue-400"
    }`}
  />

  {item.status}
</span>
              </td>

              {/* Views */}

              <td>
                <div className="flex items-center gap-2 text-sm text-[#D1D7E0]">
  <Eye size={15} className="text-[#8B93A5]" />

  {item.views}
</div>
              </td>

              {/* Created */}

              <td className="text-sm text-[#C6CEDA]">
                {item.createdAt}
              </td>

              {/* Actions */}

              <td>
                <div className="flex items-center justify-center gap-3">
  <button className="text-[#AAB3C2] transition hover:text-white">
    <Eye size={17} />
  </button>

  <button className="text-[#AAB3C2] transition hover:text-white">
    <Pencil size={17} />
  </button>


  <button className="text-red-500 transition hover:text-red-400">
    <Trash2 size={17} />
  </button>

</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between border-t border-[#1B2230] px-5 py-4">
  <div className="flex items-center gap-4">
    <span className="text-sm text-[#7F8797]">
      0 selected
    </span>

    <button className="flex items-center gap-2 rounded-lg border border-[#202838] bg-[#10151D] px-3 py-2 text-sm text-[#B8C0CC]">
      Bulk Actions

      <ChevronDown size={16} />
    </button>
  </div>

  <div className="flex items-center gap-2">
    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#202838] bg-[#10151D] text-[#8B93A5]">
      ←
    </button>

    <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-sm font-semibold text-white">
      1
    </button>

    <button className="flex h-9 w-9 items-center justify-center text-sm text-[#AEB5C2]">
      2
    </button>

    <button className="flex h-9 w-9 items-center justify-center text-sm text-[#AEB5C2]">
      3
    </button>

    <button className="flex h-9 w-9 items-center justify-center text-sm text-[#AEB5C2]">
      4
    </button>

    <button className="flex h-9 w-9 items-center justify-center text-sm text-[#AEB5C2]">
      5
    </button>

    <span className="px-2 text-[#8B93A5]">...</span>

    <button className="text-sm text-[#AEB5C2]">
      216
    </button>

    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#202838] bg-[#10151D] text-[#8B93A5]">
      →
    </button>
  </div>
</div>
    </div>
  );
}