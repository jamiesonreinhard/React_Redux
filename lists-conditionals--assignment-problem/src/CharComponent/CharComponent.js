import React from 'react';
import './CharComponent.css';

const characters = (props) => {
  return(
    <div className="CharComponent">
      <p onClick={props.clicked}>{props.value}</p>
    </div>
  );
}

export default characters;