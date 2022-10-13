import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import ExpCard from './ExpCard';
import data from '../../exp-data';

const Experience = () => {
    return (
        <Container maxWidth="lg">
            <div className="exp-wrap" id="experience">
                <div className="subtitle" id="exp1">
                    <span className="underline1">Experience.</span>
                </div>
                <Grid container justifyContent="flex-start" alignItems="stretch" columnSpacing={3} rowSpacing={3}>
                    
                    {data.history.map((job, index) =>
                        <Grid item xs={12} sm={6} lg={3} key={index}>
                        <ExpCard
                            company={job.company}
                            logoImgUrl={job.logo}
                            position={job.position}
                            preview={job.preview}
                            description={job.description}
                        />
                        </Grid>)
                    }
                    
                </Grid>
            </div>
        </Container>
    )
}

export default Experience;
