import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = () => {
    if (newTask === '') return;
    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  const upTask = (key:number) => {
    if ((key<=0) || (key>tasks.length)) {
      return
    }
    setTasks([...tasks.slice(0,key-1), tasks[key], tasks[key-1], ...tasks.slice(key+1, tasks.length)]);
  }

  const downTask = (key:number) => {
    if ((key<0) || (key>=tasks.length-1)) {
      return
    }
    setTasks([...tasks.slice(0,key), tasks[key+1], tasks[key], ...tasks.slice(key+2, tasks.length)]);
  }

  const removeTask = (key:number) => {
    if ((key<0) || (key>tasks.length-1)) {
      return
    }
    setTasks([...tasks.slice(0,key), ...tasks.slice(key+1, tasks.length)]);
  }

  const clear = () => {
    setTasks([]);
  }

  const sort = () => {
    setTasks([...tasks].sort((a, b) => a.localeCompare(b)));
  }

  return (
    <>
    <div>
      <h2>Hello Dominika!</h2>
    </div>
    <div>
      <input type='text' placeholder='new task' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
      <button type='submit' onClick={addTask}>+</button>
    </div>
    <div>
      <button type='button' onClick={sort}>sort</button>
      <button type='button' onClick={clear}>clear</button>
    </div>
    <ul>
    <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task}
            <button type='button' onClick={() => upTask(i)}>&uarr;</button>
            <button type='button' onClick={() => downTask(i)}>&darr;</button>
            <button type='button' onClick={() => removeTask(i)}>X</button>
          </li>
        ))}
      </ul>
    </ul>
    </>
  )
}

export default App
