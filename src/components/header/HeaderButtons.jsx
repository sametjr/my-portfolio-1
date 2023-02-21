import React from 'react'
import './header.css'
import CV from '../../assets/CV - SAMET ATAÇ.pdf'

const HeaderButtons = () => {
  return (
    <div className="header_buttons">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default HeaderButtons