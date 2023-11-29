import Button from "../button/Button";
import GitHub from "../svg/GitHub";
import LinkedIn from "../svg/LinkedIn";
import "./Hero.css";

const Hero = ({ author, headingSub, description }) => {
  return (
    <section className="section-hero">
      <h1 className="heading-primary">
        Hi, I am <span className="heading-primar-author">{author}</span>
      </h1>
      <h3 className="heading-tertiary">{headingSub}</h3>
      <p className="hero-description">{description}</p>
      <div className="resume-wrapper">
        <Button contentText={"resume"} />
        <a href="https://github.com/wilhelm-lenz" target="_blank">
          <GitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/wilhelm-lenz-0b1116145/"
          target="_blank"
        >
          <LinkedIn />
        </a>
      </div>
    </section>
  );
};

export default Hero;
