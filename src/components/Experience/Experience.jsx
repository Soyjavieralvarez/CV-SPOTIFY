import React from 'react'
import './Experience.css'

const Experience = ({ experience }) => {
    return (
      <section className="experience__box" id='experience'>
      
      {experience.map((experience, index) => 
      <div className="experience__info" key={index}>
        <h2 className="experience__h2">{experience.job}</h2>
        <h2 className="experience__h2">{experience.enterprise}</h2>
        <h2 className="experience__h2">{experience.where}</h2>
        <h4 className="experience__h4">{experience.year}</h4>
      </div>
      )}
      
    </section>
    )
  }
  
  export default Experience