import React from 'react'
import './Skills.css'
import {AiFillHtml5} from 'react-icons/ai'
import {FaReact} from 'react-icons/fa'
import {SiCss3} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'
import {SiChakraui} from 'react-icons/si'
import {SiRedux} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'

export const Skills = () => {
  return (
    <section id='skills'>
      <h2>Skills I have</h2>
      <div className='container experience'>
      <h2>Tech Stack</h2>
      <div className='techStack'>
        <div className='details'>
          <AiFillHtml5 className='icon'/>
            <h3>HTML</h3>
          </div>
          <div className='details'>
          <FaNodeJs className='icon'/>
            <h3>Node js</h3>
        
          </div>
          <div className='details'>
          <DiJavascript1 className='icon'/>
            <h3>Java Script</h3>
          </div>
          <div className='details'>
          <FaReact className='icon'/>
            <h3>REACT</h3>
          </div>
          <div className='details'>
          <SiChakraui className='icon'/>
            <h3>Chakra UI</h3>
          </div>
          <div className='details'>
          <SiRedux className='icon'/>
            <h3>React Redux</h3>
        
          </div>
          <div className='details'>
          <SiCss3 className='icon'/>
            <h3>CSS</h3>
          </div>
          <div className='details'>
          <AiFillGithub className='icon'/>
            <h3>Git Hub</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
