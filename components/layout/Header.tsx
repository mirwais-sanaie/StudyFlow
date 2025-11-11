"use client";
import { Bell, User2Icon, Menu, X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../core/ThemeToggler";
import Navbar from "./Navbar";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative grid grid-cols-3 items-center p-4 border-b bg-background">
      <div className="flex items-center">
        {/* <Logo /> */}
        <p className="font-semibold">StudyFlow</p>
      </div>

      <div className="flex justify-center">
        {/* desktop navbar */}
        <Navbar className="hidden md:flex" />
      </div>

      <div className="flex items-center justify-end gap-3">
        <button
          className="md:hidden p-2 rounded-md"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((s) => !s)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>

        <ModeToggle />
        <Bell width={25} height={25} />
        <User2Icon width={25} height={25} />
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-background border-b shadow-md z-50">
          <Navbar
            className="flex flex-col p-4"
            onLinkClick={() => setMobileOpen(false)}
          />
        </div>
      )}
    </header>
  );
}

export default Header;
