import React from 'react'
import '../Skills/Skills.css'

const Skills = ( { skills } ) => {
  return (
    <section className="skills__box">
    {skills.map((skills, index) => 
    <div className="skills__info" key={index}>
      <h4 className="skills__h4">{skills.hability}</h4>
    </div>
    )}
  </section>
  )
}

export default Skills