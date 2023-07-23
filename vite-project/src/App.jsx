import { useState } from "react"
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom"
import NavBar from "./solveItComponents/navBar"
import './App.css'
import Home from "./solveItPages/Home"
import Login from "./solveItPages/Login"
import Dashboard from "./solveItPages/Dashboard"
import ErrorPage from "./solveItPages/ErrorPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar/>}>
      <Route index element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)


function App() {
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
