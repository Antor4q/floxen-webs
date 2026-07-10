"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png"
import GlassButton from "../home/GlassButton";

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
       <header className="w-full px-10  pt-5">
      <div className="">
        <div className="backdrop-blur-xl rounded-2xl px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image alt="logo" src={logo} width={200} height={100}/>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10 text-sm text-zinc-300">
            <Link href="#" className="hover:text-white transition">
              Feed
            </Link>

            <Link href="/explore" className="hover:text-white transition">
              Explore
            </Link>

            <Link href="cursor" className="hover:text-white transition">
              Cursor
            </Link>
          </nav>

          {/* Desktop Button */}
          {/* new added header */}
        <GlassButton/>

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