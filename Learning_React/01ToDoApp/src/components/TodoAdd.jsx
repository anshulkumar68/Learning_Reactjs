const TodoAdd = ({handleAdd}) => {
    const handleOnChange = (event) => {
        console.log(event.target.value);
    }

    const handleAddButtonClicked = (event) => {
        console.log(`Add button clicked`);
    }

    return (
        <>
        <table className="bg-white w-2/4 shadow-md  text-center">
            
                <tbody className="text-gray-700 border-solid">
                    <tr className="border-solid ">
                        <td className=""><input onChange={handleOnChange} className="enter-task pl-4 py-2" type="text" placeholder="Enter Task" /> </td>
                        <td className="py-2 px-4"><input className="pr-8 py-2" type="date" /></td>
                        <td className="py-2 px-4 m-5"><button onClick={handleAdd} className="w-50 bg-green-700 px-4 py-2 rounded-lg text-white font-thin text-sm">Add</button></td>
                    </tr>
                </tbody>

            </table>
          {/* <div className="container text-center">
                <div className="row mb-3">
                    <div className="col-4"><input onChange={handleOnChange} type="text" placeholder="Enter task" className="border-1 border-black rounded-md"/></div>
                    <div className="col-4"><input type="date" placeholder="Enter task" className="border-1 border-black rounded-md"/></div>
                    <div className="col-3"><button onClick={handleAdd} className="bg-green-700 px-4 py-1 rounded-lg text-white font-thin text-sm">Add</button></div>
                </div>
            </div> */}
        </>
    )
}

export default TodoAdd