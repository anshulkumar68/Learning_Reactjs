const TodoAdd = ({handleAdd, handleChange}) => {

    return (
        <>
        <tr>
            <td className="text-left"><input onChange={handleChange} className="outline-none ml-10" type="text" placeholder="Enter Task"/></td>
            <td className="text-left"><input type="date" /></td>
            <td className="py-3"><button onClick={handleAdd} className="w-50 bg-green-700 px-4 py-2 rounded-lg text-white font-semibold text-sm">Add</button></td>
        </tr>
        </>
    )
}

export default TodoAdd