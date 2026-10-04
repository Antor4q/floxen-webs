import { Zap } from "lucide-react";

const AffiliateTab = () => {
  return (
    <section className="min-h-[400px]">

      <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-8">

        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
            <Zap size={18} />
          </div>

          <h2 className="mt-5 text-2xl font-semibold text-white">
            Become a FlowMotion affiliate
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
            Share FlowMotion with your audience and earn
            commission from every successful referral.
          </p>

          <button className="mt-6 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm text-white transition hover:bg-white/[0.08]">
            Become an Affiliate
          </button>

        </div>
      </div>
    </section>
  );
};

export default AffiliateTab;