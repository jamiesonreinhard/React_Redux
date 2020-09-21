import React from 'react'

const userInput = (props) => {
  const style = {
    border: '2px solid red'
  }
  return (
    <div>
      <input 
      style={style}
      onChange={props.changed}
      value={props.currentName}></input>
    </div>
  )
};

export default userInput;
