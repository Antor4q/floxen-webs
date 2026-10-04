import {
  ChevronRight,
  KeyRound,
  LogOut,
  ShieldCheck,
  Trash2,
} from "lucide-react";

import { ProfileData } from "./page";


interface SecuritySectionProps {
  profileData: ProfileData;
  onPasswordClick: () => void;
  onDeleteClick: () => void;
}

const SecuritySection = ({
  profileData,
  onPasswordClick,
  onDeleteClick,
}: SecuritySectionProps) => {
  return (
    <>
      {/* ================================================= */}
      {/* SECURITY */}
      {/* ================================================= */}

      <section className="pt-8">

        <h2 className="text-lg font-semibold text-white">
          Security
        </h2>

        <div className="mt-4 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">

          {/* Password */}
          <button
            onClick={onPasswordClick}
            className="flex w-full items-center justify-between p-6 text-left transition hover:bg-white/[0.025]"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-zinc-400">
                <KeyRound size={18} />
              </div>

              <div>

                <p className="text-sm font-medium text-white">
                  {profileData.hasPassword
                    ? "Change password"
                    : "Set password"}
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  {profileData.hasPassword
                    ? "Update your account password"
                    : "Add a password to sign in with email"}
                </p>

              </div>
            </div>

            <ChevronRight
              size={17}
              className="text-zinc-600"
            />

          </button>

          <div className="h-px bg-white/[0.05]" />

          {/* Login method */}
          <div className="flex items-center justify-between p-6">

            <div className="flex items-center gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-zinc-400">
                <ShieldCheck size={18} />
              </div>

              <div>

                <p className="text-sm font-medium text-white">
                  Login method
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  Connected with{" "}
                  {profileData.authProvider ===
                  "google"
                    ? "Google"
                    : "Email & Password"}
                </p>

              </div>
            </div>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-wide text-zinc-500">
              {profileData.authProvider}
            </span>

          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* DANGER ZONE */}
      {/* ================================================= */}

      <section className="pt-10">

        <div className="flex flex-col gap-4 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center sm:justify-between">

          <button
            type="button"
            className="flex w-fit items-center gap-2 rounded-full border border-red-500/10 bg-red-500/[0.04] px-5 py-2.5 text-sm text-red-400 transition hover:border-red-500/20 hover:bg-red-500/[0.08]"
          >
            <LogOut size={15} />
            Sign out
          </button>

          <button
            type="button"
            onClick={onDeleteClick}
            className="flex w-fit items-center gap-2 text-sm text-zinc-600 underline-offset-4 transition hover:text-red-400 hover:underline"
          >
            <Trash2 size={14} />
            Delete account
          </button>

        </div>
      </section>
    </>
  );
};

export default SecuritySection;