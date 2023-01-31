import React from 'react'
import '../Portfolio/Portfolio.css'

const Portfolio = ( { portfolio }) => {
  return (
    <section className="portfolio__box" id="portfolio">
    <div className="card">
      
      </div>
      {portfolio.map((portfolio, index) => 
      <div className="portfolio__info" key={index}>
        <h4 className="portfolio__h4">{portfolio.url}</h4>
        <h5 className="portfolio__h5">{portfolio.lenguajes}</h5>
      </div>
      )}
      <div className="card">
      
      </div>
    </section>
    )
  }

export default Portfolio