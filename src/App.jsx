import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const module = await import("./data/technologies.json");

        setTechnologies(module.default);
      } catch (error) {
        toast.error("Failed to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const handleAddToStack = (technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id,
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((currentStack) => [...currentStack, technology]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemoveFromStack = (technologyId) => {
    const technology = stack.find(
      (item) => item.id === technologyId,
    );

    setStack((currentStack) =>
      currentStack.filter((item) => item.id !== technologyId),
    );

    if (technology) {
      toast.success(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.success("All technologies removed from your stack.");
  };

  return (
    <div className="min-h-screen bg-white [--brand-gradient:linear-gradient(90deg,#ff7a00_0%,#ec4899_50%,#8b5cf6_100%)]">
      <Navbar />

      <main>
        <Hero />

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

            {loading ? (
              <div className="flex min-h-[320px] items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-pink-500" />

                  <p className="text-sm font-medium text-slate-400">
                    Loading technologies...
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_220px]">
                <TechnologyGrid
                  technologies={technologies}
                  stack={stack}
                  onAdd={handleAddToStack}
                />

                <StackSidebar
                  stack={stack}
                  onRemove={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            )}
          </div>
        </section>
      </main>
     <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}

export default App;