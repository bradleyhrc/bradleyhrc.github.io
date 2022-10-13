import * as React from 'react';
import Link from './Link';
import VerticalLinks from '../components/VerticalLinks';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
      <div id="head">
        <div className="head-wrap">
            <div className="first-name">Bradley</div>
            <div className="last-name">Herrera Contreras</div>
            <div className="description">
                <span className="underline">
                    Math enthusiast. People oriented. Curiously into tech.
                </span>
            </div>
            <Link href="/resume" className="button" underline="none">My resume.</Link>
        </div>
        <VerticalLinks></VerticalLinks>
      </div>
  )
}

export default Header;
