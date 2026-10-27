import React, { useState } from 'react'
import Comp1 from './components/comp1'
import Comp2 from './components/comp2'
import Comp3 from './components/comp3'


const TestContext = () => {
    const [data, setData] = useState("hey, this is central data")
  return (
    <div>
         <h1>all components</h1>
           <Comp1 data={data} />
          <Comp2 data={data}/>
          <Comp3 data = {data}/>
    </div>
  )
}

export default TestContext