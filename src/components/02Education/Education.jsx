import React from "react";
import "./Education.css";


const Education = ({ education }) => {
  return (
    <section className="education__box" id="education">
    
      {education.map((education, index) => (
          <div className="education__info" key={index}>
          <img className="education__logo" src={education.logo} alt="logo formación"/>
          <div className="education__text">
            <h2 className="education__h2">{education.title}</h2>
            <h2 className="education__h2">{education.where}</h2>
            <div className="education__year">
              <h3 className="education__h3">{education.year}</h3>
              </div>
            </div>
          </div>
      ))}
    </section>
  );
};

export default Education;
