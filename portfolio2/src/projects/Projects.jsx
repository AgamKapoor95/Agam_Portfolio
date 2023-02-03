import React from 'react'
import youtube from '../assests/youtube.png'
import engagebay from '../assests/engagebay.png'

import profile from '../assests/profile.png'
import './Projects.css'
export const Projects = () => {
  return (
    <section id='projects'>
       <h3>My Recent Work</h3>
        <h2>Portfolio</h2>
      <div className='container portfolio'>
       <article className='item'>
         <div className='Project_image'>
           <img src={youtube} alt="" />
         </div>
         <h3>Youtube Clone</h3>
         <div className="cta">
         <a href="https://github.com/masai-course/agam_fw20_0819/tree/master/unit-3/sprint-4/yutube" className='btn' target='_blank'>GitHub</a>
       <a href="https://chic-croissant-874b08.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
       </div>
       </article>
       <article className='item'>
         <div className='Project_image'>
           <img src={engagebay} alt="" />
         </div>
         <h3>Engagebay Clone</h3>
         <div className="cta">
         <a href="https://github.com/AgamKapoor95/-noble-dime-6328" className='btn' target='_blank'>GitHub</a>
       <a href="https://leafy-sawine-afaf7e.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
       </div>
       </article>
       <article className='item'>
         <div className='Project_image'>
           <img src={profile} alt="" />
         </div>
         <h3>Portfolio's</h3>
         <div className="cta">
         <a href="https://github.com/AgamKapoor95/AgamKapoor95.github.io/tree/master" className='btn' target='_blank'>GitHub</a>
       <a href="https://agamkapoor95.github.io/" className='btn btn-primary' target='_blank'>Live Demo</a>
       </div>
       </article>
      </div>
    </section>
  )
}
