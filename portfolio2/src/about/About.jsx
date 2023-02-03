import React from 'react'
import Picture from '../assests/Picture.png'
import './about.css'
import {FaAward} from 'react-icons/fa'
// import { Card, CardHeader, CardBody, CardFooter ,Stack,Image,Heading,Button,Text } from '@chakra-ui/react'
import Agam_Kapoor_Resume from '../assests/Agam_Kapoor_Resume.pdf'
export const About = () => {
  return (
    <section id='about' >
      <h5>Get To Know</h5>
      <h2>About Me</h2>
    <div className='container about__Container'>
      <div className='image'>
        <img src={Picture} alt="" />
      </div>
      <div className='content'>
        <div className='cards'>
       <a href={Agam_Kapoor_Resume} download><article className='card'>
        <FaAward className='icon'/>
          <h5>Resume</h5>
          {/* <small>3+ years</small> */}
        </article></a> 
       <a href="#skills"> <article className='card'>
        <FaAward className='icon'/>
          <h5>Services</h5>
          {/* <small>Technical Stack</small> */}
        </article></a>
       <a href="#projects"> <article className='card'>
        <FaAward className='icon'/>
          <h5>Projects</h5>
          {/* <small>3+ projects</small> */}
        </article></a>
        </div>
        <p>Hello! I'm Agam Kapoor,
A quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.</p>
<a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section >
  )
}
