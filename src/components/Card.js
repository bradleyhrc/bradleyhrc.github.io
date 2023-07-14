import styled from "styled-components";
import Container from '@mui/material/Container';
import Column from './base/Column';
import Row from './base/Row';

import data from '../exp-data';

const Card = ({
  img,
  name,
  descr,
  skills,
  link,
}) => {
  return (
    <CardWrap>
      <InWrap>
        <Name>{name}</Name>
      </InWrap>
    </CardWrap>
  );
}

export default Card;

const Name = styled.h3`

`;

const Image = styled.img`
  width: 100%;
  height: auto;

`;

const InWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 1.5rem 0rem 1.5rem;
  height: 100%;
`;

const CardWrap = styled.div`
  width: 100%;
  border-radius: 6px;
  border: 0 solid #e5e7eb;
  background-color: #fefefe;
`;
