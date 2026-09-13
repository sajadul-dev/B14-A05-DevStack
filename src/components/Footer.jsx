import logo from "../assets/logo-text.png";
function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-[1290px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.7fr_0.8fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div className="max-w-sm">
        <img
  src={logo}
  alt="Dev Stack"
  className="w-[128px] object-contain"
/>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wide text-slate-800">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#home"
                className="text-xs text-slate-400 transition-colors hover:text-slate-700"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="text-xs text-slate-400 transition-colors hover:text-slate-700"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="text-xs text-slate-400 transition-colors hover:text-slate-700"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wide text-slate-800">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#about"
                className="text-xs text-slate-400 transition-colors hover:text-slate-700"
              >
                About
              </a>

              <a
                href="#contact"
                className="text-xs text-slate-400 transition-colors hover:text-slate-700"
              >
                Contact
              </a>

              <a
                href="#careers"
                className="text-xs text-slate-400 transition-colors hover:text-slate-700"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wide text-slate-800">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#privacy"
                className="text-xs text-slate-400 transition-colors hover:text-slate-700"
              >
                Privacy Policy
              </a>

              <a
                href="#terms"
                className="text-xs text-slate-400 transition-colors hover:text-slate-700"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a
              href="#privacy"
              className="transition-colors hover:text-slate-700"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="transition-colors hover:text-slate-700"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;