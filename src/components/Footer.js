import React from "react"
import Fade from "react-reveal/Fade"

import Github from "../images/github.png"
import Email from "../images/mail.png"
import Linkedin from "../images/link.png"

const Footer = () => {
  return (
    <div classname="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="https://github.com/bradleyhrc" target="_blank" rel="noreferrer">
                <img src={Github} alt="Github"></img>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="mailto:b2herrer@uwaterloo.ca" target="_blank" rel="noreferrer">
                <img src={Email} alt="Email"></img>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/bradleyhc" target="_blank" rel="noreferrer">
                <img src={Linkedin} alt="LinkedIn"></img>
              </a>
            </li>
          </ul>
          
          <p>
          <Fade bottom cascade>&copy; Bradley Herrera Contreras 2022<br/>v 2.0</Fade></p>
          
        </div>
      </div>
    </div>
  )
}

export default Footer

