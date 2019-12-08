import React, { useContext } from 'react';
import { ItemsContext } from '../Providers/ItemsProvider';


const Button = ({ children }) => {
  const { handleEvent } = useContext(ItemsContext)
  return <button onClick={handleEvent}>{children}</button>
}

export default Button;