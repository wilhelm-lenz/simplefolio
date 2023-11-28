import Button from "../button/Button";
import "./Footer.css";

const Footer = ({ darkMode }) => {
  return (
    <footer id="contact" className="footer">
      <h2
        className={`headline-contact ${
          darkMode ? "heading-secondary-dark" : "heading-secondary"
        }`}
      >
        CONTACT
      </h2>
      <Button contentText={"email me"} darkMode={darkMode} />
      <div className="copiright-wrapper">
        <p className={darkMode ? "copyright-light" : "copyright"}>
          Created By Wilhelm Lenz
        </p>
      </div>
    </footer>
  );
};

export default Footer;
