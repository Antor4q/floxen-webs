
"use client";

import Link from "next/link";
import { Menu, LogOut, User, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../../public/logo.png";
import { RootState } from "@/src/redux/store";
import { clearUser } from "@/src/redux/auth/userSlice";
import { clearAuth } from "@/src/redux/auth/authSlice";
import { useLogoutMutation } from "@/src/redux/auth/authApi";


const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const dispatch = useDispatch();

  const { user } = useSelector(
    (state: RootState) => state.user
  );

  const [logout, { isLoading: isLoggingOut }] =
    useLogoutMutation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout().unwrap();

      // Clear Redux state
      dispatch(clearUser());
      dispatch(clearAuth());

      // Close dropdowns
      setProfileOpen(false);
      setOpen(false);

      // Redirect
      window.location.href = "/signIn";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="fixed top-5 left-0 z-50 w-full px-10">
      <div
        className={`
          duration-500
          ease-[cubic-bezier(.22,1,.36,1)]
          transition-[max-width,padding,background-color,backdrop-filter,box-shadow]
          border

          ${
            scrolled
              ? "mx-auto max-w-[1020px] rounded-full border-white/10 bg-black/55 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,.45)]"
              : "w-full border-transparent bg-transparent shadow-none"
          }
        `}
      >
        <div
          className={`
            flex items-center justify-between
            transition-all duration-500
            ${scrolled ? "h-16 px-8" : "h-20 px-0"}
          `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="FlowMotion"
              width={200}
              height={100}
              className="h-auto w-[150px] md:w-[180px]"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav
            className={`
              hidden md:flex items-center
              text-sm text-zinc-300
              transition-all duration-500
              ${scrolled ? "gap-7" : "gap-10"}
            `}
          >
            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/docs"
              className="transition hover:text-white"
            >
              Docs
            </Link>

            <Link
              href="/affiliate"
              className="transition hover:text-white"
            >
              Affiliate
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-white"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Auth */}
          <div
            className={`
              hidden md:block
              transition-all duration-500
              ${scrolled ? "scale-90" : "scale-100"}
            `}
          >
            {!user ? (
              <Link
                href="/signIn"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white transition hover:bg-white/10"
              >
                Sign In
              </Link>
            ) : (
              <div
                className="relative"
                onMouseEnter={() => setProfileOpen(true)}
                onMouseLeave={() => setProfileOpen(false)}
              >
                {/* Profile Button */}
                <button
                  type="button"
                  onClick={() =>
                    setProfileOpen((prev) => !prev)
                  }
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 pr-3 transition hover:bg-white/10"
                >
                  {user.picture ? (
                    <Image
                      src={user.picture}
                      alt={user.name}
                      width={34}
                      height={34}
                      className="h-[34px] w-[34px] rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/10 text-zinc-300">
                      <User size={17} />
                    </div>
                  )}

                  <ChevronDown
                    size={15}
                    className={`
                      text-zinc-400
                      transition-transform duration-300
                      ${profileOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {/* Profile Dropdown */}
                {profileOpen && (
                  <div className="absolute right-0 top-full w-[230px] pt-3">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111]/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,.5)] backdrop-blur-2xl">
                      {/* User Info */}
                      <div className="flex items-center gap-3 rounded-xl p-3">
                        {user.picture ? (
                          <Image
                            src={user.picture}
                            alt={user.name}
                            width={42}
                            height={42}
                            className="h-[42px] w-[42px] rounded-full object-cover"
                          />
                        ) : (
                          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-white/10 text-zinc-300">
                            <User size={20} />
                          </div>
                        )}

                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-white">
                            {user.name}
                          </p>

                          <p className="truncate text-xs text-zinc-500">
                            {user.email}
                          </p>
                        </div>
                      </div>

                      {/* Free Plan */}
                      <div className="mx-2 mb-2 flex items-center justify-between rounded-xl border border-lime-400/10 bg-lime-400/5 px-3 py-2">
                        <span className="text-xs text-zinc-400">
                          Current Plan
                        </span>

                        <span className="rounded-full bg-lime-400/10 px-2 py-1 text-[10px] font-semibold tracking-wide text-lime-300">
                          FREE
                        </span>
                      </div>

                      <div className="my-1 h-px bg-white/5" />

                      {/* Profile */}
                      <Link
                        href="/profile"
                        onClick={() => setProfileOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                      >
                        <User size={16} />
                        Profile
                      </Link>

                      {/* Logout */}
                      <button
                        type="button"
                        onClick={handleLogout}
                        disabled={isLoggingOut}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-400 transition hover:bg-red-500/10 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <LogOut size={16} />

                        {isLoggingOut
                          ? "Logging out..."
                          : "Logout"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-white md:hidden"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-5 text-zinc-300">
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setOpen(false)}
              >
                About
              </Link>

              <Link
                href="/docs"
                onClick={() => setOpen(false)}
              >
                Docs
              </Link>

              <Link
                href="/affiliate"
                onClick={() => setOpen(false)}
              >
                Affiliate
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>

              <div className="border-t border-white/10 pt-4">
                {!user ? (
                  <Link
                    href="/signIn"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-white"
                  >
                    Sign In
                  </Link>
                ) : (
                  <div className="space-y-3">
                    {/* Mobile User */}
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                      {user.picture ? (
                        <Image
                          src={user.picture}
                          alt={user.name}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                          <User size={18} />
                        </div>
                      )}

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm text-white">
                          {user.name}
                        </p>

                        <div className="mt-1">
                          <span className="rounded-full bg-lime-400/10 px-2 py-1 text-[10px] font-semibold text-lime-300">
                            FREE
                          </span>
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/profile"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition hover:bg-white/5 hover:text-white"
                    >
                      <User size={17} />
                      Profile
                    </Link>

                    <button
                      type="button"
                      onClick={handleLogout}
                      disabled={isLoggingOut}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-400 transition hover:bg-red-500/10 hover:text-red-400 disabled:opacity-50"
                    >
                      <LogOut size={17} />

                      {isLoggingOut
                        ? "Logging out..."
                        : "Logout"}
                    </button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

