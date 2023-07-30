import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import { navLinks1 } from '../solveItLinks/navLinks-solveIt-left'
import { navLinks2 } from '../solveItLinks/navLinks-solveIt-right'

export default function NavBar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <NavLink to="/" className="navbar-brand">SolveIt</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav">
                        {navLinks1.map(nav => {
                            return <li key={nav.id} className="nav-item"><NavLink to={nav.href}>{nav.title}</NavLink></li>
                        })}
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        {navLinks2.map(nav => {
                            return <li key={nav.id} className="nav-item"><NavLink to={nav.href}>{nav.title}</NavLink></li>
                        })}
                    </ul>
                </div>
            </div>
        </nav>
        <main>
            <Outlet />
        </main>
    </>
  )
}

        
