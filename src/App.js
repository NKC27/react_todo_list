import React, { useState } from 'react';

import AddTaskForm from './components/AddTaskForm';
import UpdateForm from './components/UpdateForm';
import ToDo from './components/ToDo';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  //Tasks for State (ToDo List)
  const [toDo, setToDo] = useState([]);

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

  const cancelUpdate = () => {
    setUpdateData('');
  };

  // Change Task

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  // Update Task

  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);

    let updatedObject = [...filterRecords, updateData];

    setToDo(updatedObject);
    setUpdateData('');
  };

  return (
    <div className="container App">
      <br />
      <h1>React ToDo List Application</h1>
      <br />

      {/* Update Task */}
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/* Display ToDo's Section */}

      {toDo && toDo.length ? '' : 'No Tasks Outstanding...'}

      <ToDo
        toDo={toDo}
        doneTask={doneTask}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
