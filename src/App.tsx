import { Layout } from "@/components/Layout";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Technologies } from "@/components/sections/Technologies";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
