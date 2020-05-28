import React from 'react';
import './Footer.css'
import gh from "../assets/images/ghlogo.png";
import ld from "../assets/images/lilogo.png";
import email from "../assets/images/email.png";

function Footer() {
  return (
   
    <section className="end">
      Copyright © 2020 Yoleamayers 
      <a className="contact-link" href="https://www.linkedin.com/in/yoleamayers"> <img src={ld} height="18" width="20"/> </a>
      <a className="contact-link" href="https://github.com/ymayers/"> <img src={gh} height="18" width="20"/> </a>
      <a className="contact-link" href="mailto:yoleamayers@gmail.com"><img src={email} height="15" width="20"/></a> 
      </section>
      
  )
}

export default Footer
