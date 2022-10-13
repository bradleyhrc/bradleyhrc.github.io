import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import ProjectCard from './ProjectCard';
import data from '../../exp-data';

const Projects = () => {
    return (
        <Container maxWidth="lg" id="projects">
            <div className="exp-wrap" id="experience">
                <div className="subtitle" id="exp1">
                    <span className="underline1">Projects.</span>
                </div>
                <Grid container justifyContent="flex-start" alignItems="stretch" spacing={3}>
                    {data.portfolio.map((project, index) =>
                        <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
                        <ProjectCard
                            link={project.link}
                            title={project.title}
                            description={project.description}
                            screenshot={project.screenshot}
                            skills={project.skills}
                        />
                        </Grid>)
                    }
                    
                </Grid>
            </div>
        </Container>
    )
}

export default Projects;
