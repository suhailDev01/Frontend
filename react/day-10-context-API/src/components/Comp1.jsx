import React, { useContext } from 'react'
import Comp2 from './comp2'
import { MyStore } from '../context/MyContext'

const Comp1 = ({data}) => {
  let cd = useContext(MyStore)
  console.log(cd)
  return (
    <div>
        <h1>componet inside componet test</h1>
          <Comp2 />
    </div>
  )
}

export default Comp1