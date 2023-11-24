import Card from "../card/Card";
import "../card/Card.css";

const Projects = () => {
  return (
    <section id="projects" className="section-projects">
      <h2 className="heading-secondary">PROJECTS</h2>
      <div className="cards-wrapper">
        <Card
          headline={"Project 1"}
          description={
            "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam."
          }
          techStack={["Javascript", "React", "SASS"]}
        />
        <Card
          headline={"Project 2"}
          description={
            "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam."
          }
          techStack={["Javascript", "React", "SASS"]}
        />
        <Card
          headline={"Project 3"}
          description={
            "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam."
          }
          techStack={["Javascript", "React", "SASS"]}
        />
      </div>
    </section>
  );
};

export default Projects;
