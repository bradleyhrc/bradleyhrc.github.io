import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GitHub from '@mui/icons-material/GitHub';
import Link from './Link';
import Skillset from './Skillset';

import '../styles/ProjectCard.scss';

export default function ExpCard(props) {

  return (
    <Card className="project-card">
      <CardContent className="project-content">

        <img className="project-sc" src={props.screenshot} alt="company logo" />

        <Typography className="company" variant="h5">
        <Link underline="none" target="_blank" href={props.link} className="project-link">
          <GitHub className="git-icon"/>
        </Link>

        {props.title}
        </Typography>

        <Typography paragraph className="project-txt">{props.description}</Typography>

        <Skillset skills={props.skills}></Skillset>

      </CardContent>
      
    </Card>
  );
}
