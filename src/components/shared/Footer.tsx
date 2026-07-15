import Image from "next/image";
import logo from "../../../public/logo.png"
import { GitBranchPlus } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#050505]">
     <div className="px-10 pb-10">
       {/* divider */}

     <div
  className="h-px w-full mb-10"
  style={{
    background:
      "linear-gradient(to right, transparent, #d0c3fe66, #C0AFFEB3, #8762F580, transparent)",
  }}
/>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image alt="logo" src={logo} width={200} height={100}/>
          </div>

          <p className="mt-2 text-sm text-zinc-500">
            Inspiration & Prompt Library
          </p>
        </div>

         <div className="flex items-center gap-3">
          
          <FaGithub className="text-2xl font-semibold text-white" />
          <FaLinkedin className="text-2xl font-semibold text-white" />
          <FaFacebook className="text-2xl font-semibold text-white" />

         
         
         </div>

        <p className="text-sm text-zinc-500">
          © 2026 flowmotion.
        </p>
      </div>
     </div>
    </footer>
  );
};

export default Footer;