import React from 'react'
import './services.css'
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/attachment_91631681.svg'

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "Expertise in Web Design UI/UX Design and Front End - Development. Extensive experience in creating initial web concepts and solutions using  integrating user-centered design, technologies, and animations.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "I Develop design and update websites and online applications using various programming languages, frame works and designing tools .",
  },
  {
    id: 3,
    image: Image3,
    title: "Programming",
    description:
      "Innovative tech mind with 3 years of experience working as a computer programmer. Capable of working with a variety of technology and software solutions .",
  },
];



const services = () => {
  return (
    <section className='services container section' id='services'>
      <h2 className='section__title'>Services</h2>

      <div className='Services__container grid'>
        {data.map (({id, image, title, description}) => {
          return (
            <div className='services__card' key={id} >
                <img src={image} alt="" className="services__img"></img>

                <h3 className="services__title">{title}</h3>
                <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default services