import React from "react";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-12">
      
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-14 text-white">
    
        <p className="uppercase tracking-widest text-sm mb-3 text-indigo-100">
         
          Discover Your Style
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          
          Find Products You'll Love
        </h2>
        <p className="text-indigo-100 max-w-xl mb-6">
          
          Explore our collection of fashion, jewellery and electronics at
          amazing prices.
        </p>
        <a
          href="#products"
          className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
        
          Shop Now →
        </a>
      </div>
    </section>
  );
};

export default Hero;
