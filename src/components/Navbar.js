import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
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
            Bradley HC
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#experience")}>Experience</button>
            <button onClick={() => scrollTo("#projects")}>Projects</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
