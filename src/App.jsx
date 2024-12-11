import React from "react";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import About from "./about/About";
import Services from "./services/Services";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
