const Skills = (props) => {
  console.log(props);
  return (
    <section id="skills" className="section-skills">
      <h2 className="heading-secondary">SKILLS</h2>
      <div className="skills-wrapper">
        {props.skills.map((skill) => {
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
