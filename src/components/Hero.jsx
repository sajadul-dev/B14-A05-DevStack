import bannerStack from "../assets/banner-stack.png";

function Hero() {
  return (
    <section
      id="home"
      className="bg-white"
    >
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-[1290px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-10 lg:py-20">
        {/* Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[58px]">
            Build Your Ideal
            <span className="block bg-[image:var(--brand-gradient)] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
<p className="mt-6 max-w-[471px] text-base leading-7 text-slate-500">
  Explore frontend, backend, database, and tooling options,
  compare them side by side, and put together the stack that fits your
  next project.
</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#technologies"
              className="inline-flex items-center justify-center rounded-lg bg-[image:var(--brand-gradient)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
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
            className="w-full max-w-[500px] object-contain sm:max-w-[540px] lg:max-w-[520px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;