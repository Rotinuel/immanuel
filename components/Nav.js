"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#websites", label: "Websites" },
    { href: "#apps", label: "Apps" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5
          backdrop-blur-xl bg-sky-50/80 border-b border-sky-200/30
          transition-shadow duration-300 ${scrolled ? "shadow-sky-200/40 shadow-md" : ""}`}
      >
        <a
          href="#home"
          className="font-serif italic text-2xl text-sky-500 tracking-tight no-underline"
        >
          Okhuas.
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-slate-500 hover:text-sky-500
                  uppercase tracking-widest no-underline
                  relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px]
                  after:w-0 after:bg-sky-500 after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] cursor-pointer p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="block w-[22px] h-[2px] bg-slate-700 rounded" />
          <span className="block w-[22px] h-[2px] bg-slate-700 rounded" />
          <span className="block w-[22px] h-[2px] bg-slate-700 rounded" />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-sky-50/97 backdrop-blur-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-4xl font-black text-slate-800 hover:text-sky-500 no-underline tracking-tight"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
