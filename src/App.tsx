import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { ScrollRestoration } from "@/components/ScrollRestoration";

// Import new modular route pages
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Skills } from "@/pages/Skills";
import { Experience } from "@/pages/Experience";
import { Projects } from "@/pages/Projects";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { Contact } from "@/pages/Contact";
import { Technical } from "@/pages/Technical";

function App() {
  return (
    <Router>
      <ScrollRestoration />
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/technical" element={<Technical />} />
          {/* Fallback redirect */}
          <Route path="*" element={<Home />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
