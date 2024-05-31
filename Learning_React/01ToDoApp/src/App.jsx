import "./App.css";
import TodoName from "./components/ToDoName";
import TodoHeading from "./components/TodoHeading";
import TodoAdd from "./components/TodoAdd";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container";
import ShowMessage from "./components/ShowMessage";
import { useState } from "react";

function App() {
  const IntialTodoItems = [
    {
      itemName: "Hit Gym",
      itemDate: "2024-06-02",
    },
    {
      itemName: "Have Smoothie",
      itemDate: "2024-06-02",
    },
  ];

  const [todoItems, setTodoItems] = useState(IntialTodoItems);

  const handleNewItem = (newItemName, newItemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { itemName: newItemName, itemDate: newItemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteButtonClicked = (itemToDelete) => {
    const newTodoItems = todoItems.filter(
      (item) => item.itemName !== itemToDelete
    );
    setTodoItems(newTodoItems);
  };

  return (
    <Container>
      <TodoName />
      <table className="bg-white w-4/6 shadow-md ">
        <thead className="bg-gray-700 text-white">
          <TodoHeading />
        </thead>
        <tbody>
          <TodoAdd onNewItem={handleNewItem}></TodoAdd>
          {todoItems.length === 0 && <ShowMessage />}
          <TodoItems
            todoItems={todoItems}
            onDeleteClick={handleDeleteButtonClicked}
          ></TodoItems>
        </tbody>
      </table>
    </Container>
  );
}

export default App;
