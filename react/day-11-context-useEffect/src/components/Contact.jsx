import React from 'react'
import { useContext } from 'react'
import { MyStore, } from '../context/MyContext'
const Contact = () => {
    console.log("Contact rendering")
    let data = useContext(MyStore)
      console.log(data)
  return (
    <div>
        <h1>Contact page</h1>
    </div>
  )
}

export default Contact