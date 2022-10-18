const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      {/* Add Tasks  */}

      <div className="row">
        <div className="col mb-3">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button onClick={addTask} className="btn btn-lg btn-success">
            Add Task
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTaskForm;
