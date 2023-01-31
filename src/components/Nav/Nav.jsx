import React from "react";
import "../Nav/Nav.css";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <section className="nav__box">
        <div className="nav__info">
        <a
            href="#about"
            onClick={() => setActiveNav("about")}
            className={activeNav === "about" ? "active" : ""}
          >
            About
          </a>
          <a
            href="#education"
            onClick={() => setActiveNav("#education")}
            className={activeNav === "education" ? "active" : ""}
          >
            Educación
          </a>

          <a
            href="#experience"
            onClick={() => setActiveNav("experience")}
            className={activeNav === "experience" ? "active" : ""}
          >
           Experiencia
          </a>

          <a
            href="#portfolio"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            Portfolio
          </a>

          <a
            href="#contact"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
           Formulario
          </a>
        </div>
    </section>
  );
};

export default Nav;
