import React from "react"
import Fade from "react-reveal/Fade"

const Card = ({heading, techs, paragraph, imgUrl, projectLink}) => {
  return (
    <div className="card">
      <a href={projectLink ? projectLink : "#"} target="_blank" >
        <img className="cardImg" src={imgUrl}></img>
      </a>
      <Fade bottom cascade>
      <div className="content">
        <h1>{heading}</h1>
        <h3>{techs}</h3>
        <p>{paragraph}</p>
      </div>
      </Fade>
    </div>
  )
}

export default Card
