import "./Nav.css";
import Sun from "../svg/Sun";
import Moon from "../svg/Moon";

const Nav = ({ navLinks, setDarkMode, darkMode }) => {
  const changeMode = () => setDarkMode((darkMode) => !darkMode);

  return (
    <section className="section-navigation">
      <a href="#" className="logo">
        JS.
      </a>
      <nav className="nav-bar">
        {navLinks.map((navLink) => {
          return (
            <a key={navLink} className="nav-items" href={"#" + navLink}>
              {navLink}
            </a>
          );
        })}
        <span className="on-hover-nav-icon" onClick={changeMode}>
          {darkMode ? <Moon /> : <Sun />}
        </span>
      </nav>
    </section>
  );
};

export default Nav;
