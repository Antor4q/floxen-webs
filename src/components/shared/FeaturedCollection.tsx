"use client"
import { motion,Variants} from "framer-motion"

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // ✅ safe cubic-bezier
    },
  }),
};

const FeaturedCollection = () => {
    return (
      <div className="container mx-auto px-4 py-10">
         <div className="grid grid-cols-12 gap-6">

      {/* Left Featured Card */}
      <motion.div
         custom={1}
          variants={cardVariant}
          initial="hidden"
          animate="show"
          whileHover={{ y: -6 }}
        className="col-span-12 lg:col-span-5 rounded-3xl bg-gradient-to-br from-zinc-950 via-black to-orange-950 p-8 border border-white/5 hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,120,50,0.08)] transition-all duration-300"
      >
        <h2 className="mt-8 text-5xl font-bold text-white leading-tight">
          Build Stunning
          <br />
          AI Experiences
        </h2>

        <p className="mt-4 text-zinc-400 max-w-sm">
          Discover the most innovative AI products, tools and
          interfaces crafted with next-generation design.
        </p>
      </motion.div>

      {/* Right Side */}
      <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">

        {/* Top Card */}
        <motion.div
          custom={1}
          variants={cardVariant}
          initial="hidden"
          animate="show"
          whileHover={{ y: -6 }}
          className="rounded-3xl bg-gradient-to-br from-zinc-950 via-black to-orange-950 p-6 border border-white/5 hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,120,50,0.08)] transition-all duration-300"
        >
          <h3 className="mt-4 text-4xl font-bold text-white">
            SaaS Landing
            <br />
            Pages
          </h3>

          <p className="mt-3 text-zinc-400 max-w-md">
            Curated collection of high-converting SaaS websites
            and startup landing pages.
          </p>

          <button className="mt-6 text-white font-medium">
            Explore →
          </button>
        </motion.div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-2 gap-6">

          {/* Card 3 */}
          <motion.div
            custom={2}
            variants={cardVariant}
            initial="hidden"
            animate="show"
            whileHover={{ y: -8, scale: 1.02 }}
            className="rounded-3xl bg-gradient-to-br from-zinc-950 via-black to-orange-950 p-6 flex flex-col justify-between border border-white/5 hover:border-white/10 hover:shadow-[0_0_25px_rgba(255,120,50,0.06)] transition-all duration-300"
          >
            <div>
              <h3 className="text-3xl font-bold text-white">
                WebGL
                <br />
                Showcase
              </h3>

              <p className="mt-3 text-zinc-400">
                Interactive 3D experiences and immersive web animations.
              </p>
            </div>

            <button className="mt-6 text-white font-medium">
              Explore →
            </button>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            custom={3}
            variants={cardVariant}
            initial="hidden"
            animate="show"
            whileHover={{ y: -8, scale: 1.02 }}
            className="rounded-3xl bg-gradient-to-br from-zinc-950 via-black to-orange-950 p-6 flex flex-col justify-between border border-white/5 hover:border-white/10 hover:shadow-[0_0_25px_rgba(255,120,50,0.06)] transition-all duration-300"
          >
            <div>
              <h3 className="text-3xl font-bold text-white">
                Motion
                <br />
                Websites
              </h3>

              <p className="mt-3 text-zinc-400">
                Inspiring websites featuring smooth interactions,
                scroll effects and animations.
              </p>
            </div>

            <button className="mt-6 text-white font-medium">
              Explore →
            </button>
          </motion.div>

        </div>
      </div>
    </div>
      </div>
    );
};

export default FeaturedCollection;