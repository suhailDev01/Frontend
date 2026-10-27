import React, { useContext, useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { ContextProvider, MyStore } from './context/MyContext'

const App = () => {
  console.log("app rendering")
 
  return (
    <div>
      Hello
      
     
            <Home />
             <About />
     
      <Contact />
    </div>
  )
}

export default App