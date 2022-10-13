import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";

const About = () => {
    return (
        <Container maxWidth="lg" id="about">
            <Grid container justifyContent="center" direction={{md: "row-reverse", lg:"row-reverse"}} alignItems="stretch" spacing={2}>
                <Grid className="image" item xs={9} sm={8} md lg>
                    <div className="other-image">
                        <img className="meow" src="/static/bradleyhc.headshot.jpg" alt="Portrait"></img>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={8}>
                    <div className="about-content">
                        <div className="subtitle"><span className="underline1">About me.</span></div>
                        <div className="text">Thank you for visiting my website! Let me tell you more about myself.<br></br>I am...</div>
                        <ul>
                            <li className="text">Studying <b>Computer Science</b> at the University of Waterloo & <b>Business Administration</b> at Wilfrid Laurier University.</li>
                            <li className="text">The <b>Lead Developer</b> on the Data Science Club, where I get to work on creating cool new projects to support our community.</li>
                            <li className="text">Trilingual – I speak English, French, and Spanish all fluently!</li>
                            <li className="text">Inspired to contribute my skills and work for social good.</li>
                        </ul>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;
