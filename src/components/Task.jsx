import React from 'react';

const NewTask = ({ newTask, deleteTask }) => {
  return (
    <div className='task-container'>
      <p className='taskName'>{newTask.taskName}</p>
      <p className='taskDescription'>{newTask.taskDescription}</p>
      <button type='button' className='btn btn-delete' onClick={() => deleteTask(newTask.id)}>
        Delete
      </button>
    </div>
  );
};

export default NewTask;
