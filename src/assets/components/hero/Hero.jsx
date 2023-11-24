import Button from "../button/Button";
import "../button/Button.css";

const Hero = () => {
  return (
    <section className="section-hero">
      <h1 className="heading-primary">
        Hi, I am <span className="heading-primar-author">Wilhelm Lenz.</span>
      </h1>
      <h3 className="heading-tertiary">A Front End Developer.</h3>
      <p className="hero-description">
        Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis
        perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus
        modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores
        minima consectetur.
      </p>
      <Button contentText={"resume"} />
    </section>
  );
};

export default Hero;
