"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "@/components/layout/Sidebar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 p-6 bg-muted/30">{children}</main>
      </div>
    </SidebarProvider>
  );
}

export default layout;
