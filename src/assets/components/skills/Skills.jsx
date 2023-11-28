import "./Skills.css";

const Skills = ({ skills, darkMode }) => {
  return (
    <section id="skills" className="section-skills">
      <h2 className={darkMode ? "heading-secondary-dark" : "heading-secondary"}>
        SKILLS
      </h2>
      <div className="skills-wrapper">
        {skills.map((skill) => {
          return (
            <span key={skill} className={darkMode ? "skill-dark" : "skill"}>
              {skill}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
