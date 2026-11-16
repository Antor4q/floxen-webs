/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, MailCheck, AlertCircle } from "lucide-react";

import { useForgotPasswordMutation } from "@/src/redux/auth/authApi";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email.trim()) return setError("Please enter your email.");

    try {
      const res: any = await forgotPassword({ email: email.trim() }).unwrap();
      setSuccess(
        res?.message ||
          "Password reset link sent. Please check your email inbox."
      );
    } catch (err: any) {
      setError(err?.data?.message || "Something went wrong. Please try again.");
    }
  };

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
            {success ? <MailCheck size={20} /> : <Mail size={20} />}
          </div>

          {/* HEADING */}
          <h1 className="mt-6 text-3xl font-medium tracking-tight text-white">
            {success ? "Check your email" : "Forgot Password"}
          </h1>

          <p className="mt-3 text-sm leading-6 text-zinc-500">
            {success
              ? "We've sent you a link to reset your password."
              : "Enter your email and we'll send you a link to reset your password."}
          </p>

          {/* SUCCESS STATE: input nei, shudhu message */}
          {success ? (
            <div className="mt-8 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.03] px-5 py-4">
              <p className="text-sm leading-6 text-emerald-300">{success}</p>
              <p className="mt-2 text-xs text-emerald-300/60">
                The link will expire in 10 minutes.
              </p>
            </div>
          ) : (
            /* FORM STATE: input + (error thakle) error message */
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium text-zinc-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/20"
                />
              </div>

              {error && (
                <div className="flex items-start gap-2.5 rounded-xl border border-red-400/10 bg-red-400/[0.03] px-4 py-3">
                  <AlertCircle
                    size={15}
                    className="mt-0.5 shrink-0 text-red-300"
                  />
                  <p className="text-xs leading-5 text-red-300">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                    Sending...
                  </>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;