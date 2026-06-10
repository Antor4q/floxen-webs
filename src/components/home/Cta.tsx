
const Cta = () => {
    return (
     <section className="">
      <div className="max-w-[380px] px-4 text-left">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
          Ready To Build
        </p>

        <h2 className="mt-4 text-2xl md:text-3xl font-medium leading-tight tracking-tight text-white">
          Discover inspiration.
          <br />
          Copy prompts.
          <br />
          Build faster.
        </h2>

        <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
          Explore curated website inspirations and production-ready prompts for
          modern developers and designers.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <button
            className="h-11 w-full rounded-lg text-white text-sm transition-all hover:scale-[1.02]"
            style={{
              background:
                "linear-gradient(135deg,#ffbe50 0%,#ff8a00 35%,#ff3c00 70%,#7a0000 100%)",
            }}
          >
            Start Exploring
          </button>

          <button className="h-11 w-full rounded-lg border border-white/10 bg-white/[0.03] text-sm text-white hover:bg-white/[0.06] transition-all">
            Get Pro
          </button>
        </div>
      </div>
    </section>
    );
};

export default Cta;