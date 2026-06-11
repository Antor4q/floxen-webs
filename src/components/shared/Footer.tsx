import Image from "next/image";
import logo from "../../../public/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#050505]">
     <div className="container mx-auto px-4 pb-10">
       {/* divider */}

      <div
        className="h-px w-full mb-10"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,190,80,.4), rgba(255,60,0,.4), transparent)",
        }}
      />

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image alt="logo" src={logo} width={150} height={50}/>
          </div>

          <p className="mt-2 text-sm text-zinc-500">
            Inspiration & Prompt Library
          </p>
        </div>

        <p className="text-sm text-zinc-500">
          © 2026 Floxen. Crafted for creators.
        </p>
      </div>
     </div>
    </footer>
  );
};

export default Footer;