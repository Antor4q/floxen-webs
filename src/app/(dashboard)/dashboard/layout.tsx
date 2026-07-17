"use client"
import NavbarDash from "@/src/components/dashboard/navigationDash/NavbarDash";
import Sidebar from "@/src/components/dashboard/navigationDash/Sidebar";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const pathname = usePathname();
  pathname === "/dashboard";
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <NavbarDash />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;