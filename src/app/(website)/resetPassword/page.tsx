/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FormEvent, Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, KeyRound, ShieldCheck } from "lucide-react";

import { useResetPasswordMutation } from "@/src/redux/auth/authApi";

const ResetPasswordForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!id || !token) return setError("Invalid reset link.");
    if (password.length < 8)
      return setError("Password must be at least 8 characters.");
    if (password !== confirmPassword) return setError("Passwords do not match.");

    try {
      await resetPassword({ id, token, password }).unwrap();
      setSuccess("Password reset successful. Redirecting...");
      setTimeout(() => router.replace("/"), 1500);
    } catch (err: any) {
      setError(
        err?.data?.message ||
          "Reset link is invalid or expired. Please request a new one."
      );
    }
  };

  // link e id/token na thakle
  if (!id || !token) {
    return (
      <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 sm:p-8">
        <p className="text-sm text-zinc-400">
          This reset link is invalid or incomplete.
        </p>
        <Link
          href="/forgot-password"
          className="mt-4 inline-block text-sm text-white underline underline-offset-4"
        >
          Request a new link
        </Link>
      </div>
    );
  }

  return (
    <section className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 backdrop-blur-xl sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* NEW PASSWORD */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-xs font-medium text-zinc-400"
          >
            New Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              autoComplete="new-password"
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/20"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 transition hover:text-white"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          <p className="mt-2 text-[11px] text-zinc-700">
            Use at least 8 characters.
          </p>
        </div>

        {/* CONFIRM */}
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
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              autoComplete="new-password"
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/20"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((v) => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 transition hover:text-white"
              aria-label={showConfirm ? "Hide password" : "Show password"}
            >
              {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {error && (
          <div className="rounded-xl border border-red-400/10 bg-red-400/[0.03] px-4 py-3">
            <p className="text-xs leading-5 text-red-300">{error}</p>
          </div>
        )}

        {success && (
          <div className="rounded-xl border border-emerald-400/10 bg-emerald-400/[0.03] px-4 py-3">
            <p className="text-xs leading-5 text-emerald-300">{success}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading || !!success}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
              Resetting...
            </>
          ) : (
            <>
              <ShieldCheck size={15} />
              Reset Password
            </>
          )}
        </button>
      </form>
    </section>
  );
};

const ResetPasswordPage = () => (
  <main className="relative mx-auto max-w-360 px-10 pt-40 pb-10">
    <div className="mx-auto max-w-2xl">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-zinc-300">
        <KeyRound size={18} />
      </div>

      <h1 className="mt-5 text-3xl font-medium tracking-tight text-white sm:text-4xl">
        Reset Password
      </h1>
      <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-500">
        Create a new password for your account.
      </p>

      <Suspense fallback={null}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  </main>
);

export default ResetPasswordPage;