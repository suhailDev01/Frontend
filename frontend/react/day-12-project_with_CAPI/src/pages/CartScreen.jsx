import React, { useContext } from 'react';
import CartProduct from '../components/CartProduct';
import { MyStore } from '../context/MyContext';

const CartScreen = () => {
const { cartItem } = useContext(MyStore);


return (
    <div className="min-h-screen m-3">
        <h1 className="text-2xl font-bold mb-5">My Cart</h1>

        {cartItem.length === 0 ? (
            <h2 className="text-xl text-gray-500">
                Your cart is empty!
            </h2>
        ) : (
            <div className="grid grid-cols-2 gap-4">
                {cartItem.map((product, index) => (
                    <CartProduct
                        key={`${product.id}-${index}`}
                        product={product}
                    />
                ))}
            </div>
        )}
    </div>
);


};

export default CartScreen;
