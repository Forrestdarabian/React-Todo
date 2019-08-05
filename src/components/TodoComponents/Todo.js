import React from 'react'
import listForm from './TodoForm'

const choresData = [
    {
      name: 'Dishes',
      id: 111,
      finished: false
    },
    {
      name: 'Sweeping',
      id: 222,
      finished: false
    },
    {
      name: 'Laundry',
      id: 333,
      finished: false
    },
    {
      name: 'Litter Box',
      id: 444,
      finished: false
    },
    {
      name: 'Clean Room',
      id: 555,
      finished: false
    },
    {
      name: 'Take Out Trash',
      id: 666,
      finished: true
    }
  ];
  
  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        name: 'Forrest',
        chores: choresData // groceries: groceries,
      };
  
      // this.toggleItem = this.toggleItem.bind(this);
    }
  
    toggleItem = id => {
      console.log(id);
      // Update groceries on our state object
      // use this.setState
      // loop through the arr
      // find which element we clicked update the "pruchased" property
      this.setState({
        chores: this.state.chores.map(item => {
          if (item.id === id) {
            return {
              ...item,
              // Same as:
              // name: item.name,
              // id: item.id,
              // purchased: item.purchased,
              finished: !item.finished
            };
          } else {
            return item;
          }
        })
      });
    };
  
    addItem = itemName => {
      const newItem = {
        name: itemName,
        id: Date.now(),
        finished: false
      };
      this.setState({
        chores: [...this.state.chores, newItem]
      });
    };
  
    clearFinished = () => {
      this.setState({
        chores: this.state.chores.filter(item => !item.finished)
      });
    };
  
    render() {
      return (
        <div className="App">
          <div className="header">
            <h1>Chores List</h1>
            <listForm addItem={this.addItem} />
          </div>
          <choresList
            chores={this.state.chores}
            toggleItem={this.toggleItem}
          />
        </div>
      );
    }
  }
  
  export default choresData;