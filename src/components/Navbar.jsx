import logo from "../assets/logo-text.png";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="relative mx-auto flex h-[72px] max-w-[1290px] items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label="Open navigation menu"
        >
          <span className="flex w-5 flex-col gap-1">
            <span className="h-0.5 w-full rounded-full bg-slate-700" />
            <span className="h-0.5 w-full rounded-full bg-slate-700" />
            <span className="h-0.5 w-full rounded-full bg-slate-700" />
          </span>
        </button>

        {/* Brand */}
        <a
          href="#home"
          className="md:static"
          aria-label="Dev Stack home"
        >
          <img
            src={logo}
            alt="Dev Stack"
            className="w-[118px] object-contain sm:w-[128px]"
          />
        </a>

        {/* Desktop navigation - centered */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            Contact
          </a>
        </div>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            className="hidden text-sm font-medium text-slate-600 transition hover:text-slate-900 sm:block"
          >
            Sign In
          </button>

          <button
            type="button"
            className="rounded-full bg-[image:var(--brand-gradient)] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;