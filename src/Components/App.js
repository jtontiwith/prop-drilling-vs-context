import React, { useState } from 'react';
import DashBoard from './DashBoard';
import '../App.css'
import ItemsProvider from '../Providers/ItemsProvider';

const App = () => {
  return (
    <div className='container-div'>
      <ItemsProvider>
        <DashBoard />
      </ItemsProvider>
    </div>
  );
}

export default App;
