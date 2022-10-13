import * as React from 'react';
import scrollTo from "gatsby-plugin-smoothscroll";

const Navbar = () => {
  return (
      <div className="nav-wrap" id="nav">
        <div className="logo" onClick={() => scrollTo("#home")}>bradley<br></br>hc.</div>
        <div className="sections-wrap">
          <div className="about">
            <a className="section-link" onClick={() => scrollTo("#about")}>About</a>
          </div>
          <div className="experience">
            <a className="section-link" onClick={() => scrollTo("#experience")}>Experience</a>
          </div>
          <div className="portfolio">
            <a className="section-link" onClick={() => scrollTo("#projects")}>Projects</a>
          </div>
        </div>
      </div>
  )
}

export default Navbar;
