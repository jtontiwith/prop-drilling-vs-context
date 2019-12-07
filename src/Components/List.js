import React from 'react';
import Item from './Item';

const List = ({ items }) => {
  const itemsForList = items.map((item, index) => <Item key={index} text={item.title} />)
  return (
    <div>
      {itemsForList}
    </div>
  )
}

export default List;