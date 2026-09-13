import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-white [--brand-gradient:linear-gradient(90deg,#ff7a00_0%,#ec4899_50%,#8b5cf6_100%)]">
      <Navbar />

      <main>
        <Hero />

        <div
          id="technologies"
          className="h-px w-full"
          aria-hidden="true"
        />
      </main>
    </div>
  );
}

export default App;