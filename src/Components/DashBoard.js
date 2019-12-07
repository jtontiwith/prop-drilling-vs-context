import React from 'react';
import List from './List';
import Input from './Input';
import Button from './Button';

const DashBoard = ({ items, handleEvent, inputValue }) => {
  return (
    <>
      <Input handleEvent={handleEvent} inputValue={inputValue} />
      <Button handleEvent={handleEvent}>add task</Button>
      <List items={items} />
    </>
  );
}

export default DashBoard;