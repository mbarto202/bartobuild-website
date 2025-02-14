import React from "react";
import "./nav.css";
import { RiHome7Line } from "react-icons/ri";
import { BiMessageDots } from "react-icons/bi";
import { TbFlame } from "react-icons/tb";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
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
        onClick={() => setActiveNav("#footer")}
        className={activeNav === "#footer" ? "active" : ""}
      >
        <BiMessageDots />
      </a>
    </nav>
  );
};

export default Nav;
