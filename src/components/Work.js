import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"

const Work = () => {
  return (
    <div className="section" id="projects">
      <div className="container">
      <div className="work-wrapper">
        <Fade bottom cascade>
          <h1>Projects</h1>
        </Fade>
        <Fade bottom cascade>
          <h2>Showcasing works I'm proud of</h2>
        </Fade>
        <div className="grid">
          <Fade bottom cascade>
            {data.projects.map((project, index) => (
              <Card
              key={index}
              heading={project.title}
              techs={project.techs}
              date={project.date}
              paragraph={project.para}
              imgUrl={project.imageSrc}
              projectLink={project.url}>
              </Card>
            ))}
          </Fade>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Work
