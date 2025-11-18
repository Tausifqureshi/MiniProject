// import React, { useContext } from "react";
// import { CartContext } from "./CartContext";
// import Cart from "../page/Cart";

// const Navbar = () => {
//   const { cart } = useContext(CartContext);
//   const totalQuantity = cart.reduce((acc, item) => acc + item.qty, 0);

//   return (
//     <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
//       <Cart />
//       <h1 className="text-xl font-bold">🛒 Dummy Store</h1>
//       <div className="flex items-center space-x-2">
//         <span className="font-semibold">Cart Items: {totalQuantity}</span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <Link to="/">
        <h1 className="text-xl font-bold cursor-pointer">🛒 Dummy Store</h1>
      </Link>

      <Link
        to="/cart"
        className="flex items-center space-x-2 bg-white text-blue-600 px-3 py-1 rounded font-semibold"
      >
        <span>Cart</span>
        <span className="bg-blue-600 text-white px-2 py-0.5 rounded">
          {totalQuantity}
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
