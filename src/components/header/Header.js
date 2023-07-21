import React from 'react'
import "./Header.css"
import CTA from './CTA';
import HeaderSocials from './Headersocials';

const Header = () => {
  return (
    <div>
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vivek Patidar</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
    </div>
  )
}

export default Header
