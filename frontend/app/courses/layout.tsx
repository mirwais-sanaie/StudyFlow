"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "@/components/layout/Sidebar";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";

function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-3 absolute top-20 right-2 z-50 shadow rounded-lg underline"
          onClick={() => setOpen(!open)}
        >
          <SlidersHorizontal />
        </button>

        {/* Sidebar */}
        <div
          className={`
            fixed md:static z-40 h-full 
            transition-transform duration-300 
            ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
            shadow md:shadow-none
          `}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 md:ml-0">{children}</main>
      </div>
    </SidebarProvider>
  );
}

export default Layout;
