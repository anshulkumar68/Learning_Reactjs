const ToDoItem = ({todoName, todoDate, handleDelete}) => {
    
    // const handleDeleteButtonClicked = (event) =>{
    //     console.log(`${todoName} Button clicked`);
    // }

    return (
        <>
            <table className="bg-white w-2/4 shadow-md text-center">

                <tbody className="text-gray-700 border-solid">

                    <tr className="text-">
                        <td className="py-2 px-4">{todoName}</td>
                        <td className="py-2 px-4">{todoDate}</td>
                        <td className="py-2 px-4"><button onClick={handleDelete} className="bg-red-600 px-4 py-2 rounded-lg text-white font-thin text-sm">Delete</button></td>
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

export default ToDoItem