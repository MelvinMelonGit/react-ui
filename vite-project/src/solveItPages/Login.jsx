import React from 'react'

export default function Login() {
  return (
    <>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required />
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required />
    </>
  )
}
