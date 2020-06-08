import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const todos = [
    'Go to market',
    'Buy food',
    'Make dinner'
  ];
  const todoList = todos.map((todo) =>
  <li>{todo}</li>
);

  return (
    <div className='root'>
      Todo List
      <ul>{todoList}</ul>
    </div>    
      

    
  );
}

export default App;
