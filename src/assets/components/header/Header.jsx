import Nav from "../nav/Nav";
import Hero from "../hero/Hero";
import "./Header.css";
const Header = ({ setDarkMode, darkMode }) => {
  return (
    <header className="header">
      <Nav
        navLinks={["projects", "skills", "contact"]}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />
      <Hero
        author={"Wilhelm Lenz."}
        headingSub={"A Front End Developer."}
        description={`Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis
perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus
      modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores
      minima consectetur.`}
      />
    </header>
  );
};

export default Header;
