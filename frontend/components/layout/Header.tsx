"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../core/ThemeToggler";
import Navbar from "./Navbar";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between p-4 border-b bg-background">
      {/* Logo */}
      <p className="font-semibold">StudyFlow</p>

      {/* Desktop navbar only */}
      <div className="hidden md:flex">
        <Navbar />
      </div>

      {/* Mobile menu button only */}
      <div className="flex items-center gap-1">
        <button
          className="md:hidden p-2 rounded-md"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <Menu />
        </button>

        <ModeToggle />
      </div>

      {/* MOBILE SIDEBAR (Hidden until button clicked) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-background shadow-lg z-50 transform transition-transform duration-300 md:hidden
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Inside close button */}
        <button
          className="absolute top-4 right-4 p-2"
          onClick={() => setMobileOpen(false)}
        >
          <X />
        </button>

        {/* Vertical links (stacked) */}
        <Navbar
          className="gap-4 p-6 mt-12"
          onLinkClick={() => setMobileOpen(false)}
        />
      </div>

      {/* Overlay (click to close) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;
