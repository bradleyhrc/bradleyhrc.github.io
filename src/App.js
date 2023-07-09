import logo from './logo.svg';
import Container from '@mui/material/Container';
import styled from "styled-components";

import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <Container maxWidth="md" >
      <Wrap>
        <Hero />
        <About />
        <Experience />
        <Footer />
      </Wrap>
    </Container>
  );
}

export default App;

const Wrap = styled(Container)`
  @media (max-width: 600px) {
    padding: 0 40px;
  }
`;

