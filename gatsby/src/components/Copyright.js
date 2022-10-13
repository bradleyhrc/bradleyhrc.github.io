import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography className="footer-txt" variant="body2" color="text.secondary" align="center">
      {'© Bradley HC '}
      {new Date().getFullYear()}
      {'.'}<br></br>
      {'v 3.0'}
    </Typography>
  );
}
