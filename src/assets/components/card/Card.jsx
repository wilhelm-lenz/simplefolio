import Forwarding from "../svg/Forwarding";
import GitHub from "../svg/GitHub";
import "./Card.css";

const Card = (props) => {
  return (
    <article className="card">
      <h4 className="card-headline">Project: {props.headline}</h4>
      <p className="card-description">{props.description}</p>
      <div className="card-tech-stack-wrapper">
        <span className="card-tech-stack-item">{props.techStack[0]}</span>
        <span className="card-tech-stack-item">{props.techStack[1]}</span>
        <span className="card-tech-stack-item">{props.techStack[2]}</span>
      </div>
      <div className="card-project-links-wrapper">
        <a href={props.gitHubLink} target="_blank">
          <GitHub />
        </a>
        <a href={props.previewSiteLink} target="_blank">
          <Forwarding />
        </a>
      </div>
    </article>
  );
};

export default Card;
