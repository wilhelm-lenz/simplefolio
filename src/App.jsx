import Header from "./assets/components/header/Header";
import Main from "./assets/components/main/Main";
import Footer from "./assets/components/footer/Footer";
import "./assets/components/header/Header.css";
import "./assets/components/main/Main.css";
import "./assets/components/footer/Footer.css";

import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
