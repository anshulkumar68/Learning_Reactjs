import ToDoName from "./components/ToDoName";
import AddTask from "./components/AddTask";
import ToDoItems from "./components/ToDoItems";

function App() {
  const todoItems = [
    {
      taskName: "Buy Milk",
      dueDate: "25-05-2024"
    },
    {
      taskName: "Workout",
      dueDate: "25-05-2024"
    },
    {
      taskName: "Reading",
      dueDate: "26-05-2024"
    }
  ];

  return (
    <>
      <center>
        <ToDoName />
        <AddTask />
        <ToDoItems todoItems={todoItems}></ToDoItems>
      </center>
    </>
  );
};

export default App;

