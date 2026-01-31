import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

import DesktopAppDocs from "./pages/desktopdocs.jsx";
import SaaSDocs from "./pages/saasdocs.jsx";

// Keep current layout as Home
function Home() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Main portfolio page */}
      <Route path="/" element={<Home />} />

      {/* Docs pages */}
      <Route path="/docs/saas" element={<SaaSDocs />} />
      <Route path="/docs/desktop" element={<DesktopAppDocs />} />
    </Routes>
  );
}
