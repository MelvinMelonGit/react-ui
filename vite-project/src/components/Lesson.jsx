import { useState } from 'react'
import Persons from './Persons'
import Girls from './Girls'
import DivComponents from './DivComponents'

export default function Lesson() {
  const [mood, setMood] = useState(false)
  const [person, setPerson] = useState('kaleb')

  return (
    <div>
      <h1>To Do App</h1>
      <p>{person}</p>
      {mood ? <Girls /> : <Persons />}
      <button onClick={() => setMood(!mood)}>Change mood</button>
      <button onClick={() => {
        if (person === 'kaleb') {
          setPerson('melvin')             
        } else {
          setPerson('kaleb')  
        }
      }}>Change person</button>
      <DivComponents divMood={mood} chosenPerson={person}/>
    </div>
  )
}
