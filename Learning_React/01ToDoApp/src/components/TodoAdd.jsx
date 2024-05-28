const TodoAdd = () => {
    return (
        <>
          <div className="container text-center">
                <div className="row mb-3">
                    <div className="col-4"><input type="text" placeholder="Enter task" classNameName="border-2 border-black"/></div>
                    <div className="col-4"><input type="date" placeholder="Enter task" classNameName="border-2"/></div>
                    <div className="col-3"><button className="bg-green-700 px-4 py-1 rounded-lg text-white font-thin text-sm">Add</button></div>
                </div>
            </div>
        </>
    )
}

export default TodoAdd