const TodoItem = ({ todoName, todoDate, onDeleteClick }) => {
  return (
    <>
      <tr>
        <td className="text-left pb-3 px-10">{todoName}</td>
        <td className="text-left pb-3">{todoDate}</td>
        <td className="pb-3">
          <button
            onClick={() => onDeleteClick(todoName)}
            className="bg-red-600 px-3 py-2 rounded-full text-white font-semibold text-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default TodoItem;
