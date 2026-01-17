// import React, { useContext } from "react";
// import { CartContext } from "../context/CartProvider";

// const Cart = () => {
//   const { cart, increaseQty, decreaseQty, removeFromCart, clearCart } = useContext(CartContext);

//   const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

//   return (
//     <div className="mt-8">
//       <h2 className="text-2xl font-semibold mb-4">🛒 Cart</h2>

//       {cart.length === 0 ? (
//         <p className="text-gray-500">Cart is empty</p>
//       ) : (
//         <div className="space-y-4">
//           {cart.map(item => (
//             <div
//               key={item.id}
//               className="flex items-center justify-between border p-4 rounded shadow"
//             >
//               <div>
//                 <h4 className="font-semibold">{item.title}</h4>
//                 <p className="text-gray-700">${item.price} × {item.qty} = ${item.price * item.qty}</p>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <button
//                   onClick={() => decreaseQty(item.id)}
//                   className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
//                 >
//                   -
//                 </button>
//                 <span>{item.qty}</span>
                
//                 <button
//                   onClick={() => increaseQty(item.id)}
//                   className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
//                 >
//                   +
//                 </button>

//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 px-2 py-1 rounded hover:bg-red-100"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}

//           <div className="mt-4 p-4 border rounded bg-gray-100 font-semibold flex justify-between items-center">
//             <span>Total Items: {cart.reduce((acc, item) => acc + item.qty, 0)}</span>
//             <span>Total Price: ${totalPrice}</span>
//             <button
//               onClick={clearCart}
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//             >
//               Clear Cart
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;













import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart } =
    useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return ( 
    <div className="mt-10 max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg text-center py-10">
          Your cart is empty 😕
        </p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border rounded-xl p-5 shadow-md bg-white hover:shadow-lg transition"
            >
              {/* LEFT */}
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  {item.title}
                </h4>
                <p className="text-gray-600 mt-1">
                  ${item.price} × {item.qty}{" "}
                  <span className="font-semibold text-gray-800 ml-2">
                    = ${item.price * item.qty}
                  </span>
                </p>
              </div>

              {/* RIGHT - Quantity + Delete */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 text-lg font-bold"
                >
                  −
                </button>

                <span className="text-lg font-semibold w-6 text-center">
                  {item.qty}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 text-lg font-bold"
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:bg-red-100 px-3 py-1 rounded-lg"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* TOTAL BOX */}
          <div className="mt-8 p-6 border rounded-2xl bg-gray-50 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              🧾 Order Summary
            </h3>

            <div className="flex justify-between text-lg text-gray-700 mb-2">
              <span>Total Items:</span>
              <span className="font-semibold">
                {cart.reduce((acc, item) => acc + item.qty, 0)}
              </span>
            </div>

            <div className="flex justify-between text-lg text-gray-700 mb-4">
              <span>Total Price:</span>
              <span className="font-bold text-green-700 text-2xl">
                ${totalPrice}
              </span>
            </div>

            <button
              onClick={clearCart}
              className="w-full bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 font-semibold transition mt-3"
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
