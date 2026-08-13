import React, { useState } from "react";
import { RiHome7Line } from "react-icons/ri";
import { BiMessageDots } from "react-icons/bi";
import { TbFlame } from "react-icons/tb";
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
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
        href="#footer"
        onClick={() => setActiveNav("#footer")}
        className={activeNav === "#footer" ? "active" : ""}
      >
        <BiMessageDots />
      </a>
    </nav>
  );
};

export default Nav;
