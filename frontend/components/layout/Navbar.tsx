"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
  onLinkClick?: () => void;
};

function Navbar({ className = "", onLinkClick }: Props) {
  const pathName = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Planner", href: "/planner" },
    { name: "Courses", href: "/courses" },
    { name: "Progress", href: "/progress" },
    { name: "Insights", href: "/insights" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className={className}>
      <ul className="flex m-0 p-0 list-none flex-row md:flex-row md:items-center gap-7">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`${
                pathName === link.href ? "border-b border-primary" : ""
              } block text-sm hover:opacity-74`}
              onClick={() => onLinkClick && onLinkClick()}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
