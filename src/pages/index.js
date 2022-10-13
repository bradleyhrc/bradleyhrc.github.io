import * as React from 'react';
import Container from '@mui/material/Container';
import Copyright from '../components/Copyright';
import ResponsiveAppBar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import { Helmet } from 'react-helmet';

import '../styles/global.scss';

export default function Index() {
  return (
    <>
    <Helmet>
      <title>Bradley HC</title>
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fffdf8"/>
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black"/>
    </Helmet>
    <Container maxWidth="xl" id="home">
      <ResponsiveAppBar></ResponsiveAppBar>
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Copyright></Copyright>
    </Container>
    </>
  );
}
