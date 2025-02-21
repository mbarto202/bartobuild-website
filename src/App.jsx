import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import About from "./about/About";
import Services from "./services/Services";
import Footer from "./footer/Footer";
import Login from "./auth/Login";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                <Services />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
