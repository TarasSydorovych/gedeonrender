
import * as React from 'react';
import { AiFillFacebook, AiOutlineLinkedin, AiFillBehanceSquare, AiFillInstagram } from "react-icons/ai";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom'
export default function ContactInfo() {
  const form = useRef();
const socialIcon = {
  fontSize: 50,
  color: '#05c495',
}
const SERVICE_ID = "service_xh5ymdk";
const TEMPLATE_ID = "template_zqbdjvp";
const USER_ID = "My9e5IjpQ2yIY3t12";

const sendEmail = (e) => {
  
  e.preventDefault();

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
    .then((result) => {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent Successfully'
      })
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Ooops, something went wrong',
        text: error.text,
      })
    });
    e.target.reset()
};

  return (
    <>
<div className='containerInfo'>

    <div className='columInfo'>
        <div className='columInfoTe'>
          <h2>Get it touch whis us</h2>
          <address>
            <p>
              <strong>Gedeon studio</strong>
              <br/>
              Lvivska  street
              <br/>
              78560 Lviv
              <br/>
              Ukraine
            </p>
          </address>
          <br/>
          <br/>
          <p>
          <strong>Phone</strong>
          &nbsp;
          <a href='tel:+380979375679'>+380979375679</a>
              <br/>
              <strong>Service Inquiries</strong>
              &nbsp;
              <a href='mailto:lukyanenkooleg1992@gmail.com'>lukyanenkooleg1992@gmail.com</a>
              <br/>
           
          </p>
          
          <h1>We are social</h1>
          <a href='https://www.facebook.com/oleg.lukianenko.73' target='blank'><AiFillFacebook style={socialIcon}/></a>
         <a href='https://www.linkedin.com/in/oleg-lukianenko-6986708b/' target='blank'> <AiOutlineLinkedin style={socialIcon}/></a>
         <a href='https://www.behance.net/lukyanenko3046' target='blank'> <AiFillBehanceSquare style={socialIcon}/></a>
         <a href='https://www.instagram.com/_gedeonstudio/' target='blank'><AiFillInstagram style={socialIcon}/></a>

        </div>
    </div>
    <div className='wrapper'>
      <form className='contact-form' type='submit' ref={form} onSubmit={sendEmail}>
        <div className='input-fields'>
          <input type="text" name="user_name" className='input' placeholder='Name'/>
          <input type="text" className='input' name="user_email" placeholder='Email Adress'/>
          <input type="text" className='input' name="Phone" placeholder='Phone'/>
          <input type="text" className='input' name="Subject" placeholder='Subject'/>
        </div>
        <div className='msg'>
          <textarea placeholder='Message' name="message"></textarea>
          <button className='btn' type='submit'>Send</button>
        </div>
      </form>
    </div>
</div>
    
    </>
  );
}
