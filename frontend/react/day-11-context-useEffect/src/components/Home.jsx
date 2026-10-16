import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'
const Home = () => {
    console.log("Home rendering")

  return (
    <div>
        <h1>Home page </h1>
        <h2>increasing by one-</h2>

    </div>
  )
}

export default Home