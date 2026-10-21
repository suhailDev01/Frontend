import React, { useState } from 'react'

import {NavLink} from 'react-router'
import AppRoutes from './routes/AppRoutes'
import Navbar from './pages/Navbar'


const App = () => {
const [toggle , setToggle] = useState("home")
  return (
    <div className='min-h-screen bg-[radial-gradient(ellipse_at_top,_#B9D9FF_0%,_#D6E8FF_35%,_#F0F5FF_65%,_#F8F7F4_85%,_#FFFFFF_100%)]'>
     
       <Navbar />
       <AppRoutes />
    </div>
  )
}

export default App