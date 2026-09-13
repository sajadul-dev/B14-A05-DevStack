import { useState } from "react";
import logo from "../assets/logo-text.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="relative mx-auto flex h-[44px] max-w-[1290px] items-center justify-between px-4 sm:h-[72px] sm:px-8 lg:px-10">
        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-8 w-8 items-center justify-center rounded-md text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span className="flex w-4 flex-col gap-[3px]">
            <span
              className={`h-[1.5px] w-full rounded-full bg-slate-700 transition-transform ${
                menuOpen ? "translate-y-[4.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-full rounded-full bg-slate-700 transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-full rounded-full bg-slate-700 transition-transform ${
                menuOpen ? "-translate-y-[4.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        {/* Brand */}
        <a
          href="#home"
          onClick={closeMenu}
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          aria-label="Dev Stack home"
        >
          <img
            src={logo}
            alt="Dev Stack"
            className="w-[74px] object-contain sm:w-[128px]"
          />
        </a>

        {/* Desktop navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
          >
            Contact
          </a>
        </div>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            className="text-[8px] font-medium text-slate-600 transition-colors hover:text-slate-900 sm:text-sm"
          >
            Sign In
          </button>

          <button
            type="button"
            className="rounded-full bg-[image:var(--brand-gradient)] px-3 py-1.5 text-[8px] font-semibold text-white shadow-sm transition-opacity hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="absolute left-0 right-0 top-[44px] border-b border-slate-200 bg-white px-4 py-3 shadow-lg md:hidden">
            <div className="flex flex-col">
              <a
                href="#home"
                onClick={closeMenu}
                className="border-b border-slate-100 px-2 py-2.5 text-xs font-medium text-slate-600"
              >
                Home
              </a>

              <a
                href="#technologies"
                onClick={closeMenu}
                className="border-b border-slate-100 px-2 py-2.5 text-xs font-medium text-slate-600"
              >
                Technologies
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="border-b border-slate-100 px-2 py-2.5 text-xs font-medium text-slate-600"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="border-b border-slate-100 px-2 py-2.5 text-xs font-medium text-slate-600"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="px-2 py-2.5 text-xs font-medium text-slate-600"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;