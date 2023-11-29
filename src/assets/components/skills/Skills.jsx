import "./Skills.css";

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="section-skills">
      <h2 className="heading-secondary">SKILLS</h2>
      <div className="skills-wrapper">
        {skills.map((skill) => {
          return (
            <span key={skill} className="skill">
              {skill}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
