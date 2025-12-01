"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "@/components/layout/Sidebar";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex">
      {pathname.includes("/courses/") ? null : (
        <button
          className="md:hidden p-3 absolute top-20 right-2 z-50 shadow rounded-lg underline"
          onClick={() => setOpen(!open)}
        >
          <SlidersHorizontal />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`
            fixed md:static z-40 h-full grid-cols-3 
            transition-transform duration-300 
            ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
            shadow md:shadow-none bg-background
          `}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="md:ml-0 md:px-7 w-full">{children}</main>
    </div>
  );
}

export default Layout;
