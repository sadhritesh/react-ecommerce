import React from 'react'
import style from './Contact.module.css'

function Contact() {
  return (
    <div className='container'>
      <h3 className={style.heading}>Contact Us</h3>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.0037013110536!2d77.43457127509879!3d23.242952379019933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43e96395f421%3A0xf50f8e810bdc6465!2sRachna%20Tower!5e0!3m2!1sen!2sin!4v1708318835550!5m2!1sen!2sin" 
      width="100%" 
      height="450" 
      style={{border:0}} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
      </iframe>


          <form 
          action="https://formspree.io/f/mwkgoaza"
          method='POST'
          className={style.form_container}
          >
            <input 
            type="text" 
            name="name"
            placeholder="Your name..."
            required
            autoComplete='off'/>

            <input 
            type="email" 
            name="email" 
            placeholder="Your email..." 
            required
            autoComplete='off'/>

            <textarea 
            name="message" 
            cols="30" 
            rows="10"
            placeholder="Your message..." 
            required
            autoComplete='off'/>

            <input type="submit" value="Submit" />

          </form>
    </div>
  )
}

export default Contact
