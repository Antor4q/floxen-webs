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
import { useCreateUserMutation } from "@/src/redux/auth/userApi";


const signUpSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),

  terms: z
    .boolean()
    .refine((value) => value === true, {
      message:
        "You must agree to the Terms of Service and Privacy Policy",
    }),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const router = useRouter();

  const [createUser, { isLoading }] =
    useCreateUserMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  const password = watch("password", "");

  const getPasswordStrength = () => {
    if (!password) {
      return {
        level: 0,
        text: "",
      };
    }

    let score = 0;

    if (password.length >= 6) score++;
    if (password.length >= 10) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) {
      return {
        level: 1,
        text: "Weak",
      };
    }

    if (score <= 4) {
      return {
        level: 2,
        text: "Medium",
      };
    }

    return {
      level: 3,
      text: "Strong",
    };
  };

  const passwordStrength = getPasswordStrength();

  const onSubmit = async (data: SignUpFormData) => {
    try {
      setSuccessMessage("");

      const { name, email, password } = data;

      await createUser({
        name,
        email,
        password,
      }).unwrap();

      setSuccessMessage(
        "Account created successfully! Redirecting to sign in..."
      );

      setTimeout(() => {
        router.push("/signIn");
      }, 1500);
    } catch (error: any) {
      console.error("Create user failed:", error);

      const message =
        error?.data?.message ||
        "Something went wrong. Please try again.";

      setSuccessMessage("");
      alert(message);
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
          Create your account
        </h2>

        <p className="mt-2 text-center text-sm text-gray-400">
          Start building beautiful websites with FlowMotion.
        </p>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="mb-5 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
          {successMessage}
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
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Full Name"
            {...register("name")}
            className="h-12 w-full rounded-xl border border-white/10 bg-[#141E2C] px-4 text-white outline-none placeholder:text-gray-500 focus:border-violet-500"
          />

          {errors.name && (
            <p className="mt-1.5 text-xs text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email Address"
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

          {/* Password Strength */}
          {password && (
            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="text-gray-400">
                  Password Strength
                </span>

                <span
                  className={`font-medium ${
                    passwordStrength.level === 1
                      ? "text-red-400"
                      : passwordStrength.level === 2
                        ? "text-yellow-400"
                        : "text-emerald-400"
                  }`}
                >
                  {passwordStrength.text}
                </span>
              </div>

              <div className="flex gap-2">
                <div
                  className={`h-1 flex-1 rounded-full transition-all ${
                    passwordStrength.level >= 1
                      ? passwordStrength.level === 1
                        ? "bg-red-400"
                        : "bg-violet-300"
                      : "bg-white/10"
                  }`}
                />

                <div
                  className={`h-1 flex-1 rounded-full transition-all ${
                    passwordStrength.level >= 2
                      ? passwordStrength.level === 2
                        ? "bg-yellow-400"
                        : "bg-violet-400"
                      : "bg-white/10"
                  }`}
                />

                <div
                  className={`h-1 flex-1 rounded-full transition-all ${
                    passwordStrength.level >= 3
                      ? "bg-violet-500"
                      : "bg-white/10"
                  }`}
                />
              </div>
            </div>
          )}
        </div>

        {/* Terms */}
        <div>
          <label className="flex items-start gap-3 text-sm text-gray-400">
            <input
              type="checkbox"
              {...register("terms")}
              className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent accent-violet-600"
            />

            <span>
              I agree to the{" "}
              <Link
                href="/terms"
                className="text-violet-400 hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-violet-400 hover:underline"
              >
                Privacy Policy
              </Link>
            </span>
          </label>

          {errors.terms && (
            <p className="mt-1.5 text-xs text-red-400">
              {errors.terms.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="h-12 w-full cursor-pointer rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400 backdrop-blur-xl transition hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading
            ? "CREATING ACCOUNT..."
            : "MOTIONS DROPS EVERYDAY"}
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            href="/signIn"
            className="font-medium text-violet-400 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;