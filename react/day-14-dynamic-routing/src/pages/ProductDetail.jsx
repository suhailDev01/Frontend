import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  let [singleData, setSingleData] = useState({});
  console.log(singleData);
  let { id } = useParams();
  let getSingleData = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleData(res.data);
    } catch (error) {
      console.log("error product detail in api", error);
    }
  };
  useEffect(() => {
    getSingleData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8 lg:px-16">
    
      {/* Breadcrumb */}
      <div className="mx-auto mb-8 max-w-6xl text-sm text-gray-500">
      
        Home <span className="mx-2">/</span> {singleData.category}
        <span className="mx-2">/</span>
        <span className="text-gray-900">Product Details</span>
      </div>
      {/* Product Section */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
      
        {/* Product Image */}
        <div className="flex items-center justify-center rounded-2xl bg-gray-50 p-8">
        
          <img
            src={singleData.image}
            alt={singleData.title}
            className="h-80 w-full object-contain transition duration-300 hover:scale-105 md:h-[450px]"
          />
        </div>
        {/* Product Information */}
        <div className="flex flex-col justify-center">
        
          {/* Category */}
          <span className="mb-4 w-fit rounded-full bg-indigo-100 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
          
            {singleData.category}
          </span>
          {/* Title */}
          <h1 className="text-3xl leading-tight font-bold text-gray-900 md:text-4xl">
          
            {singleData.title}
          </h1>
          {/* Rating */}
          <div className="mt-5 flex items-center gap-3">
          
            <div className="flex items-center gap-1 text-yellow-500">
            
              <span className="text-xl">★</span>
              <span className="font-bold text-gray-800">
              
                {singleData.rating?.rate}
              </span>
            </div>
            <span className="text-sm text-gray-500">
            
              ({singleData.rating?.count} reviews)
            </span>
          </div>
          {/* Price */}
          <div className="mt-6 flex items-center gap-3">
          
            <span className="text-4xl font-bold text-gray-900">
            
              ${singleData.price}
            </span>
            <span className="rounded-lg bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
            
              In Stock
            </span>
          </div>
          {/* Description */}
          <div className="mt-7 border-t border-gray-100 pt-6">
          
            <h2 className="mb-3 text-lg font-semibold text-gray-900">
            
              Product Description
            </h2>
            <p className="text-sm leading-7 text-gray-600 md:text-base">
            
              {singleData.description}
            </p>
          </div>
          {/* Product Information */}
          <div className="mt-6 space-y-3 border-t border-gray-100 pt-6">
          
            <div className="flex justify-between gap-4 text-sm">
            
              <span className="text-gray-500">Category</span>
              <span className="text-right font-medium text-gray-800">
              
                {singleData.category}
              </span>
            </div>
            <div className="flex justify-between text-sm">
            
              <span className="text-gray-500">Product ID</span>
              <span className="font-medium text-gray-800">
              
                #{singleData.id}
              </span>
            </div>
            <div className="flex justify-between text-sm">
            
              <span className="text-gray-500">Availability</span>
              <span className="font-medium text-green-600">
              
                Available
              </span>
            </div>
          </div>
          {/* Buttons - UI Only */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          
            <button className="flex-1 rounded-xl bg-indigo-600 px-6 py-4 font-semibold text-white shadow-lg shadow-indigo-100 transition hover:bg-indigo-700">
            
              Add to Cart
            </button>
            <button className="flex-1 rounded-xl border border-gray-300 px-6 py-4 font-semibold text-gray-800 transition hover:bg-gray-100">
            
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="mx-auto mt-8 max-w-6xl rounded-2xl bg-white p-6 shadow-sm">
      
        <h2 className="text-xl font-bold text-gray-900">
        
          Why Shop With Us?
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-3">
        
          <div className="rounded-xl bg-gray-50 p-5">
          
            <div className="text-2xl">🚚</div>
            <h3 className="mt-3 font-semibold text-gray-800">
            
              Fast Delivery
            </h3>
            <p className="mt-2 text-sm text-gray-500">
            
              Convenient delivery right to your doorstep.
            </p>
          </div>
          <div className="rounded-xl bg-gray-50 p-5">
          
            <div className="text-2xl">🔒</div>
            <h3 className="mt-3 font-semibold text-gray-800">
            
              Secure Payment
            </h3>
            <p className="mt-2 text-sm text-gray-500">
            
              A safe and secure shopping experience.
            </p>
          </div>
          <div className="rounded-xl bg-gray-50 p-5">
          
            <div className="text-2xl">↩️</div>
            <h3 className="mt-3 font-semibold text-gray-800"> Easy Returns </h3>
            <p className="mt-2 text-sm text-gray-500">
            
              Shop confidently with hassle-free returns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
