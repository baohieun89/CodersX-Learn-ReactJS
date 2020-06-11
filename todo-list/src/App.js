import React, { Component, Fragment}  from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'
import TabMenu from './components/TabMenu'

class App extends Component {
  render(){
    const todos = [
      'Go to market',
      'Buy food',
      'Make dinner'
    ];
    const todoList = todos.map((todo) =>
    <li>{todo}</li>
  );
  const items = [
    { icon: 'http://lorempixel.com/48/48', label: 'HOME' },
    { icon: 'http://lorempixel.com/48/48', label: 'DEALS' },
    { icon: 'http://lorempixel.com/48/48', label: 'UPLOAD' },
    { icon: 'http://lorempixel.com/48/48', label: 'WORK' },
    { icon: 'http://lorempixel.com/48/48', label: 'SETTINGS' }

  ]
    return (
      <>
        <div className='App'>
          Todo List
          <ul>{todoList}</ul>
        </div>    
      
          <TodoItem title={[{name: 'sleep1'},{name: 'sleep2'}]} />
          
          <TabMenu items={items}/>
        
      </>
    );
  }
}

export default App;
