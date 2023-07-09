import styled from "styled-components";
import Container from '@mui/material/Container';
import Column from './base/Column';
import Row from './base/Row';

import data from '../exp-data';

const Bubbles = () => {
  return (
    <BubbleWrap>
      <Bubble3 src={data.bubble3.src} alt={data.bubble3.alt} /> 
      <Bubble2 src={data.bubble2.src} alt={data.bubble2.alt} />
      <Bubble1 src={data.bubble1.src} alt={data.bubble1.alt} />  
    </BubbleWrap>
  );
}

export default Bubbles;

const Bubble1 = styled.img`
  width: 90px;
  border-radius: 50%;
  position: relative;
  bottom: 25px;
  left: 10px;
  @media (max-width: 850px) {
    width: 80px;
    bottom: -12px;
    left: 20px;
  }
`;
const Bubble2 = styled.img`
  width: 110px;
  border-radius: 50%;
  position: relative;
  top: 70px;
  left: 24px;
  @media (max-width: 850px) {
    width: 100px;
    top: 60px;
    left: 15px;
  }
`;
const Bubble3 = styled.img`
  width: 200px;
  border-radius: 50%;
  position: relative;
  left: 22px;
  @media (max-width: 850px) {
    width: 190px;
    left: 6px;
  }
`;

const BubbleWrap = styled(Row)`
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-end;
  @media (max-width: 425px) {
    padding-bottom: 25px;
  }
`;
