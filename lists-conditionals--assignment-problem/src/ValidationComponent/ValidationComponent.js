import React from 'react';

const validation = (props) => {
  let validationMessage = 'Text long enough';

  if (props.length <= 5) {
    validationMessage = 'Text too short';
  }

  return (
    <div>
      <p>{validationMessage}</p>
      <p>{props.length} characters</p>
    </div>
  )
};

export default validation;