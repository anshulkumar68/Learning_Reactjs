import { useState } from "react";

const TodoAdd = ({ onNewItem }) => {
  const [todoItem, setTodoItem] = useState();
  const [todoDueDate, setToDoDueDate] = useState();

  const handleItemAdded = (event) => {
    setTodoItem(event.target.value);
  };

  const handleDateAdded = (event) => {
    setToDoDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoItem, todoDueDate);
    setTodoItem("");
    setToDoDueDate("");
  };

  return (
    <>
      <tr>
        <td className="text-left">
          <input
            onChange={handleItemAdded}
            value={todoItem}
            className="outline-none ml-10"
            type="text"
            placeholder="Enter Task"
          />
        </td>
        <td className="text-left">
          <input onChange={handleDateAdded} value={todoDueDate} type="date" />
        </td>
        <td className="py-3">
          <button
            onClick={handleAddButtonClicked}
            className="w-50 bg-green-700 px-4 py-2 rounded-full text-white font-semibold text-sm"
          >
            Add
          </button>
        </td>
      </tr>
    </>
  );
};

export default TodoAdd;
