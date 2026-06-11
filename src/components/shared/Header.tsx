"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png"

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
       <header className="w-full px-4 sm:px-6 pt-5">
      <div className="container mx-auto">
        <div className="backdrop-blur-xl rounded-2xl px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image alt="logo" src={logo} width={150} height={50}/>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10 text-sm text-zinc-300">
            <Link href="#" className="hover:text-white transition">
              Feed
            </Link>

            <Link href="/explore" className="hover:text-white transition">
              Explore
            </Link>

            <Link href="#" className="hover:text-white transition">
              Templates
            </Link>
          </nav>

          {/* Desktop Button */}
         <button
  className="
    px-8 py-4 rounded-full
    text-white font-semibold
    bg-[linear-gradient(to_bottom,_#ffbe50_0%,_#ff8a00_20%,_#ff3c00_45%,_#7a0000_70%,_#7a0000_100%)]
  "
>
  Get Started
</button>

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
          <div className="md:hidden mt-3 border border-white/10 bg-black/80 backdrop-blur-xl rounded-2xl p-5 flex flex-col gap-5 text-zinc-300">
            <Link href="#">Feed</Link>
            <Link href="#">Explore</Link>
            <Link href="#">Templates</Link>

            <button className="bg-gradient-to-r from-[#ff3c00] via-[#ff7800] to-[#ffb450] text-black font-semibold py-3 rounded-full mt-2">
              Login
            </button>
          </div>
        )}
      </div>
    </header>
    );
};

export default Header;