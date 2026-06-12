
const Cta = () => {
    return (
        <section className="py-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050505] px-8 py-14 md:px-14">
        
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-transparent to-orange-500/10" />
          <div className="absolute right-0 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-orange-500/20 blur-[120px]" />
          <div className="absolute right-20 top-10 h-40 w-40 rounded-full bg-orange-400/10 blur-[80px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Create Without Limits
            </h2>

            <p className="mt-4 text-base text-zinc-400 md:text-lg">
              Access every AI tool, generate stunning content, create
              visuals, voices, and more — completely free with no hidden
              paywalls.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-medium text-white transition hover:scale-105">
                Start Creating
              </button>

              
            </div>
          </div>

       <div  className="relative flex items-center justify-center">

  {/* Background Glow */}
  <div className="absolute h-[350px] w-[350px] rounded-full bg-orange-500/20 blur-[120px]" />

  <div className="absolute h-[200px] w-[200px] rounded-full bg-orange-400/20 blur-[70px]" />

  {/* Block */}
  <div className="relative">

    {/* Light Behind */}
    <div className="absolute left-1/2 top-1/2 h-[250px] w-[180px] -translate-x-1/2 -translate-y-1/2 bg-orange-500/30 blur-[80px]" />

    <div className="relative h-[240px] w-[130px] rotate-[12deg] rounded-xl bg-gradient-to-b from-zinc-700 via-zinc-900 to-black shadow-[0_0_60px_rgba(249,115,22,0.2)] animate-bounce">

      {/* Orange Overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/15 via-transparent to-transparent" />

      {/* Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width="52"
          height="52"
          viewBox="0 0 24 24"
          fill="none"
          className="drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]"
        >
          <path
            d="M12 3L15 8L21 9L17 14L18 21L12 18L6 21L7 14L3 9L9 8L12 3Z"
            stroke="#f97316"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Top Face */}
      <div className="absolute -top-5 left-2 h-10 w-[110px] skew-x-[-20deg] rounded-md bg-zinc-800" />
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
    );
};

export default Cta;