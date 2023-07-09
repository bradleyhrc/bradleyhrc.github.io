import styled from "styled-components";

import { LinkedinIcon, GithubIcon } from '../icons';

const Icons = () => {
  return (
    <FullWidth>
      <a
        href="https://www.linkedin.com/in/bradleyhc"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin alt="Linkedin" />
      </a>
      <a
        href="https://github.com/bradleyhrc"
        target="_blank"
        rel="noreferrer"
      >
        <Github alt="Github" />
      </a>
    </FullWidth>
  );
};

export default Icons;

const Linkedin = styled(LinkedinIcon)`
  width: 32px;
  height: 32px;
  transition: fill 0.3s;
  fill: #2d2e32;
  cursor: pointer;
  opacity: 94%;
  &:hover {
    fill: #5DADE2;
    opacity: 1;
  }
`;

const Github = styled(GithubIcon)`
  width: 32px;
  height: 32px;
  transition: fill 0.3s;
  fill: #2d2e32;
  cursor: pointer;
  opacity: 94%;
  &:hover {
    fill: #AF7AC5;
    opacity: 1;
  }
`;

const FullWidth = styled.div`
  width: 100%;
  display: flex;
  flex-display: row;
  align-items: left;
  justify-content: left;
  align-text: left;
  gap: 0.5rem;

  @media (max-width: 820px) {
    justify-content: center;
    align-items: center;
  }
`;
