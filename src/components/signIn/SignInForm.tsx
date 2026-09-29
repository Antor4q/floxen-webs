
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { useLoginMutation } from "@/src/redux/auth/authApi";
import { setAuthenticated } from "@/src/redux/auth/authSlice";

const signInSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(1, "Password is required"),
});

type SignInFormData = z.infer<typeof signInSchema>;

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      setErrorMessage("");

      // Login
      // Backend will set JWT in HTTP-only cookie
      await login(data).unwrap();

      // AuthInitializer will fetch /users/me
      // and populate user data in Redux.
      dispatch(setAuthenticated(true));

      // Redirect after successful login
      router.push("/");
    } catch (error: any) {
      console.error("Sign in failed:", error);

      const message =
        error?.data?.message ||
        "Invalid email or password.";

      setErrorMessage(message);
    }
  };

  const handleGoogleAuth = () => {
    window.location.href =
      `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  };

  return (
    <div className="w-full max-w-[520px] rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-center text-2xl font-bold text-white">
          Welcome Back
        </h2>

        <p className="mt-2 text-center text-sm text-gray-400">
          Sign in to continue building with FlowMotion.
        </p>
      </div>

      {/* Error */}
      {errorMessage && (
        <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {errorMessage}
        </div>
      )}

      {/* Google */}
      <div className="w-full">
        <button
          type="button"
          onClick={handleGoogleAuth}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#141E2C] text-sm font-medium text-white transition hover:bg-[#1A2535]"
        >
          <FcGoogle size={18} />

          Continue with Google
        </button>
      </div>

      {/* Divider */}
      <div className="my-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/10" />

        <span className="text-xs uppercase tracking-widest text-gray-500">
          OR CONTINUE WITH EMAIL
        </span>

        <div className="h-px flex-1 bg-white/10" />
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email Address"
            autoComplete="email"
            {...register("email")}
            className="h-12 w-full rounded-xl border border-white/10 bg-[#141E2C] px-4 text-white outline-none placeholder:text-gray-500 focus:border-violet-500"
          />

          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              autoComplete="current-password"
              {...register("password")}
              className="h-12 w-full rounded-xl border border-white/10 bg-[#141E2C] px-4 pr-12 text-white outline-none placeholder:text-gray-500 focus:border-violet-500"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => !prev)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-white"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          {errors.password && (
            <p className="mt-1.5 text-xs text-red-400">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sm text-gray-400 transition hover:text-violet-400"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="h-12 w-full cursor-pointer rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400 backdrop-blur-xl transition hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading
            ? "SIGNING IN..."
            : "SIGN IN"}
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400">
          New Here?{" "}

          <Link
            href="/signUp"
            className="font-medium text-violet-400 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
