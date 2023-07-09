import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      Bradley HC. 2023
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  height: 80px;
  display: flex;
  font-size: 0.9rem;
  opacity: 0.87;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

