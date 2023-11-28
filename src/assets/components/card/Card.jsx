import Forwarding from "../svg/Forwarding";
import GitHub from "../svg/GitHub";
import "./Card.css";

const Card = (props) => {
  return (
    <article className={props.darkMode ? "card-light" : "card"}>
      <h4 className={props.darkMode ? "card-headline-dark" : "card-headline"}>
        Project: {props.headline}
      </h4>
      <p
        className={
          props.darkMode ? "card-description-dark" : "card-description"
        }
      >
        {props.description}
      </p>
      <div className="card-tech-stack-wrapper">
        <span
          className={
            props.darkMode
              ? "card-tech-stack-item-dark"
              : "card-tech-stack-item"
          }
        >
          {props.techStack[0]}
        </span>
        <span
          className={
            props.darkMode
              ? "card-tech-stack-item-dark"
              : "card-tech-stack-item"
          }
        >
          {props.techStack[1]}
        </span>
        <span
          className={
            props.darkMode
              ? "card-tech-stack-item-dark"
              : "card-tech-stack-item"
          }
        >
          {props.techStack[2]}
        </span>
      </div>
      <div
        className={
          props.darkMode
            ? "card-project-links-wrapper-light"
            : "card-project-links-wrapper"
        }
      >
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
