import styled from "styled-components";
import Container from '@mui/material/Container';

import Column from './base/Column';
import Row from './base/Row';

import Bubbles from './Bubbles';
import Icons from './Icons';

const Hero = () => {
  return (
    <HeroWrapper>
      <ResponsiveRow>
        <LeftHero>
          <Name>Hi, I'm Bradley</Name>
          <Subtitle>I'm a developer who loves working with others, building things, and learning about math!</Subtitle>
          <Icons />
        </LeftHero>
        <RightHero>
          <Bubbles />
        </RightHero>
      </ResponsiveRow>
    </HeroWrapper>
  );
};

export default Hero;

const ResponsiveRow = styled(Row)`
  @media (max-width: 760px) {
    flex-direction: column-reverse;
  }
`;

const Name = styled.h1`
  font-size: 3rem;
  margin-bottom: 0;
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

const LeftHero = styled.div`
  text-align: left;
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 760px) {
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

const RightHero = styled.div`
  width: 50%;
  @media (max-width: 760px) {
    width: 100%;
  }
`;

const HeroWrapper = styled.div`
  padding: 150px 0 50px 0;
  @media (max-width: 760px) {
    padding: 75px 0 20px 0;
  }
`;

const Subtitle = styled.p`
  margin-top: 0;
  @media (max-width: 760px) {
    width: 70%;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`;
