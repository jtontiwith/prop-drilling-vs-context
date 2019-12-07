import React from 'react';

const Input = ({ handleEvent, inputValue }) => {
  return <input onChange={handleEvent} name="todo" type='text' value={inputValue} placeholder="type todo here..."/>
}

export default Input;