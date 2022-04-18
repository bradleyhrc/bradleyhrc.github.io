import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1 className="firstname">
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Bradley"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "Herrera Contreras"}
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a
              href="Resume"
              className="primary-btn"
            >
            View My Resume
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
