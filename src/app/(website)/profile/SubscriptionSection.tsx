import {
  Check,
  ChevronRight,
  Crown,
  X,
  Zap,
} from "lucide-react";
import { UsageData } from "./page";



interface SubscriptionSectionProps {
  isPremium: boolean;
  usage: UsageData;
}

const SubscriptionSection = ({
  isPremium,
  usage,
}: SubscriptionSectionProps) => {
  return (
    <>
      {/* ================================================= */}
      {/* PREMIUM NOTICE */}
      {/* ================================================= */}

      {isPremium ? (
        <section className="relative overflow-hidden rounded-2xl border border-violet-400/15 bg-gradient-to-br from-violet-500/[0.12] via-white/[0.03] to-transparent p-7">

          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative">

            <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-violet-300">
              <Crown size={14} />
              Premium Member
            </div>

            <h2 className="text-2xl font-semibold text-white">
              You have full access to FlowMotion.
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
              Your premium plan gives you access to premium
              designs, source code, downloads and advanced
              features.
            </p>

          </div>
        </section>
      ) : (
        <section className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7">

          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative">

            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-zinc-500">
              Upgrade your workflow
            </p>

            <h2 className="text-2xl font-semibold text-white">
              Build more with FlowMotion Premium.
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
              Get access to premium templates, source code,
              advanced prompts and more.
            </p>

            <button
              type="button"
              className="mt-5 flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-5 py-2.5 text-sm text-violet-200 transition hover:bg-violet-500/20"
            >
              Upgrade to Premium
              <ChevronRight size={15} />
            </button>

          </div>
        </section>
      )}

      {/* ================================================= */}
      {/* SUBSCRIPTION + ACCESS */}
      {/* ================================================= */}

      <div className="grid gap-4 lg:grid-cols-2">

        {/* Subscription */}
        <section className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7">

          <p className="text-xs font-medium uppercase tracking-widest text-zinc-600">
            Subscription
          </p>

          <div className="mt-4 flex items-center justify-between">

            <h3 className="text-xl font-semibold text-white">
              {isPremium ? "Premium" : "Free"}
            </h3>

            {isPremium && (
              <span className="rounded-full bg-violet-400/10 px-3 py-1 text-[10px] font-semibold text-violet-300">
                ACTIVE
              </span>
            )}

          </div>

          {isPremium ? (
            <>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                You have full access to the FlowMotion
                premium library.
              </p>

              <p className="mt-5 text-xs text-zinc-600">
                Renews September 29, 2027
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <button className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm text-white transition hover:bg-white/[0.08]">
                  Manage Subscription
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                You are currently on the Free plan.
                Upgrade to unlock premium content and
                downloads.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">

                <button className="rounded-full bg-violet-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-400">
                  Upgrade
                </button>

                <button className="flex items-center gap-1 text-sm text-zinc-500 transition hover:text-white">
                  Compare plans
                  <ChevronRight size={14} />
                </button>

              </div>
            </>
          )}

        </section>

        {/* Access */}
        <section className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7">

          <p className="text-xs font-medium uppercase tracking-widest text-zinc-600">
            Access & Downloads
          </p>

          <h3 className="mt-4 text-xl font-semibold text-white">
            {isPremium
              ? "Premium access"
              : "Free preview"}
          </h3>

          <div className="mt-5 space-y-3">

            {(isPremium
              ? [
                  "Full design library",
                  "Premium templates",
                  "Premium sections",
                  "Premium backgrounds",
                  "Source code downloads",
                  "Video downloads",
                  "Commercial license",
                ]
              : [
                  "Browse the library",
                  "Free starter prompts",
                  "Premium templates",
                  "Source code downloads",
                  "Premium sections",
                  "Premium backgrounds",
                  "Video downloads",
                ]
            ).map((item, index) => {

              const isAvailable =
                isPremium || index < 2;

              return (
                <div
                  key={item}
                  className={`flex items-center gap-3 text-sm ${
                    isAvailable
                      ? "text-zinc-300"
                      : "text-zinc-700"
                  }`}
                >

                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      isAvailable
                        ? "bg-white/[0.06] text-white"
                        : "text-zinc-700"
                    }`}
                  >
                    {isAvailable ? (
                      <Check size={12} />
                    ) : (
                      <X size={12} />
                    )}
                  </span>

                  {item}
                </div>
              );
            })}

          </div>
        </section>
      </div>

      {/* ================================================= */}
      {/* USAGE */}
      {/* ================================================= */}

      {isPremium && (
        <section className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-600">
                Daily Usage
              </p>

              <h3 className="mt-3 text-xl font-semibold text-white">
                Your usage
              </h3>
            </div>

            <Zap
              size={20}
              className="text-violet-300"
            />
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-3">

            <UsageItem
              title="Prompt Copies"
              used={usage.prompts.used}
              limit={usage.prompts.limit}
            />

            <UsageItem
              title="Source Downloads"
              used={usage.sourceDownloads.used}
              limit={usage.sourceDownloads.limit}
            />

            <UsageItem
              title="Video Downloads"
              used={usage.videoDownloads.used}
              limit={usage.videoDownloads.limit}
            />

          </div>
        </section>
      )}
    </>
  );
};

export default SubscriptionSection;


/* ================================================= */
/* USAGE ITEM */
/* ================================================= */

const UsageItem = ({
  title,
  used,
  limit,
}: {
  title: string;
  used: number;
  limit: number;
}) => {

  const percentage =
    limit > 0 ? (used / limit) * 100 : 0;

  return (
    <div>

      <div className="flex items-center justify-between">

        <p className="text-sm text-zinc-300">
          {title}
        </p>

        <p className="text-xs text-zinc-600">
          {used} / {limit}
        </p>

      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">

        <div
          className="h-full rounded-full bg-violet-400 transition-all"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
};