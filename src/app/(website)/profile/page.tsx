
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Copy,
  KeyRound,
  Mail,
  Pencil,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import SubscriptionSection from "../../../components/profile/SubscriptionSection";
import SecuritySection from "../../../components/profile/SecuritySection";
import FavouritesTab from "../../../components/profile/FavouritesTab";
import AffiliateTab from "../../../components/profile/AffiliateTab";
import AccountModals from "../../../components/profile/AccountModals";

import { RootState } from "@/src/redux/store";

export interface UsageData {
  prompts: {
    used: number;
    limit: number;
  };

  sourceDownloads: {
    used: number;
    limit: number;
  };

  videoDownloads: {
    used: number;
    limit: number;
  };
}

const ProfilePage = () => {
  const router = useRouter();

  // --------------------------------------------------
  // USER FROM REDUX
  // --------------------------------------------------

  const { user } = useSelector(
    (state: RootState) => state.user
  );

  console.log("user data from profile page", user);

  const isPremium = user?.plan === "PREMIUM";

  // --------------------------------------------------
  // PASSWORD
  // --------------------------------------------------
  // Only Google provider exists:
  //     => Set Password
  //
  // Credentials exists:
  //     => Change Password
  //
  // Google + Credentials:
  //     => Change Password
  // --------------------------------------------------

  const isGoogleOnly =
    user?.auths?.length === 1 &&
    user.auths[0]?.provider === "google";

  const hasPassword = !isGoogleOnly;

  // --------------------------------------------------
  // TABS
  // --------------------------------------------------

  const [activeTab, setActiveTab] = useState<
    "overview" | "favourites" | "affiliate"
  >("overview");

  // --------------------------------------------------
  // MODALS
  // --------------------------------------------------

  const [showEditModal, setShowEditModal] =
    useState(false);

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  // --------------------------------------------------
  // STATIC USAGE DATA
  // --------------------------------------------------

  const usage: UsageData = {
    prompts: {
      used: isPremium ? 2 : 1,
      limit: isPremium ? 3 : 3,
    },

    sourceDownloads: {
      used: isPremium ? 1 : 0,
      limit: isPremium ? 3 : 0,
    },

    videoDownloads: {
      used: 0,
      limit: isPremium ? 3 : 0,
    },
  };

  // --------------------------------------------------
  // PASSWORD
  // --------------------------------------------------

  const handlePasswordClick = () => {
    router.push("/password");
  };

  // --------------------------------------------------
  // COPY EMAIL
  // --------------------------------------------------

  const handleCopyEmail = async () => {
    if (!user?.email) return;

    try {
      await navigator.clipboard.writeText(user.email);
    } catch (error) {
      console.error(
        "Failed to copy email:",
        error
      );
    }
  };

  return (
    <main className="relative mx-auto max-w-360 px-10 pt-40 pb-10">

      {/* ================================================= */}
      {/* PAGE HEADER */}
      {/* ================================================= */}

      <section className="mb-8">

        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
          Your Account
        </p>

        <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
          Welcome back,{" "}
          {user?.name?.split(" ")[0] || ""}
        </h1>

        {/* ================================================= */}
        {/* TABS */}
        {/* ================================================= */}

        <div className="mt-8 flex items-center gap-7 border-b border-white/[0.08]">

          {/* Overview */}

          <button
            type="button"
            onClick={() =>
              setActiveTab("overview")
            }
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

          {/* Favourites */}

          <button
            type="button"
            onClick={() =>
              setActiveTab("favourites")
            }
            className={`relative flex items-center gap-2 pb-4 text-sm transition ${
              activeTab === "favourites"
                ? "text-white"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            Favourites

            <span className="text-xs text-zinc-600">
              0
            </span>

            {activeTab === "favourites" && (
              <span className="absolute bottom-0 left-0 h-px w-full bg-white" />
            )}
          </button>

          {/* Affiliate */}

          <button
            type="button"
            onClick={() =>
              setActiveTab("affiliate")
            }
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

      {/* ================================================= */}
      {/* OVERVIEW */}
      {/* ================================================= */}

      {activeTab === "overview" && (
        <div className="space-y-4">

          {/* ================================================= */}
          {/* PROFILE CARD */}
          {/* ================================================= */}

          <section className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 backdrop-blur-xl sm:p-8">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              {/* ================================================= */}
              {/* USER */}
              {/* ================================================= */}

              <div className="flex items-center gap-5">

                {/* Avatar */}

                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05]">

                  {user?.picture ? (
                    <Image
                      src={user.picture}
                      alt={
                        user?.name || "photo"
                      }
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xl font-semibold text-zinc-400">
                      {user?.name
                        ?.charAt(0)
                        ?.toUpperCase()}
                    </div>
                  )}

                </div>

                {/* Info */}

                <div>

                  <h2 className="text-xl font-semibold text-white">
                    {user?.name}
                  </h2>

                  <div className="mt-1 flex items-center gap-2 text-sm text-zinc-500">

                    <Mail size={14} />

                    <span>
                      {user?.email}
                    </span>

                    <button
                      type="button"
                      onClick={
                        handleCopyEmail
                      }
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
                      {isPremium
                        ? "PREMIUM"
                        : "FREE PLAN"}
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-zinc-500">
                      0 favourites
                    </span>

                  </div>

                </div>

              </div>

              {/* ================================================= */}
              {/* PROFILE ACTIONS */}
              {/* ================================================= */}

              <div className="flex flex-wrap gap-2">

                {/* Edit Profile */}

                <button
                  type="button"
                  onClick={() =>
                    setShowEditModal(true)
                  }
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <Pencil size={14} />

                  Edit Profile
                </button>

                {/* Password */}

                <button
                  type="button"
                  onClick={
                    handlePasswordClick
                  }
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <KeyRound size={14} />

                  {hasPassword
                    ? "Change Password"
                    : "Set Password"}
                </button>

              </div>

            </div>

            {/* ================================================= */}
            {/* MEMBER INFO */}
            {/* ================================================= */}

            <div className="mt-7 border-t border-white/[0.06] pt-5">

              <p className="text-xs text-zinc-600">
                Member since {455}
              </p>

            </div>

          </section>

          {/* ================================================= */}
          {/* SUBSCRIPTION */}
          {/* ================================================= */}

          <SubscriptionSection
            isPremium={isPremium}
            usage={usage}
          />

          {/* ================================================= */}
          {/* SECURITY */}
          {/* ================================================= */}

          <SecuritySection />

        </div>
      )}

      {/* ================================================= */}
      {/* FAVOURITES */}
      {/* ================================================= */}

      {activeTab === "favourites" && (
        <FavouritesTab />
      )}

      {/* ================================================= */}
      {/* AFFILIATE */}
      {/* ================================================= */}

      {activeTab === "affiliate" && (
        <AffiliateTab />
      )}

      {/* ================================================= */}
      {/* ACCOUNT MODALS */}
      {/* ================================================= */}

      {user && (
        <AccountModals
          user={user}
          showEditModal={showEditModal}
          showDeleteModal={showDeleteModal}
          onCloseEdit={() =>
            setShowEditModal(false)
          }
          onCloseDelete={() =>
            setShowDeleteModal(false)
          }
        />
      )}

    </main>
  );
};

export default ProfilePage;

