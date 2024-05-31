import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.itemName}
          todoDate={item.itemDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </>
  );
};

export default TodoItems;
