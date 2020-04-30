import React from 'react';

const Tasks = () => {
  return (
    <div className='task-input-container'>
      <input type='text' name='taskName' placeholder='Add New Task'></input>
      <textarea name='taskDescription' placeholder='Describe your Task'></textarea>
    </div>
  );
};

export default Tasks;
