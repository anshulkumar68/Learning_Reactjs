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

  return (
    <Container>
      <table className="bg-white w-3/4 shadow-md text-center">
        <thead className="bg-gray-800 text-white">
          <tr><TodoName/></tr>
        </thead>
        <tbody>
          <TodoHeading/>

        </tbody>
        <TodoAdd hanldeAdd={handleAddButtonClicked}></TodoAdd>
        <TodoItems todoItems={todoItems}></TodoItems>
      </table>
    </Container>
  );
}

export default App;
