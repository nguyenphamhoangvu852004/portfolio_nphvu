import { Layout } from "@/components/Layout";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Separator } from "@/components/ui/separator";

function App() {
  return (
    <Layout>
      <Hero />
      <Separator className="opacity-20" />
      {/* <Skills /> */}
      <Separator className="opacity-20" />
      <Projects />
      <Separator className="opacity-20" />
      <Experience />
    </Layout>
  );
}

export default App;
