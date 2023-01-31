import React from 'react'
import './Contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
    <div className="contact__text">
    <h4>¿Hablamos?</h4>
    <h6>Puedes escribirme a través de los siguientes canales:</h6>
</div>
    <div className="contact__container">
        <div className="contact__options">
            <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>javier.alvarez.gonzalez@live.com</h5>
            <a href="mailto:javier.alvarez.gonzalez@live.com" target='blank'>Contáctame por email</a>
            </article>

            <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Javier Álvarez</h5>
            <a href="https://www.linkedin.com/in/javier-%C3%A1lvarez-gonz%C3%A1lez-06799910a/" target='blank'>Mándame un mensaje</a>
            </article>
            
            <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+34 620 821 723</h5>
            <a href="https://api.whatsapp.com/send?phone+34620821723" target='blank'>Mándame un mensaje</a>
            </article>
        </div>
        </div>

        <div className="form__box">
        <div className="form__text">
    <h4>O puedes rellenar el siguiente formulario</h4>
    <h6>Te contestaré lo antes posible</h6>
</div>
        <form action="">
            <input type="text" name="name" placeholder="Tu nombre completo" required />
            <input type="email" name="email" placeholder="Tu email" required />
            <textarea name="message" rows="7" placeholder="Tu mensaje" required></textarea>
            <button type="submit" className="form__btn">Enviar mensaje</button>
        </form>
        </div>
    </section>
  )
}

export default Contact