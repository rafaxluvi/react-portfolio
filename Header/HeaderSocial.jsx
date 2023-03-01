import React from 'react'
import {GrLinkedin} from "react-icons/gr";
import {VscGithubInverted} from "react-icons/vsc";

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/rluviano/" target="_blank" rel="noreferrer"><GrLinkedin/></a>
    <a href="https://github.com/rafaxluvi" target="_blank" rel="noreferrer"><VscGithubInverted/></a>
    </div>
  )
}

export default HeaderSocial
