import Button from "../button/Button";
import GitHub from "../svg/GitHub";
import LinkedIn from "../svg/LinkedIn";
import "./Hero.css";

const Hero = ({ author, headingSub, description, darkMode }) => {
  return (
    <section className="section-hero">
      <h1
        className={`${darkMode ? "heading-primary-dark" : "heading-primary"}`}
      >
        Hi, I am{" "}
        <span
          className="heading-primar-author"
          style={darkMode ? { color: "#2978b5" } : { color: "" }}
        >
          {author}
        </span>
      </h1>
      <h3 className={darkMode ? "heading-tertiary-dark" : "heading-tertiary"}>
        {headingSub}
      </h3>
      <p className={darkMode ? "hero-description-dark" : "hero-description"}>
        {description}
      </p>
      <div
        className={`${darkMode ? "resume-wrapper-dark" : "resume-wrapper"} ${
          darkMode ? "resume-wrapper-dark svg" : "resume-wrapper svg"
        }`}
      >
        <Button contentText={"resume"} darkMode={darkMode} />
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
