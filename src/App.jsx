import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import About from "./about/About";
import Services from "./services/Services";
import Footer from "./footer/Footer";
// import ContactForm from "./contact/ContactForm";
import Dashboard from "./dashboard/Dashboard";
import ClientPortal from "./clientportal/ClientPortal";

const App = () => {
  const location = useLocation();
  const isPortalPage =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/client-portal");

  return (
    <>
      {!isPortalPage && <Header />}
      {!isPortalPage && <Nav />}

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                <Services />
                {/*<ContactForm />*/}
              </>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/client-portal" element={<ClientPortal />} />
        </Routes>
      </main>

      {!isPortalPage && <Footer />}
    </>
  );
};

export default App;
