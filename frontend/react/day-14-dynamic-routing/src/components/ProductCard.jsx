import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'
import { useNavigate } from 'react-router'

const ProductCard = ({product}) => {
    let navigate = useNavigate()
  
  return (
     <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300">

      {/* Product Image */}
      <div 
        onClick={()=>navigate(`/detail/${product.id}`)}
      className="h-64 bg-gray-50 p-6 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Information */}
      <div className="p-5">

        {/* Category */}
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 mt-4 line-clamp-2">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <span className="bg-green-600 text-white text-sm px-2 py-1 rounded-md">
            ⭐ {product.rating?.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({product.rating?.count} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-3 leading-relaxed line-clamp-3">
          {product.description}
        </p>

        {/* Price and Button */}
        <div className="flex items-center justify-between mt-5">
          <div>
            <p className="text-xs text-gray-500">Price</p>
            <h3 className="text-2xl font-bold text-gray-900">
              ${product.price}
            </h3>
          </div>

        
         
    <div className="flex items-center gap-4 bg-gray-100 border border-gray-200 rounded-xl p-1.5 shadow-sm">

      {/* Minus Button */}
      <button
    
        className="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-gray-700 text-xl font-bold shadow-sm hover:bg-red-500 hover:text-white transition duration-200"
      >
        −
      </button>

      {/* Quantity */}
      <span className="min-w-6 text-center text-lg font-extrabold text-gray-900">
        
      </span>

      {/* Plus Button */}
      <button
 
        className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-600 text-white text-xl font-bold shadow-sm hover:bg-blue-700 active:scale-95 transition duration-200"
      >
        +
      </button>

    </div>

    <button
     
      className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition duration-300"
    >
      Add to Cart
    </button>
  
        </div>

      </div>
    </div>
  )
}

export default ProductCard