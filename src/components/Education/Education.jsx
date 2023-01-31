import React from "react";
import "../Education/Education.css";


const Education = ({ education }) => {
  return (
    <section className="education__box" id="education">
    <div className="card__complete">
    </div>
      {education.map((education, index) => (
          <div className="education__info" key={index}>
            <h2 className="education__h2">{education.title}</h2>
            <h2 className="education__h2">{education.where}</h2>
            <div className="education__year">
              <h3 className="education__h3">{education.year}</h3>
            </div>
            <p className="education__p">{education.description}</p>
          </div>
      ))}
      <div className="card__bottom">
      </div>
    </section>
  );
};

export default Education;
