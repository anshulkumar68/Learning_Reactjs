const ToDoItem = ({todoName, todoDate, handleDelete}) => {
    
    // const handleDeleteButtonClicked = (event) =>{
    //     console.log(`${todoName} Button clicked`);
    // }

    return (
        <>
            <div className="container text-center mb-2.5">
                <div className="row">
                    <div className="col-4">{todoName}</div>
                    <div className="col-4">{todoDate}</div>
                    <div className="col-3"><button onClick={handleDelete} className="bg-red-600 px-3 py-1 rounded-lg text-white font-thin text-sm">Delete</button></div>
                </div>
            </div>
        </>
    )
}

export default ToDoItem