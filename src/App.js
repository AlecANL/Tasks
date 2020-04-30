import React, { Fragment, useState, useEffect } from 'react';
import TemplateTask from './components/TemplateTask';
import Task from './components/Task';
const App = () => {
  let sateTaskInit = JSON.parse(localStorage.getItem('Task'));
  if (!sateTaskInit) {
    sateTaskInit = [];
  }

  const [addTask, setAddTask] = useState(sateTaskInit);
  useEffect(() => {
    if (sateTaskInit) {
      localStorage.setItem('Task', JSON.stringify(addTask));
    } else {
      localStorage.setItem('Task', JSON.stringify([]));
    }
  }, [sateTaskInit, addTask]);

  const addNewTask = (task) => {
    setAddTask([...addTask, task]);
  };
  const deleteTask = (id) => {
    const taskDelete = addTask.filter((task) => task.id !== id);
    setAddTask(taskDelete);
  };
  return (
    <Fragment>
      <div className='App'>
        <div className='task-template'>
          <TemplateTask addNewTask={addNewTask} />
          <div className='tasks'>
            {addTask.map((taskItem) => (
              <Task key={taskItem.id} newTask={taskItem} deleteTask={deleteTask} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
