const TodoItem = ({todoName, todoDate, handleDelete}) => {
    
    // const handleDeleteButtonClicked = (event) =>{
    //     console.log(`${todoName} Button clicked`);
    // }

    return (
        <>
            <table className="bg-white w-3/4 shadow-md text-center">

                <tbody className="text-gray-700 ">

                    <tr className="flex justify-around">
                        <td className="py-2 px-4 max-w-40">{todoName}</td>
                        <td className="py-2 px-4 max-w-40">{todoDate}</td>
                        <td className="py-2 px-4 max-w-20"><button onClick={handleDelete} className="bg-red-600 px-4 py-2 rounded-lg text-white font-thin text-sm">Delete</button></td>
                    </tr>
                </tbody>

            </table>

            {/* <div className="container text-center mb-2.5">
                <div className="row">
                    <div className="col-4">{todoName}</div>
                    <div className="col-4">{todoDate}</div>
                    <div className="col-3"><button onClick={handleDelete} className="bg-red-600 px-3 py-1 rounded-lg text-white font-thin text-sm">Delete</button></div>
                </div>
            </div> */}
        </>
    )
}

export default TodoItem
