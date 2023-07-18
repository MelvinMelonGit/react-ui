import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { tasks } from './data/tasks'
import TaskItem from './todo-components/TaskItem'

//Todos we have Create Read Update Delete

function App() {
  const [currentTasks, setCurrentTasks] = useState(tasks)
  const [inputTask, setInputTask] = useState('')

  const [editTask, setEditTask] = useState({})


  function handleClick() {
    setCurrentTasks(
      [...currentTasks,
      { id: currentTasks.length + 1,
        task: inputTask,
        isEditing: false
      }])
  }

  function handleDelete(id) {
    setCurrentTasks(currentTasks.filter(currentTasks => currentTasks.id !== id))
  }

  function handleEdit(id) {
    currentTasks.map(currentTask => {
      if (currentTask.id === id)  {
        setEditTask({...currentTask, isEditing: true})
      } else {
        return currentTask
      }
    })
  }

  function handleSave(id) {
    currentTasks.map(currentTask => {
      if (currentTask.id === id)  {
        setEditTask({...currentTask, isEditing: false})
        setCurrentTasks([...currentTasks, {...currentTask, editTask}])
      } else {
        return currentTask
      }
    })
  }

  return (
    <>
      <h1>To Do App</h1>
      <p>Please add a task here</p>
      <input type="text" onChange={(e) => setInputTask(e.target.value)}/>
      <button onClick={handleClick}>Add Task</button>
      <ul>
        {currentTasks.map(function(currentTask){
          return (
            <>
              {currentTask.id === editTask.id ?
              (<>
                <input type="text" onChange={(id) => handleEdit(id)} />
                <button onClick={(id) => handleSave(currentTask.id)}>Save</button>
              </>
              ) :
              (<>
                <li>{currentTask.task}</li>
                <button onClick={(id) => handleEdit(currentTask.id)}>Edit</button>
              </>
              ) }
              <button onClick={(id) => handleDelete(currentTask.id)}>X</button>
            </>
          )
        })}
      </ul>
    </>
  )
}

export default App
