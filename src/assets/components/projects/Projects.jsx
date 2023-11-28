import Card from "../card/Card";
import "./Projects.css";
import cardContentData from "../../data/cardContentData";

const Projects = ({ darkMode }) => {
  return (
    <section id="projects" className="section-projects">
      <h2
        className={`headline-projects ${
          darkMode ? "heading-secondary-dark" : "heading-secondary "
        }`}
      >
        PROJECTS
      </h2>
      <div className="cards-wrapper">
        {cardContentData.map((singleCardContent) => (
          <Card
            key={singleCardContent.id}
            headline={singleCardContent.headline}
            description={singleCardContent.description}
            techStack={singleCardContent.techStack}
            gitHubLink={singleCardContent.gitHubLink}
            previewSiteLink={singleCardContent.previewSiteLink}
            darkMode={darkMode}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
