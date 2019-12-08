import React, { createContext, useState,} from 'react';

export const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  
  const [state, setState] = useState({
    todo: '',
    items: []
  })
  
  const handleEvent = (e) => {
    const { name, value, type } = e.target;
    switch(type) {
      case 'text':
        return setState({
          ...state,
          [name]: value
        });
      case 'submit': 
        return setState({
          ...state,
          items: [...state.items, { title: state.todo }],
          todo: ''
        });
    } 
  }

  return (
    <>
      <ItemsContext.Provider
        value={{
          state,
          handleEvent
        }}
      >
        {children}
      </ItemsContext.Provider>
    </>
  )
}

export default ItemsProvider;

