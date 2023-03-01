import React from 'react'
import "./nav.css"
import {TfiHome} from "react-icons/tfi"
import {SiAboutdotme} from "react-icons/si"
import {BiBook} from "react-icons/bi"
import {AiFillMessage} from "react-icons/ai";
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
   <nav className='bottom-nav'>
    <a href= "#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><TfiHome/></a>
    <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><SiAboutdotme/></a>
    <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BiBook/></a>
    <a href='#contact'onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><AiFillMessage/></a>
   </nav>
  )
}

export default Nav
