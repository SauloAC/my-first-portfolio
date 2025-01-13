import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperiences from "./components/WorkExperience";

export default function Page() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="lg:ml-[33%] p-4">
        <Home />
        <AboutMe />
        <Skills />
        <WorkExperiences />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
