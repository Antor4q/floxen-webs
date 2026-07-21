"use client";

import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";

type Category = {
  id: number;
  image: string;
  title: string;
  description: string;
  inspirations: number;
  views: string;
  saves: string;
  status: "Active";
 
};

const categories: Category[] = [
  {
    id: 1,
    image: "/images/categories/3d-scenes.png",
    title: "3D Scenes",
    description: "Stunning 3D scenes and environments for your projects.",
    inspirations: 40,
    views: "4.2k",
    saves: "2.8k",
    status: "Active",


  },

  {
    id: 2,
    image: "/images/categories/components.png",
    title: "Components",
    description:
      "Beautiful UI components and elements for any interface.",
    inspirations: 30,
    views: "3.1k",
    saves: "2.1k",
    status: "Active",

  
  },

  {
    id: 3,
    image: "/images/categories/backgrounds.png",
    title: "Backgrounds",
    description:
      "High quality backgrounds and textures for amazing designs.",
    inspirations: 36,
    views: "2.9k",
    saves: "1.9k",
    status: "Active",

  },

  {
    id: 4,
    image: "/images/categories/templates.png",
    title: "Templates",
    description:
      "Pre-built templates to speed up your design workflow.",
    inspirations: 34,
    views: "2.2k",
    saves: "1.9k",
    status: "Active",

  },
];

export default function CategoriesTable() {
  return (
    <div className="overflow-hidden mt-8 rounded-2xl border border-[#1A2232] bg-[#0B1018]">
      <table className="w-full">
        <thead className="border-b border-[#1A2232]">
          <tr className="text-left text-[13px] font-medium text-[#8B92A7]">
            <th className="px-8 py-5">Category</th>
            <th className="px-6 py-5">Inspirations</th>
            <th className="px-6 py-5">Views</th>
            <th className="px-6 py-5">Saves</th>
            <th className="px-6 py-5">Status</th>
            <th className="px-6 py-5 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((item) => (
            <tr
              key={item.id}
              className="border-b border-[#171E2B] last:border-none"
            >
              {/* CATEGORY */}
              <td className="px-8 py-6">
                <div className="flex items-center gap-5">
                  <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-[#262F42] bg-[#151B26]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="max-w-[260px]">
                    <h3 className="text-lg font-semibold leading-none text-white">
                      {item.title}
                    </h3>

                  
                  </div>
                </div>
              </td>

              {/* INSPIRATIONS */}
              <td className="px-6">
                <h4 className="text-lg font-medium text-white">
                  {item.inspirations}
                </h4>

                
              </td>

              {/* VIEWS */}
              <td className="px-6">
               <div>
  <h4 className="text-lg font-medium leading-none text-white">
    {item.views}
  </h4>

 
</div>
              </td>

              {/* SAVES */}
              <td className="px-6">
                <div>
  <h4 className="text-lg font-medium leading-none text-white">
    {item.saves}
  </h4>

</div>
              </td>

              {/* STATUS */}
              <td className="px-6">
               <span className="inline-flex rounded-full bg-[#123221] px-4 py-2 text-[13px] font-medium text-[#49F08A]">
  {item.status}
</span>
              </td>

              {/* ACTIONS */}
              <td className="px-6">
                <div className="flex items-center justify-center gap-3">
  <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#232B3B] bg-[#121826] transition hover:border-[#8B5CF6]">
    <Pencil
      size={16}
      strokeWidth={1.8}
      className="text-[#C7CDD8]"
    />
  </button>

  <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2A1418] transition hover:bg-[#3A1C22]">
    <Trash2
      size={16}
      strokeWidth={1.8}
      className="text-[#FF5C72]"
    />
  </button>
</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
{/* pagination */}
      <div className="flex items-center justify-between px-8 py-5">
  <p className="text-sm text-[#8B92A7]">
    Showing 1 to 4 of 4 categories
  </p>

  <div className="flex items-center gap-2">
    <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#232B3B] bg-[#141A25] text-[#8B92A7] transition hover:text-white">
      ←
    </button>

    <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7C3AED] font-semibold text-white">
      1
    </button>

    <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#232B3B] bg-[#141A25] text-[#8B92A7] transition hover:text-white">
      →
    </button>
  </div>
</div>
    </div>
  );
}