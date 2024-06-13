import React from 'react'
import './header.css'
import App from '../App'

export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className='titleBg'> 
          <h1 className='name'>Michael Barto</h1>
          <h5 className="title">Title</h5>
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
