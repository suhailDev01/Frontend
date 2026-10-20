import React, { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import {Route, Routes } from 'react-router'


const App = () => {
const [toggle , setToggle] = useState("home")
  return (
    <div className='min-h-screen bg-[radial-gradient(ellipse_at_top,_#E9E4FF_0%,_#F8F7F4_45%,_#FFFFFF_100%)]'>
      <nav className='flex justify-between p-4'>
        <h1>logo</h1>
        <div className='flex justify-center justify-center gap-5 text-2xl'>
          <p>home</p>
          <p>about</p>
          <p>contact</p> 
        </div>
        <button>sign in</button>
      </nav>

        <div>
           <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
           </Routes>
        </div>
    </div>
  )
}

export default App