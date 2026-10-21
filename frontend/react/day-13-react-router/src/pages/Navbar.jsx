import React from 'react'
import { NavLink } from 'react-router'
const Navbar = () => {
  return (
    <nav className='flex justify-between p-4'>
        <h1>logo</h1>
        <div className='flex justify-center justify-center gap-5 text-2xl'>
        <NavLink to={"/"}> Home </NavLink>
        <NavLink to={"/about"}> About </NavLink>
        <NavLink to={"/contact"}> Contact </NavLink>
        </div>
        <button>sign in</button>
      </nav>
  )
}

export default Navbar