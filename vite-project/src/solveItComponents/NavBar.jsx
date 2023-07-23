import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import { navLinks } from '../solveItLinks/navLinks'

export default function NavBar() {
  return (
    <>
        <nav>
            <ul>
                <span>My App</span>
                {navLinks.map(nav => {
                    return <li key={nav.id}><NavLink to={nav.href}>{nav.title}</NavLink></li>
                })}
            </ul>
        </nav>
        <main>
            <Outlet />
        </main>
    </>
  )
}
