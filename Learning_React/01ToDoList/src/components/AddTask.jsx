function AddTask() {
  return (
    <>
      <div className="container">
        <div className="row fw-bold">
          <div className="col-4">Task Name</div>
          <div className="col-4">Date</div>
          <div className="col-2">Action</div>
        </div>
        <div className="row">
          <div className="col-4">
            <input type="text" placeholder="Enter task" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success px-4 min">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
