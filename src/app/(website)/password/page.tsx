
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  KeyRound,
  ShieldCheck,
} from "lucide-react";
import { useSelector } from "react-redux";

import { RootState } from "@/src/redux/store";
import { useSetPasswordMutation } from "@/src/redux/auth/authApi";

const PasswordPage = () => {
  const { user } = useSelector(
    (state: RootState) => state.user
  );

  // --------------------------------------------------
  // PASSWORD LOGIC
  // --------------------------------------------------
  // Only Google:
  //     => Set Password
  //
  // Credentials:
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
  // STATES
  // --------------------------------------------------

  const [currentPassword, setCurrentPassword] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showCurrentPassword, setShowCurrentPassword] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  // --------------------------------------------------
  // SET PASSWORD API
  // --------------------------------------------------

  const [
    setPasswordMutation,
    { isLoading: isSettingPassword },
  ] = useSetPasswordMutation();

  // --------------------------------------------------
  // SUBMIT
  // --------------------------------------------------

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    // ================================================
    // CURRENT PASSWORD
    // Only required when changing password
    // ================================================

    if (hasPassword && !currentPassword) {
      setError(
        "Please enter your current password."
      );
      return;
    }

    // ================================================
    // NEW PASSWORD
    // ================================================

    if (!password) {
      setError(
        "Please enter a new password."
      );
      return;
    }

    if (password.length < 8) {
      setError(
        "Password must be at least 8 characters."
      );
      return;
    }

    // ================================================
    // CONFIRM PASSWORD
    // ================================================

    if (!confirmPassword) {
      setError(
        "Please confirm your new password."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError(
        "Passwords do not match."
      );
      return;
    }

    // ================================================
    // SET PASSWORD
    // ================================================

    if (!hasPassword) {
      try {
        await setPasswordMutation({
          password,
        }).unwrap();

        setSuccess(
          "Your password has been set successfully."
        );

        setPassword("");
        setConfirmPassword("");
      } catch (error) {
        console.error(
          "Set password failed:",
          error
        );

        setError(
          "Failed to set password. Please try again."
        );
      }

      return;
    }

    // ================================================
    // CHANGE PASSWORD
    // ================================================

    // Change password API এখানে add করবে:
    //
    // await changePasswordMutation({
    //   currentPassword,
    //   newPassword: password,
    // }).unwrap();

    setSuccess(
      "Your password has been changed successfully."
    );

    setCurrentPassword("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <main className="relative mx-auto max-w-360 px-10 pt-40 pb-10">

      <div className="mx-auto max-w-2xl">

        {/* ================================================= */}
        {/* BACK */}
        {/* ================================================= */}

        <Link
          href="/profile"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
        >
          <ArrowLeft size={15} />

          Back to Profile
        </Link>

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="mt-10">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-zinc-300">
            <KeyRound size={18} />
          </div>

          <h1 className="mt-5 text-3xl font-medium tracking-tight text-white sm:text-4xl">
            {hasPassword
              ? "Change Password"
              : "Set Password"}
          </h1>

          <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-500">
            {hasPassword
              ? "Update your password to keep your account secure."
              : "Create a password so you can securely access your account."}
          </p>

        </div>

        {/* ================================================= */}
        {/* PASSWORD FORM */}
        {/* ================================================= */}

        <section className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 backdrop-blur-xl sm:p-8">

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* ================================================= */}
            {/* CURRENT PASSWORD */}
            {/* Only for Change Password */}
            {/* ================================================= */}

            {hasPassword && (
              <div>

                <label
                  htmlFor="currentPassword"
                  className="mb-2 block text-xs font-medium text-zinc-400"
                >
                  Current Password
                </label>

                <div className="relative">

                  <input
                    id="currentPassword"
                    type={
                      showCurrentPassword
                        ? "text"
                        : "password"
                    }
                    value={currentPassword}
                    onChange={(event) =>
                      setCurrentPassword(
                        event.target.value
                      )
                    }
                    placeholder="Enter current password"
                    autoComplete="current-password"
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/20"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowCurrentPassword(
                        (value) => !value
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 transition hover:text-white"
                    aria-label={
                      showCurrentPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showCurrentPassword ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>

                </div>

                {/* ================================================= */}
                {/* FORGOT PASSWORD */}
                {/* ================================================= */}

                <div className="mt-2 flex justify-end">

                  <Link
                    href="/forgot-password"
                    className="text-xs text-zinc-600 transition hover:text-white"
                  >
                    Forgot Password?
                  </Link>

                </div>

              </div>
            )}

            {/* ================================================= */}
            {/* NEW PASSWORD */}
            {/* ================================================= */}

            <div>

              <label
                htmlFor="password"
                className="mb-2 block text-xs font-medium text-zinc-400"
              >
                {hasPassword
                  ? "New Password"
                  : "Password"}
              </label>

              <div className="relative">

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  value={password}
                  onChange={(event) =>
                    setPassword(
                      event.target.value
                    )
                  }
                  placeholder={
                    hasPassword
                      ? "Enter new password"
                      : "Create a password"
                  }
                  autoComplete="new-password"
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/20"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      (value) => !value
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 transition hover:text-white"
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>

              </div>

              <p className="mt-2 text-[11px] text-zinc-700">
                Use at least 8 characters.
              </p>

            </div>

            {/* ================================================= */}
            {/* CONFIRM PASSWORD */}
            {/* ================================================= */}

            <div>

              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-xs font-medium text-zinc-400"
              >
                Confirm Password
              </label>

              <div className="relative">

                <input
                  id="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(
                      event.target.value
                    )
                  }
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/20"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      (value) => !value
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 transition hover:text-white"
                  aria-label={
                    showConfirmPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>

              </div>

            </div>

            {/* ================================================= */}
            {/* ERROR */}
            {/* ================================================= */}

            {error && (
              <div className="rounded-xl border border-red-400/10 bg-red-400/[0.03] px-4 py-3">

                <p className="text-xs leading-5 text-red-300">
                  {error}
                </p>

              </div>
            )}

            {/* ================================================= */}
            {/* SUCCESS */}
            {/* ================================================= */}

            {success && (
              <div className="rounded-xl border border-emerald-400/10 bg-emerald-400/[0.03] px-4 py-3">

                <p className="text-xs leading-5 text-emerald-300">
                  {success}
                </p>

              </div>
            )}

            {/* ================================================= */}
            {/* SUBMIT */}
            {/* ================================================= */}

            <button
              type="submit"
              disabled={isSettingPassword}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
            >

              {isSettingPassword ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />

                  {hasPassword
                    ? "Changing Password..."
                    : "Setting Password..."}
                </>
              ) : (
                <>
                  <ShieldCheck size={15} />

                  {hasPassword
                    ? "Change Password"
                    : "Set Password"}
                </>
              )}

            </button>

          </form>

        </section>

      </div>

    </main>
  );
};

export default PasswordPage;

