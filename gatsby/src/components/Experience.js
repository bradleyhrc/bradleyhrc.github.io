import * as React from 'react';
import Container from '@mui/material/Container';

const Experience = () => {
    return (
        <Container maxWidth="lg">
            <div className="exp-wrap" id="#experience">
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
                <div className="image">
                    <img src={Photo} alt="Portrait"></img>
                </div>
            </div>
        </Container>
    )
}

export default Experience;
