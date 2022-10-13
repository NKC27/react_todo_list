import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {
  //Tasks for State (ToDo List)
  const [toDo, setToDo] = useState([
    {
      id: 1,
      title: 'Task 1',
      status: true,
    },
    {
      id: 2,
      title: 'Task 2',
      status: false,
    },
    {
      id: 3,
      title: 'Task 3',
      status: false,
    },
  ]);

  // Temporary state
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add Tasks

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  };

  // Delete Tasks

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  //  Completed Task marked as done

  const doneTask = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  // cancel marked as done

  const cancelDoneTask = () => {
    setUpdateData('');
  };

  // Change Task

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: updateData.title,
      status: updateData.status ? true : false,
    };
  };

  // Update Task

  const updateTask = () => {};

  return (
    <div className="container App">
      <br />
      <h1>React Built ToDo List</h1>
      <br />

      {/* Update Task */}

      <div className="row">
        <div className="col">
          <input
            value={updateData && updateData.title}
            onChange={(e) => changeTask(e)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-success mr-20">Update</button>
          <button className="btn btn-lg btn-warning">Cancel</button>
        </div>
      </div>
      <br />

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
      {/* Display ToDo's Section */}

      {toDo && toDo.length ? '' : 'No Tasks Outstanding...'}

      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? 'done' : ''}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="iconsWrap">
                    <span
                      title="Completed / Not Completed"
                      onClick={(e) => doneTask(task.id)}
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    {task.status ? null : (
                      <span
                        onClick={(e) =>
                          setUpdateData({
                            id: task.id,
                            tite: task.title,
                            status: task.status ? true : false,
                          })
                        }
                        title="Edit"
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    )}
                    <span onClick={() => deleteTask(task.id)} title="Delete">
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </div>
  );
}

export default App;
