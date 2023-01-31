import React from 'react'
import './CardBottom.css'
import { SlControlPlay } from "react-icons/sl"
import { TbPlayerTrackNext } from "react-icons/tb"
import { TbPlayerTrackPrev } from "react-icons/tb"
import ME2 from "../../assets/ME2.png"

const CardBottom = () => {
  return (
    <section className="CarBottom">
    <div className="song">
    <div className="resume">
      <img src={ME2} className="resume__disc" alt="foto disco Izal"></img>
      <div className="resume-text">
        <div className="resume__p">Javier Álvarez</div>
        <div className="resume__p">Full Stack Developer</div>
        <div className="resume__love"></div>
      </div>
      <div className="song__reproductor">
      <a href="#experience">
      <TbPlayerTrackPrev />
      </a>
        <a href="https://open.spotify.com/track/6JzzaXLq66zixh52ZsbUfn?si=llxdJGOhQn2IfJxajzwv6g&context=spotify%3Aplaylist%3A53ADQz9YoHQqpgoBBQFEIb">
          <SlControlPlay />
        </a>
        <a href="#portfolio">
        <TbPlayerTrackNext />
        </a>
      </div>
    </div>
  </div>
  </section>
  )
}

export default CardBottom