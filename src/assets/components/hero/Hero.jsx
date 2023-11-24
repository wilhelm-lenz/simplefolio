import Button from "../button/Button";
import "../button/Button.css";

const Hero = (props) => {
  return (
    <section className="section-hero">
      <h1 className="heading-primary">
        Hi, I am <span className="heading-primar-author">{props.author}</span>
      </h1>
      <h3 className="heading-tertiary">{props.headingSub}</h3>
      <p className="hero-description">{props.description}</p>
      <Button contentText={"resume"} />
    </section>
  );
};

export default Hero;
