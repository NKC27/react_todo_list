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

  const addTask = () => {};

  // Delete Tasks

  const deleteTask = (id) => {};

  //  Completed Task marked as done

  const doneTask = (id) => {};

  // cancel marked as done

  const cancelDoneTask = () => {};

  // Change Task

  const changeTask = (e) => {};

  // Update Task

  const updateTask = () => {};

  return (
    <div className="container App">
      <br />
      <h1>React Built ToDo List</h1>
      <br />

      <div className="row">
        <div className="col">
          <input className="form-control form-control-lg" />
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
                    <span title="Completed / Not Completed">
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    <span title="Edit">
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                    <span title="Delete">
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
