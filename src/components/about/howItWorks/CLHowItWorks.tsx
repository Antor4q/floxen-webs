"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type Variants,
} from "framer-motion";
import { HOW_IT_WORKS_STEPS, HowItWorksStep } from "./CLData";


/* -------------------------------------------------------------------------- */
/*  Constants                                                                  */
/* -------------------------------------------------------------------------- */

const ACCENT = "#8B5CF6";
const BG = "#060507";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const TEXT_TRANSITION = { duration: 0.6, ease: EASE_OUT };
const IMAGE_TRANSITION = { duration: 0.7, ease: EASE_OUT };
const DESC_DELAY = 0.1;
const CTA_DELAY = 0.2;

const TIMELINE_HEIGHT_DESKTOP = 560; // px, visual span of the sticky timeline
const STEP_SCROLL_VH = 100; // scroll distance allotted per step

// Height of the site's fixed/sticky navbar in px.
// Adjust this to match your actual navbar height so the sticky block
// settles just below it instead of pinning under/behind it.
const NAVBAR_HEIGHT = 80;

const headingVariants: Variants = {
  initial: { opacity: 0, y: 24, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -16, filter: "blur(8px)" },
};

const descVariants: Variants = {
  initial: { opacity: 0, y: 16, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -12, filter: "blur(6px)" },
};

const ctaVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const imageVariants: Variants = {
  initial: { opacity: 0, scale: 0.92, y: 24 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.94, y: -16 },
};

/* -------------------------------------------------------------------------- */
/*  Subcomponents                                                             */
/* -------------------------------------------------------------------------- */

function SectionHeading() {
  return (
    <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 py-1.5 backdrop-blur-sm">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: ACCENT, boxShadow: `0 0 8px ${ACCENT}` }}
        />
        <span
          className="text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: ACCENT }}
        >
          How It Works
        </span>
      </div>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
        From Inspiration
        <br />
        to <span style={{ color: ACCENT }}>Production.</span>
      </h2>
    </div>
  );
}

function MobileSectionHeader() {
  return (
    <div className="block px-6 pb-12 pt-24 md:hidden">
      <SectionHeading />
    </div>
  );
}

// interface StepIconProps {
//   step: HowItWorksStep;
//   active: boolean;
// }

// function StepIcon({ step, active }: StepIconProps) {
//   const Icon = step.icon;
//   return (
//     <motion.div
//       className="relative flex h-16 w-16 items-center justify-center rounded-full border backdrop-blur-md transition-colors duration-500 md:h-20 md:w-20"
//       style={{
//         borderColor: active ? ACCENT : "rgba(255,255,255,0.12)",
//         backgroundColor: active ? "rgba(139,92,246,0.12)" : "rgba(255,255,255,0.03)",
//       }}
//       animate={
//         active
//           ? { scale: [1, 1.06, 1], boxShadow: `0 0 42px rgba(139,92,246,0.45)` }
//           : { scale: 1, boxShadow: "0 0 0 rgba(139,92,246,0)" }
//       }
//       transition={
//         active
//           ? { scale: { duration: 2.2, repeat: Infinity, ease: "easeInOut" }, boxShadow: { duration: 0.5 } }
//           : { duration: 0.5 }
//       }
//     >
//       <Icon
//         className="h-6 w-6 transition-colors duration-500 md:h-7 md:w-7"
//         style={{ color: active ? ACCENT : "rgba(255,255,255,0.4)" }}
//         strokeWidth={1.75}
//       />
//     </motion.div>
//   );
// }

// interface TimelineProps {
//   progress: import("framer-motion").MotionValue<number>;
//   activeStep: HowItWorksStep;
// }

// function StickyTimeline({ progress, activeStep }: TimelineProps) {
//   const scaleY = useTransform(progress, [0, 1], [0, 1]);

//   return (
//     <div
//       className="relative hidden flex-shrink-0 items-center justify-center md:flex"
//       style={{ height: TIMELINE_HEIGHT_DESKTOP, width: 120 }}
//     >
//       {/* base gray line */}
//       <div className="absolute top-0 h-full w-px rounded-full bg-white/10" />
//       {/* purple progress line, synced to scroll */}
//       <motion.div
//         className="absolute top-0 w-px origin-top rounded-full"
//         style={{
//           height: "100%",
//           scaleY,
//           backgroundColor: ACCENT,
//           boxShadow: `0 0 16px ${ACCENT}`,
//         }}
//       />
//       {/* active step marker */}
//       <div className="relative z-10">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeStep.id}
//             initial={{ opacity: 0, scale: 0.85 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.85 }}
//             transition={{ duration: 0.4, ease: EASE_OUT }}
//           >
//             <StepIcon step={activeStep} active />
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

