import React, { useRef } from 'react';
import'./contact.css'
import git from '../../Components/Assests/code.png'
import insta from '../../Components/Assests/instagram.png'
import linkedin from '../../Components/Assests/linkedin.png'
import twitter from '../../Components/Assests/twitter.png'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o3zcoxx', 'template_0qlo73c', form.current, 'M5iZSLUHS1_XQ4bxD')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('email sent successfulluly');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='clients'>
       {/*} <div  className='contactpage'>
            <h1 className='contactpagetitle'>my clients</h1>
            <p className='clientsdesc'> i have work experience in this companies</p>
  </div>*/}
        <div className='contact'>
            <h2 className='contact-title'>Contact me</h2>
            <span className='contact-desc'>i take pride in attention to the smallest details </span>
                <form  ref={form} className='contact-form' onSubmit={sendEmail}>
                    <input type="text"className="name" placeholder='your Name' name='your_name'/>
                    <input type="email" className="email" placeholder='your Email ' name='your_email'/>
                    <textarea className="msg" name="message" rows='5'placeholder='Message'></textarea>
                    <button type='submit' value='send' className='submitbtn' >Submit</button>
                    <div className='links'>
                    <a href="https://www.linkedin.com/in/dhanush-kumar-k-28a1ba223/"><img src={linkedin} alt='' className='link'/></a>
                    <a href="https://instagram.com/_dhxunsh_?igshid=OGQ5ZDc2ODk2ZA=="><img src={insta} alt='' className='link'/></a>
                    <a href='https://github.com/Dkharsx'><img src={git} alt='' className='link'/></a>
                    <a href='https://twitter.com/Dhanush90663092'><img src={twitter} alt='' className='link'/></a>
                    </div>
                </form>
        </div>
        </section>
  )
}

export default Contact
