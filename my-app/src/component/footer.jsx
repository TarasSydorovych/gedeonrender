import * as React from 'react';
import whiteLogo from '../assets/Renders/whitelogo.png'
import { AiFillFacebook, AiOutlineLinkedin, AiFillBehanceSquare, AiFillInstagram } from "react-icons/ai";
export default function Footer() {
    const socialIcon = {
        fontSize: 50,
        color: '#05c495',
      }
      const pages = ['HOME', 'PORTFOLIO', 'ABOUT US', 'WORKFLOW', 'PRICES', 'IMPRESSUM'];

  return (
<>

<footer class="footer-distributed">

			<div class="footer-left">

				<img style={{width: '350px'}}  src={whiteLogo}></img>

				<p class="footer-links">
                    {pages.map((el, index) => {
                      return  <a href="#" key={index}>{el}</a>
                    })}
					
				</p>

				<p class="footer-company-name">Gedeon Studio © 2022</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>32. Lvivska street</span> Lviv</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+380979375679</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:lukyanenkooleg1992@gmail.com">lukyanenkooleg1992@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Coll company Coll company Coll company Coll company Coll company Coll company Coll company Coll company Coll company Coll company
				</p>

				<div class="footer-icons">

                <a href='https://www.facebook.com/oleg.lukianenko.73' target='blank'><AiFillFacebook style={socialIcon}/></a>
         <a href='https://www.linkedin.com/in/oleg-lukianenko-6986708b/' target='blank'> <AiOutlineLinkedin style={socialIcon}/></a>
         <a href='https://www.behance.net/lukyanenko3046' target='blank'> <AiFillBehanceSquare style={socialIcon}/></a>
         <a href='https://www.instagram.com/_gedeonstudio/' target='blank'><AiFillInstagram style={socialIcon}/></a>

				</div>

			</div>

		</footer>

</>
  );
}
