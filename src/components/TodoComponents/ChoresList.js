import React from 'react'

const choresList = props => {
    return (
      <div className="chores-list">
        {props.chores.map(item => (
          <Item key={item.id} item={item} toggleItem={props.toggleItem} />
        ))}
        <button className="clear-btn" onClick={props.clearFinished}>
          Clear Finished
        </button>
      </div>
    );
  };
  
  export default choresList;