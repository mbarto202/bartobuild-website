import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/michael-barto-6a2365230/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/mbarto202' target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials