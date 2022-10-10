import * as React from 'react';
import Box from '@mui/material/Box';
//import Button from './Button';
import Link from './Link';

const Header = () => {
  return (
      <div id="head">
        <div className="head-wrap">
            <div className="first-name">Bradley</div>
            <div className="last-name">Herrera Contreras</div>
            <div className="description">Math enthusiast. People oriented. Curiously into tech.</div>
            <Link href="resume" className="button">My resume.</Link>
        </div>
      </div>
  )
}

export default Header;
