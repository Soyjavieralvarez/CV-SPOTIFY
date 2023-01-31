import React from 'react';
import './About.css'

const About = ({ about }) => {
  return (
    <section className="about">
      <div className="about__info">
      
        <p className="about__text">{about.text}</p>
        
      </div>
    </section>
  )
}

export default About