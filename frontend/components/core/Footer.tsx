// components/footer.tsx
import { Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-b from-background to-muted border-t border-secondary">
      <div className="flex flex-col items-center space-y-4">
        {/* Top Links */}
        <div className="flex space-x-6 text-sm">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5">
          <Link href="https://twitter.com" target="_blank">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="https://github.com" target="_blank">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Study Planner. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
