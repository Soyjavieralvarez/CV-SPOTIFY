import React from 'react'
import CV from '../../assets/CV-Javier-Álvarez.pdf'
import '../Hero/Hero.css'

export const CTA = ( cta ) => {
    return (
      <div className='cta'>
      <a href={ cta.linkedin } className='cta__btn'>LinkedIn</a>
      <a href={ CV } download className='cta__btn'>Descargar CV</a>
      <a href={ cta.github } className='cta__btn'>GitHub</a>
      </div>
    )
  }
  
  export default CTA