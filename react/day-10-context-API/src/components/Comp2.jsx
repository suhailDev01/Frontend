import React, { useContext } from 'react'
import Comp3 from './comp3'
import { MyStore } from '../context/MyContext'

const Comp2 = () => {

  
  return (
    <div>
    <h1>  comp2 inside compnent one</h1>
    <Comp3 />
      </div>
  )
}

export default Comp2