interface TextBlockProps {
  step: HowItWorksStep;
  align: "left" | "right";
}

function TextBlock({ step, align }: TextBlockProps) {
  return (
    <div className={align === "right" ? "md:text-right" : "md:text-left"}>
      <motion.span
        variants={descVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={TEXT_TRANSITION}
        className="text-sm font-semibold tracking-[0.2em]"
        style={{ color: ACCENT }}
      >
        {step.step}
      </motion.span>

      <motion.h3
        variants={headingVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={TEXT_TRANSITION}
        className="mt-3 text-2xl font-semibold text-white md:text-3xl"
      >
        {step.title}
      </motion.h3>

      <motion.p
        variants={descVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ ...TEXT_TRANSITION, delay: DESC_DELAY }}
        className="mt-4 max-w-md text-base leading-relaxed text-white/60 md:max-w-sm"
      >
        {step.description}
      </motion.p>

      <motion.button
        variants={ctaVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ ...TEXT_TRANSITION, delay: CTA_DELAY }}
        className={`mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white ${
          align === "right" ? "md:flex-row-reverse" : ""
        }`}
      >
        Learn more
        <span aria-hidden style={{ color: ACCENT }}>
          &rarr;
        </span>
      </motion.button>
    </div>
  );
}

function ImageBlock({ step }: { step: HowItWorksStep }) {
  return (
    <motion.div
      variants={imageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={IMAGE_TRANSITION}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-sm"
    >
      <Image
        src={step.image}
        alt={step.title}
        fill
        sizes="(min-width: 768px) 42vw, 90vw"
        className="object-cover"
        priority={step.id === 1}
      />
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Desktop: sticky scroll-driven experience                                  */
/* -------------------------------------------------------------------------- */

function DesktopExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsCount = HOW_IT_WORKS_STEPS.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const nextIndex = Math.min(stepsCount - 1, Math.floor(value * stepsCount));
    setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex));
  });

  const activeStep = HOW_IT_WORKS_STEPS[activeIndex];
  const isTextLeft = activeIndex % 2 === 0;

  return (
    <section
      ref={sectionRef}
      className="relative hidden md:block"
      style={{ height: `${stepsCount * STEP_SCROLL_VH}vh` }}
    >
      <div
        className="sticky flex w-full flex-col items-center justify-center overflow-hidden px-10 lg:px-20"
        style={{ top: NAVBAR_HEIGHT, height: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}
      >
        <div className="mb-8 lg:mb-12">
          <SectionHeading />
        </div>

        <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-6 lg:gap-12">
          <div className="flex w-[42%] justify-end">
            <div className="w-full max-w-md">
              <AnimatePresence mode="wait">
                {isTextLeft ? (
                  <TextBlock key={`text-${activeStep.id}`} step={activeStep} align="left" />
                ) : (
                  <ImageBlock key={`image-${activeStep.id}`} step={activeStep} />
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* <StickyTimeline progress={scrollYProgress} activeStep={activeStep} /> */}

          <div className="flex w-[42%] justify-start">
            <div className="w-full max-w-md">
              <AnimatePresence mode="wait">
                {isTextLeft ? (
                  <ImageBlock key={`image-${activeStep.id}`} step={activeStep} />
                ) : (
                  <TextBlock key={`text-${activeStep.id}`} step={activeStep} align="right" />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Mobile: static stacked timeline, no sticky/pinning                        */
/* -------------------------------------------------------------------------- */

function MobileExperience() {
  return (
    <div className="relative block px-6 pb-24 md:hidden">
      <div className="absolute left-[31px] top-2 h-[calc(100%-1rem)] w-px bg-white/10" />
      <div className="flex flex-col gap-14">
        {HOW_IT_WORKS_STEPS.map((step) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="relative flex gap-6"
          >
            {/* <div className="relative z-10 flex-shrink-0">
              <StepIcon step={step} active />
            </div> */}
            <div className="flex-1 pt-1">
              <span className="text-xs font-semibold tracking-[0.2em]" style={{ color: ACCENT }}>
                {step.step}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{step.description}</p>
              <div className="relative mt-5 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Root export                                                               */
/* -------------------------------------------------------------------------- */

export interface HowItWorksProps {
  className?: string;
}

export default function HowItWorks({ className = "" }: HowItWorksProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <MobileSectionHeader />
      <DesktopExperience />
      <MobileExperience />
    </div>
  );
}