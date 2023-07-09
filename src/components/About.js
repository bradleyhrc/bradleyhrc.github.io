import styled from "styled-components";

import Underline from './base/Underline';

const About = () => {
  return (
    <AboutWrapper>
      <Subtitle>
        <Underline>
        About me.
        </Underline>
      </Subtitle>
      I'm a Computer Science and Business Double-Degree student at the University of Waterloo and Wilfrid Laurier.
      As a curious person, I like to self-study new math problems and how we solve can solve them using modern computers.
      <br></br>
      <br></br>
      One thing I love about my program is that I also get the chance to learn all about how to run a business, deliver business recommendations, and solve real-world problems in different industries!
      <br></br>
      <br></br>
      I'm also always looking for opportunities to help and work with others in my community. I'm involved in leadership positions on-campus, and recently much of my time is spent organizing the Hack the North 2023 event this September! 
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled.div`
  margin-top: 20px;
`;

const Subtitle = styled.h3`
  font-size: 1.8rem;
  width: fit-content;
  margin-bottom: 0.5rem;
`;
