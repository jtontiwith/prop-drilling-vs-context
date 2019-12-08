import React from 'react';
import List from './List';
import Input from './Input';
import Button from './Button';

const DashBoard = () => {
  return (
    <>
      <Input />
      <Button>add task</Button>
      <List />
    </>
  );
}

export default DashBoard;