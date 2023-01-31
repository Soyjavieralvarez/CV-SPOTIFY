import React from "react";
import "../00Hero/Hero.css";
import { useState } from "react";

const CTA = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <section className="nav_cta">
      <div className="cta__info">
        <a
          href="#education"
          onClick={() => setActiveNav("#education")}
          className={activeNav === "education" ? "active" : ""}
        >
          Educación
        </a>

        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
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
          href="#portfolio"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          Habilidades
        </a>
        

        <a
          href="#contact"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          Contacto
        </a>
      </div>
    </section>
  );
};

export default CTA;
