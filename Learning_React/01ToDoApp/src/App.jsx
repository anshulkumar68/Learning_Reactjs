import { useState } from 'react'
import TodoName from './components/TodoName'
import TodoHeading from './components/TodoHeading';
import TodoAdd from './components/TodoAdd';
import TodoItems from './components/TodoItems';

function App() {
  const todoItems = [{
    itemName : 'Buy Milk',
    itemDate : '28-05-2024'
  },
  {
    itemName : 'Hit Gym',
    itemDate : '28-05-2024'    
  },
  {
    itemName : 'Buy Soyachunks',
    itemDate : '29-05-2024'
  }
]; 

  return (
    <>
      <TodoName></TodoName>
      <TodoHeading></TodoHeading>
      <TodoAdd></TodoAdd>
      <TodoItems todoItems = {todoItems}></TodoItems>
    </>
  )
}

export default App
