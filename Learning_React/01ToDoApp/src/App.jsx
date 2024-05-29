import TodoName from './components/TodoName'
import TodoHeading from './components/TodoHeading';
import TodoAdd from './components/TodoAdd';
import TodoItems from './components/TodoItems';
import Container from './components/Container';

function App() {
  const todoItems = [
    {
      itemName: 'Hit Gym',
      itemDate: '28-05-2024'
    },
    {
      itemName: 'Buy Milk',
      itemDate: '28-05-2024'
    },

    {
      itemName: 'Buy Soyachunks',
      itemDate: '29-05-2024'
    },
    {
      itemName: 'Have Smoothie',
      itemDate: '29-05-2024'
    }
  ];

  const handleAddButtonClicked = (event) => {
    console.log(`Add button clicked`);
  };

  return (
    <Container>
      <TodoName></TodoName>
      <TodoHeading></TodoHeading>
      <TodoAdd hanldeAdd={handleAddButtonClicked}></TodoAdd>
      <TodoItems todoItems={todoItems}></TodoItems>
    </Container>
  )
}

export default App
