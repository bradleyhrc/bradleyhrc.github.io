import * as React from 'react';
import Container from '@mui/material/Container';
import Copyright from '../components/Copyright';
import ResponsiveAppBar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';

import '../styles/global.scss';

export default function Index() {
  return (
    <Container maxWidth="xl" id="home">
      <ResponsiveAppBar></ResponsiveAppBar>
      <Header></Header>
      <About></About>
      <Copyright></Copyright>
    </Container>
  );
}
