import React, { useState, useEffect } from "react";
import { RiHome7Line } from "react-icons/ri";
import { BiMessageDots } from "react-icons/bi";
import { TbFlame } from "react-icons/tb";
import { MdDashboard } from "react-icons/md"; // Dashboard Icon
import { auth } from "../firebase";
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
  }, []);

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <RiHome7Line />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <TbFlame />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageDots />
      </a>
    </nav>
  );
};

export default Nav;
