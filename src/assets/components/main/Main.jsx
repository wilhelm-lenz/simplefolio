import Projects from "../projects/Projects";
import Skills from "../skills/Skills";

import "../projects/Projects.css";
import "../skills/Skills.css";

const Main = () => {
  return (
    <main className="main">
      <Projects />
      <Skills
        skills={[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "SCSS",
          "Tailwind CSS",
          "Git",
          "UI/UX",
        ]}
      />
    </main>
  );
};

export default Main;
