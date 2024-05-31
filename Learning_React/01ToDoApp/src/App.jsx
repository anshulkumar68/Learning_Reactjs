import "./App.css";
import TodoName from "./components/ToDoName";
import TodoHeading from "./components/TodoHeading";
import TodoAdd from "./components/TodoAdd";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container";

function App() {
  const todoItems = [
    {
      itemName: "Hit Gym",
      itemDate: "28-05-2024",
    },
    {
      itemName: "Buy Milk",
      itemDate: "28-05-2024",
    },

    {
      itemName: "Buy Soyachunks",
      itemDate: "29-05-2024",
    },
    {
      itemName: "Have Smoothie",
      itemDate: "29-05-2024",
    },
    {
      itemName: "Have whey protein",
      itemDate: "29-05-2024",
    },
  ];

  const handleAddButtonClicked = (event) => {
    console.log(`Add button clicked`);
  };

  const handleOnChange = (event) => {
    console.log(event.target.value);
  }

  return (
    <Container>
      <TodoName />
      <table className="bg-white w-4/6 shadow-md rounded-lg">
        <thead className="bg-gray-700 text-white rounded-lg">
          <TodoHeading />
        </thead>
        <tbody>
          <TodoAdd handleAdd={handleAddButtonClicked} handleChange={handleOnChange}></TodoAdd>
          <TodoItems todoItems={todoItems}></TodoItems>
        </tbody>
      </table>
    </Container>
  );
}

export default App;
