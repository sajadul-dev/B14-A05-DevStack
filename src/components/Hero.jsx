import bannerStack from "../assets/banner-stack.png";

function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-[1290px] grid-cols-1 items-center gap-7 px-5 py-9 sm:px-8 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-10 lg:py-20">
        {/* Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-[27px] font-extrabold leading-[1.08] tracking-tight text-[#0a0f1d] sm:text-5xl lg:text-[58px]">
            Build Your Ideal
            <span className="block bg-[image:var(--brand-gradient)] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-[290px] text-[11px] leading-[17px] text-slate-500 sm:mt-6 sm:max-w-[490px] sm:text-base sm:leading-7 lg:mx-0">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="mt-5 flex justify-center gap-2.5 sm:mt-8 sm:gap-3 lg:justify-start">
            <a
              href="#technologies"
              className="inline-flex h-7 items-center justify-center rounded-md bg-[image:var(--brand-gradient)] px-4 text-[9px] font-semibold text-white shadow-sm transition-opacity hover:opacity-90 sm:h-auto sm:px-5 sm:py-3 sm:text-sm"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="inline-flex h-7 items-center justify-center rounded-md border border-slate-200 bg-white px-5 text-[9px] font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:h-auto sm:py-3 sm:text-sm"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Banner image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerStack}
            alt="Development technology stack"
            className="w-full max-w-[235px] object-contain sm:max-w-[540px] lg:max-w-[520px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;