import React from 'react'
import './header.css'
import HeaderSocial from './HeaderSocials'
import App from '../App'

export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className='titleBg'> 
          <h1 className='name'>Michael Barto</h1>
          <h5 className="title">Fitness Coach</h5>
          <a className='btn btn-primary'>Book a call</a>
        </div>
        <HeaderSocial />

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
