import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import CartScreen from './pages/CartScreen'
import Hero from './components/Hero'
import { MyStore } from './context/MyContext'
import Login from './components/Login'
import SignUp from './components/SignUp'

const App = () => {
  let {IsCartOpen, cartItem, toggle} = useContext(MyStore)
  const [productsData, setProductsData] = useState([])

 
   
  console.log(productsData)
  const getProductData = async () =>{
    try{
      let res = await axios.get('https://fakestoreapi.com/products')
    
    setProductsData(res.data)
    }
    catch(error){
      console.log("error in api->", error)
    }
  }
  useEffect(()=>{
    getProductData()
  },[])

  return (
    <div>
    <Navbar  />
    <Hero />
    {
      IsCartOpen ? ( <div className='h-screen '>
           <CartScreen />
    </div> ) : ( <div className='grid grid-cols-4 gap-4 m-5'>
    {
      productsData.map((elem)=>{
        let isInCart = cartItem.find((val)=>val.id === elem.id)
           console.log(isInCart)
        return <ProductCard
         key={elem.id}
          product={elem}
          isInCart={isInCart}
          />
      }
    )
    } 
    
   </div>
    )
 }

  {
    toggle ? <SignUp /> : <Login />
  }
    </div>
  )
}

export default App