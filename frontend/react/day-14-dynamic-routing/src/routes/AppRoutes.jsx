import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/Product'
import ProductDetail from '../pages/ProductDetail'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />}/>
            <Route path='/product' element={<Product />} /> 
            <Route path='/detail/:id' element={<ProductDetail/>} />
            <Route path='/signin' element={<SignIn />}/>
            <Route path='register' element={<Register />}/>
            
        </Routes>
    </div>
  )
}

export default AppRoutes