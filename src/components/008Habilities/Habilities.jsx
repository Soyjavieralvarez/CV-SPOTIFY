import React from 'react'
import './Habilities.css'

const Habilities = ({ habilities }) => {
  return (
    <section className="habilities__container" id="habilites">
    {habilities.map((habilities, index)=>
    <div className="habilities__box">
    <div className="habilities__info" key={index}>
        <h3 className="habilities__h4">{habilities.hability}</h3>
        </div>
    </div>
    )}
    </section>
    
  )
}

export default Habilities