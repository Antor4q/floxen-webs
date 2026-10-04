"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Copy,
  Heart,
  KeyRound,
  Mail,
  Pencil,
  ShieldCheck,
  Trash2,
  Zap,
} from "lucide-react";

import profileAvatar from "../../../../public/logo.png";
import SubscriptionSection from "./SubscriptionSection";
import SecuritySection from "./SecuritySection";
import FavouritesTab from "./FavouritesTab";
import AffiliateTab from "./AffiliateTab";
import AccountModals from "./AccountModals";


type PlanType = "FREE" | "PREMIUM";

export interface ProfileData {
  name: string;
  email: string;
  picture: string;
  favourites: number;
  plan: PlanType;
  authProvider: "google" | "credentials";
  hasPassword: boolean;
  memberSince: string;
}

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
  // --------------------------------------------------
  // STATIC DATA FOR NOW
  // Later replace with Redux/API data
  // --------------------------------------------------

  const profileData: ProfileData = {
    name: "Ahmed Antor",
    email: "tariquelislam2015@gmail.com",
    picture: profileAvatar.src,
    favourites: 12,

    plan: "PREMIUM",

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
      used: isPremium ? 0 : 0,
      limit: isPremium ? 3 : 0,
    },
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
          Welcome back, {profileData.name.split(" ")[0]}
        </h1>

        {/* Tabs */}
        <div className="mt-8 flex items-center gap-7 border-b border-white/[0.08]">

          {/* Overview */}
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

          {/* Favourites */}
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

          {/* Affiliate */}
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

                    <span>
                      {profileData.email}
                    </span>

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
                      {isPremium
                        ? "PREMIUM"
                        : "FREE PLAN"}
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

          <SecuritySection
            profileData={profileData}
            onPasswordClick={() =>
              setShowPasswordModal(true)
            }
            onDeleteClick={() =>
              setShowDeleteModal(true)
            }
          />

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
      {/* MODALS */}
      {/* ================================================= */}

      <AccountModals
        profileData={profileData}
        showEditModal={showEditModal}
        showPasswordModal={showPasswordModal}
        showDeleteModal={showDeleteModal}
        onCloseEdit={() => setShowEditModal(false)}
        onClosePassword={() =>
          setShowPasswordModal(false)
        }
        onCloseDelete={() =>
          setShowDeleteModal(false)
        }
      />

    </main>
  );
};

export default ProfilePage;