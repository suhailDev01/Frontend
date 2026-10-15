import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'
const Home = () => {
    console.log("Home rendering")
    let [count, setCount] = useContext(MyStore)
    
  return (
    <div>
        <h1>Home page </h1>
        <h2>increasing by one-{count}</h2>
        <button onClick={()=>{ setCount(count + 1)  }}  >increment</button>
    </div>
  )
}

export default Home