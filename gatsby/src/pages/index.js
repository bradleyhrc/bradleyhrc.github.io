import * as React from 'react';
import Container from '@mui/material/Container';
import Copyright from '../components/Copyright';
import ResponsiveAppBar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

import '../styles/global.scss';

export default function Index() {
  return (
    <Container maxWidth="xl" id="home">
      <ResponsiveAppBar></ResponsiveAppBar>
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Copyright></Copyright>
    </Container>
  );
}
