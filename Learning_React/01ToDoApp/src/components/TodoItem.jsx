const TodoItem = ({todoName, todoDate, handleDelete}) => {

    return (
        <>
        <tr>
            <td className="text-left pb-3 px-10">{todoName}</td>
            <td className="text-left pb-3">{todoDate}</td>
            <td className="pb-3"><button onClick={handleDelete} className="bg-red-600 px-3 py-2 rounded-lg text-white font-semibold text-sm">Delete</button></td>
        </tr>
        </>
    )
}

export default TodoItem
