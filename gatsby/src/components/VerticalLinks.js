import * as React from 'react';
import Linkedin from '../../public/static/linkedin.png';
import Email from '../../public/static/mail.png';
import Github from '../../public/static/github.png';

const VerticalLinks = () => {
    return (
        <div className="vertical-wrap">
            <ul className="col">
                <li>
                    <a href="https://www.linkedin.com/in/bradleyhc">
                        <img className="icon" src={Linkedin} alt="LinkedIn"></img>
                    </a>
                </li>
                <li>
                    <a href="mailto:b2herrer@uwaterloo.ca">
                        <img className="icon" src={Email} alt="Email"></img>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/bradleyhrc">
                        <img className="icon" src={Github} alt="GitHub"></img>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default VerticalLinks;