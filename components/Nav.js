"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function NavLink(props) {
  const isActive = props.active;
  let classes = "transition hover:text-black";
  if (isActive) {
    classes = "transition hover:text-black text-black font-semibold";
  }
  return (
    <a href={props.href} onClick={props.onClick} className={classes}>
      {props.label}
    </a>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur border-b border-gray-100">
      <div className="flex items-center justify-between px-6 md:px-16 py-5">
        <a href="/" className="font-semibold text-lg tracking-tight">
          Nikesh Giri
        </a>

        <div className="hidden md:flex gap-7 text-sm font-medium text-gray-600">
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              active={pathname === link.href}
            />
          ))}
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-6 bg-gray-900" />
          <span className="block h-0.5 w-6 bg-gray-900" />
          <span className="block h-0.5 w-6 bg-gray-900" />
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col px-6 pb-6 gap-4 text-sm font-medium text-gray-700 border-t border-gray-100">
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              active={pathname === link.href}
              onClick={closeMenu}
            />
          ))}
        </div>
      )}
    </nav>
  );
}
