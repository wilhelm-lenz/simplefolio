import Card from "../card/Card";
import "./Projects.css";
import cardContentData from "../../data/cardContentData";

const Projects = () => {
  return (
    <section id="projects" className="section-projects">
      <h2 className="heading-secondary">PROJECTS</h2>
      <div className="cards-wrapper">
        {cardContentData.map((singleCardContent) => (
          <Card
            key={singleCardContent.id}
            headline={singleCardContent.headline}
            description={singleCardContent.description}
            techStack={singleCardContent.techStack}
            gitHubLink={singleCardContent.gitHubLink}
            previewSiteLink={singleCardContent.previewSiteLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
