import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

// import my own things

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About me</h1>
            </Fade>
            <p>
              Thank you for visiting my website! I'm passionate about mathematics, and I'm learning data science as a tool to help others and create solutions.
              <br></br>
              <br></br>
              I am...
              <ul className="about-list">
                <li>
                Studying <b>Mathematics</b> at the University of Waterloo & <b>Business Administration</b> at Wilfrid Laurier University
                </li>
                <li>
                Interested in <b>Data Science</b>, immersing myself in the field through research, work experience, and personal projects
                </li>
                <li>
                Trilingual; I speak English, French, and Spanish all fluently!
                </li>
                <li>
                A <b>Licensed General Insurance Agent</b>, with knowledge in a variety of financial services and insurance products
                </li>
              </ul>
            </p>
          </div>
          <div className="image-wrapper">
            <img id="profile" src={data.aboutImage} alt="headshot" ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
