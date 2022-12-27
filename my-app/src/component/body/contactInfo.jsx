
import * as React from 'react';
import { AiFillFacebook, AiOutlineLinkedin, AiFillBehanceSquare, AiFillInstagram } from "react-icons/ai";


import {Link} from 'react-router-dom'
export default function ContactInfo() {
const socialIcon = {
  fontSize: 50,
  color: '#05c495',
}

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
      <div className='contact-form'>
        <div className='input-fields'>
          <input type="text" className='input' placeholder='Name'/>
          <input type="text" className='input' placeholder='Email Adress'/>
          <input type="text" className='input' placeholder='Phone'/>
          <input type="text" className='input' placeholder='Subject'/>
        </div>
        <div className='msg'>
          <textarea placeholder='Message'></textarea>
          <div className='btn'>Send</div>
        </div>
      </div>
    </div>
</div>
    
    </>
  );
}
