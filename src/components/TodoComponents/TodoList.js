// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const Item = props => {
  return (
    <div
      className={`item${props.item.purchased ? ' finished' : ''}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;