
import React from "react";

const CartProduct = ({ product, onRemove }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-5 bg-white p-5 rounded-xl shadow-md border border-gray-100">

      {/* Product Image */}
      <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-lg p-3">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          {product.category}
        </p>

        <p className="text-xl font-bold text-blue-600 mt-3">
          ${product.price}
        </p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(product.id)}
        className="px-4 py-2 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-600 hover:text-white transition"
      >
        Remove
      </button>

    </div>
  );
};

export default CartProduct;

