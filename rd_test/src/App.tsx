import React, { useState } from 'react';
import './App.css';
import Task1 from './components/Task1/Task1';
import Task2 from './components/Task2/Task2';

type TaskStateType = 'task1' | 'task2' | 'task3'

function App() {

  const [page, setPage] = useState<TaskStateType>('task1');

  const changePage = (taskNumber: TaskStateType) => {
    setPage(taskNumber)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={() => changePage('task1')}>Task1</button>
        <button  onClick={() => changePage('task2')}>Task2</button>
        <button  onClick={() => changePage('task3')}>Task3</button>
      </header>
      {page === 'task1' && <Task1 />}
      {page === 'task2' && <Task2 />}
    </div>
  );
}

export default App;
