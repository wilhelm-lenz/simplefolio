const Nav = (props) => {
  return (
    <section className="section-navigation">
      <a href="#" className="logo">
        JS.
      </a>
      <nav className="nav-bar">
        {props.navLinks.map((navLink) => {
          return (
            <a key={navLink} className="nav-items" href={navLink}>
              {navLink}
            </a>
          );
        })}
      </nav>
    </section>
  );
};

export default Nav;
