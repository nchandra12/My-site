import React from 'react'
import './home.css'
import Me from "../../assets/avatar-1.svg"
// import Me from "../../assets/logo.jpg"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const home = () => {
  return (
    <section className='home container' id='home'>
      <div className='intro'>
        <img src={Me} alt="" classname='home__img'></img>
        <h1 className='home__name'>Nishkarsh Chandra</h1>
        <span className='home__education'>I'm a Front-End developer</span>

        <HeaderSocials/>

        <a href='#contact' className='btn'>Hire Me</a>

        <ScrollDown/>
      </div>
      <Shapes/>
    </section>
  )
}

export default home