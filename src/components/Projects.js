import styled from "styled-components";

import Underline from './base/Underline';
import data from '../exp-data';

const Projects = () => {
  return (
    <ProjWrapper>
      <Subtitle>
        <Underline>
        Projects.
        </Underline>
      </Subtitle>
      <Grid>
        
      </Grid>
    </ProjWrapper>
  );
};

export default Projects;

const Grid = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(2,minmax(0,1fr));
  @media (max-width: 690px) {
    grid-template-columns: repeat(1,minmax(0,1fr));
  }
`;

const ProjWrapper = styled.div`
  margin-top: 20px;
`;

const Subtitle = styled.h3`
  font-size: 1.8rem;
  width: fit-content;
  margin-bottom: 0.5rem;
`;
