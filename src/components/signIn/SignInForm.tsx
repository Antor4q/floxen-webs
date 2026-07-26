"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Eye,
  EyeOff,
 
  Check,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const SignInForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="w-full max-w-[520px] rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl text-center font-bold text-white">
          Welcome Back
        </h2>

        <p className="mt-2 text-center text-sm text-gray-400">
          Start building beautiful websites with FlowMotion.
        </p>
      </div>

      {/* Social */}
      <div className="w-full">
        <button className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#141E2C] text-sm font-medium text-white transition hover:bg-[#1A2535]">
          <FcGoogle size={18} />
          Google
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
      <form className="space-y-5">
       

        {/* Email */}
        <div>
         
          <input
            type="email"
            placeholder="Email Address"
            className="h-12 w-full rounded-xl border border-white/10 bg-[#141E2C] px-4 text-white outline-none placeholder:text-gray-500 focus:border-violet-500"
          />
        </div>

        {/* Password */}
        <div>
         

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="h-12 w-full rounded-xl border border-white/10 bg-[#141E2C] px-4 pr-12 text-white outline-none placeholder:text-gray-500 focus:border-violet-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

         
        </div>

       

        {/* Button */}
         
<button className="w-full h-12 gap-2 cursor-pointer rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400 backdrop-blur-xl">
  

 Sign In
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