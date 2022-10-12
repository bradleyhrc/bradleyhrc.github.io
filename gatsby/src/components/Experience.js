import * as React from 'react';
import Container from '@mui/material/Container';
import ExpCard from './ExpCard';
import data from '../../exp-data';

const Experience = () => {
    return (
        <Container maxWidth="lg">
            <div className="exp-wrap" id="experience">
                <div className="subtitle" id="exp1">
                    <span className="underline1">Experience.</span>
                </div>
                {data.history.map((job, index) =>
                    <ExpCard
                        key={index}
                        company={job.company}
                        logoImgUrl={job.logo}
                        position={job.position}
                        preview={job.preview}
                        description={job.description}
                    />)
                }
            </div>
        </Container>
    )
}

export default Experience;
