import React from "react";
import '../00Hero/Hero.css'
import Card from "../Card/Card";

const Hero = ({ hero }) => {
  return (
    <section className="hero">
      <div className="hero__info">
        <Card />
        </div>
    </section>
  );
};

export default Hero;
