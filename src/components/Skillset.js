import * as React from 'react';

import '../styles/Skillset.scss';

function Skillset(props) {
  return (
    <div className="skillset">
        {props.skills.map((word, index) =>
        <div className="skill" index={index}>{word}</div>)
        }
    </div>
  )
}

export default Skillset;
