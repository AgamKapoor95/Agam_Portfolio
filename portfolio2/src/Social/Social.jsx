import React from 'react'
import {BsLinkedin} from 'react-icons/bs' 
import {AiFillGithub} from 'react-icons/ai'
 import './Social.css'
export const Social = () => {
  return (
    <div className='social'>
        <a href='www.linkedin.com'><BsLinkedin/></a>
        <a href='www.github.com'><AiFillGithub/></a>
    </div>
  )
}
