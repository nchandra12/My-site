import React, { useRef, useState, } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'



export const ContactUs = () => {
  const form = useRef();

  const [done, setDone] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [mess, setMess] = useState(""); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_365hm3r', 'template_mys4ufq', form.current, 'cY5B2gHwUSgxOrtFW')
      .then(
        (result) => {
          setUser("");
          setEmail("");
          setMess("");
          setDone(true);
          // console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <section className='contact container section' id='contact'>
        <h2 className='section__title'>Get In Touch</h2>

        <div className='contact__container grid'>
          <div className='contact__info'>
            <h3 className='contact__title'>Let's talk about everthing</h3>
            <p className='contact__details'>Don't like forms? Send me an email. 👋</p>
          </div>
                <form ref={form} onSubmit={sendEmail} className='contact__form'>
                      <div className='contact__form-group'>
                        <div className='contact__form-div'>
                        {/* <label>Name</label> */}
                        <input type="text" name="user_name" className='contact__form-input' placeholder='Insert your name' value={user} onChange={(e) => setUser(e.target.value)} />
                        </div>
                      
                        {/* <label>Email</label> */}
                        <div className='contact__form-div'>
                        <input type="email" name="user_email" className='contact__form-input' placeholder='Insert your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                     </div>
                     <div className='contact__form-div contact__form-area'>
                        {/* <label>Message</label> */}
                        <textarea name="message" id='' cols="30" rows="10" className="contact__form-input" placeholder="Write your message" value={mess} onChange={(e) => setMess(e.target.value)}/>
                     </div>
                    
                    <input type="submit" value="Submit" className='btn'/>
                    <br></br>
                    <span className='submit'>{done && "Thanks for contacting me! "}</span>
                </form>
        </div>
    </section>




    
  );
};
// const Contact = () => {
//   return (
//     <section className='contact container section' id='contact'>
//       <h2 className='section__title'>Get In Touch</h2>

//       <div className='contact__container grid'>
//         <div className='contact__info'>
//           <h3 className='contact__title'>Let's talk about everthing</h3>
//           <p className='contact__details'>Don't like forms? Send me an email. 👋</p>
//         </div>

//         <form action="" method="POST" className='contact__form'>
//           <div className='contact__form-group'>
//             <div className='contact__form-div'>
//               <input type="text" className='contact__form-input' placeholder='Insert your name'></input>
//             </div>

//             <div className='contact__form-div'>
//               <input type="email" className='contact__form-input' placeholder='Insert your email'></input>
//             </div>
//           </div>

//           <div className='contact__form-div'>
//               <input type="text" className='contact__form-input' placeholder='Insert your subject'></input>
//             </div>

//             <div className='contact__form-div contact__form-area'>
//               <textarea 
//               name=''
//               id=''
//               cols="30"
//               rows="10"
//               className="contact__form-input"
//               placeholder="Write your message"
//               ></textarea>
//             </div>

            

//             <button className='btn'>Send Message</button>
//         </form>
//       </div>
//     </section>
//   )
// }

export default ContactUs