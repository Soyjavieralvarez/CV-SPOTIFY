import React from 'react'
import './Portfolio.css'

const Portfolio = ( { portfolio }) => {
  return (
    <section className="portfolio__box" id="portfolio">
    
      {portfolio.map((portfolio, index) => 
      <div className="portfolio__info" key={index}>
      <img className="portfolio__logo" src={portfolio.logo} alt="logo formación"/>
        <h4 className="portfolio__h4">{portfolio.url}</h4>
        <h5 className="portfolio__h5">{portfolio.lenguajes}</h5>
      </div>
      )}
  
    </section>
    )
  }

export default Portfolio