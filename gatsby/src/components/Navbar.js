import * as React from 'react';
import Box from '@mui/material/Box';
import scrollTo from "gatsby-plugin-smoothscroll";

const Navbar = () => {
  return (
      <div className="nav-wrap" id="#nav">
        <div className="logo">bradley<br></br>hc.</div>
        <div className="sections-wrap">
          <div className="about">About</div>
          <div className="experience">Experience</div>
          <div className="portfolio">Portfolio</div>
        </div>
        
      </div>
  )
}

export default Navbar;
