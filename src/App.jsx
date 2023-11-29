import Header from "./assets/components/header/Header";
import Main from "./assets/components/main/Main";
import Footer from "./assets/components/footer/Footer";

import "./App.css";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`'inline-padding' ${darkMode ? "light" : null}`}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
