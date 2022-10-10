import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import ResponsiveAppBar from '../components/Navbar';
import Header from '../components/Header';

import '../styles/global.scss';

export default function Index() {
  return (
    <Container maxWidth="xl">
      <ResponsiveAppBar></ResponsiveAppBar>
      <Header></Header>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gatsby example
        </Typography>
        <Link to="#home" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
