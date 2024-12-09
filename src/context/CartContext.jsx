import React from "react";
import { useCart } from "./CartProvider";

const CartContent = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between pb-2 border-b"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">Price: ${item.price}</p>
                <p className="text-sm text-gray-600">
                  Quantity: {item.quantity}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => addToCart(item)}
                  className="px-2 py-1 text-white bg-green-500 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-2 py-1 text-white bg-red-500 rounded"
                >
                  -
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartContent;
