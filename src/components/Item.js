import styled from "styled-components";

import Row from './base/Row';

const Item = ({
  src,
  pos,
  org,
  date,
  descr,
}) => {
  const parseHTML = (html) => {
    const parser = new DOMParser();
    const parsedHTML = parser.parseFromString(html, 'text/html');
    return parsedHTML.body.innerHTML;
  };

  const parsedDescr = parseHTML(descr);
  
  return (
    <Wrapper>
      <InWrap>
        
          <Left>
            <Logo>
              <Pic src={src} alt={org} />
            </Logo>
            <TextWrap>
              <Position>{pos}</Position>
              <Org>{org}</Org>
            </TextWrap>
          </Left>
          <Date>{date}</Date>
        
        <Description dangerouslySetInnerHTML={{ __html: parsedDescr }} />
      </InWrap>
    </Wrapper>
  );
};

export default Item;

const Date = styled.p`
  margin: 0.6rem 0;
  opacity: 0.8;
  font-size: 0.9rem;
`;

const Description = styled.span`
  margin-top: 0.5rem;
  padding-bottom: 0.5rem;
  opacity: 0.94;
`;

const Left = styled.div`
  display: flex;
  height: fit-content;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Org = styled.p`
  margin: 0rem 0 0.1rem 0;
  opacity: 0.8;
`;

const Position = styled.h4`
  margin: 0.5rem 0 0.2rem 0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fefefe;
`;

const InWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 1.5rem 0rem 1.5rem;
  height: 100%;

`;

const Pic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 6px;
`;

const Logo = styled.div`
  padding-right: 1rem;
  min-width: 50px;
`;
