import React from 'react'
import './about.css'
import Image from "../../assets/avatar-2.svg"
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='about__title'>About Me</h2>

      <div className='about__container grid'>
        <img src={Image} alt='' className='about__img'/>

        <div className='about__data grid'>
          <div className='about__info'>
            <p className='about_discription'>I am Nishkarsh Chandra, web developer from Kanpur, India. I have rich experience in web site design and building and customization, also I am good at Programming.</p>
            <a href='#' className='btn'>Download CV</a>
          </div>

          <div className='about__skills grid'>
            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>Development</h3>
                <span className='skills__number '>90%</span>
              </div>

              <div className='skills__bar'>
                <span className='skills__percentage development'></span>
              </div>
            </div>


            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>UI/UX design</h3>
                <span className='skills__number'>80%</span>
              </div>

              <div className='skills__bar'>
                <span className='skills__percentage ui__design'></span>
              </div>
            </div>


            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>Programming</h3>
                <span className='skills__number'>85%</span>
              </div>

              <div className='skills__bar'>
                <span className='skills__percentage programming'></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox></AboutBox>
    </section>
  )
}

export default About