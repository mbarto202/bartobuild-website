import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import About from "./about/About";
import Services from "./services/Services";
import Footer from "./footer/Footer";
import ContactForm from "./contact/ContactForm";
import Dashboard from "./dashboard/Dashboard";

const App = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Header />}
      {!isDashboard && <Nav />}

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                <Services />
                <ContactForm />
              </>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      {!isDashboard && <Footer />}
    </>
  );
};

export default App;
