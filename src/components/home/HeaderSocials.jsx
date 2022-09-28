import React from 'react'

const HeaderSocials = () => {
  return (
    <div className='home__socials'>
        {/* <a href="https://www.instagram.com/"
         className='home__social-link' target="_blank" rel="noreferrer" >
        <i class="fa-brands fa-instagram"></i>
        </a> */}

        

        <a href="https://github.com/nchandra12"
         className='home__social-link' target="_blank" rel="noreferrer" >
        <i className="fa-brands fa-github"></i>
        </a>

        <a href="https://www.linkedin.com/in/nishkarsh-chandra-132a23212/"
         className='home__social-link' target="_blank" rel="noreferrer" >
        <i className="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=nishkarsh2105@gmail.com&body=Body&su=SUBJECT"
         className='home__social-link' target="_blank" rel="noreferrer" >

          <i className="fa-regular fa-envelope"></i>
        </a>

        <a href="https://twitter.com/crypticoderror"
         className='home__social-link' target="_blank" rel="noreferrer" >
        <i className="fa-brands fa-twitter"></i>
        </a>
    </div>
  )
}

export default HeaderSocials