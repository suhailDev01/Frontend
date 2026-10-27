import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import { Route, Routes } from 'react-router'
import Nested from '../pages/nested'

const AppRoutes = () => {
  return (
    <div> 
         <Routes>
                    <Route path="/" element={<Home/>}>
                    <Route path="nested" element={<Nested/>} />
                    </Route>
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                   </Routes>
    </div>
  )
}

export default AppRoutes