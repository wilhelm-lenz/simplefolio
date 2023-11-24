const Card = (props) => {
  return (
    <article className="card">
      <h4 className="card-headline">{props.headline}</h4>
      <p className="card-description">{props.description}</p>
      <div className="card-tech-stack-wrapper">
        <span className="card-tech-stack-item">{props.techStack[0]}</span>
        <span className="card-tech-stack-item">{props.techStack[1]}</span>
        <span className="card-tech-stack-item">{props.techStack[2]}</span>
      </div>
    </article>
  );
};

export default Card;
