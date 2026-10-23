import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetail = () => {
    let [singleData, setSingleData] = useState({})
    console.log(singleData)
    let {id} = useParams()
    let getSingleData =async()=>{
        try {
            let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setSingleData(res.data)
        } catch (error) {
            console.log("error product detail in api", error)
            
        }
    }
useEffect(()=>{
    getSingleData()
},[])
  return (
    <div>
       <h1> it tell about product detail</h1>
    </div>
  )
}

export default ProductDetail