/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
  ShieldCheck,
} from "lucide-react";
import { useSelector } from "react-redux";

import { RootState } from "@/src/redux/store";
import {
  useSetPasswordMutation,
  useChangePasswordMutation,
} from "@/src/redux/auth/authApi";
import { useLazyGetMyProfileQuery } from "@/src/redux/auth/userApi";

const inputClass =
  "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/20";

const eyeBtnClass =
  "absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 transition hover:text-white";

const labelClass = "mb-2 block text-xs font-medium text-zinc-400";

const PasswordPage = () => {
  const router = useRouter();

  const { user } = useSelector((state: RootState) => state.user);

  // credentials provider ache  => Change Password
  // credentials nei (Google)   => Set Password
  const hasPassword =
    user?.auths?.some((auth) => auth.provider === "credentials") ?? false;

  // STATES
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // APIs
  const [setPasswordMutation, { isLoading: isSettingPassword }] =
    useSetPasswordMutation();
  const [changePasswordMutation, { isLoading: isChangingPassword }] =
    useChangePasswordMutation();
  const [refetchMe, { isFetching: isRefetchingUser }] =
    useLazyGetMyProfileQuery();

  const isLoading =
    isSettingPassword || isChangingPassword || isRefetchingUser;

  // SUBMIT
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (hasPassword && !currentPassword) {
      setError("Please enter your current password.");
      return;
    }

    if (!password) {
      setError("Please enter a new password.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (!confirmPassword) {
      setError("Please confirm your new password.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // SET PASSWORD (Google-only user)
    if (!hasPassword) {
      try {
        await setPasswordMutation({ password }).unwrap();

        // Fresh user age ani, tahole /profile e giye
        // "Change Password" dekhabe, "Set Password" na
        await refetchMe(undefined, false).unwrap();

        setSuccess("Your password has been set successfully.");
        setTimeout(() => router.replace("/profile"), 1200);
      } catch (err: any) {
        console.error("Set password failed:", err);
        setError(
          err?.data?.message || "Failed to set password. Please try again."
        );
      }
      return;
    }

    // CHANGE PASSWORD
    try {
      await changePasswordMutation({
        oldPassword: currentPassword,
        newPassword: password,
      }).unwrap();

      setSuccess("Your password has been changed successfully.");

      setCurrentPassword("");
      setPassword("");
      setConfirmPassword("");

      setTimeout(() => router.push("/profile"), 1200);
    } catch (err: any) {
      console.error("Change password failed:", err);
      setError(
        err?.data?.message || "Failed to change password. Please try again."
      );
    }
  };

  // USER LOAD HOY NI => wrong UI flash na hoy
  if (!user) {
    return (
      <main className="relative flex min-h-screen items-center justify-center px-6 py-24">
        <div className="w-full max-w-md rounded-3xl border border-white/[0.07] bg-white/[0.025] p-8 sm:p-10">
          <div className="h-12 w-12 animate-pulse rounded-2xl bg-white/[0.04]" />
          <div className="mt-6 h-8 w-56 animate-pulse rounded-lg bg-white/[0.04]" />
          <div className="mt-4 h-4 w-full animate-pulse rounded-lg bg-white/[0.04]" />
          <div className="mt-8 h-12 w-full animate-pulse rounded-xl bg-white/[0.04]" />
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-[120px]" />

      <div className="relative w-full max-w-md">
        {/* BACK */}
        <Link
          href="/profile"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
        >
          <ArrowLeft size={15} />
          Back to Profile
        </Link>

        {/* CARD */}
        <section className="mt-6 rounded-3xl border border-white/[0.07] bg-white/[0.025] p-8 backdrop-blur-xl sm:p-10">
          {/* ICON */}
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition ${
              success
                ? "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300"
                : "border-white/[0.08] bg-white/[0.04] text-zinc-300"
            }`}
          >
            {success ? <CheckCircle2 size={20} /> : <KeyRound size={20} />}
          </div>

          {/* HEADING */}
          <h1 className="mt-6 text-3xl font-medium tracking-tight text-white">
            {success
              ? hasPassword
                ? "Password Changed"
                : "Password Set"
              : hasPassword
              ? "Change Password"
              : "Set Password"}
          </h1>

          <p className="mt-3 text-sm leading-6 text-zinc-500">
            {success
              ? "Redirecting you back to your profile..."
              : hasPassword
              ? "Update your password to keep your account secure."
              : "Create a password so you can securely access your account."}
          </p>

          {/* SUCCESS STATE: form nei, shudhu message */}
          {success ? (
            <div className="mt-8 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.03] px-5 py-4">
              <p className="text-sm leading-6 text-emerald-300">{success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* CURRENT PASSWORD (shudhu change mode) */}
              {hasPassword && (
                <div>
                  <label htmlFor="currentPassword" className={labelClass}>
                    Current Password
                  </label>

                  <div className="relative">
                    <input
                      id="currentPassword"
                      type={showCurrentPassword ? "text" : "password"}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Enter current password"
                      autoComplete="current-password"
                      className={inputClass}
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword((v) => !v)}
                      className={eyeBtnClass}
                      aria-label={
                        showCurrentPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showCurrentPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>

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

              {/* NEW PASSWORD */}
              <div>
                <label htmlFor="password" className={labelClass}>
                  {hasPassword ? "New Password" : "Password"}
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={
                      hasPassword ? "Enter new password" : "Create a password"
                    }
                    autoComplete="new-password"
                    className={inputClass}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className={eyeBtnClass}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                <p className="mt-2 text-[11px] text-zinc-700">
                  Use at least 8 characters.
                </p>
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label htmlFor="confirmPassword" className={labelClass}>
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    className={inputClass}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((v) => !v)}
                    className={eyeBtnClass}
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
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

              {/* ERROR */}
              {error && (
                <div className="flex items-start gap-2.5 rounded-xl border border-red-400/10 bg-red-400/[0.03] px-4 py-3">
                  <AlertCircle
                    size={15}
                    className="mt-0.5 shrink-0 text-red-300"
                  />
                  <p className="text-xs leading-5 text-red-300">{error}</p>
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                    {hasPassword
                      ? "Changing Password..."
                      : "Setting Password..."}
                  </>
                ) : (
                  <>
                    <ShieldCheck size={15} />
                    {hasPassword ? "Change Password" : "Set Password"}
                  </>
                )}
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
};

export default PasswordPage;