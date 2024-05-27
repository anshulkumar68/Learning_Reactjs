function ToDoItem({ todoName, todoDate }) {
  return (
    <>
      <div className="container row m-2">
        <div className="col-4 text-left">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 min-w-40">
          <button type="button" className="btn btn-danger rounded-pill">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default ToDoItem;
