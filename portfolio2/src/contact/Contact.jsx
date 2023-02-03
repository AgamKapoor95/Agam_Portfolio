import React from 'react'
import './Contact.css'
import {BiMailSend} from 'react-icons/bi'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
export const Contact = () => {
  return (
    <section id='contact'>
      <h3>Get In Touch</h3>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className="options">
          <article className='option'>
          <BiMailSend className='icon'/>
            <h4>Email</h4>
            <h5>agamkapoor.95@gmail.com</h5>
            <a href="mailto:agamkapoor.95@gmail.com" target='_blank'>Send a message</a>
          </article>
      
          <article className='option'>
          <AiFillLinkedin className='icon'/>
            <h4>LinkedIn</h4>
            <h5>agam-kapoor191</h5>
            <a href="https://www.linkedin.com/in/agam-kapoor191/" target='_blank'>Send a message</a>
          </article>
       
          <article className='option'>
          <BsWhatsapp className='icon'/>
            <h4>WhatsApp</h4>
            <h5>+91-6284885626</h5>
            <a href="https://api.whatsapp.com/send?phone
            =6284885626" target='_blank'>Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="Message"  placeholder='Your Message' rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

