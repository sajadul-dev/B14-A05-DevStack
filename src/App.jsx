import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import StackSidebar from "./components/StackSidebar";
import technologies from "./data/technologies.json";

function App() {
  return (
    <div className="min-h-screen bg-white [--brand-gradient:linear-gradient(90deg,#ff7a00_0%,#ec4899_50%,#8b5cf6_100%)]">
      <Navbar />

      <main>
        <Hero />

        {/* Technologies */}
       <section
  id="technologies"
  className="bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-16"
>
  <div className="mx-auto max-w-[1290px]">
    {/* Section heading */}
    <div className="mb-7">
      <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0a0f1d] sm:text-4xl">
        Explore the{" "}
        <span className="bg-[image:var(--brand-gradient)] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>

      <p className="mt-1.5 text-sm leading-6 text-slate-400">
        Pick one technology per category to build your ideal stack.
      </p>
    </div>

    {/* Technology cards + stack sidebar */}
    <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_220px]">
      <TechnologyGrid technologies={technologies} />

      <StackSidebar />
    </div>
  </div>
</section>
      </main>
    </div>
  );
}

export default App;