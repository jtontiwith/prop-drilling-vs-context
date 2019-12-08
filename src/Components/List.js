import React, { useContext } from 'react';
import Item from './Item';
import { ItemsContext } from '../Providers/ItemsProvider';


const List = () => {
  const { state } = useContext(ItemsContext);
  const itemsForList = state.items.map((item, index) => <Item key={index} text={item.title} />)
  return (
    <div>
      {itemsForList}
    </div>
  )
}

export default List;