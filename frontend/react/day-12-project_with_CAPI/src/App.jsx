import axios from 'axios'
import React from 'react'

const App = () => {
  const getProductData = async () =>{
    try{
      let res = axios.get('https://fakestoreapi.com/products')
      console.log(res)
    }
    catch(error){
      console.log("error in api->", error)
    }
  }
  getProductData();
  
  return (
    <div>
      <h1>Hello friends</h1>
    </div>
  )
}

export default App