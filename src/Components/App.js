import React, { useState } from 'react';
import DashBoard from './DashBoard';
import '../App.css'

const App = () => {
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
        })
      case 'submit': 
        return setState({
          ...state,
          items: [...state.items, { title: state.todo }],
          todo: ''
        })
    } 
  }

  return (
    <div className='container-div'>
      <DashBoard 
        items={state.items} 
        handleEvent={handleEvent} 
        inputValue={state.todo} 
      />
    </div>
  );
}

export default App;
