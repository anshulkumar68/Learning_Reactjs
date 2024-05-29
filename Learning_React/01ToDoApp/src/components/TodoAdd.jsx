const TodoAdd = ({handleAdd}) => {
    const handleOnChange = (event) => {
        console.log(event.target.value);
    }

    const handleAddButtonClicked = (event) => {
        console.log(`Add button clicked`);
    }

    return (
        <>
          <div className="container text-center">
                <div className="row mb-3">
                    <div className="col-4"><input onChange={handleOnChange} type="text" placeholder="Enter task" className="border-1 border-black rounded-md"/></div>
                    <div className="col-4"><input type="date" placeholder="Enter task" className="border-1 border-black rounded-md"/></div>
                    <div className="col-3"><button onClick={handleAdd} className="bg-green-700 px-4 py-1 rounded-lg text-white font-thin text-sm">Add</button></div>
                </div>
            </div>
        </>
    )
}

export default TodoAdd