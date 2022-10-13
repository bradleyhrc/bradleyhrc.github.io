import * as React from 'react';
import Linkedin from '../images/linkedin.png';
import Email from '../images/mail.png';
import Github from '../images/github.png';

const VerticalLinks = () => {
    return (
        <div className="vertical-wrap">
            <ul className="col">
                <li>
                    <a href="https://www.linkedin.com/in/bradleyhc">
                        <img className="icon" src={Linkedin} target="_blank" alt="LinkedIn"></img>
                    </a>
                </li>
                <li>
                    <a href="mailto:b2herrer@uwaterloo.ca">
                        <img className="icon" src={Email} target="_blank" alt="Email"></img>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/bradleyhrc">
                        <img className="icon" src={Github} target="_blank" alt="GitHub"></img>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default VerticalLinks;