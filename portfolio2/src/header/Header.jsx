import React from 'react'
import './Header.css'
import { CTA } from './CTA'
import Picture from '../assests/Picture.png'
import { Social } from '../Social/Social'
export const Header = () => {
  return (
      
    <header>
    <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Agam Kapoor</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA/>
        <div className='me'>
          <img src={Picture} alt="picture" />
          </div>
        <Social/>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
    </div>

    </header>
  
   
  )
}
