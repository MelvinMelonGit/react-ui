import React from 'react'

export default function TaskItem({task, onPressed}) {
  return (
    <>
        <li>{task}</li>
        <button onClick={onPressed}>X</button>
    </>
  )
}
