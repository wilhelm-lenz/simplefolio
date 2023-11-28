import "./Button.css";

const Button = ({ contentText, darkMode }) => {
  return (
    <button className={darkMode ? "btn-light" : "btn"}>{contentText}</button>
  );
};

export default Button;
