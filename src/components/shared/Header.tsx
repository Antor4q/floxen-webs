"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

import logo from "../../../public/logo.png";
import GlassButton from "../home/GlassButton";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-5 left-0 w-full z-50 px-10">
      <div
        className={`
    duration-500
    ease-[cubic-bezier(.22,1,.36,1)]
    transition-[max-width,padding,background-color,backdrop-filter,box-shadow]

    border

    ${
      scrolled
        ? "max-w-[1020px] mx-auto rounded-full border-white/10 bg-black/55 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,.45)]"
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
              alt="Logo"
              className={`
                transition-all duration-500
                
              `}
              width={200}
              height={100}
            />
          </Link>

          {/* Desktop Menu */}
          <nav
            className={`
              hidden md:flex items-center text-sm text-zinc-300
              transition-all duration-500
              ${scrolled ? "gap-7" : "gap-10"}
            `}
          >
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>

            <Link href="/about" className="hover:text-white transition">
              About
            </Link>

           

            <Link href="/signIn" className="hover:text-white transition">
              Docs
            </Link>

            <Link href="/signUp" className="hover:text-white transition">
              Affiliate
            </Link>
             <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </nav>

          {/* Desktop Button */}
          <div
            className={`
              hidden md:block
              transition-all duration-500
              ${scrolled ? "scale-90" : "scale-100"}
            `}
          >
            <GlassButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-3 rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl">
            <nav className="flex flex-col gap-5 text-zinc-300">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/signIn">Sign In</Link>
              <Link href="/signUp">Sign Up</Link>

              <div className="pt-2">
                <GlassButton />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;