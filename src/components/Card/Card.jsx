import React from 'react'
import './Card.css'
import ME from "../../assets/Me.png";
import CTA from '../Hero/CTA';


const Card = () => {
  return (
    <section className="card__box">
        <div className="card__presentation">
          <img src={ME} className="card__disc" alt="foto disco Izal"></img>
          <div className="card__information">
            <h5 className="card__album">Full Stack Developer</h5>
            <h3 className="card__tittle">Javier Álvarez</h3>
            <h5 className="card__subtitle">Publicidad & Marketing Digital</h5>
          </div>
          <div className='CTA'>
          <CTA />
          </div>
        </div>
    </section>
  )
}



export default Card
