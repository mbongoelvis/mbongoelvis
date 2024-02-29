import "./App.css";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Contact } from "./sections/Contact";
import { Projects } from "./sections/Projects";

function App() {
  return (
    <div className="wrapper w-full min-h-screen bg-main overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
