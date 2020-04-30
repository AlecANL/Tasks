import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const TemplateTask = ({ addNewTask }) => {
  const [currentState, setCurrentSate] = useState({
    taskName: '',
    taskDescription: '',
  });

  const [wrong, setWrong] = useState(false);

  const handleChange = (e) => {
    setCurrentSate({
      ...currentState,
      [e.target.name]: e.target.value,
    });
  };

  const { taskName, taskDescription } = currentState;
  const sendData = (e) => {
    e.preventDefault();
    if (taskName.trim() === '' || taskDescription.trim() === '') {
      setWrong(true);
      return;
    }
    setWrong(false);

    currentState.id = uuidv4();

    addNewTask(currentState);
    // reset form
    setCurrentSate({
      taskName: '',
      taskDescription: '',
    });
  };
  return (
    <div className='App-'>
      <div className='l-container'>
        <h1>Add Your Task</h1>
        <div className='task-input-container'>
          <input
            type='text'
            name='taskName'
            placeholder='Add New Task'
            className='input'
            onChange={handleChange}
            value={taskName}
          ></input>
          <textarea
            name='taskDescription'
            placeholder='Describe your Task'
            className='input'
            onChange={handleChange}
            value={taskDescription}
          ></textarea>
          <button type='button' className='btn btn-task' onClick={sendData}>
            Add New Task
          </button>
          {wrong ? <p>Sorry don't put empty inputs try again</p> : null}
        </div>
      </div>
    </div>
  );
};

export default TemplateTask;
