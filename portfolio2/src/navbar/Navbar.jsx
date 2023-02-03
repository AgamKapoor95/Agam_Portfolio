import React from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {BsBookmarkStarFill} from 'react-icons/bs'
import {DiCodeBadge} from 'react-icons/di'
import {MdContactMail} from 'react-icons/md'
import { useState } from 'react'
export const Navbar = () => {
  const [active,setActive]=useState('#');


  return (
    
    <nav className='nav'>
        <a href='#' onClick={()=>setActive('#')} className={active==='#'?'active':''}><AiOutlineHome/></a>
        <a href='#about' onClick={()=>setActive('#about')} className={active==='#about'?'active':''}><FcAbout/></a>
        <a href='#skills' onClick={()=>setActive('#skills')} className={active==='#skills'?'active':''}><BsBookmarkStarFill/></a>
        <a href='#projects' onClick={()=>setActive('#projects')} className={active==='#projects'?'active':''}><DiCodeBadge/></a>
        <a href='#contact' onClick={()=>setActive('#contact')} className={active==='#contact'?'active':''}><MdContactMail/></a>
    </nav>
  )
}
