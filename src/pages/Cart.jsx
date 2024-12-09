// src/pages/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <h1 className="text-center">Your cart is empty</h1>;
  }

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      <div>
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="px-4 py-2 text-white bg-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={clearCart}
        className="px-4 py-2 mt-4 text-white bg-blue-500"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
