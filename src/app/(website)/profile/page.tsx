"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Check,
  ChevronRight,
  Copy,
  Crown,
  Download,
  Heart,
  KeyRound,
  LogOut,
  Mail,
  Pencil,
  ShieldCheck,
  Trash2,
  User,
  X,
  Zap,
} from "lucide-react";

// Static avatar for now
import profileAvatar from "../../../../public/logo.png";

type PlanType = "FREE" | "PREMIUM";

interface ProfileData {
  name: string;
  email: string;
  picture: string;
  favourites: number;
  plan: PlanType;
  authProvider: "google" | "credentials";
  hasPassword: boolean;
  memberSince: string;
}

const ProfilePage = () => {
  // --------------------------------------------------
  // STATIC DATA FOR NOW
  // Later replace this with Redux/API data
  // --------------------------------------------------

  const profileData: ProfileData = {
    name: "Ahmed Antor",
    email: "tariquelislam2015@gmail.com",
    picture: profileAvatar.src,
    favourites: 12,

    // Change this to "PREMIUM" to test premium UI
    plan: "PREMIUM",

    // Change these to test Set Password / Change Password
    authProvider: "google",
    hasPassword: false,

    memberSince: "September 2026",
  };

  const isPremium = profileData.plan === "PREMIUM";

  const [activeTab, setActiveTab] = useState<
    "overview" | "favourites" | "affiliate"
  >("overview");

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  const [showPasswordModal, setShowPasswordModal] =
    useState(false);

  const [showEditModal, setShowEditModal] =
    useState(false);

  // --------------------------------------------------
  // STATIC USAGE DATA
  // --------------------------------------------------

  const usage = {
    prompts: {
      used: isPremium ? 2 : 1,
      limit: isPremium ? 3 : 3,
    },

    sourceDownloads: {
      used: isPremium ? 1 : 0,
      limit: isPremium ? 3 : 0,
    },

    videoDownloads: {
      used: isPremium ? 0 : 0,
      limit: isPremium ? 3 : 0,
    },
  };

  return (
    <main className="relative mx-auto max-w-360 px-10 pt-40 pb-10">
      {/* ------------------------------------------------ */}
      {/* PAGE HEADER */}
      {/* ------------------------------------------------ */}

      <section className="mb-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
          Your Account
        </p>

        <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
          Welcome back, {profileData.name.split(" ")[0]}
        </h1>

        {/* Tabs */}
        <div className="mt-8 flex items-center gap-7 border-b border-white/[0.08]">
          <button
            onClick={() => setActiveTab("overview")}
            className={`relative pb-4 text-sm transition ${
              activeTab === "overview"
                ? "text-white"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            Overview

            {activeTab === "overview" && (
              <span className="absolute bottom-0 left-0 h-px w-full bg-white" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("favourites")}
            className={`relative flex items-center gap-2 pb-4 text-sm transition ${
              activeTab === "favourites"
                ? "text-white"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            Favourites

            <span className="text-xs text-zinc-600">
              {profileData.favourites}
            </span>

            {activeTab === "favourites" && (
              <span className="absolute bottom-0 left-0 h-px w-full bg-white" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("affiliate")}
            className={`relative flex items-center gap-2 pb-4 text-sm transition ${
              activeTab === "affiliate"
                ? "text-white"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <Zap size={13} />
            Affiliate

            {activeTab === "affiliate" && (
              <span className="absolute bottom-0 left-0 h-px w-full bg-white" />
            )}
          </button>
        </div>
      </section>

      {/* ------------------------------------------------ */}
      {/* OVERVIEW */}
      {/* ------------------------------------------------ */}

      {activeTab === "overview" && (
        <div className="space-y-4">
          {/* PROFILE CARD */}
          <section className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 backdrop-blur-xl sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              {/* User */}
              <div className="flex items-center gap-5">
                {/* Avatar */}
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05]">
                  <Image
                    src={profileData.picture}
                    alt={profileData.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {profileData.name}
                  </h2>

                  <div className="mt-1 flex items-center gap-2 text-sm text-zinc-500">
                    <Mail size={14} />
                    <span>{profileData.email}</span>

                    <button
                      type="button"
                      className="transition hover:text-white"
                      title="Copy email"
                    >
                      <Copy size={13} />
                    </button>
                  </div>

                  {/* Badges */}
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full border px-3 py-1 text-[11px] font-medium ${
                        isPremium
                          ? "border-violet-400/20 bg-violet-400/10 text-violet-300"
                          : "border-white/10 bg-white/[0.04] text-zinc-400"
                      }`}
                    >
                      {isPremium ? "PREMIUM" : "FREE PLAN"}
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-zinc-500">
                      {profileData.favourites} favourites
                    </span>
                  </div>
                </div>
              </div>

              {/* Profile Actions */}
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setShowEditModal(true)}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <Pencil size={14} />
                  Edit Profile
                </button>

                <button
                  type="button"
                  onClick={() => setShowPasswordModal(true)}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <KeyRound size={14} />

                  {profileData.hasPassword
                    ? "Change Password"
                    : "Set Password"}
                </button>
              </div>
            </div>

            {/* Member info */}
            <div className="mt-7 border-t border-white/[0.06] pt-5">
              <p className="text-xs text-zinc-600">
                Member since {profileData.memberSince}
              </p>
            </div>
          </section>

          {/* ------------------------------------------------ */}
          {/* PREMIUM NOTICE */}
          {/* ------------------------------------------------ */}

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

          {/* ------------------------------------------------ */}
          {/* SUBSCRIPTION + ACCESS */}
          {/* ------------------------------------------------ */}

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
                {(
                  isPremium
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
                  const isAvailable = isPremium || index < 2;

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

          {/* ------------------------------------------------ */}
          {/* USAGE - ONLY PREMIUM */}
          {/* ------------------------------------------------ */}

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

          {/* ------------------------------------------------ */}
          {/* SAVED DESIGNS */}
          {/* ------------------------------------------------ */}

          <section className="pt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">
                Saved designs
              </h2>

              <button
                onClick={() => setActiveTab("favourites")}
                className="flex items-center gap-1 text-sm text-zinc-500 transition hover:text-white"
              >
                See all favourites
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="mt-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-8 text-center">
              <Heart
                size={22}
                className="mx-auto text-zinc-700"
              />

              <p className="mt-3 text-sm text-zinc-500">
                You haven`t saved any designs yet.
              </p>

              <button className="mt-3 text-sm text-violet-400 hover:text-violet-300">
                Browse designs
              </button>
            </div>
          </section>

          {/* ------------------------------------------------ */}
          {/* SECURITY */}
          {/* ------------------------------------------------ */}

          <section className="pt-8">
            <h2 className="text-lg font-semibold text-white">
              Security
            </h2>

            <div className="mt-4 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">
              {/* Password */}
              <button
                onClick={() => setShowPasswordModal(true)}
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

          {/* ------------------------------------------------ */}
          {/* DANGER ZONE */}
          {/* ------------------------------------------------ */}

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
                onClick={() => setShowDeleteModal(true)}
                className="flex w-fit items-center gap-2 text-sm text-zinc-600 underline-offset-4 transition hover:text-red-400 hover:underline"
              >
                <Trash2 size={14} />
                Delete account
              </button>
            </div>
          </section>
        </div>
      )}

      {/* ------------------------------------------------ */}
      {/* FAVOURITES */}
      {/* ------------------------------------------------ */}

      {activeTab === "favourites" && (
        <section className="min-h-[400px]">
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-10 text-center">
            <Heart
              size={28}
              className="mx-auto text-zinc-700"
            />

            <h2 className="mt-5 text-xl font-semibold text-white">
              Your favourites
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">
              Designs you save will appear here so you can
              quickly access them later.
            </p>
          </div>
        </section>
      )}

      {/* ------------------------------------------------ */}
      {/* AFFILIATE */}
      {/* ------------------------------------------------ */}

      {activeTab === "affiliate" && (
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
      )}

      {/* ------------------------------------------------ */}
      {/* EDIT PROFILE MODAL */}
      {/* ------------------------------------------------ */}

      {showEditModal && (
        <Modal
          title="Edit profile"
          onClose={() => setShowEditModal(false)}
        >
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-xs text-zinc-500">
                Full name
              </label>

              <input
                defaultValue={profileData.name}
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none focus:border-violet-400/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-zinc-500">
                Email
              </label>

              <input
                value={profileData.email}
                disabled
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 text-sm text-zinc-600 outline-none"
              />
            </div>

            <button className="h-12 w-full rounded-xl bg-violet-500 text-sm font-medium text-white transition hover:bg-violet-400">
              Save Changes
            </button>
          </div>
        </Modal>
      )}

      {/* ------------------------------------------------ */}
      {/* PASSWORD MODAL */}
      {/* ------------------------------------------------ */}

      {showPasswordModal && (
        <Modal
          title={
            profileData.hasPassword
              ? "Change password"
              : "Set password"
          }
          onClose={() => setShowPasswordModal(false)}
        >
          <div className="space-y-5">
            {profileData.hasPassword && (
              <div>
                <label className="mb-2 block text-xs text-zinc-500">
                  Current password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none focus:border-violet-400/40"
                />
              </div>
            )}

            <div>
              <label className="mb-2 block text-xs text-zinc-500">
                {profileData.hasPassword
                  ? "New password"
                  : "Create password"}
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none focus:border-violet-400/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-zinc-500">
                Confirm password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none focus:border-violet-400/40"
              />
            </div>

            <button className="h-12 w-full rounded-xl bg-violet-500 text-sm font-medium text-white transition hover:bg-violet-400">
              {profileData.hasPassword
                ? "Change Password"
                : "Set Password"}
            </button>
          </div>
        </Modal>
      )}

      {/* ------------------------------------------------ */}
      {/* DELETE ACCOUNT MODAL */}
      {/* ------------------------------------------------ */}

      {showDeleteModal && (
        <Modal
          title="Delete account"
          onClose={() => setShowDeleteModal(false)}
        >
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
              <Trash2 size={20} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-white">
              Are you sure?
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Deleting your account will permanently remove
              your profile, favourites and account data. This
              action cannot be undone.
            </p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] py-3 text-sm text-zinc-300 transition hover:bg-white/[0.07]"
              >
                Cancel
              </button>

              <button className="flex-1 rounded-xl bg-red-500/10 py-3 text-sm text-red-400 transition hover:bg-red-500/20">
                Delete Account
              </button>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default ProfilePage;

/* ================================================== */
/* USAGE COMPONENT */
/* ================================================== */

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

/* ================================================== */
/* MODAL COMPONENT */
/* ================================================== */

const Modal = ({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-md">
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#090909] p-7 shadow-[0_30px_100px_rgba(0,0,0,.6)]">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-zinc-600 transition hover:bg-white/[0.05] hover:text-white"
        >
          <X size={17} />
        </button>

        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>

        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};