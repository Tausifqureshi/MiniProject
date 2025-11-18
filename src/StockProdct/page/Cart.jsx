import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">🛒 Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded shadow"
            >
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-700">${item.price} × {item.qty} = ${item.price * item.qty}</p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                >
                  -
                </button>
                <span>{item.qty}</span>
                
                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 px-2 py-1 rounded hover:bg-red-100"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div className="mt-4 p-4 border rounded bg-gray-100 font-semibold flex justify-between items-center">
            <span>Total Items: {cart.reduce((acc, item) => acc + item.qty, 0)}</span>
            <span>Total Price: ${totalPrice}</span>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
