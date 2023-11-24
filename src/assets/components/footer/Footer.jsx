import Button from "../button/Button";
import "../button/Button.css";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <h2 className="heading-secondary headline-contact">CONTACT</h2>
      <Button contentText={"email me"} />
      <div className="copiright-wrapper">
        <p className="copyright">Created By Wilhelm Lenz</p>
      </div>
    </footer>
  );
};

export default Footer;
