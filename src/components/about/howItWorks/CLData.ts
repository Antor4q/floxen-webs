import type { LucideIcon } from "lucide-react";
import { Search, Copy, Sparkles, Rocket } from "lucide-react";

export interface HowItWorksStep {
  id: number;
  step: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    id: 1,
    step: "01",
    title: "Find Inspiration",
    description:
      "Browse a curated library of premium websites and layouts. Save the ones that match the feeling you're after.",
    image: "/images/how-it-works/01.webp",
    icon: Search,
  },
  {
    id: 2,
    step: "02",
    title: "Copy Prompt",
    description:
      "Every layout ships with a ready-made prompt. Copy it in one click and drop it straight into your AI of choice.",
    image: "/images/how-it-works/02.webp",
    icon: Copy,
  },
  {
    id: 3,
    step: "03",
    title: "Generate",
    description:
      "Let the model do the heavy lifting. Structure, styling, and content come together in seconds.",
    image: "/images/how-it-works/03.webp",
    icon: Sparkles,
  },
  {
    id: 4,
    step: "04",
    title: "Launch",
    description:
      "Refine the details, connect your domain, and ship a site that actually stands out.",
    image: "/images/how-it-works/04.webp",
    icon: Rocket,
  },
];