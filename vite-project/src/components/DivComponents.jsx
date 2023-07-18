import React from 'react'

export default function DivComponents(props) {
  return (
    <>
        <div>{props.divMood}</div>
        <div>{props.chosenPerson}</div>
    </>
  )
}
