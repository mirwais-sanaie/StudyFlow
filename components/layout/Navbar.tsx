import Link from "next/link";

function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Planner", href: "/planner" },
    { name: "Courses", href: "/courses" },
    { name: "Progress", href: "/progress" },
    { name: "Insights", href: "/insights" },
    { name: "About", href: "/about" },
  ];

  return (
    <div>
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} className="mr-4">
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
