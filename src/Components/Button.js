import React from 'react';

const Button = ({ handleEvent, children }) => {
  return <button onClick={handleEvent}>{children}</button>
}

export default Button;