import Nav from "../nav/Nav";
import Hero from "../hero/Hero";
import "../nav/Nav.css";
import "../hero/Hero.css";

const Header = () => {
  return (
    <header className="header">
      <Nav />
      <Hero />
    </header>
  );
};

export default Header;
