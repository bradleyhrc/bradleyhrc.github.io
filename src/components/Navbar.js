import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Logo from "../images/squarelogo.png"
import Fade from "react-reveal/Fade"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            <img className="navbar_logo" src={Logo} alt="logo"></img>
          </div>
          <Fade bottom cascade>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#experience")}>Experience</button>
            <button onClick={() => scrollTo("#projects")}>Projects</button>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Navbar
