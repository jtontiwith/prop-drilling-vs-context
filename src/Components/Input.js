import React, { useContext } from 'react';
import { ItemsContext } from '../Providers/ItemsProvider';

const Input = () => {
  const { handleEvent, state } = useContext(ItemsContext)
  return <input onChange={handleEvent} name="todo" type='text' value={state.todo} placeholder="type todo here..."/>
}

export default Input;