import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import "./Main.css";

const Main = ({ darkMode }) => {
  return (
    <main className="main">
      <Projects darkMode={darkMode} />
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
        darkMode={darkMode}
      />
    </main>
  );
};

export default Main;
